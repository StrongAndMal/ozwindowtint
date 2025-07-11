import { useState, useEffect } from "react";
import ownerPortrait from "@/assets/owner-portrait.jpg";
import about1 from "@/AboutPics/_ (4).jpeg";
import about2 from "@/AboutPics/WINDOW TINTING IMPROVES THE SAFETY OF YOUR VEHICLE AND PASSENGERS.jpeg";
import about3 from "@/AboutPics/ИИ генерации для детейлинга.jpeg";
import about4 from "@/AboutPics/Нанесение тонировки ИИ генерация.jpeg";
import about5 from "@/AboutPics/Window tint Kitchener.jpeg";
import about6 from "@/AboutPics/WINDOW TINTING is an EXCELLENT OPTION.jpeg";

const About = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Use all uploaded images for the ownerPhotos array
  const ownerPhotos = [
    {
      src: ownerPortrait, // Keep the original photo as first
      alt: "Oscar Moran - Working on a vehicle",
      description: "Oscar working on a vehicle",
    },
    {
      src: about1,
      alt: "Oscar Moran - Professional portrait",
      description: "Professional portrait",
    },
    {
      src: about2,
      alt: "Oscar Moran - In the shop",
      description: "In the shop",
    },
    {
      src: about3,
      alt: "Oscar Moran - With customer",
      description: "With customer",
    },
    {
      src: about4,
      alt: "Oscar Moran - Working on tint",
      description: "Working on tint",
    },
    {
      src: about5,
      alt: "Oscar Moran - Shop overview",
      description: "Shop overview",
    },
    {
      src: about6,
      alt: "Oscar Moran - Window tinting",
      description: "Window tinting",
    },
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === ownerPhotos.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change photo every 4 seconds

    return () => clearInterval(interval);
  }, [ownerPhotos.length]);

  // Handle manual navigation
  const goToPhoto = (index) => {
    setCurrentPhotoIndex(index);
  };

  const goToPrevious = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? ownerPhotos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === ownerPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="about"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Custom Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        {/* Medium circle */}
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>
        {/* Small circle */}
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-primary/15 rounded-full blur-xl"></div>
        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary/20 rotate-45 blur-lg"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-primary/10 rotate-12 blur-md"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-6xl font-bold mb-6 text-foreground">
              Meet the Owner
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The Hands Behind the Tint.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo Section - Left */}
            <div className="animate-fade-in relative order-2 lg:order-1">
              {/* Custom Background Shapes for Photo Card */}
              {/* Slideshow Container */}
              <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                {/* Photo Display */}
                <div className="relative h-[500px]">
                  {ownerPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentPhotoIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      {photo.src.startsWith("/placeholder") ? (
                        // Placeholder for photos not yet uploaded
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <div className="text-center text-gray-500">
                            <div className="text-4xl mb-2">📸</div>
                            <div className="text-sm font-medium">
                              Owner Photo {index + 1}
                            </div>
                            <div className="text-xs">{photo.description}</div>
                            <div className="text-xs mt-1">
                              Replace with actual photo
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Actual photo
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 z-10 backdrop-blur-sm"
                  aria-label="Previous photo"
                >
                  ←
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 z-10 backdrop-blur-sm"
                  aria-label="Next photo"
                >
                  →
                </button>

                {/* Photo Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                  {ownerPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToPhoto(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentPhotoIndex
                          ? "bg-white scale-125 shadow-lg"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to photo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Photo Counter */}
              <div className="text-center mt-6 text-sm text-muted-foreground">
                Photo {currentPhotoIndex + 1} of {ownerPhotos.length}
              </div>
            </div>

            {/* Text Section - Right */}
            <div
              className="space-y-8 animate-slide-up order-1 lg:order-2"
              style={{ animationDelay: "0.2s" }}
            >
              <div>
                <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                  Oscar Moran
                </h3>
                <p className="text-xl text-primary font-semibold mb-8">
                  Founder & Master Tint Technician
                </p>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed text-white/80">
                  I’m Oscar, born and raised in El Salvador. I started tinting
                  windows as a backyard hobby during COVID, and it quickly grew
                  into a passion. After five years of refining my craft, I
                  opened my own shop built on quality work, honest service, and
                  treating every car as if it were my own. What began with
                  family cars has turned into a trusted business through word of
                  mouth where precision, protection, and care are standard.
                </p>
                <p className="text-lg italic leading-relaxed font-semibold text-primary">
                  "When you support my business, you're supporting a family, not
                  a franchise."
                </p>
              </div>

              {/* Modern Promise Card */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/20">
                <h4 className="text-3xl font-bold text-foreground mb-6">
                  My Promise to You
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start text-foreground">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0 shadow-lg"></div>
                    <span className="text-md text-white/80">
                      Every car is treated like my own — no shortcuts.
                    </span>
                  </li>
                  <li className="flex items-start text-foreground">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0 shadow-lg"></div>
                    <span className="text-md text-white/80">
                      You'll get honest service, not upsells.
                    </span>
                  </li>
                  <li className="flex items-start text-foreground">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0 shadow-lg"></div>
                    <span className="text-md text-white/80">
                      Precision and attention to detail in every job.
                    </span>
                  </li>
                  <li className="flex items-start text-foreground">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0 shadow-lg"></div>
                    <span className="text-md text-white/80">
                      Real craftsmanship, backed by passion — not profit.
                    </span>
                  </li>
                  <li className="flex items-start text-foreground">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0 shadow-lg"></div>
                    <span className="text-md text-white/80">
                      When you support me, you're supporting a family, not a
                      franchise.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
