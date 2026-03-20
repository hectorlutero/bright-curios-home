# Mobile "Spotlight" Transformation Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the "Business Transformation" section to use a high-impact, single-viewport "Spotlight" experience on mobile, while preserving the Bento layout on desktop.

**Architecture:** Conditional rendering within `Carousel.tsx` based on `windowWidth`. The mobile view (`SpotlightView`) will be a 100dvh-locked container using Flexbox for vertical alignment and Framer Motion for swipe interactions.

**Tech Stack:** React, Framer Motion, Lucide-React, CSS (100dvh, Glassmorphism).

---

### Task 1: Conditional View Architecture

**Files:**
- Modify: `src/components/Carousel/Carousel.tsx`

- [ ] **Step 1: Define `isMobile` logic**
Use the existing `windowWidth` state to determine `isMobile = windowWidth <= 768`.

- [ ] **Step 2: Create View Components**
Refactor the current return statement into:
```tsx
return (
  <section className="carousel-section" id="cases">
    {isMobile ? <MobileSpotlight /> : <DesktopBento />}
  </section>
);
```
*(Move existing JSX into internal `DesktopBento` function or component).*

---

### Task 3: Mobile Spotlight UI Structure

**Files:**
- Modify: `src/components/Carousel/Carousel.tsx`
- Modify: `src/components/Carousel/Carousel.css`

- [ ] **Step 1: Implement `MobileSpotlight` Container**
Add a container with `height: 100dvh` and `display: flex; flex-direction: column`.

- [ ] **Step 2: Add Section Header & Subtitle**
Include the "Success Stories" label, main title, and the new descriptive paragraph.

- [ ] **Step 3: Implement Story Progress Bars**
Render segmented bars below the subtitle that update based on `currentIndex`.

- [ ] **Step 4: Implement the Rich Spotlight Card**
Create the glass card containing:
  * Industry Icon + Category.
  * Title & Context Paragraph.
  * Tech Stack Pills (Vision AI, etc.).
  * 2-Column Impact Grid (ROI & Delivery).
  * System Status (Live) + Brief Button.

- [ ] **Step 5: Add Scroll Hint**
Add the animated double-chevron at the bottom of the viewport.

---

### Task 4: Mobile Styling & Viewport Locking

**Files:**
- Modify: `src/components/Carousel/Carousel.css`

- [ ] **Step 1: 100dvh and Flex Alignment**
Ensure the mobile container fills the screen perfectly and distributes elements using `space-between` or optimized margins.

- [ ] **Step 2: Glass Card & Grid Styling**
Style the new rich components (Tech Pills, Impact Grid) with `blur(30px)` and Gold/Cyan accents.

- [ ] **Step 3: Responsive Typography**
Ensure all text fits on small screens (iPhone SE) without overflow or internal scrolling.

---

### Task 5: Swipe Interactions & Animation

**Files:**
- Modify: `src/components/Carousel/Carousel.tsx`

- [ ] **Step 1: Add Framer Motion Drag**
Apply `drag="x"` to the main spotlight card or a transparent overlay.

- [ ] **Step 2: Navigation Logic**
Implement `onDragEnd` to update `currentIndex` when the user swipes left/right.

- [ ] **Step 3: Content Transitions**
Use `AnimatePresence` to cross-fade or slide the rich card content when the index changes.

---

### Task 6: Final Verification

- [ ] **Step 1: Test Viewport Lock**
Verify 100% viewport fit on 320px, 375px, and 414px widths.
- [ ] **Step 2: Commit**
```bash
git add .
git commit -m "feat: implement mobile-only spotlight transformation view"
```
