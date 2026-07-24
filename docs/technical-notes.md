# Technical Notes — DomainMailer

## Architecture Overview

DomainMailer is a multi-tenant SaaS platform for safe Gmail outreach. It follows a clean architecture pattern with domain entities, repository interfaces, and dependency injection.

```
front/ (Next.js App Router + React + Tailwind)
  ↓ HTTP (JWT auth)
api/ (Express + TypeScript)
  ├── src/interface/http/   — Routes, middlewares, server setup
  ├── src/application/      — Business logic services
  ├── src/domain/           — Entities, repository/gateway interfaces
  ├── src/infrastructure/   — DB, Gmail, logging implementations
  └── src/worker/           — Email sending worker process
```

## Key Design Decisions

### 1. DB-Polling Worker (not BullMQ)

The worker uses a simple polling loop rather than a full job queue. Every iteration:
1. Queries all `ACTIVE` campaigns
2. Shuffles them randomly
3. Picks one campaign and processes one lead
4. Sleeps 3-8 seconds (configurable per campaign)

**Why not BullMQ?** The current volume doesn't require it. The polling approach is simpler to debug and deploy. BullMQ is listed as a dependency for future use when volume grows.

### 2. Rate Limiting Strategy

Three layers of rate limiting:
- **Per-campaign daily limit** — configurable per campaign
- **Per-user daily limit** — `USER_DAILY_MAX_LIMIT` env var
- **Global daily limit** — `GLOBAL_DAILY_MAX_LIMIT` env var
- **Per-minute throttle** — `PER_MINUTE_MAX_SEND` env var

The worker calculates `remaining = min(campaignRemaining, userRemaining, globalRemaining, minuteRemaining)` before each send.

### 3. Gmail OAuth2 Flow

```
User clicks "Connect Gmail"
  → API generates OAuth URL with state param (userId)
  → User authorizes in Google
  → Google redirects to /api/oauth/gmail/callback
  → API exchanges code for tokens
  → Tokens encrypted with AES-256 and stored in DB
  → Access token auto-refreshed when < 60s from expiry
```

### 4. Follow-up Sequences

Each campaign supports up to 3 follow-up emails. The worker:
1. First processes all pending leads (initial email)
2. Then checks for leads whose `sent_at` + delay hours have passed
3. Sends follow-ups as threaded replies (same subject with `Re:` prefix)
4. Tracks sequence step via `currentSequenceStep` on each lead

### 5. Multi-tenancy

All queries include `WHERE user_id = ?` to enforce data isolation. Campaigns, leads, email accounts, and logs are all scoped to a user.

## Database Schema (PostgreSQL)

Key tables:
- `users` — Authentication and user data
- `gmail_accounts` — OAuth tokens (encrypted), status tracking
- `campaigns` — Campaign config, follow-up templates, rate limits
- `leads` — Recipients with status, sequence step, thread tracking
- `email_logs` — Send history with status, error codes, sequence step

## Error Handling

- **Gmail 429 (rate limit):** Campaign auto-paused, Gmail account marked ERROR
- **Token refresh failure:** Account disabled, campaign paused
- **Worker crash:** Leads stuck in "sending" status are recovered on next worker start via `recoverStuckSendingLeads()`
- **Failure threshold:** Campaign auto-paused after `CAMPAIGN_FAILURE_PAUSE_THRESHOLD` consecutive failures

## Security

- OAuth tokens encrypted with AES-256 before storage
- CSRF protection via csurf middleware
- Helmet security headers
- API rate limiting
- JWT authentication with bcrypt password hashing
- Multi-tenant query boundaries on every database operation
