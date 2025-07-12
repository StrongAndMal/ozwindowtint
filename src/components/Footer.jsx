import { Link } from "react-router-dom";
import visaIcon from "../cards/visa.svg";
import mastercardIcon from "../cards/mastercard.svg";
import amexIcon from "../cards/american-express.svg";
import discoverIcon from "../cards/discover.svg";
import facebookIcon from "../social-icons-master/SVG/Color/Facebook.svg";
import instagramIcon from "../social-icons-master/SVG/Color/Instagram.svg";
import youtubeIcon from "../social-icons-master/SVG/Color/Youtube.svg";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-glow">
                OZWindowTint
              </div>
              <p className="text-sm sm:text-base text-white/80 mt-2 sm:mt-3 leading-relaxed">
                Professional Automotive Window Tinting. Family-Owned &
                Community-Trusted
              </p>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Follow OZWindowTint:
              </div>
              <div className="flex space-x-4 sm:space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="lg:hover:scale-110 transition-transform duration-200"
                >
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="lg:hover:scale-110 transition-transform duration-200"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="lg:hover:scale-110 transition-transform duration-200"
                >
                  <img
                    src={youtubeIcon}
                    alt="YouTube"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm sm:text-base text-muted-foreground lg:hover:text-primary transition-colors duration-200 py-1"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-sm sm:text-base text-muted-foreground lg:hover:text-primary transition-colors duration-200 py-1"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm sm:text-base text-muted-foreground lg:hover:text-primary transition-colors duration-200 py-1"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm sm:text-base text-muted-foreground lg:hover:text-primary transition-colors duration-200 py-1"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-sm sm:text-base text-muted-foreground">
                Nano Carbon Puremax
              </li>
              <li className="text-sm sm:text-base text-muted-foreground">
                FXtreme2 Series
              </li>
              <li className="text-sm sm:text-base text-muted-foreground">
                Automotive Tinting
              </li>
              <li className="text-sm sm:text-base text-muted-foreground">
                Commercial Vehicles
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              Contact Info
            </h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
              <div className="leading-relaxed">
                3791 Hawthorne Blvd,
                <br />
                Hawthorne, CA 90250
              </div>
              <div className="lg:hover:text-primary transition-colors duration-200">
                (323) 485-2615
              </div>
              <div className="lg:hover:text-primary transition-colors duration-200">
                info@ozwindowtint.com
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-8 sm:pt-10 lg:pt-12 border-t border-border">
          <div className="text-center">
            <h4 className="text-sm sm:text-base font-semibold text-foreground mb-4 sm:mb-6">
              We Accept
            </h4>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <img src={visaIcon} alt="Visa" className="h-6 sm:h-8 w-auto" />
              <img
                src={mastercardIcon}
                alt="Mastercard"
                className="h-6 sm:h-8 w-auto"
              />
              <img src={amexIcon} alt="Amex" className="h-6 sm:h-8 w-auto" />
              <img
                src={discoverIcon}
                alt="Discover"
                className="h-6 sm:h-8 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-8 lg:pt-10 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm sm:text-base text-muted-foreground text-center sm:text-left">
              © {currentYear} OZWindowTint. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm sm:text-base">
              <Link
                to="/privacy"
                className="text-muted-foreground lg:hover:text-primary transition-colors duration-200 text-center sm:text-left"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground lg:hover:text-primary transition-colors duration-200 text-center sm:text-left"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
