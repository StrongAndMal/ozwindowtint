import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import yelpLogo from "@/social-icons-master/SVG/Color/Yelp.svg";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Create 20 placeholder before/after pairs
  const galleryItems = [
    {
      before: before1,
      after: after1,
      title: "Sedan Tint Job",
      description: "Professional tinting with premium film",
    },
    {
      before: before2,
      after: after2,
      title: "SUV Window Tint",
      description: "Complete vehicle tinting service",
    },
    // Add 18 more placeholder items
    ...Array.from({ length: 18 }, (_, i) => ({
      before: `https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80&sig=${i}`,
      after: `https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80&sig=${i}`,
      title: `Vehicle Tint ${i + 3}`,
      description: `Professional tinting service ${i + 3}`,
    })),
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [galleryItems.length]);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-7xl font-bold mb-6 text-foreground">
            Before & After: See the Pure Difference
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            It's more than a look. It's protection, privacy, and comfort you can
            feel.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative">
            {/* Main Carousel */}
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* Before Image */}
                    <div className="relative">
                      {item.before.startsWith("/placeholder") ? (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <div className="text-center text-gray-500">
                            <div className="text-4xl mb-2">📸</div>
                            <div className="text-sm font-medium">
                              Before {index + 1}
                            </div>
                            <div className="text-xs">
                              Replace with actual photo
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={item.before}
                          alt={`Before - ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Before
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative">
                      {item.after.startsWith("/placeholder") ? (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <div className="text-center text-gray-500">
                            <div className="text-4xl mb-2">📸</div>
                            <div className="text-sm font-medium">
                              After {index + 1}
                            </div>
                            <div className="text-xs">
                              Replace with actual photo
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={item.after}
                          alt={`After - ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        After
                      </div>
                    </div>
                  </div>

                  {/* Slide Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dot Indicators - Auto-only */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {galleryItems.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            {currentSlide + 1} of {galleryItems.length}
          </div>

          {/* Gallery Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm text-center bg-white/10 rounded-2xl shadow-lg p-8 transition-transform duration-200 lg:hover:scale-105 lg:hover:shadow-2xl">
              <div className="text-6xl font-bold text-primary-glow mb-2">
                500+
              </div>
              <div className="text-foreground text-white/80">
                Vehicles Tinted
                <br />
                🚗🚗🚗🚗🚗
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm text-center bg-white/10 rounded-2xl shadow-lg p-8 transition-transform duration-200 lg:hover:scale-105 lg:hover:shadow-2xl">
              <div className="text-6xl font-bold text-primary-glow mb-2">
                5+
              </div>
              <div className="text-foreground text-white/80">
                Years Experience
                <br />
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm text-center bg-white/10 rounded-2xl shadow-lg p-8 transition-transform duration-200 lg:hover:scale-105 lg:hover:shadow-2xl">
              <div className="text-6xl font-bold text-primary-glow mb-2">
                97%
              </div>
              <div className="text-foreground text-white/80 mb-2">
                Satisfaction Rate
              </div>
              <img
                src={yelpLogo}
                alt="Yelp"
                className="mx-auto h-5 w-auto mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
