import { Storage } from '@google-cloud/storage';

const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;
const API_SECRET = process.env.INTERNAL_API_SECRET;

export default async function handler(req, res) {
  // Security: Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Security: Require an internal API secret header to prevent public access
  const authHeader = req.headers['x-api-secret'];
  if (!API_SECRET || authHeader !== API_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const storage = new Storage({
      projectId,
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    });

    const [buckets] = await storage.getBuckets();
    const bucketNames = buckets.map(bucket => bucket.name);

    res.status(200).json({ buckets: bucketNames });
  } catch (error) {
    console.error('Error listing buckets:', error);
    res.status(500).json({ error: 'Error listing buckets' });
  }
}
