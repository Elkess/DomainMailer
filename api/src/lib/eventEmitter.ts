import { EventEmitter } from "events";
import { prisma } from "./prisma";

interface CampaignUpdateEvent {
  campaignId: string;
  user_id: string;
  timestamp: number;
}

class CampaignEventEmitter extends EventEmitter {
  private lastCheckTime = Date.now();

  async emitCampaignUpdate(campaignId: string, userId: string) {
    const event: CampaignUpdateEvent = {
      campaignId,
      user_id: userId,
      timestamp: Date.now()
    };
    
    console.log(`📡 Broadcasting campaign update event:`, event);
    
    // Emit locally (for listeners in the same process)
    this.emit("campaign:update", event);
    
    // Store in database for cross-process communication
    try {
      await (prisma as any).campaign_notifications.create({
        data: {
          campaign_id: campaignId,
          user_id: userId,
          created_at: new Date()
        }
      });
      console.log("✅ Stored notification in database");
    } catch (err: any) {
      console.error("❌ Failed to store notification:", err.message);
    }
  }

  async pollForUpdates(): Promise<CampaignUpdateEvent[]> {
    try {
      // Get notifications since last check
      const lastCheckDate = new Date(this.lastCheckTime);
      const notifications = await (prisma as any).campaign_notifications.findMany({
        where: {
          created_at: {
            gt: lastCheckDate
          }
        },
        orderBy: {
          created_at: 'asc'
        }
      });

      if (notifications.length > 0) {
        console.log(`📬 Polled ${notifications.length} notification(s) from database`);
        this.lastCheckTime = Date.now();

        // Cleanup old notifications (older than 1 minute)
        const oneMinuteAgo = new Date(Date.now() - 60000);
        await (prisma as any).campaign_notifications.deleteMany({
          where: {
            created_at: {
              lt: oneMinuteAgo
            }
          }
        });
      }

      return notifications.map((n: any) => ({
        campaignId: n.campaign_id,
        user_id: n.user_id,
        timestamp: n.created_at.getTime()
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
