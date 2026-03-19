# Bright Curios "Glass Engine" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the "Phase 2" visual direction: a premium Glassmorphism-based landing page with interactive carousels and accordions.

**Architecture:** Component-based with emphasis on micro-interactions. Using `framer-motion` for smooth glass transitions.

**Tech Stack:** React, Vite, Vanilla CSS, Framer Motion, Lucide-React.

---

### Task 1: Background Atmosphere & Assets

**Files:**
- Create: `src/components/Background/Background.tsx`, `src/components/Background/Background.css`
- Modify: `src/index.css` (update colors to Navy/Gold/Cyan)

- [ ] **Step 1: Install Framer Motion**
Run: `npm install framer-motion`

- [ ] **Step 2: Implement Background**
Create animated mesh gradients and the abstract glass sphere using CSS animations and blur filters.

- [ ] **Step 3: Commit**
```bash
git add .
git commit -m "feat: add animated glass atmosphere and mesh gradients"
```

---

### Task 2: Bento Hero & Glass Header

**Files:**
- Modify: `src/components/Header/`
- Modify: `src/components/Hero/`

- [ ] **Step 1: Refactor Header to Ultra Glass**
Increase blur to 25px, add thin white borders, update logo colors.

- [ ] **Step 2: Refactor Hero to Bento Style**
Change layout to asymmetric, add high-impact "ROI" gold gradient.

- [ ] **Step 3: Commit**
```bash
git add src/components/Header/ src/components/Hero/
git commit -m "feat: refactor header and hero to glass bento style"
```

---

### Task 3: Interactive Glass Accordion (The Trap)

**Files:**
- Create: `src/components/Accordion/Accordion.tsx`, `src/components/Accordion/Accordion.css`
- Modify: `src/App.tsx`

- [ ] **Step 1: Build Accordion Component**
Implement open/close logic with smooth Framer Motion height transitions.

- [ ] **Step 2: Integrate Copy**
Add the "In-house Trap" content into the accordion items.

- [ ] **Step 3: Commit**
```bash
git add .
git commit -m "feat: implement interactive glass accordion for problem section"
```

---

### Task 4: Full-Width Animated Glass Slider (Case Studies)

**Files:**
- Create: `src/components/Carousel/Carousel.tsx`, `src/components/Carousel/Carousel.css`

- [ ] **Step 1: Build Full-Width Slider Layout**
Implement an "infinite border" (edge-to-edge) layout where the slider background and movement span 100% of the viewport width.

- [ ] **Step 2: Draggable Glass Slider**
Implement a touch-enabled, draggable slider using `framer-motion`'s `drag` gestures and `AnimatePresence`.

- [ ] **Step 3: Add Transition Animations**
Implement smooth opacity and scale transitions between cards during navigation.

- [ ] **Step 4: Style with Cyan/Gold Glass**
Ensure cards have high-end blur effects and dual-accent branding.

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "feat: implement edge-to-edge animated glass slider for business transformation cases"
```

---

### Task 5: Founders Portrait Gallery

**Files:**
- Modify: `src/components/Founders/`

- [ ] **Step 1: Refactor Founders cards**
Apply `backdrop-filter`, rounded corners (24px), and the hover zoom effect on portrait photos.

- [ ] **Step 2: Commit**
```bash
git add .
git commit -m "feat: polish founders gallery with glass cards"
```

---

### Task 6: ROI Financial Terminal & Final Polish

**Files:**
- Modify: `src/components/ROICalculator/`
- Modify: `src/components/CTA/`

- [ ] **Step 1: Refactor ROI Calculator**
Make it a high-contrast glass card with gold pill sliders.

- [ ] **Step 2: Final Layout Review**
Ensure all sections are connected and responsive.

- [ ] **Step 3: Commit**
```bash
git add .
git commit -m "feat: finalize glass engine homepage with interactive roi tool"
```
