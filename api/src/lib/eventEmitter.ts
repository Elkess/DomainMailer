import { EventEmitter } from "events";
import { prisma } from "./prisma";

interface CampaignUpdateEvent {
  campaignId: string;
  userId: string;
  timestamp: number;
}

class CampaignEventEmitter extends EventEmitter {
  private lastCheckTime = Date.now();

  async emitCampaignUpdate(campaignId: string, userId: string) {
    const event: CampaignUpdateEvent = {
      campaignId,
      userId,
      timestamp: Date.now()
    };
    
    console.log(`📡 Broadcasting campaign update event:`, event);
    
    // Emit locally (for listeners in the same process)
    this.emit("campaign:update", event);
    
    // Store in database for cross-process communication
    try {
      // First check if table exists
      const tableCheck = await prisma.$queryRawUnsafe(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_name = 'campaign_notifications'
        )
      `);
      console.log("📊 Table check:", tableCheck);
      
      await prisma.$executeRawUnsafe(
        `INSERT INTO campaign_notifications (campaign_id, user_id, created_at) 
         VALUES ('${campaignId}', '${userId}', NOW())`
      );
      console.log("✅ Stored notification in database");
    } catch (err: any) {
      console.error("❌ Failed to store notification:", err.message);
      console.error("Full error:", err);
    }
  }

  async pollForUpdates(): Promise<CampaignUpdateEvent[]> {
    try {
      // Get notifications since last check
      const notifications: any[] = await prisma.$queryRawUnsafe(
        `SELECT campaign_id as "campaignId", user_id as "userId", 
         EXTRACT(EPOCH FROM created_at) * 1000 as timestamp
         FROM campaign_notifications 
         WHERE created_at > to_timestamp(${this.lastCheckTime / 1000})
         ORDER BY created_at ASC`
      );

      if (notifications.length > 0) {
        console.log(`📬 Polled ${notifications.length} notification(s) from database`);
        this.lastCheckTime = Date.now();

        // Cleanup old notifications (older than 1 minute)
        await prisma.$executeRawUnsafe(
          `DELETE FROM campaign_notifications WHERE created_at < NOW() - INTERVAL '1 minute'`
        );
      }

      return notifications.map(n => ({
        campaignId: n.campaignId,
        userId: n.userId,
        timestamp: Number(n.timestamp)
      }));
    } catch (err) {
      console.error("❌ Failed to poll notifications:", err);
      return [];
    }
  }

  onCampaignUpdate(handler: (event: CampaignUpdateEvent) => void) {
    this.on("campaign:update", handler);
  }

  offCampaignUpdate(handler: (event: CampaignUpdateEvent) => void) {
    this.off("campaign:update", handler);
  }

  async close() {
    // Cleanup any remaining listeners
  }
}

export const campaignEvents = new CampaignEventEmitter();
