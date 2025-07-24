import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerInstance = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mapReady, setMapReady] = useState(false);

  // Business coordinates - try both sets
  const primaryLocation = { lat: 33.9165, lng: -118.3523 };
  const alternativeLocation = { lat: 33.919434, lng: -118.353996 };
  const businessName = "OzWindowTint";
  const businessAddress = "13791 Hawthorne Blvd, Hawthorne, CA 90250";

  useEffect(() => {
    const initMap = async () => {
      setIsLoading(true);
      setError(null);
      setMapReady(false);

      // Get environment variables
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

      console.log("=== MAP INITIALIZATION START ===");
      console.log("API Key available:", !!apiKey);
      console.log("Primary location:", primaryLocation);
      console.log("Alternative location:", alternativeLocation);

      if (!apiKey) {
        setError("Google Maps API key is not configured. Please check VITE_GOOGLE_MAPS_API_KEY.");
        setIsLoading(false);
        return;
      }

      // Ensure map element is ready
      if (!mapRef.current) {
        setError("Map container element not found");
        setIsLoading(false);
        return;
      }

      // Set explicit dimensions for map container
      mapRef.current.style.width = "100%";
      mapRef.current.style.height = "400px";
      mapRef.current.style.minHeight = "400px";

      const loader = new Loader({
        apiKey,
        version: "weekly",
        libraries: ["places", "marker"],
      });

      try {
        console.log("Loading Google Maps libraries...");
        const { Map } = await loader.importLibrary("maps");
        const { AdvancedMarkerElement } = await loader.importLibrary("marker");

        console.log("Creating map instance...");
        
        // Create map with explicit options
        const map = new Map(mapRef.current, {
          center: primaryLocation, // Start with primary location
          zoom: 15,
          mapId: "FULLSCREEN_MAP_ID",
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        });

        mapInstance.current = map;

        // Wait for map to be fully initialized before positioning
        google.maps.event.addListenerOnce(map, 'idle', () => {
          console.log("Map is idle - setting final position...");
          setMapReady(true);
          
          // Try to position map with multiple methods
          positionMap(map, primaryLocation);
        });

        // Add error listener
        google.maps.event.addListener(map, 'error', (error) => {
          console.error("Map error:", error);
          setError("Map encountered an error during initialization");
        });

        setIsLoading(false);

      } catch (error) {
        console.error("Error loading Google Maps:", error);
        setError(`Failed to load Google Maps: ${error.message}`);
        setIsLoading(false);
      }
    };

    const positionMap = (map, location) => {
      console.log("Positioning map to:", location);
      
      try {
        // Method 1: Set center with explicit zoom
        map.setCenter(location);
        map.setZoom(15);
        
        console.log("Map center set to:", map.getCenter().toJSON());
        
        // Method 2: Pan to location (alternative method)
        setTimeout(() => {
          map.panTo(location);
          console.log("Map panned to:", map.getCenter().toJSON());
        }, 100);

        // Create marker at exact location
        createMarker(map, location);
        
      } catch (error) {
        console.error("Error positioning map:", error);
        setError("Failed to position map correctly");
      }
    };

    const createMarker = (map, location) => {
      console.log("Creating marker at:", location);
      
      try {
        // Create marker with exact position
        const marker = new AdvancedMarkerElement({
          position: location,
          map: map,
          title: businessName,
        });

        markerInstance.current = marker;

        // Add click listener
        marker.addListener("click", () => {
          const businessSearchUrl = `https://maps.google.com/?q=${encodeURIComponent(businessName)}`;
          window.open(businessSearchUrl, "_blank", "noopener,noreferrer");
        });

        console.log("Marker created successfully at:", location);
        
        // Verify marker position
        setTimeout(() => {
          const markerPosition = marker.position;
          console.log("Marker position verified:", markerPosition);
        }, 200);

      } catch (error) {
        console.error("Error creating marker:", error);
        // Fallback to regular marker
        createFallbackMarker(map, location);
      }
    };

    const createFallbackMarker = (map, location) => {
      console.log("Creating fallback marker at:", location);
      
      try {
        const marker = new google.maps.Marker({
          position: location,
          map: map,
          title: businessName,
        });

        markerInstance.current = marker;

        marker.addListener("click", () => {
          const businessSearchUrl = `https://maps.google.com/?q=${encodeURIComponent(businessName)}`;
          window.open(businessSearchUrl, "_blank", "noopener,noreferrer");
        });

        console.log("Fallback marker created successfully");
      } catch (error) {
        console.error("Error creating fallback marker:", error);
      }
    };

    // Test different positioning methods
    const testAlternativeLocation = () => {
      if (mapInstance.current && mapReady) {
        console.log("Testing alternative location...");
        positionMap(mapInstance.current, alternativeLocation);
      }
    };

    // Add test function to window for debugging
    window.testMapLocation = testAlternativeLocation;

    initMap();

    // Cleanup
    return () => {
      if (mapInstance.current) {
        google.maps.event.clearInstanceListeners(mapInstance.current);
      }
    };
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
            services. Let's get your car looking right!
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
            {/* Debug buttons */}
            <div className="mt-4 space-x-2">
              <button 
                onClick={() => window.testMapLocation?.()}
                className="px-3 py-1 bg-blue-500 text-white rounded text-xs"
              >
                Test Alt Location
              </button>
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
          Drop by our shop in Hawthorne, CA for expert car window tinting. Let's
          get your car looking right!
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
        
        {/* Map Container */}
        <div 
          ref={mapRef} 
          className="w-full h-full"
          style={{ minHeight: '400px' }}
        />
        
        {/* Debug Info (only in development) */}
        {import.meta.env.DEV && mapReady && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
            <div>Map Ready: {mapReady ? '✅' : '❌'}</div>
            <div>Center: {mapInstance.current?.getCenter()?.toJSON()?.lat?.toFixed(6)}, {mapInstance.current?.getCenter()?.toJSON()?.lng?.toFixed(6)}</div>
            <button 
              onClick={() => window.testMapLocation?.()}
              className="mt-1 px-2 py-1 bg-blue-500 rounded text-xs"
            >
              Test Alt Location
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
