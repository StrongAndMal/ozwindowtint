import Navigation from "@/components/Navigation.jsx";
import Hero from "@/components/Hero.jsx";
import Services from "@/components/Services.jsx";
import Gallery from "@/components/Gallery.jsx";
import About from "@/components/About.jsx";
import Reviews from "@/components/Reviews.jsx";
import Map from "@/components/Map.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Reviews />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
