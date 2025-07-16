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

      // Get environment variables with better fallbacks
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      const latitude = parseFloat(import.meta.env.VITE_LATITUDE) || 33.9065352;
      const longitude =
        parseFloat(import.meta.env.VITE_LONGITUDE) || -118.3522791;
      const businessName = import.meta.env.VITE_BUSINESS_NAME || "OzWindowTint";
      const businessAddress =
        import.meta.env.VITE_BUSINESS_ADDRESS ||
        "13791 Hawthorne Blvd, Hawthorne, CA 90250";

      // Debug logging for development
      if (import.meta.env.DEV) {
        console.log("Map Debug Info:", {
          hasApiKey: !!apiKey,
          apiKeyLength: apiKey?.length,
          latitude,
          longitude,
          businessName,
          businessAddress,
          environment: import.meta.env.MODE,
        });
      }

      if (!apiKey) {
        setError(
          "Google Maps API key is not configured. Please check your environment variables."
        );
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

        // Ensure map element is ready
        if (!mapRef.current) {
          throw new Error("Map element not found");
        }

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
            <div class="mt-2">
              <a href="https://maps.google.com/?q=${encodeURIComponent(
                businessAddress
              )}" 
                 target="_blank" 
                 class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Get Directions →
              </a>
            </div>
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

        // More specific error messages
        let errorMessage =
          "Failed to load Google Maps. Please check your internet connection.";

        if (error.message?.includes("RefererNotAllowedMapError")) {
          errorMessage =
            "Domain not authorized for Google Maps API. Please check domain restrictions.";
        } else if (error.message?.includes("ApiNotActivatedMapError")) {
          errorMessage =
            "Google Maps API not activated. Please enable the Maps JavaScript API.";
        } else if (error.message?.includes("InvalidKeyMapError")) {
          errorMessage =
            "Invalid Google Maps API key. Please check your configuration.";
        }

        setError(errorMessage);
        setIsLoading(false);
      }
    };

    initMap();
  }, []);

  if (error) {
    return (
      <div className="w-full">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 text-white break-words max-w-full">
            Visit OzWindowTint - Your Local Window Tinting Expert
          </h2>
          <p className="text-sm sm:text-lg max-w-full text-white/80 mx-auto break-words">
            Drop by our shop in Hawthorne, CA for expert window tinting
            services. Let's get your car looking right.
          </p>
        </div>

        {/* Error State */}
        <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-lg">
          <div className="text-center text-gray-600 p-8">
            <div className="text-4xl mb-4">🗺️</div>
            <h2 className="text-xl font-bold mb-2">
              Map Temporarily Unavailable
            </h2>
            <p className="text-sm mb-4">{error}</p>
            <div className="text-sm text-gray-500">
              <p>📍 13791 Hawthorne Blvd, Hawthorne, CA 90250</p>
              <p>📞 (323) 485-2615</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 text-white break-words max-w-full">
          Visit OzWindowTint - Your Local Window Tinting Experts
        </h2>
        <p className="text-sm sm:text-lg max-w-full text-white/80 mx-auto break-words">
          Drop by our shop in Hawthorne, CA for expert window tinting services.
          Let's get your car, home, or business looking right.
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
