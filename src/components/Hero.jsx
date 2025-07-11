import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const HERO_VIDEO_PATH =
  "/ozwindowtint/Videos/ffd232571289d5c2befbc5840f4cd984.mp4";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center text-primary-foreground px-4 animate-fade-in">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Tinted With Care.
          <span className="block text-primary-glow">Driven by Passion.</span>
        </h1>

        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          From our garage to yours, we bring precision, pride, and personal
          touch to every tint.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant=""
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-4"
          >
            Get Quote
          </Button>
          <Button
            variant=""
            size="lg"
            onClick={scrollToGallery}
            className="text-lg px-8 py-4"
          >
            View Our Work
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow mb-2">5+</div>
            <div className="text-primary-foreground/80 text-white">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow mb-2">
              500+
            </div>
            <div className="text-primary-foreground/80 text-white">
              Happy Customers
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow mb-2">
              100%
            </div>
            <div className="text-primary-foreground/80 text-white">
              Satisfaction Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
