import { useState, useEffect } from "react";

// Import all images properly for Vite to process them
import photo1 from "@/assets/OzWindowTint/DJI_20250712142612_0013_D.jpg";
import photo2 from "@/assets/OzWindowTint/DJI_20250712142642_0015_D.jpg";
import photo3 from "@/assets/OzWindowTint/DJI_20250712142655_0016_D.jpg";
import photo4 from "@/assets/OzWindowTint/DJI_20250712142732_0017_D.jpg";
import photo5 from "@/assets/OzWindowTint/DJI_20250712142905_0020_D.jpg";
import photo6 from "@/assets/OzWindowTint/DJI_20250712142913_0022_D.jpg";
import photo7 from "@/assets/OzWindowTint/DJI_20250712143035_0036_D.jpg";
import photo8 from "@/assets/OzWindowTint/DJI_20250712143101_0053_D (1).jpg";
import photo9 from "@/assets/OzWindowTint/DJI_20250712144807_0067_D (2).jpg";
import photo10 from "@/assets/OzWindowTint/DJI_20250712144931_0075_D (1).jpg";

const ownerPhotos = [
  {
    src: photo1,
    alt: "Oscar Moran - Professional work",
    description: "Professional work",
  },
  {
    src: photo2,
    alt: "Oscar Moran - Tinting process",
    description: "Tinting process",
  },
  {
    src: photo3,
    alt: "Oscar Moran - Quality work",
    description: "Quality work",
  },
  {
    src: photo4,
    alt: "Oscar Moran - Professional service",
    description: "Professional service",
  },
  {
    src: photo5,
    alt: "Oscar Moran - Window tinting",
    description: "Window tinting",
  },
  {
    src: photo6,
    alt: "Oscar Moran - Shop overview",
    description: "Shop overview",
  },
  {
    src: photo7,
    alt: "Oscar Moran - Work in progress",
    description: "Work in progress",
  },
  {
    src: photo8,
    alt: "Oscar Moran - Customer service",
    description: "Customer service",
  },
  {
    src: photo9,
    alt: "Oscar Moran - Professional finish",
    description: "Professional finish",
  },
  {
    src: photo10,
    alt: "Oscar Moran - Final result",
    description: "Final result",
  },
];

const About = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Auto-advance slideshow with 8 second rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === ownerPhotos.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change photo every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20">
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
            {/* Photo Section - Always First on Mobile */}
            <div className="animate-fade-in relative order-1 lg:order-1">
              {/* Free-positioned Photo Display */}
              <div className="relative w-full max-w-lg mx-auto h-[500px]">
                {ownerPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentPhotoIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Text Section - Always Second on Mobile */}
            <div
              className="space-y-8 animate-slide-up order-2 lg:order-2"
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
                  I'm Oscar, born and raised in El Salvador. I started tinting
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
