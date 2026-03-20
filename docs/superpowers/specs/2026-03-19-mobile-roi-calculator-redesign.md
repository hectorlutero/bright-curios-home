# DESIGN SPEC: Mobile ROI Calculator Redesign ("The Pragmatic Audit")

**Status:** Approved
**Date:** 2026-03-19
**Author:** Gemini CLI & Lutero

---

## 1. Objective
Redesign the existing ROI Calculator to provide a more immersive, focused, and professional experience on mobile devices. The current single-page slider layout is overwhelming on small screens; the new design will use a **multi-step progressive reveal** to guide the user through a "Pragmatic Audit" of their operational inefficiencies.

## 2. User Experience (UX) Flow
The calculator will be transformed into a multi-state component (`steps` 0-3) that fits entirely within the mobile viewport without requiring scrolling to see results.

### Step 1: Scale of Operation
*   **Question:** "How many people are on your team?"
*   **Context:** "Most teams lose 40% of their potential to tasks that AI could handle in seconds."
*   **Input:** Number of Employees (Range: 1 - 100).
*   **Action:** "Continue Audit →"

### Step 2: Resource Investment
*   **Question:** "What is the average hourly cost?"
*   **Context:** "Include benefits and overhead to find the true price of manual bottlenecks."
*   **Input:** Average Hourly Rate ($) (Range: 20 - 200).
*   **Action:** "Continue Audit →"

### Step 3: Operational Waste
*   **Question:** "How many hours are lost to manual work?"
*   **Context:** "Enter the average weekly hours per employee spent on repetitive, data-heavy tasks."
*   **Input:** Manual Hours per Week (Range: 1 - 40).
*   **Action:** "See Results →"

### Step 4: Final Reveal (ROI Result)
*   **Heading:** "Your Annual Recovery Potential"
*   **Primary Metric:** Calculated Annual ROI (Gold Gradient).
*   **Efficiency Baseline:** "Based on 80% Automation Efficiency."
*   **Secondary Context:** "This represents the capital currently lost to operational inefficiency that can be recovered through custom AI workflows."
*   **Primary CTA:** "Book Strategy Call"
*   **Secondary Action:** "Adjust Parameters" (Returns to Step 1).

## 3. Visual Identity
*   **Immersive Glass:** Use high-end `backdrop-filter: blur(25px)` panels.
*   **Typography:** Large, authoritative headlines (`Inter`, Extra Bold).
*   **Progress Indicators:** A thin progress bar at the top of the card showing the audit's completion.
*   **Micro-interactions:** Smooth `framer-motion` transitions between steps (sliding or fading).
*   **Color Palette:** Navy background, Gold/Cyan accents, White text.

## 4. Technical Architecture
*   **Component:** `src/components/ROICalculator/ROICalculator.tsx`
*   **State Management:** `useState` for `currentStep` and input values.
*   **Animation:** `AnimatePresence` and `motion.div` for step transitions.
*   **Responsiveness:**
    *   **Mobile:** Multi-step flow.
    *   **Desktop:** Option to keep the current grid layout or adopt the multi-step flow for consistency. *Recommendation: Use multi-step for both to maximize impact.*

## 5. Success Criteria
*   **Viewport Fit:** Entire audit state (Header + Input + CTA) visible on an iPhone SE screen without scrolling.
*   **Calculations:** Accurate real-time math based on user inputs.
*   **Theme Support:** Seamless switching between Light and Dark modes.
