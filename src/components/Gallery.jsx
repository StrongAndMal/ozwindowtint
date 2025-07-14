import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import yelpLogo from "@/social-icons-master/SVG/Color/Yelp.svg";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use your OzWindowTint photos for the gallery
  const galleryItems = [
    {
      image: "/src/assets/OzWindowTint/DJI_20250712142612_0013_D.jpg",
      title: "Professional Window Tinting",
      description: "Premium quality tinting with attention to detail",
    },
    {
      image: "/src/assets/OzWindowTint/DJI_20250712142623_0014_D.jpg",
      title: "SUV Window Tint Service",
      description: "Complete vehicle tinting for maximum protection",
    },
    {
      image: "/src/assets/OzWindowTint/DJI_20250712142642_0015_D.jpg",
      title: "Precision Tinting Process",
      description: "Expert application with premium materials",
    },
    {
      image: "/src/assets/OzWindowTint/DJI_20250712142655_0016_D.jpg",
      title: "Quality Workmanship",
      description: "Every detail matters in our tinting process",
    },
    {
      image: "/src/assets/OzWindowTint/DJI_20250712142732_0017_D.jpg",
      title: "Professional Service",
      description: "Trusted by hundreds of satisfied customers",
    },
    {
      image: "/src/assets/OzWindowTint/DJI_20250712142905_0020_D.jpg",
      title: "Window Tinting Excellence",
      description: "Protection, privacy, and style combined",
    },
    {
      image: "/src/assets/OzWindowTint/DJI_20250712142913_0022_D.jpg",
      title: "Shop Overview",
      description: "State-of-the-art equipment for perfect results",
    },
    {
      image: "/src/assets/OzWindowTint/DJI_20250712143035_0036_D.jpg",
      title: "Work in Progress",
      description: "Meticulous attention to every detail",
    },
    {
      image: "/src/assets/OzWindowTint/DJI_20250712143101_0053_D (1).jpg",
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority",
    },
    {
      image: "/src/assets/OzWindowTint/DJI_20250712144807_0067_D (2).jpg",
      title: "Professional Finish",
      description: "Clean, precise, and long-lasting results",
    },
    {
      image: "/src/assets/OzWindowTint/DJI_20250712144931_0075_D (1).jpg",
      title: "Final Result",
      description: "Beautiful tinting that enhances your vehicle",
    },
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
            Our Work: Quality You Can See
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Professional window tinting that combines protection, privacy, and
            style.
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
                  <div className="relative h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay with info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/90">{item.description}</p>
                    </div>
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
