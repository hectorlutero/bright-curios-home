# DESIGN SPEC: Mobile "Spotlight" Transformation Section

**Status:** Approved
**Date:** 2026-03-19
**Author:** Gemini CLI & Lutero

---

## 1. Objective
Redesign the "Business Transformation" section (currently `Carousel.tsx`) specifically for mobile devices. The goal is to move away from the desktop-style Bento layout and adopt an "App-like Spotlight" experience that fits entirely within a single viewport height (`100dvh`) without requiring internal scrolling.

## 2. Component Architecture
The component will detect mobile viewports and switch from the `slider-perspective` (Desktop) to the `spotlight-view` (Mobile).

### Mobile UI Hierarchy (Top to Bottom):
1.  **Section Header:**
    *   Label: "Success Stories" (Cyan, Mono).
    *   Title: "Business Transformation" (Bold, H3).
    *   Subtitle: "We deploy operational leverage that scales your margins through high-velocity AI implementation." (Small, Grey).
2.  **Story Progress Bars:**
    *   Segmented horizontal bars (one per case study).
    *   Active bar highlighted in Gold.
3.  **The Spotlight Card (Glass Panel):**
    *   **Card Header:** Client Category (e.g., "Real Estate") + Representative Icon.
    *   **Card Body:** Focused 2-line context paragraph + Tech Stack Pills (e.g., "Vision AI", "Vector DB").
    *   **Impact Grid:** 2-column layout showing "ROI Impact" (+300%) and "Delivery" (30 Days).
    *   **Card Footer:** "System Status: LIVE" indicator + "View Brief" CTA.
4.  **Scroll Hint:** Subtle animated double-chevron at the extreme bottom to signal the next section.

## 3. Interaction Design
*   **Navigation:** Horizontal swipe gestures (Framer Motion `drag="x"`) to switch between cards.
*   **Transitions:** Cross-fade or subtle slide effect for card content.
*   **Progress Tracking:** The top Story bars update in real-time as the user swipes.
*   **Single-Page Lock:** The section container will use `height: 100dvh` and `display: flex` with `justify-content: space-between` to ensure all elements stay above the "fold".

## 4. Visual Identity
*   **Colors:** Deep Navy base, High-Blur Glass (`blur(30px)`), Gold/Cyan accents.
*   **Spacing:** Tightened margins for smaller screens (iPhone SE support).
*   **Typography:** Multi-scale headlines to ensure readability without overflow.

## 5. Success Criteria
*   Entire section visible on 320px width (iPhone SE) without scrolling.
*   Smooth, tactile swiping that feels like a native iOS/Android app.
*   Zero horizontal overflow.
