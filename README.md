# OZWindowTint Landing Page

Welcome to the official repository for **OZWindowTint** — a modern, responsive landing page and gallery for a professional window tinting business. This project is built with React (Vite), TailwindCSS, and a focus on clean UI/UX, accessibility, and real-world business needs.

---

## 🚗 About OZWindowTint

OZWindowTint is a family-owned, community-trusted business specializing in automotive, residential, and commercial window tinting. Our site is designed to showcase our work, make it easy for customers to get in touch, and highlight our values of quality, honesty, and craftsmanship.

---

## ✨ Features

- **Modern, Responsive Design:** Built with React and TailwindCSS for a seamless experience on all devices.
- **Full-Screen Google Map:** Shows business location with custom marker and info window.
- **Dynamic Gallery:** Before/after carousel with real and placeholder images, auto-advancing and manual navigation.
- **Owner Story:** Meet the owner section with a photo carousel and personal story.
- **Contact Form:** Clean, accessible, and minimal form for quotes and inquiries, with validation and feedback.
- **Footer:** Social links (with brand icons), payment methods, and business info.
- **Accessibility:** Keyboard navigation, ARIA labels, and color contrast.
- **Easy Customization:** All images and text are easy to update for your business needs.

---

## 🛠️ Tech Stack

- **React (Vite)**
- **TailwindCSS**
- **JavaScript (no TypeScript)**
- **Shadcn UI, Radix, and modern UI patterns**
- **Google Maps API**
- **Sonner for notifications**

---

## 📁 Project Structure

```
src/
  components/      # All main React components (Hero, About, Gallery, Contact, Footer, etc.)
  assets/          # Images and videos for gallery and about sections
  cards/           # SVGs for payment method icons
  social-icons-master/ # SVGs for social media icons (color and black)
  aboutpics/       # Owner and shop photos
  ...
```

---

## 🚀 Getting Started

1. **Clone the repo:**

   ```bash
   git clone https://github.com/yourusername/ozwindowtint-landing-page.git
   cd ozwindowtint-landing-page
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Copy `.env.example` to `.env` and fill in your Google Maps API key and business info.

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open in your browser:**
   - Visit [http://localhost:5173](http://localhost:5173)

---

## 🖼️ Customization

- **Images:** Replace placeholder images in `src/assets/` and `src/aboutpics/` with your own.
- **Business Info:** Update `.env` and relevant components for your address, phone, and email.
- **Services:** Edit the service options in the Contact form and Footer as needed.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💬 Contact

Questions? Feedback? Reach out via the contact form on the site or email [info@ozwindowtint.com](mailto:info@ozwindowtint.com).
