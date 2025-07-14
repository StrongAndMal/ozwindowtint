import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const HERO_VIDEO_PATH = "/src/assets/Videos/OzWindowTint.mov";

const Hero = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const videoRef = useRef(null);

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
          <source src={HERO_VIDEO_PATH} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Fallback Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          isVideoVisible ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${HERO_VIDEO_PATH})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

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
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-w-[200px]"
          >
            Get Quote
          </Button>
          <Button
            variant=""
            size="lg"
            onClick={scrollToGallery}
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-w-[200px]"
          >
            View Our Work
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-glow mb-2">
              5+
            </div>
            <div className="text-primary-foreground/80 text-white text-sm sm:text-base">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-glow mb-2">
              500+
            </div>
            <div className="text-primary-foreground/80 text-white text-sm sm:text-base">
              Happy Customers
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-glow mb-2">
              100%
            </div>
            <div className="text-primary-foreground/80 text-white text-sm sm:text-base">
              Satisfaction Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
