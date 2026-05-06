# 🌐 Global Voyage — Turn Your Global Plans Into Reality

Global Voyage is a premium, high-fidelity single-page-application (SPA) landing portal built on **React** and custom stylized code. It is designed to guide students toward world-class international education, coordinate personalized comfort-driven travel experiences across India, and offer traditional Nadijodtheshm consultations with crystal-clear direction.

---

## ⚡ Key Interactive Features

*   **💎 Floating Glassmorphism Navbar:** A stateful floating header with real-time blur/backdrop-filters (`backdrop-filter: blur(24px)`), golden-accented indicators, and a responsive overlay navigation drawer for touch devices.
*   **🖱️ Touch-Safe Custom Cursor:** Features a smooth follower dot and circular ring matching luxury layouts. It is equipped with dynamic feature-detection to immediately disable itself on mobile and touchscreens to conserve battery/CPU, seamlessly falling back to native system cursors.
*   **📊 Viewport-Triggered Animated Counter (`StatsSection`):** High-performance statistics tracker that counts up dynamically as soon as it enters the viewport (500+ Students, 30+ Countries, 80+ India Destinations, 1000+ Consultations) using optimized `requestAnimationFrame` hooks.
*   **📜 Desktop Horizontal ScrollyTelling:** A highly editorial, pinned horizontal scrolling gallery powered by **GSAP ScrollTrigger** on desktop. Displays a gorgeous large numeric slider watermark which grows cleanly on horizontal scroll without overlapping readable labels. Converts automatically into neat touch-stacked vertical cards on smaller screens.
*   **🏷️ Infinite Trust Strip:** A fast, hardware-accelerated horizontal running ribbon highlighting core brand promises (*Trusted Guidance • Personalized Support • Global Opportunities*).
*   **📑 Tabbed Image & Video Galleries:** Highly optimized galleries featuring smooth filter categories, active tab transitions, masonry-style grids, and responsive modal lightboxes.
*   **💬 Responsive Contact Forms & Collapsible FAQs:** Structured layouts built with fluid CSS clamps (`clamp()`), collapsible accordion states, and pre-composed WhatsApp click-to-chat links for instant advisory assistance.

---

## 📂 Folder Structure and Core Assets

The codebase is structured logically with component-driven separation of concerns:

```text
globalvoyage/
├── build/                      # Optimized static production build folder
├── public/                     # Public asset assets
│   └── index.html              # Core single-page HTML template
├── src/                        # Main React source folder
│   ├── App.jsx                 # Global SPA routing, page layouts, and progress bars
│   ├── index.js                # App entrypoint & rendering mounting lifecycle
│   ├── index.css               # Design system tokens, variables, resets, and typography
│   │
│   ├── components/             # Reusable interactive modules
│   │   ├── BlogPreview.jsx     # Masonry-styled blog and image gallery previews
│   │   ├── CTASection.jsx      # Bottom calls to action & personalized WhatsApp redirects
│   │   ├── CustomCursor.jsx    # Fluid ring follower (touch-screen disabled)
│   │   ├── Footer.jsx          # Multi-column navigational and social footer
│   │   ├── HeroSection.jsx     # Split-headline splash banner with dual action buttons
│   │   ├── Navbar.jsx          # Glassmorphic header & full-screen touch drawer
│   │   ├── ScrollProgress.jsx  # Top viewport reading progress bar
│   │   ├── ScrollyTelling.jsx  # Horizontal pinned services slides (Mobile fallback stacked)
│   │   ├── StatsSection.jsx    # Viewport-triggered count-up counters
│   │   └── TrustStrip.jsx      # Infinite marquee ticker & unique Nadijodtheshm teaser
│   │
│   └── pages/                  # SPA Page routing destinations
│       ├── AboutStudyIndia.jsx # About Us, Study Abroad Guidance, and Visit India pages
│       ├── Home.jsx            # Landing page landing index
│       └── OtherPages.jsx      # Nadijodtheshm booking, FAQs, Blog list, full Gallery, & Contact
│
├── package.json                # Project dependencies, build targets, and metadata
├── package-lock.json           # Locked dependencies manifest
└── .gitignore                  # Git tracking exclusion configuration
```

---

## 🛠️ Technology Stack

*   **Core framework:** React (v18.2) + React Scripts (v5.0)
*   **Animation Engine:** Framer Motion (v10.16) & GSAP (v3.12)
*   **Design & Styling:** Vanilla CSS (Tailored layout variables & hardware-accelerated transitions)
*   **Icons:** Lucide React (v0.263)
*   **State & Triggers:** React Intersection Observer (v9.5) & React Router DOM (v6.20)

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v16.x or higher) and **npm** installed on your system.

### 2. Installation
Clone the project repository, navigate into the directory, and install dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local development server with hot-reloading:
```bash
npm run start
```
The application will run locally at **`http://localhost:3000`**.

### 4. Build for Production
To compile and bundle optimized static files for deployment:
```bash
npm run build
```
The compiled output is saved in the `/build` directory, ready to be served on production hosts like Vercel, Netlify, or AWS.
