# DESIGN SPEC: Bright Curios "Glass Engine" Homepage

**Status:** Updated (Phase 2 - Glass & Interactive)
**Date:** 2026-03-18
**Author:** Accelerator (Agent) & Lutero (Founder)

---

## 1. Executive Summary
Bright Curios is a High-Ticket AI Implementation Agency. The UI must reflect a "Premium SaaS" aesthetic: clean, deep, and sophisticated. Using high-end transparency (Glassmorphism), asymmetric layouts (Bento Grid), and interactive discovery elements (Accordions/Carousels).

## 2. Visual Identity & UI/UX
*   **Theme:** Glass Tech, Minimalist, Authoritative.
*   **Color Palette:**
    *   Primary Background (Navy): `#020617`
    *   Accent Gold (Authority): `#fde047`
    *   Accent Cyan (Technology): `#22d3ee`
    *   Text: White (`#FFFFFF`) / Zinc-400 (`#a1a1aa`)
*   **Glassmorphism:** 
    *   `backdrop-filter: blur(25px)` on all panels.
    *   Subtle borders (`rgba(255,255,255,0.1)`).
*   **Typography:** Inter (San-serif) exclusively. No Mono fonts except for small system tags.
*   **Background Atmosphere:**
    *   Animated Mesh Gradients (Navy/Gold/Cyan).
    *   Noise Texture Overlay (Film Grain).
    *   Abstract Glass Spheres floting in 3D space.

## 3. Interactive Components
*   **Bento Hero:** Asymmetric layout for high-impact promise.
*   **Interactive Accordion:** "The $100k In-house Trap" section with reveal logic.
*   **Horizontal Case Carousel:** Premium navigation for Business Transformation cases.
*   **ROI Calculator:** Interactive sliders with real-time financial feedback.

## 4. Technical Architecture
*   **Framework:** React + Vite.
*   **Styling:** Vanilla CSS + Framer Motion (for smooth glass reveals).
*   **Icons:** Lucide React (Strictly no emojis).

## 5. Success Criteria
*   **Visual Depth:** Must feel like layers of glass, not a flat 2D site.
*   **Performance:** LCP < 1.2s despite heavy blur effects.
