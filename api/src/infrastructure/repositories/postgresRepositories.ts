import { randomUUID } from "crypto";
import { Campaign, EmailAccount, Lead } from "../../domain/entities/types";
import {
  CampaignRepository,
  EmailAccountRepository,
  LeadRepository,
  SendLogRepository
} from "../../domain/ports/repositories";
import { db } from "../db/pool";

const mapCampaign = (row: any): Campaign => ({
  id: row.id,
  userId: row.user_id,
  emailAccountId: row.email_account_id,
  name: row.name,
  subjectTemplate: row.subject_template,
  bodyTemplate: row.body_template,
  requiredVariables: row.required_variables || [],
  dailyLimit: row.daily_limit,
  delayMinSeconds: row.delay_min_seconds,
  delayMaxSeconds: row.delay_max_seconds,
  maxRetryAttempts: 3, // Default value as this field doesn't exist in DB
  status: row.status,
  startTime: row.start_time,
  followUp2Body: row.follow_up2_body,
  followUp2DelayHours: row.follow_up2_delay_hours,
  followUp3Body: row.follow_up3_body,
  followUp3DelayHours: row.follow_up3_delay_hours,
  followUp4Body: row.follow_up4_body,
  followUp4DelayHours: row.follow_up4_delay_hours,
  createdAt: row.created_at,
  updatedAt: row.updated_at
});

const mapLead = (row: any): Lead => ({
  id: row.id,
  campaignId: row.campaign_id,
  companyName: row.company_name,
  email: row.email,
  customFields: row.custom_fields,
  status: row.status,
  attemptCount: row.attempt_count,
  lastAttemptAt: row.last_attempt_at,
  nextRetryAt: row.next_retry_at,
  sentAt: row.sent_at,
  createdAt: row.created_at,
  updatedAt: row.updated_at
});

const mapEmailAccount = (row: any): EmailAccount => ({
  id: row.id,
  userId: row.user_id,
  email: row.email,
  accessTokenEncrypted: row.access_token_encrypted,
  refreshTokenEncrypted: row.refresh_token_encrypted,
  tokenExpiry: row.token_expiry,
  status: row.status,
  createdAt: row.created_at,
  updatedAt: row.updated_at
});

export class PostgresEmailAccountRepository implements EmailAccountRepository {
  async create(input: {
    userId: string;
    email: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted: string;
    tokenExpiry: Date;
  }): Promise<EmailAccount> {
    await db.query(
      `INSERT INTO users (id, email)
       VALUES ($1, $2)
       ON CONFLICT (id) DO NOTHING`,
      [input.userId, `${input.userId}@domainmailer.local`]
    );
    const result = await db.query(
      `INSERT INTO email_accounts (
        id, user_id, email, access_token_encrypted, refresh_token_encrypted, token_expiry, status
      ) VALUES ($1, $2, $3, $4, $5, $6, 'active') RETURNING *`,
      [randomUUID(), input.userId, input.email, input.accessTokenEncrypted, input.refreshTokenEncrypted, input.tokenExpiry]
    );
    return mapEmailAccount(result.rows[0]);
  }

  async findById(id: string): Promise<EmailAccount | null> {
    const result = await db.query(`SELECT * FROM email_accounts WHERE id = $1`, [id]);
    if (result.rowCount === 0) {
      return null;
    }
    return mapEmailAccount(result.rows[0]);
  }

  async updateTokens(input: {
    accountId: string;
    accessTokenEncrypted: string;
    refreshTokenEncrypted: string;
    tokenExpiry: Date;
  }): Promise<void> {
    await db.query(
      `UPDATE email_accounts
       SET access_token_encrypted = $2, refresh_token_encrypted = $3, token_expiry = $4, updated_at = NOW()
       WHERE id = $1`,
      [input.accountId, input.accessTokenEncrypted, input.refreshTokenEncrypted, input.tokenExpiry]
    );
  }

  async disable(id: string): Promise<void> {
    await db.query(`UPDATE email_accounts SET status = 'disabled', updated_at = NOW() WHERE id = $1`, [id]);
  }

  async listByUser(userId: string): Promise<EmailAccount[]> {
    const result = await db.query(`SELECT * FROM email_accounts WHERE user_id = $1 ORDER BY created_at DESC`, [userId]);
    return result.rows.map(mapEmailAccount);
  }

  async delete(id: string, userId: string): Promise<void> {
    await db.query(`DELETE FROM email_accounts WHERE id = $1 AND user_id = $2`, [id, userId]);
  }
}

