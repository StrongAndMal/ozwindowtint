import { useEffect, useRef } from "react";

const Reviews = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.trustmary.com/Ly856fpNk";
    script.async = true;
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
    return () => {
      if (containerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-6xl font-bold mb-6 text-foreground">
            Customer Reviews for OzWindowTint
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            See what our customers say about our professional window tinting
            services.
          </p>
        </div>
        {/* Trustmary Widget - Full Width */}
        <div className="w-full max-w-7xl mx-auto" ref={containerRef} />
      </div>
    </section>
  );
};

export default Reviews;
