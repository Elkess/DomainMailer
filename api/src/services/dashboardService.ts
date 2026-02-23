import { prisma } from "../lib/prisma";

export const dashboardService = {
  async getSummary(userId: string) {
    const [campaigns, sentToday, successStats, accountStats] = await Promise.all([
      prisma.campaign.groupBy({ by: ["status"], where: { userId }, _count: true }),
      prisma.emailLog.count({ where: { userId, status: "sent", createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) } } }),
      prisma.emailLog.groupBy({ by: ["status"], where: { userId }, _count: true }),
      prisma.gmailAccount.findMany({ where: { userId }, select: { id: true, email: true, status: true } })
    ]);

    const totalCampaigns = campaigns.reduce((sum, item) => sum + item._count, 0);
    const activeCampaigns = campaigns.find((item) => item.status === "ACTIVE")?._count ?? 0;
    const sent = successStats.find((item) => item.status === "sent")?._count ?? 0;
    const failed = successStats.find((item) => item.status === "failed")?._count ?? 0;
    const successRate = sent + failed === 0 ? 0 : Number(((sent / (sent + failed)) * 100).toFixed(2));

    return {
      totalCampaigns,
      activeCampaigns,
      sentToday,
      successRate,
      failedLeads: failed,
      accountStats
    };
  }
};
