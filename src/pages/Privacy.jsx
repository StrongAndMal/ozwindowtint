import React from "react";
import logo from "../Logo/ChatGPT Image Jul 14, 2025, 11_50_18 AM.png";

const Privacy = () => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <h1 className="text-4xl font-bold mb-6 text-primary-glow">
      Privacy Policy
    </h1>
    <p className="mb-4 text-white/80">
      At Oz Window Tint, we respect your privacy. This policy explains what
      information we collect, how we use it, and how we protect it.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary-glow">
      Information We Collect
    </h2>
    <ul className="list-disc ml-6 mb-4 text-white/80">
      <li>
        Name, email, phone number, and any other information you provide when
        booking or reaching out.
      </li>
      <li>Pages you visit and actions you take on our site.</li>
      <li>
        Small files stored on your device to improve your experience and help us
        understand site usage.
      </li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary-glow">
      How We Use Your Information
    </h2>
    <ul className="list-disc ml-6 mb-4 text-white/80">
      <li>To provide and improve our services.</li>
      <li>To respond to your inquiries and process bookings.</li>
      <li>
        To communicate with you about promotions, updates, or important
        information.
      </li>
      <li>To comply with legal obligations.</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary-glow">
      Information Sharing
    </h2>
    <p className="mb-4 text-white/80">
      We do not sell or rent your personal information. We may share information
      with trusted third parties who assist us in operating our website or
      providing services, as long as those parties agree to keep this
      information confidential. We may also disclose information if required by
      law.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary-glow">
      Your Choices
    </h2>
    <p className="mb-4 text-white/80">
      You may opt out of receiving marketing communications from us at any time.
      You can also disable cookies in your browser settings.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary-glow">
      Contact Us
    </h2>
    <p className="mb-4 text-white/80">
      If you have any questions about this Privacy Policy, please contact us at{" "}
      <a
        href="mailto:osmoran2007@hotmail.com"
        className="text-primary underline"
      >
        osmoran2007@hotmail.com
      </a>
      .
    </p>
    <p className="text-sm text-white/60 mt-8">
      Last updated: {new Date().toLocaleDateString()}
    </p>
    <div className="flex justify-center mt-12">
      <img
        src={logo}
        alt="OzWindowTint Logo"
        className="h-40 w-auto object-contain"
        style={{ maxWidth: "600px" }}
      />
    </div>
  </div>
);

export default Privacy;
