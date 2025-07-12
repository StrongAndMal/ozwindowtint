import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const tickerRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "Oscar did an amazing job on my car! The tint looks perfect and the heat rejection is incredible. Highly recommend!",
      vehicle: "2022 Honda Civic",
      highlight: "Perfect tint job",
    },
    {
      id: 2,
      name: "Mike R.",
      rating: 5,
      text: "Professional service from start to finish. Oscar treated my car like it was his own. The quality is outstanding.",
      vehicle: "2021 Toyota Camry",
      highlight: "Professional service",
    },
    {
      id: 3,
      name: "Jennifer L.",
      rating: 5,
      text: "Best tint job I've ever had! The attention to detail is unmatched. Will definitely be back for my next vehicle.",
      vehicle: "2023 Ford Explorer",
      highlight: "Unmatched attention to detail",
    },
    {
      id: 4,
      name: "David K.",
      rating: 5,
      text: "Oscar's work speaks for itself. Clean, precise, and the film quality is top-notch. Worth every penny.",
      vehicle: "2020 BMW 3 Series",
      highlight: "Top-notch quality",
    },
    {
      id: 5,
      name: "Amanda T.",
      rating: 5,
      text: "Family-owned business with professional results. Oscar took the time to explain everything and the end result is perfect.",
      vehicle: "2022 Hyundai Tucson",
      highlight: "Perfect results",
    },
    {
      id: 6,
      name: "Robert C.",
      rating: 5,
      text: "Exceptional service and quality. The tint has held up perfectly over the past year. Highly recommend Tint Vision!",
      vehicle: "2021 Chevrolet Silverado",
      highlight: "Exceptional service",
    },
  ];

  // Duplicate reviews for seamless looping
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

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
          <h2 className="text-6xl font-bold mb-6 text-foreground">
            Local Voices. Honest Feedback.
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience.
          </p>
        </div>

        {/* Modern Horizontal Ticker */}
        <div className="relative max-w-full overflow-hidden">
          {/* Fade Mask Overlay */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

          {/* Ticker Container */}
          <div
            ref={tickerRef}
            className="flex gap-6 py-8 animate-scroll"
            style={{
              animationDuration: "60s",
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <Card
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80 md:w-96 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border-primary/20 shadow-xl lg:hover:shadow-2xl transition-all duration-500 lg:hover:scale-105 lg:hover:-translate-y-2 group"
              >
                <CardContent className="p-6">
                  {/* Review Header */}
                  <div className="flex items-center gap-4 mb-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {getInitials(review.name)}
                    </div>

                    {/* Customer Info */}
                    <div className="flex-1">
                      <div className="font-bold text-foreground text-lg">
                        {review.name}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {review.vehicle}
                      </div>
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <div className="inline-block bg-primary/20 text-primary font-semibold px-3 py-1 rounded-full mb-4 text-xs">
                    {review.highlight}
                  </div>

                  {/* Stars */}
                  <div className="text-primary text-xl font-bold mb-4">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-foreground italic leading-relaxed text-sm md:text-base">
                    "{review.text}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Overall Rating */}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes pause {
          0%,
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .animate-pause {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 40s;
          }
        }

        @media (max-width: 480px) {
          .animate-scroll {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews;
