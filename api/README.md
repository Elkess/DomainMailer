# DomainMailer API

Production SaaS backend for domain outreach.

## Stack

- Node.js + Express + TypeScript
- Prisma ORM + PostgreSQL
- JWT auth + bcrypt password hashing
- BullMQ + Redis workers
- Gmail OAuth2 API integration

## Key guarantees

- No email send inside HTTP handlers
- Multi-tenant isolation (`userId` enforced in all service queries)
- Configurable per-user and global safety limits
- Audit logs + email logs persisted in database

## Setup

1. Copy `.env.example` to `.env`
2. `npm install`
3. `npm run prisma:generate`
4. `npm run prisma:push`
5. Start API: `npm run dev`
6. Start worker: `npm run worker`

## Main endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/gmail/oauth-url`
- `POST /api/gmail/connect`
- `POST /api/campaigns`
- `POST /api/campaigns/action`
- `POST /api/leads/upload-csv`
- `POST /api/templates/preview`
- `GET /api/dashboard/summary`
