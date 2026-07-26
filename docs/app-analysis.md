# DomainMailer — Full Application Analysis

## ✅ What Currently Works

### Core Features
- **Authentication** — User registration/login with JWT
- **Gmail OAuth Integration** — Connect Gmail accounts via OAuth 2.0, token refresh, encrypted token storage
- **Campaign Management** — Create, start, pause, resume, delete campaigns
- **Lead Management** — Add leads via manual entry, CSV upload, Google Sheets import
- **Follow-up Sequences** — Up to 3 follow-ups (4 emails total) with configurable delays, threaded replies
- **Scheduled Sending** — Set a future start time for campaigns
- **Rate Limiting** — Per-campaign daily limit, per-user daily limit, global daily limit, per-minute limit
- **Randomized Delays** — Random delays between emails to appear natural
- **Real-time SSE Updates** — Live dashboard/campaign page updates via Server-Sent Events
- **Dashboard** — Overview stats (total campaigns, active, sent today, success rate, failed leads)
- **Multi-tenant** — User data isolation
- **Audit Logging** — All actions logged to `audit_logs` table

### Sending Pipeline
- DB-polling worker that picks up active campaigns
- Priority: new pending leads → follow-ups due → retry failed leads
- Shuffles campaigns for randomized processing order
- Auto-pauses on: Gmail 429 rate limits, 403 permission errors, token refresh failures, failure threshold exceeded

---

## ❌ What's Missing for a Domainer

### 1. Email Tracking (Critical)
| Feature | DB Schema Has? | Implemented? |
|---------|:-------------:|:------------:|
| Open tracking (pixel) | `leads.opened_at` | ❌ Never populated |
| Click tracking | `leads.clicked_at` | ❌ Never populated |
| Reply detection via Gmail API | `leads.replied_at`, `leads.receivedReply` | ❌ Only checks `receivedReply` boolean but never actually detects replies from Gmail |
| Bounce detection | `leads.bounced_at`, `email_logs.bounce_status` | ❌ Always set to "pending", never updated |

**Why it matters:** A domainer needs to know who opened their email, who clicked, who replied, and which emails bounced. Without this, you're flying blind.

### 2. Email Personalization (Template Variables)
The schema stores `first_name`, `company_name`, `domain_name`, `custom_fields` on leads, and `required_variables` on campaigns — but **the worker sends the raw template body without substituting variables**. So `{{company_name}}` in the template would be sent literally as-is.

### 3. Domain-Specific Features a Domainer Needs
- **Domain portfolio management** — A place to list/manage domains they own
- **Domain appraisal integration** — EstiBot, GoDaddy, or Afternic API to show domain values
- **WHOIS data enrichment** — Automatically look up WHOIS info for leads' domains
- **Template personalization with domain data** — Auto-fill domain name, expiry date, traffic stats in emails
- **Domain marketplace listings** — Integration with Sedo, Afternic, Dan.com to push listings

### 4. Campaign Editing
Once a campaign is created, there's no way to edit it (name, subject, body, follow-ups, daily limit, delays). The only actions are start/pause/delete. A domainer often needs to tweak messaging mid-campaign.

### 5. Send Preview
There's a `/templates/preview` endpoint defined in routes but no UI to preview what the email will look like before sending.

### 6. Reporting & Analytics
- **Per-lead timeline** — See when each email/follow-up was sent, opened, clicked
- **Campaign comparison** — Compare performance across campaigns
- **Export reports** — Download CSV of campaign results (sent, opened, clicked, bounced)
- **Weekly/monthly digest** — Automated email reports

### 7. Blacklist / Unsubscribe Management
- No way to mark leads as "unsubscribed" or "do not contact"
- No unsubscribe link in emails (this is a legal consideration for bulk emailing)

### 8. Multiple Senders Per Campaign
Currently one campaign = one Gmail account. For high-volume domain outreach, you'd want to rotate between multiple Gmail accounts to stay under Google's sending limits.

### 9. Timezone-Aware Scheduling
Scheduling uses UTC. A domainer sending to prospects in different timezones can't schedule sends to arrive during business hours for each recipient.

### 10. A/B Testing
No ability to test different subject lines or email bodies to see what performs better.

### 11. Lead Source Tracking
When leads are imported, there's no tracking of *where* they came from (which CSV file, which Google Sheet, which manual entry session).

### 12. Email Logs UI
The `email_logs` table stores all send history, but there's no UI to browse/search through sent emails, see errors, or investigate delivery issues.

### 13. Campaign Duplication
A domainer often runs similar campaigns for different domain niches. No "duplicate campaign" feature to clone a campaign with all its settings.

### 14. Webhook / API for External Integrations
No webhook system to notify external systems when emails are sent, opened, or replied to.

---

## Priority Ranking for a Domainer

| Priority | Feature | Effort | Impact |
|:--------:|---------|:------:|:------:|
| 🔴 P1 | Open/click tracking (pixel + redirect) | Medium | High |
| 🔴 P1 | Reply detection (Gmail API watcher) | Medium | High |
| 🔴 P1 | Template variable substitution | Small | High |
| 🟠 P2 | Bounce detection | Medium | Medium |
| 🟠 P2 | Campaign editing | Medium | High |
| 🟠 P2 | Send preview UI | Small | Medium |
| 🟠 P2 | Export reports (CSV) | Medium | Medium |
| 🟡 P3 | Domain portfolio management | Large | High |
| 🟡 P3 | WHOIS enrichment | Medium | Medium |
| 🟡 P3 | Multiple senders per campaign | Large | High |
| 🟡 P3 | Blacklist/unsubscribe | Small | Medium |
| 🔵 P4 | A/B testing | Large | Medium |
| 🔵 P4 | Timezone-aware scheduling | Medium | Medium |
| 🔵 P4 | Webhooks | Large | Low-Medium |
| 🔵 P4 | Domain appraisal integration | Medium | Medium |

---

**Short version:** The app has solid cold-email infrastructure. What's missing is **tracking** (opens, clicks, replies, bounces) and **personalization** — the two things that make domain outreach actually effective. Those alone would transform it from a "send emails" tool into a real sales engine for domainers.