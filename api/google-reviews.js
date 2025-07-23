export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;

  if (!GOOGLE_API_KEY || !PLACE_ID) {
    return res.status(500).json({ error: "Missing API key or Place ID" });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`;
  try {
    const googleRes = await fetch(url);
    const data = await googleRes.json();

    if (data.error_message || data.status !== "OK") {
      console.error("Google API error:", data.error_message || data.status);
      return res.status(500).json({ error: data.error_message || data.status });
    }

    // Optionally: Add caching here

    return res.status(200).json(data.result?.reviews || []);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
