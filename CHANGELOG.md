# Changelog

## [2.2.0] - 2026-02-24
- Follow-up email sequences (up to 3 follow-ups with configurable delays)
- Real-time countdown timer for follow-up steps
- Lead sequence step tracking (currentSequenceStep)
- Campaign model extended with follow_up2/3/4_body and delay_hours
- Multi-email manual addition per campaign

## [2.1.0] - 2026-02-24
- Prisma ORM setup with PostgreSQL
- Database schema migration from SQLite to PostgreSQL
- Next.js 15.1.6 security patch

## [2.0.0] - 2026-02-24
- Full campaign management CRUD
- Gmail OAuth2 integration with token refresh
- Email sending engine with worker process
- Lead management with CSV upload
- Dashboard with real-time progress
- Docker Compose orchestration (Postgres, Redis, API, Worker, Frontend)
- Security: CSRF, Helmet, rate limiting, JWT auth, bcrypt

## [1.0.0] - 2026-02-23
- Initial MVP release
- Project scaffold with Next.js + Express + Prisma
- Authentication system (register/login JWT)
- Basic campaign creation
- Gmail account connection
- Single-email sending prototype
- Docker setup
