# DomainMailer

Multi-user SaaS foundation for safe Gmail outreach for domain sellers.

## Architecture

- `front`: Next.js App Router + TypeScript + TailwindCSS + JWT UI flow
- `api`: Express + TypeScript + Prisma + PostgreSQL + JWT + bcrypt
- `api/src/worker/worker.ts`: BullMQ workers (Redis) for queue-only email sending

## Infrastructure

- PostgreSQL: app data
- Redis: queue backend for BullMQ
- Gmail OAuth2: account connection + token refresh + email send provider

## Quick start

1. Run guided setup (auto-creates env files + secure secrets):
   - `cd api`
   - `npm install`
   - `npm run setup:localhost`
2. Start full stack:
   - `cd ..`
   - `docker compose up --build`
3. Open app:
   - `http://localhost:3000`

## Who fills env values?

- **Admin (you, once):** infrastructure + app secrets + Google OAuth app credentials.
- **End-user (your client):** does **not** fill env. They only sign up and click **Connect Gmail**.

## Gmail setup for real sending (admin only)

If you answered `no` in setup, app runs but Gmail sending is disabled.

To enable real sending:

1. Create a Google Cloud project
2. Enable Gmail API
3. Configure OAuth consent screen
4. Create OAuth Client ID (`Web application`)
5. Add redirect URI exactly:
   - `http://localhost:4000/api/oauth/gmail/callback`
6. Put `client id/secret` into `api/.env` and set:
   - `GMAIL_ENABLED=true`
7. Restart API + worker

Then each end-user connects their own Gmail account from the UI and sends campaigns safely via workers.

## Safety rules implemented

- Email sending runs only in workers
- Per-user daily limit + global daily limit
- Per-minute throttling via BullMQ limiter
- Auto-pause campaign on repeated failures
- Auto-pause/rate-limit handling for Gmail 429
- Multi-tenant query boundaries by `userId`
