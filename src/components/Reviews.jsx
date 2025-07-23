import React, { useEffect, useState } from "react";
import { fetchGoogleReviews } from "../lib/fetchGoogleReviews";

// Use business name and address for more reliable Google Maps URL
const BUSINESS_NAME = "OzWindowTint";
const BUSINESS_ADDRESS = "13791 Hawthorne Blvd, Hawthorne, CA 90250";
const GOOGLE_REVIEW_URL = `https://www.google.com/maps/place/${encodeURIComponent(BUSINESS_NAME + " " + BUSINESS_ADDRESS)}`;

const ReviewCard = ({ review }) => {
  const handleClick = () => {
    window.open(GOOGLE_REVIEW_URL, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  return (
    <div
      className="flex flex-col justify-between bg-background border border-white/10 rounded-xl shadow-lg p-6 min-w-[320px] max-w-xs mx-2 cursor-pointer transition-transform hover:scale-105 focus:scale-105 outline-none focus:ring-2 focus:ring-primary/60"
      tabIndex={0}
      aria-label={`Read review by ${review.author_name}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
    >
      <div className="flex items-center mb-4">
        <img
          src={review.profile_photo_url || "/placeholder.svg"}
          alt={review.author_name}
          className="w-12 h-12 rounded-full border border-white/20 mr-4 object-cover bg-white/10"
        />
        <div>
          <div className="font-semibold text-white text-lg">
            {review.author_name}
          </div>
          <div className="flex items-center mt-1">
            {/* Star rating */}
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? "text-yellow-400" : "text-white/30"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white text-base mb-4 line-clamp-5">
        {review.text}
      </div>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-white/60">
          {new Date(review.time * 1000).toLocaleDateString()}
        </span>
        <span className="flex items-center gap-1 text-xs text-white/80">
          <svg
            className="w-4 h-4"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="#fff" />
            <path
              d="M24 14c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14a6 6 0 100 12 6 6 0 000-12z"
              fill="#4285F4"
            />
          </svg>
          Google
        </span>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGoogleReviews();
        setReviews(data);
      } catch (err) {
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, []);

  // Duplicate reviews for seamless looping
  const tickerReviews = [...reviews, ...reviews];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 text-foreground break-words max-w-full">
            Customer Reviews for OzWindowTint
          </h2>
          <p className="text-sm sm:text-lg max-w-full text-white/80 mx-auto break-words">
            See what our customers say about our professional window tinting
            services.
          </p>
        </div>
        <div className="w-full max-w-7xl mx-auto overflow-hidden">
          {loading && (
            <div className="text-center text-white/80">Loading reviews...</div>
          )}
          {error && <div className="text-center text-red-500">{error}</div>}
          {!loading && !error && reviews.length > 0 && (
            <div className="relative group" aria-live="polite">
              <div
                className="flex gap-4 py-4 ticker-animation group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
                style={{ minWidth: "100%" }}
              >
                {tickerReviews.map((review, idx) => (
                  <ReviewCard
                    key={idx + review.time + review.author_name}
                    review={review}
                  />
                ))}
              </div>
              {/* Custom ticker animation keyframes */}
              <style>{`
                @keyframes ticker {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .ticker-animation {
                  animation: ticker 40s linear infinite;
                }
              `}</style>
            </div>
          )}
          {!loading && !error && reviews.length === 0 && (
            <div className="text-center text-white/60">No reviews found.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
