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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col h-full justify-between">
            <div>
              <div className="text-4xl font-bold text-primary-glow">
                OZWindowTint
              </div>
              <p className="text-sm text-white/80 mt-2">
                Professional Automotive Window Tinting. Family-Owned &
                Community-Trusted
              </p>
            </div>
            <div>
              <div className="text-xl font-bold text-white mb-2">
                Follow OZWindowTint:
              </div>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Nano Carbon Puremax
              </li>
              <li className="text-sm text-muted-foreground">FXtreme2 Series</li>
              <li className="text-sm text-muted-foreground">
                Automotive Tinting
              </li>
              <li className="text-sm text-muted-foreground">
                Commercial Vehicles
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                3791 Hawthorne Blvd,
                <br />
                Hawthorne, CA 90250
              </div>
              <div>(323) 485-2615</div>
              <div>info@ozwindowtint.com</div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-foreground mb-4">
              We Accept
            </h4>
            <div className="flex justify-center space-x-4">
              <img src={visaIcon} alt="Visa" className="h-8 w-auto" />
              <img
                src={mastercardIcon}
                alt="Mastercard"
                className="h-8 w-auto"
              />
              <img src={amexIcon} alt="Amex" className="h-8 w-auto" />
              <img src={discoverIcon} alt="Discover" className="h-8 w-auto" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} OZWindowTint. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
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
