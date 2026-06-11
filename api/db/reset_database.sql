-- COMPLETE DATABASE RESET - Drops all tables and recreates them
-- Run this in Supabase SQL Editor

-- Drop all tables (in correct order to avoid foreign key errors)
DROP TABLE IF EXISTS email_logs CASCADE;
DROP TABLE IF EXISTS queue_jobs CASCADE;
DROP TABLE IF EXISTS leads CASCADE;
DROP TABLE IF EXISTS campaigns CASCADE;
DROP TABLE IF EXISTS gmail_accounts CASCADE;
DROP TABLE IF EXISTS audit_logs CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS notifications CASCADE;

-- Drop enums (must drop tables first)
DROP TYPE IF EXISTS "CampaignStatus" CASCADE;
DROP TYPE IF EXISTS "LeadStatus" CASCADE;
DROP TYPE IF EXISTS "GmailAccountStatus" CASCADE;

-- Recreate enums
CREATE TYPE "CampaignStatus" AS ENUM ('DRAFT', 'ACTIVE', 'PAUSED', 'COMPLETED');
CREATE TYPE "LeadStatus" AS ENUM ('PENDING', 'QUEUED', 'SENDING', 'SENT', 'FAILED');
CREATE TYPE "GmailAccountStatus" AS ENUM ('ACTIVE', 'REVOKED', 'ERROR');

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE gmail_accounts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  refresh_token_encrypted TEXT NOT NULL,
  access_token_encrypted TEXT,
  access_token_expires_at TIMESTAMP WITH TIME ZONE,
  status "GmailAccountStatus" DEFAULT 'ACTIVE',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE campaigns (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  gmail_account_id TEXT NOT NULL REFERENCES gmail_accounts(id) ON DELETE RESTRICT,
  name TEXT NOT NULL,
  subject_template TEXT NOT NULL,
  body_template TEXT NOT NULL,
  required_variables JSONB DEFAULT '[]',
  daily_limit INTEGER NOT NULL,
  delay_min_seconds INTEGER NOT NULL,
  delay_max_seconds INTEGER NOT NULL,
  start_time TIMESTAMP WITH TIME ZONE,
  status "CampaignStatus" DEFAULT 'DRAFT',
  failure_count INTEGER DEFAULT 0,
  -- Follow-up fields (no subjects - will use "Re: [original subject]")
  follow_up2_body TEXT,
  follow_up2_delay_hours INTEGER DEFAULT 72,
  follow_up3_body TEXT,
  follow_up3_delay_hours INTEGER DEFAULT 72,
  follow_up4_body TEXT,
  follow_up4_delay_hours INTEGER DEFAULT 72,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE leads (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  campaign_id TEXT NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
  gmail_account_id TEXT REFERENCES gmail_accounts(id),
  email TEXT NOT NULL,
  first_name TEXT DEFAULT '',
  company_name TEXT DEFAULT '',
  domain_name TEXT DEFAULT '',
  custom_fields JSONB DEFAULT '{}',
  status "LeadStatus" DEFAULT 'PENDING',
  sent_at TIMESTAMP WITH TIME ZONE,
  opened_at TIMESTAMP WITH TIME ZONE,
  clicked_at TIMESTAMP WITH TIME ZONE,
  replied_at TIMESTAMP WITH TIME ZONE,
  bounced_at TIMESTAMP WITH TIME ZONE,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(campaign_id, email)
);

CREATE TABLE email_logs (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  campaign_id TEXT NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
  lead_id TEXT NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  gmail_account_id TEXT NOT NULL REFERENCES gmail_accounts(id),
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT,
  error_message TEXT,
  bounce_status TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  sequence_step INTEGER DEFAULT 1
);

CREATE TABLE queue_jobs (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  campaign_id TEXT NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
  lead_id TEXT NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  scheduled_for TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT DEFAULT 'pending',
  attempts INTEGER DEFAULT 0,
  last_error TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE audit_logs (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  resource TEXT NOT NULL,
  resource_id TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE notifications (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  user_id TEXT NOT NULL,
  campaign_id TEXT NOT NULL,
  timestamp BIGINT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_campaigns_user_status ON campaigns(user_id, status);
CREATE INDEX idx_leads_campaign_status ON leads(campaign_id, status);
CREATE INDEX idx_leads_user_created ON leads(user_id, created_at);
CREATE INDEX idx_email_logs_user_created ON email_logs(user_id, created_at);
CREATE INDEX idx_queue_jobs_scheduled ON queue_jobs(scheduled_for, status);
CREATE INDEX idx_notifications_user_campaign ON notifications(user_id, campaign_id);
CREATE INDEX idx_notifications_timestamp ON notifications(timestamp);
