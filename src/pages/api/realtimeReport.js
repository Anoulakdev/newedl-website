import { BetaAnalyticsDataClient } from "@google-analytics/data";

const API_SECRET = process.env.INTERNAL_API_SECRET;

export default async function handler(req, res) {
  // Security: Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Security: Require an internal API secret to prevent public access
  const authHeader = req.headers["x-api-secret"];
  if (!API_SECRET || authHeader !== API_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const propertyId = process.env.GA4_PROPERTY_ID;
  if (!propertyId) {
    return res.status(500).json({ error: "GA4 property ID is not configured" });
  }

  const analyticsDataClient = new BetaAnalyticsDataClient();

  try {
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

    res.status(200).json(response);
  } catch (error) {
    console.error("Error running report:", error);
    res.status(500).json({ error: "Failed to run report" });
  }
}
