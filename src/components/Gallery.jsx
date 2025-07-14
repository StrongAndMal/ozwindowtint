import { useState, useEffect } from "react";

// Import all before-and-after images
import img1 from "@/BeforeAndAfter/IMG_5342.JPG";
import img2 from "@/BeforeAndAfter/IMG_5343.JPG";
import img3 from "@/BeforeAndAfter/IMG_5344.JPG";
import img4 from "@/BeforeAndAfter/IMG_5345.JPG";
import img5 from "@/BeforeAndAfter/IMG_5347.JPG";
import img6 from "@/BeforeAndAfter/IMG_5348.JPG";
import img7 from "@/BeforeAndAfter/IMG_5349.JPG";
import img8 from "@/BeforeAndAfter/IMG_5350.JPG";
import img9 from "@/BeforeAndAfter/IMG_5351.JPG";
import img10 from "@/BeforeAndAfter/IMG_5352.JPG";
import img11 from "@/BeforeAndAfter/IMG_5353.JPG";
import img12 from "@/BeforeAndAfter/IMG_5354.JPG";
import img13 from "@/BeforeAndAfter/IMG_5355.JPG";
import img14 from "@/BeforeAndAfter/IMG_5356.JPG";

const slides = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

const infoText = `
Experience the difference with our professional window tinting services. Our team uses only the highest quality materials and precise techniques to ensure a flawless finish every time. Enjoy enhanced privacy, UV protection, and a sleek look for your vehicle. Customer satisfaction is our top priority—see the results for yourself in our gallery!`;

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-background">
      {/* Heading & Tagline */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Before & After | Real Rides, Real Results
        </h2>
        <div className="text-md text-white/80 md:text-xl italic mt-2">
          Before? Basic. After? Built Different.
        </div>
      </div>
      {/* Two-Column Layout */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 max-w-7xl mx-auto">
        {/* Left: Slideshow */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="w-full">
            <div className="text-4xl text-center font-semibold mb-4 text-foreground">
              Tint Gallery
            </div>
            <div className="relative w-full h-[60vw] max-h-[700px] min-h-[350px] flex items-center justify-center">
              {slides.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Before and After ${idx + 1}`}
                  className={`absolute left-0 top-0 w-full h-full object-contain object-center rounded-lg shadow-lg transition-opacity duration-1000 ${
                    idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  tabIndex={0}
                  aria-label={`Before and After photo ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Right: Info Text */}
        <div className="w-full md:w-1/2 flex items-center">
          <div className="max-w-md mx-auto text-xl leading-relaxed text-white/80">
            Before: Factory windows that offered zero shade, zero UV protection,
            and left this ride feeling hot and exposed. Glare? Everywhere.
            <br />
            <br />
            After: Now tinted with precision using high-performance film, this
            car’s rocking a sleeker profile, cooler interior, and 99% UV
            blockage.
            <br />
            <br />
            💨 Instant privacy.
            <br />
            🔥 Heat reduction you’ll feel.
            <br />
            😎 Looks that turn heads at red lights.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
