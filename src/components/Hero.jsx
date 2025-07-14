import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const videoRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // For blur effect

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeStart = windowHeight * 0.3; // Start fading at 30% of viewport height
      const fadeEnd = windowHeight * 0.8; // Complete fade at 80% of viewport height

      if (scrollY <= fadeStart) {
        setIsVideoVisible(true);
      } else if (scrollY >= fadeEnd) {
        setIsVideoVisible(false);
      } else {
        // Calculate opacity between fadeStart and fadeEnd
        const opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
        setIsVideoVisible(opacity > 0.1); // Keep visible if opacity > 10%
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stat card data
  const stats = [
    { value: "5+", label: "Years of Experience" },
    { value: "00+", label: "Happy Customers" },
    { value: "100%", label: "Satisfaction Guarantee" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <source
            src="/Videos/ffd232571289d5c2befbc5840f4cd984.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Fallback Background Image */}
      {/* Optionally, add a static fallback image here if you have one, or remove this block if not needed */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 sm:px-6 lg:px-8 animate-fade-in w-full max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
          Tinted With Care.
          <span className="block text-primary-glow mt-2 sm:mt-3 lg:mt-4">
            Driven by Passion.
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto px-4">
          From our garage to yours, we bring precision, pride, and personal
          touch to every tint.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 lg:mb-16">
          <Button
            variant=""
            size="lg"
            onClick={scrollToContact}
            className="text-base hover:scale-105 transition-all duration-300 sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-w-[200px]"
          >
            Get Quote
          </Button>
          <Button
            variant=""
            size="lg"
            onClick={scrollToGallery}
            className="text-base sm:text-lg hover:scale-105 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-w-[200px]"
          >
            View Our Work
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto px-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-300 md:rounded-xl md:hover:scale-105
                ${
                  hoveredIndex !== null && hoveredIndex !== idx
                    ? "md:blur-sm md:opacity-60"
                    : ""
                }
              `}
              onMouseEnter={() =>
                window.innerWidth >= 768 && setHoveredIndex(idx)
              }
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-glow mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-white text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
