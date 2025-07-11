import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const mapRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initMap = async () => {
      setIsLoading(true);
      setError(null);

      // Get environment variables
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      const latitude = parseFloat(import.meta.env.VITE_LATITUDE) || 34.0522;
      const longitude = parseFloat(import.meta.env.VITE_LONGITUDE) || -118.2437;
      const businessName = import.meta.env.VITE_BUSINESS_NAME || "OzWindowTint";
      const businessAddress =
        import.meta.env.VITE_BUSINESS_ADDRESS ||
        "13791 Hawthorne Blvd, Hawthorne, CA 90250";

      if (!apiKey) {
        setError("Google Maps API key is not configured");
        setIsLoading(false);
        return;
      }

      const loader = new Loader({
        apiKey,
        version: "weekly",
        libraries: ["places"],
      });

      try {
        const { Map } = await loader.importLibrary("maps");
        const { AdvancedMarkerElement } = await loader.importLibrary("marker");

        const position = { lat: latitude, lng: longitude };

        const map = new Map(mapRef.current, {
          center: position,
          zoom: 15,
          mapId: "FULLSCREEN_MAP_ID",
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        });

        // Create info window content
        const infoWindowContent = `
          <div class="p-4 max-w-xs">
            <h3 class="font-bold text-lg text-gray-900 mb-2">${businessName}</h3>
            <p class="text-gray-700 text-sm">${businessAddress}</p>
          </div>
        `;

        const infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent,
        });

        // Create custom marker
        const marker = new AdvancedMarkerElement({
          position,
          map,
          title: businessName,
        });

        // Add click listener to marker
        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });

        // Center map on window resize
        const handleResize = () => {
          google.maps.event.trigger(map, "resize");
          map.setCenter(position);
        };

        window.addEventListener("resize", handleResize);

        setIsLoading(false);

        // Cleanup
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      } catch (error) {
        console.error("Error loading Google Maps:", error);
        setError(
          "Failed to load Google Maps. Please check your internet connection."
        );
        setIsLoading(false);
      }
    };

    initMap();
  }, []);

  if (error) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-lg">
        <div className="text-center text-gray-600 p-8">
          <div className="text-4xl mb-4">🗺️</div>
          <h2 className="text-xl font-bold mb-2">Map Error</h2>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-6xl font-bold mb-4 text-white">
          Visit OzWindow Tint
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Drop by. Say hi. Let’s get your ride looking right.
        </p>
      </div>

      {/* Map Section */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
              <p className="text-gray-600 text-sm font-medium">
                Loading Map...
              </p>
            </div>
          </div>
        )}
        <div ref={mapRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Map;
