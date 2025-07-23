export const fetchGoogleReviews = async () => {
  const url = "/api/google-reviews";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        "Network response was not ok",
        response.status,
        response.statusText
      );
      return [];
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      console.error("Unexpected data format from reviews function", data);
      return [];
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch Google reviews:", error);
    return [];
  }
};
