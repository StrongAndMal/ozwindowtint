import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-glow">
              OzWindowTint
            </div>
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

          {/* Book Now Button - Right side */}
          <div className="hidden lg:block">
            <Button
              variant="cta"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-primary lg:hover:bg-primary/90 text-black font-bold px-6 py-3 rounded-lg shadow-lg lg:hover:shadow-xl transition-all duration-300 transform lg:hover:scale-105 border-2 border-primary/20 lg:hover:border-primary/40"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-foreground transition-colors duration-200 relative z-50"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1.5"
                    : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "opacity-0 scale-0"
                    : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1.5"
                    : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-40 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-md shadow-2xl border-l border-border transition-all duration-300 ease-in-out z-50 transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="text-xl font-bold text-primary-glow">Menu</div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-foreground transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 p-6 space-y-6">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-foreground transition-colors duration-200 py-3 text-lg font-medium border-b border-border/20"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left text-foreground transition-colors duration-200 py-3 text-lg font-medium border-b border-border/20"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-foreground transition-colors duration-200 py-3 text-lg font-medium border-b border-border/20"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-foreground transition-colors duration-200 py-3 text-lg font-medium border-b border-border/20"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-border">
              <Button
                variant="cta"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary text-white font-semibold px-6 py-4 rounded-lg shadow-lg transition-all duration-300 border-2 border-primary/20 text-lg"
              >
                <span className="mr-2">🚗</span>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