export class PostgresCampaignRepository implements CampaignRepository {
  async create(input: Omit<Campaign, "id" | "createdAt" | "updatedAt">): Promise<Campaign> {
    await db.query(
      `INSERT INTO users (id, email)
       VALUES ($1, $2)
       ON CONFLICT (id) DO NOTHING`,
      [input.userId, `${input.userId}@domainmailer.local`]
    );
    const result = await db.query(
      `INSERT INTO campaigns (
        id, user_id, email_account_id, name, subject_template, body_template, required_variables,
        daily_limit, delay_min_seconds, delay_max_seconds, max_retry_attempts, status
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
      RETURNING *`,
      [
        randomUUID(),
        input.userId,
        input.emailAccountId,
        input.name,
        input.subjectTemplate,
        input.bodyTemplate,
        input.requiredVariables,
        input.dailyLimit,
        input.delayMinSeconds,
        input.delayMaxSeconds,
        input.maxRetryAttempts,
        input.status
      ]
    );
    return mapCampaign(result.rows[0]);
  }

  async findById(id: string): Promise<Campaign | null> {
    const result = await db.query(`SELECT * FROM campaigns WHERE id = $1`, [id]);
    if (result.rowCount === 0) {
      return null;
    }
    return mapCampaign(result.rows[0]);
  }

  async setStatus(id: string, status: Campaign["status"]): Promise<void> {
    await db.query(`UPDATE campaigns SET status = $2, updated_at = NOW() WHERE id = $1`, [id, status]);
  }

  async listByUser(userId: string): Promise<Campaign[]> {
    const result = await db.query(`SELECT * FROM campaigns WHERE user_id = $1 ORDER BY created_at DESC`, [userId]);
    return result.rows.map(mapCampaign);
  }

  async fetchNextRunnableCampaign(): Promise<Campaign | null> {
    return db.withTransaction(async (client) => {
      const result = await client.query(
        `SELECT * FROM campaigns
         WHERE status = 'running'
         ORDER BY updated_at ASC
         LIMIT 1
         FOR UPDATE SKIP LOCKED`
      );
      if (result.rowCount === 0) {
        return null;
      }
      return mapCampaign(result.rows[0]);
    });
  }

  async getSentCountToday(campaignId: string): Promise<number> {
    const result = await db.query<{ count: string }>(
      `SELECT COUNT(*)::text AS count
       FROM leads
       WHERE campaign_id = $1
         AND status = 'sent'
         AND sent_at::date = CURRENT_DATE`,
      [campaignId]
    );
    return Number(result.rows[0]?.count ?? 0);
  }

  async getCounts(campaignId: string): Promise<{ pending: number; sending: number; sent: number; failed: number }> {
    const result = await db.query<{ status: string; count: string }>(
      `SELECT status, COUNT(*)::text AS count FROM leads WHERE campaign_id = $1 GROUP BY status`,
      [campaignId]
    );
    const counts = { pending: 0, sending: 0, sent: 0, failed: 0 };
    for (const row of result.rows) {
      if (row.status in counts) {
        counts[row.status as keyof typeof counts] = Number(row.count);
      }
    }
    return counts;
  }

  async getDashboardSummary(userId: string): Promise<{
    totalCampaigns: number;
    activeCampaigns: number;
    sentToday: number;
    successRate: number;
    failedLeads: number;
  }> {
    const [campaignStats, leadStats] = await Promise.all([
      db.query<{
        total_campaigns: string;
        active_campaigns: string;
      }>(
        `SELECT
          COUNT(*)::text AS total_campaigns,
          COUNT(*) FILTER (WHERE status = 'running')::text AS active_campaigns
         FROM campaigns WHERE user_id = $1`,
        [userId]
      ),
      db.query<{
        sent_today: string;
        success_rate: string;
        failed_leads: string;
      }>(
        `SELECT
          COUNT(*) FILTER (WHERE l.status = 'sent' AND l.sent_at::date = CURRENT_DATE)::text AS sent_today,
          COALESCE(
            ROUND(
              (COUNT(*) FILTER (WHERE l.status = 'sent')::numeric /
               NULLIF(COUNT(*) FILTER (WHERE l.status IN ('sent','failed')), 0)) * 100,
              2
            ), 0
          )::text AS success_rate,
          COUNT(*) FILTER (WHERE l.status = 'failed')::text AS failed_leads
         FROM campaigns c
         LEFT JOIN leads l ON l.campaign_id = c.id
         WHERE c.user_id = $1`,
        [userId]
      )
    ]);

    return {
      totalCampaigns: Number(campaignStats.rows[0]?.total_campaigns ?? 0),
      activeCampaigns: Number(campaignStats.rows[0]?.active_campaigns ?? 0),
      sentToday: Number(leadStats.rows[0]?.sent_today ?? 0),
      successRate: Number(leadStats.rows[0]?.success_rate ?? 0),
      failedLeads: Number(leadStats.rows[0]?.failed_leads ?? 0)
    };
  }
}

