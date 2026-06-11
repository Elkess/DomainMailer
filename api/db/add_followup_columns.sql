-- Add follow-up sequence columns to campaigns table (without subject columns)
-- Follow-ups will use "Re: [original subject]" for proper email threading

-- Add body and delay columns
ALTER TABLE campaigns
ADD COLUMN IF NOT EXISTS follow_up2_body TEXT,
ADD COLUMN IF NOT EXISTS follow_up2_delay_hours INTEGER DEFAULT 72,
ADD COLUMN IF NOT EXISTS follow_up3_body TEXT,
ADD COLUMN IF NOT EXISTS follow_up3_delay_hours INTEGER DEFAULT 72,
ADD COLUMN IF NOT EXISTS follow_up4_body TEXT,
ADD COLUMN IF NOT EXISTS follow_up4_delay_hours INTEGER DEFAULT 72;

-- Drop subject columns if they exist (in case they were previously added)
ALTER TABLE campaigns
DROP COLUMN IF EXISTS follow_up2_subject,
DROP COLUMN IF EXISTS follow_up3_subject,
DROP COLUMN IF EXISTS follow_up4_subject;
