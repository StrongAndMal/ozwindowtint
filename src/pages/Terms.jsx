import React from "react";
import logo from "../Logo/ChatGPT Image Jul 14, 2025, 11_50_18 AM.png";

const Terms = () => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <h1 className="text-4xl font-bold mb-6 text-primary-glow">
      Terms of Service
    </h1>
    <p className="mb-4 text-white/80">
      Welcome to Oz Window Tint. By using our website or booking our services,
      you agree to these terms. Please read them carefully.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary-glow">
      Services
    </h2>
    <p className="mb-4 text-white/80">
      OzWindowTint provides professional automotive window tinting and related
      services. All services are subject to availability and may change without
      notice.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary-glow">
      User Responsibilities
    </h2>
    <ul className="list-disc ml-6 mb-4 text-white/80">
      <li>
        Provide accurate and complete information when booking or contacting us.
      </li>
      <li>Comply with all applicable laws and regulations.</li>
      <li>Do not misuse our website or services.</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary-glow">
      Payments & Cancellations
    </h2>
    <ul className="list-disc ml-6 mb-4 text-white/80">
      <li>Payment is due at the time of service unless otherwise agreed.</li>
      <li>Cancellations should be made at least 24 hours in advance.</li>
      <li>
        We reserve the right to refuse service or cancel appointments at our
        discretion.
      </li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary-glow">
      Limitation of Liability
    </h2>
    <p className="mb-4 text-white/80">
      OzWindowTint is not liable for any indirect, incidental, or consequential
      damages arising from the use of our services or website. Our liability is
      limited to the amount paid for the service in question.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary-glow">
      Changes to Terms
    </h2>
    <p className="mb-4 text-white/80">
      We may update these Terms of Service at any time. Continued use of our
      website or services constitutes acceptance of the revised terms.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-2 text-primary-glow">
      Contact Us
    </h2>
    <p className="mb-4 text-white/80">
      If you have any questions about these Terms, please contact us at{" "}
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

export default Terms;