export class PostgresLeadRepository implements LeadRepository {
  async createMany(input: Array<Omit<Lead, "id" | "createdAt" | "updatedAt">>): Promise<void> {
    if (input.length === 0) {
      return;
    }
    await db.withTransaction(async (client) => {
      for (const row of input) {
        await client.query(
          `INSERT INTO leads (
            id, campaign_id, company_name, email, custom_fields, status,
            attempt_count, last_attempt_at, next_retry_at, sent_at
          ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
          [
            randomUUID(),
            row.campaignId,
            row.companyName,
            row.email,
            row.customFields,
            row.status,
            row.attemptCount,
            row.lastAttemptAt,
            row.nextRetryAt,
            row.sentAt
          ]
        );
      }
    });
  }

  async createOne(input: Omit<Lead, "id" | "createdAt" | "updatedAt">): Promise<Lead> {
    const result = await db.query(
      `INSERT INTO leads (
        id, campaign_id, company_name, email, custom_fields, status,
        attempt_count, last_attempt_at, next_retry_at, sent_at
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      RETURNING *`,
      [
        randomUUID(),
        input.campaignId,
        input.companyName,
        input.email,
        input.customFields,
        input.status,
        input.attemptCount,
        input.lastAttemptAt,
        input.nextRetryAt,
        input.sentAt
      ]
    );
    return mapLead(result.rows[0]);
  }

  async updateOne(input: { leadId: string; companyName: string; email: string; customFields: Record<string, string> }): Promise<void> {
    await db.query(
      `UPDATE leads
       SET company_name = $2, email = $3, custom_fields = $4, updated_at = NOW()
       WHERE id = $1`,
      [input.leadId, input.companyName, input.email, input.customFields]
    );
  }

  async deleteOne(leadId: string): Promise<void> {
    await db.query(`DELETE FROM leads WHERE id = $1`, [leadId]);
  }

  async reserveNextLeadForSending(input: { campaignId: string; maxRetryAttempts: number }): Promise<Lead | null> {
    return db.withTransaction(async (client) => {
      const result = await client.query(
        `WITH candidate AS (
            SELECT id
            FROM leads
            WHERE campaign_id = $1
              AND status IN ('pending', 'failed')
              AND attempt_count < $2
              AND (next_retry_at IS NULL OR next_retry_at <= NOW())
            ORDER BY created_at ASC
            LIMIT 1
            FOR UPDATE SKIP LOCKED
          )
          UPDATE leads l
          SET status = 'sending',
              last_attempt_at = NOW(),
              updated_at = NOW()
          FROM candidate
          WHERE l.id = candidate.id
          RETURNING l.*`,
        [input.campaignId, input.maxRetryAttempts]
      );
      if (result.rowCount === 0) {
        return null;
      }
      return mapLead(result.rows[0]);
    });
  }

  async markSent(leadId: string): Promise<void> {
    await db.query(
      `UPDATE leads
       SET status = 'sent', sent_at = NOW(), updated_at = NOW()
       WHERE id = $1 AND status = 'sending'`,
      [leadId]
    );
  }

  async markFailedForRetry(input: { leadId: string; attemptCount: number; maxRetryAttempts: number }): Promise<void> {
    const retryDelayMinutes = Math.min(60, Math.pow(2, input.attemptCount));
    await db.query(
      `UPDATE leads
       SET status = 'failed',
           attempt_count = $2,
           next_retry_at = CASE
             WHEN $2 >= $3 THEN NULL
             ELSE NOW() + ($4::text || ' minutes')::interval
           END,
           updated_at = NOW()
       WHERE id = $1 AND status = 'sending'`,
      [input.leadId, input.attemptCount, input.maxRetryAttempts, retryDelayMinutes]
    );
  }

  async recoverStuckSendingLeads(): Promise<number> {
    const result = await db.query(
      `UPDATE leads
       SET status = 'failed',
           attempt_count = attempt_count + 1,
           next_retry_at = NOW() + interval '5 minutes',
           updated_at = NOW()
       WHERE status = 'sending'
         AND last_attempt_at <= NOW() - interval '
          minutes'`
    );
    return result.rowCount ?? 0;
  }
}

export class PostgresSendLogRepository implements SendLogRepository {
  async create(input: {
    campaignId: string;
    leadId: string;
    emailAccountId: string;
    status: "success" | "failure" | "rate_limited";
    responseCode: string | null;
    responseBody: string | null;
    errorMessage: string | null;
  }): Promise<void> {
    await db.query(
      `INSERT INTO send_logs (
        id, campaign_id, lead_id, email_account_id, status, response_code, response_body, error_message
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
      [
        randomUUID(),
        input.campaignId,
        input.leadId,
        input.emailAccountId,
        input.status,
        input.responseCode,
        input.responseBody,
        input.errorMessage
      ]
    );
  }
}
