import { Storage } from '@google-cloud/storage';

const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;

export default async function handler(req, res) {
  try {
    // Create a new instance of the Storage client
    const storage = new Storage({
      projectId,
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    });

    // Retrieve the list of buckets
    const [buckets] = await storage.getBuckets();
    const bucketNames = buckets.map(bucket => bucket.name);

    // Send the bucket names as the API response
    res.status(200).json({ buckets: bucketNames });
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error('Error listing buckets:', error);
    res.status(500).json({ error: 'Error listing buckets' });
  }
}
