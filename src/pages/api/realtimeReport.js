import { BetaAnalyticsDataClient } from "@google-analytics/data";

export default async function handler(req, res) {
  const propertyId = process.env.GA4_PROPERTY_ID;
  const analyticsDataClient = new BetaAnalyticsDataClient();

  async function runRealtimeReportWithMinuteRanges() {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${propertyId}`,
      minuteRanges: [
        {
          name: "30 minutes ago",
          startMinutesAgo: 10,
          endMinutesAgo: 0,
        },
      ],
      metrics: [
        {
          name: "activeUsers",
        },
      ],
    });
    return response;
  }

  try {
    const response = await runRealtimeReportWithMinuteRanges();
    res.status(200).json(response);
  } catch (error) {
    console.error("Error running report:", error);
    res.status(500).json({ error: "Failed to run report" });
  }
}
