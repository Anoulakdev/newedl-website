import axios from 'axios';

export default async function handler(req, res) {
  const { page = 1, limit = 10 } = req.query;

  try {
    // Replace the URL with your data source
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/customer-svc/news/get?fillter=DESC`, {
      params: { page, limit },
    });

    const data = response.data.data;

    res.status(200).json({
      data: data.items,
      total: data.total,
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}