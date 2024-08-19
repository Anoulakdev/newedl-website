// pages/api/turnoff.js
import axios from 'axios';

export default async function handler(req, res) {
  const { page = 1, limit = 3 } = req.query; // default to page 1 and 3 items per page

  try {
    // Fetch data from the external API with pagination parameters
    const response = await axios.get('https://uat-api.edl.com.la/api_v1/user-svc/notiDistrict/get', {
      params: {
        page,
        limit,
      },
    });

    // Send the data and pagination info to the client
    res.status(200).json({
      data: response.data,
      pagination: {
        page: parseInt(page, 1),
        limit: parseInt(limit, 3),
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
}
