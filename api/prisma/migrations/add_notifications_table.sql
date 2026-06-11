-- Create notifications table for cross-process event communication
CREATE TABLE IF NOT EXISTS campaign_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID NOT NULL,
  user_id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for efficient querying
CREATE INDEX IF NOT EXISTS idx_campaign_notifications_created ON campaign_notifications(created_at DESC);

-- Auto-cleanup old notifications (older than 1 minute)
CREATE OR REPLACE FUNCTION cleanup_old_notifications()
RETURNS void AS $$
BEGIN
  DELETE FROM campaign_notifications WHERE created_at < NOW() - INTERVAL '1 minute';
END;
$$ LANGUAGE plpgsql;
