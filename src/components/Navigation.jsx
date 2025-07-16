import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/Logo/ChatGPT Image Jul 14, 2025, 11_50_18 AM.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20 relative">
          {/* Logo - Centered on Mobile */}
          <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 top-0 pt-2">
            <Link to="/" className="flex flex-col items-center space-y-1">
              <img
                src={logo}
                alt="OzWindowTint Logo"
                className="h-14 w-auto object-contain"
                style={{ maxWidth: "400px" }}
              />
            </Link>
          </div>

          {/* Logo - Desktop */}
          <Link
            to="/"
            className="hidden lg:flex flex-row items-center min-w-[120px]"
          >
            <img
              src={logo}
              alt="OzWindowTint Logo"
              className="h-20 w-auto object-contain"
              style={{ maxWidth: "500px" }}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8 xl:space-x-12">
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground lg:hover:text-primary transition-colors duration-200 text-sm xl:text-base font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-foreground lg:hover:text-primary transition-colors duration-200 text-sm xl:text-base font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground lg:hover:text-primary transition-colors duration-200 text-sm xl:text-base font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground lg:hover:text-primary transition-colors duration-200 text-sm xl:text-base font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Book Now Button - Mobile */}
          <div className="lg:hidden flex items-center justify-end ml-auto">
            <a
              href="https://book.squareup.com/appointments/821sdhjnscyzx0/location/LWSA7KP8WFHVK/services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="cta"
                size="sm"
                className="bg-primary text-white font-bold px-3 py-1.5 rounded-lg shadow-lg transition-all duration-300 border-2 border-primary/20 text-xs"
              >
                Book Now
              </Button>
            </a>
          </div>

          {/* Book Now Button - Right side */}
          <div className="hidden lg:block">
            <a
              href="https://book.squareup.com/appointments/821sdhjnscyzx0/location/LWSA7KP8WFHVK/services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="cta"
                size="lg"
                className="bg-primary lg:hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg shadow-lg lg:hover:shadow-xl transition-all duration-300 transform lg:hover:scale-105 border-2 border-primary/20 lg:hover:border-primary/40"
              >
                Book Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
