import { useState, useEffect } from "react";

const AssetDebugger = () => {
  const [videoStatus, setVideoStatus] = useState("Loading...");
  const [imageStatus, setImageStatus] = useState("Loading...");

  useEffect(() => {
    // Test video loading
    const video = new Image();
    video.onload = () => setVideoStatus("✅ Video loaded successfully");
    video.onerror = () => setVideoStatus("❌ Video failed to load");
    video.src = "/ozwindowtint/Videos/ffd232571289d5c2befbc5840f4cd984.mp4";

    // Test image loading
    const image = new Image();
    image.onload = () => setImageStatus("✅ Image loaded successfully");
    image.onerror = () => setImageStatus("❌ Image failed to load");
    image.src = "/ozwindowtint/AboutPics/_ (4).jpeg";
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg z-50 text-sm">
      <div>Video: {videoStatus}</div>
      <div>Image: {imageStatus}</div>
    </div>
  );
};

export default AssetDebugger;
