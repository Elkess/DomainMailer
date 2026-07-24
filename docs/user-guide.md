# User Guide — DomainMailer

DomainMailer is a platform for domain sellers to send safe, tracked email campaigns through their own Gmail account.

## Getting Started

### 1. Sign Up
1. Go to the app URL
2. Click **Register** and create an account with your email and password
3. Verify your email (if configured)

### 2. Connect Your Gmail Account
1. Go to **Settings → Email Accounts**
2. Click **Connect Gmail**
3. You'll be redirected to Google's authorization page
4. Grant permission for DomainMailer to send emails on your behalf
5. You'll be redirected back — your Gmail account is now connected

> **Note:** You must use a Gmail account. The app never stores your password — only OAuth tokens, which are encrypted.

### 3. Create a Campaign

1. Go to **Campaigns → New Campaign**
2. Fill in:
   - **Campaign name** — A label to identify this campaign
   - **Subject template** — The email subject line (you can use variables like `{{company_name}}`)
   - **Email body** — The email content (plain text, supports variables)
   - **Daily limit** — Max emails per day for this campaign
   - **Delay range** — Min/max seconds between emails (randomized to appear natural)
3. Click **Create**

### 4. Add Leads

You can add leads in two ways:

**Manually:**
1. Open your campaign
2. Click **Add Lead**
3. Enter the company name and email
4. Add any custom fields (optional)

**Via CSV:**
1. Open your campaign
2. Click **Upload CSV**
3. Your CSV should have columns: `company_name`, `email`
4. Optional columns: any custom fields you want to use in templates

### 5. Start Sending

1. Open your campaign
2. Click **Start** — the worker will begin processing leads
3. Monitor progress on the **Dashboard** or campaign detail page

## Follow-up Emails

You can configure up to 3 follow-up emails per campaign:

1. While creating or editing a campaign, scroll to **Follow-up Settings**
2. Enable follow-up 2, 3, and/or 4
3. For each follow-up:
   - Write the email body
   - Set the delay in hours (e.g., 24 = send 1 day after the previous email)
4. Follow-ups are sent as threaded replies (same subject with `Re:` prefix)

## Dashboard

The dashboard shows:
- Total campaigns and active campaigns
- Emails sent today
- Success rate
- Failed leads count
- Remaining daily limit

## Troubleshooting

### Campaign is paused
Possible reasons:
- **Gmail rate limit (429):** You've hit Gmail's sending limits. Wait and resume manually.
- **Token expired:** Your Gmail authorization may have been revoked. Reconnect your account.
- **Failure threshold:** Multiple consecutive send failures. Check the logs and fix the issue before resuming.

### Emails not sending
1. Check that your Gmail account status is **Active** in Settings
2. Check that the campaign status is **Active** (not Paused)
3. Verify leads have status **Pending** (not already Sent or Failed)
4. Check the worker is running (`docker compose ps` should show `worker` as Up)

### Gmail account shows "Error"
1. Go to **Settings → Email Accounts**
2. Click **Reconnect** next to the errored account
3. Re-authorize with Google

## Safety Features

- **Rate limiting:** Prevents you from exceeding Gmail's sending limits
- **Random delays:** Emails are sent with random delays to appear natural
- **Auto-pause:** Campaigns pause automatically on errors to prevent mass failures
- **Encrypted tokens:** Your Gmail credentials are encrypted at rest
- **Multi-tenant isolation:** Your data is never visible to other users
