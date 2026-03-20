# Mobile ROI Calculator Redesign ("The Pragmatic Audit") Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the existing single-screen ROI Calculator into a focused, multi-step "Pragmatic Audit" flow for mobile and desktop.

**Architecture:** Component-based state machine using `currentStep` (0-3). Each step is a focused view inside an `AnimatePresence` container for smooth transitions. Logic remains centralized in `ROICalculator.tsx`.

**Tech Stack:** React, Framer Motion, Lucide-React, Vanilla CSS.

---

### Task 1: State & Base Structure Refactor

**Files:**
- Modify: `src/components/ROICalculator/ROICalculator.tsx`
- Modify: `src/components/ROICalculator/ROICalculator.css`

- [ ] **Step 1: Update ROICalculator.tsx state**
Add `currentStep` state and define step data (questions, context).

```typescript
const [currentStep, setCurrentStep] = useState(0);
// Add step navigation handlers
const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));
const resetAudit = () => setCurrentStep(0);
```

- [ ] **Step 2: Refactor JSX to use Step-based rendering**
Wrap the content in `AnimatePresence` and render different UI based on `currentStep`.

- [ ] **Step 3: Update CSS for "Fit-to-Viewport"**
Adjust `.roi-card` and `.roi-section` to ensure the content remains compact.

- [ ] **Step 4: Commit**
```bash
git add src/components/ROICalculator/
git commit -m "refactor: add step-based state to ROI Calculator"
```

---

### Task 2: Progress Bar & Step Header

**Files:**
- Modify: `src/components/ROICalculator/ROICalculator.tsx`
- Modify: `src/components/ROICalculator/ROICalculator.css`

- [ ] **Step 1: Implement Progress Bar**
Add a thin visual progress indicator at the top of the glass card.

```tsx
<div className="roi-progress-bar">
  <motion.div 
    className="progress-fill"
    initial={{ width: 0 }}
    animate={{ width: `${(currentStep / 3) * 100}%` }}
  />
</div>
```

- [ ] **Step 2: Style Progress Bar**
Add CSS for `.roi-progress-bar` and `.progress-fill` (Gold/Cyan).

- [ ] **Step 3: Commit**
```bash
git add src/components/ROICalculator/
git commit -m "feat: add progress bar to ROI Calculator"
```

---

### Task 3: Interactive Audit Steps (0-2)

**Files:**
- Modify: `src/components/ROICalculator/ROICalculator.tsx`
- Modify: `src/components/ROICalculator/ROICalculator.css`

- [ ] **Step 1: Implement Step 0 (Scale)**
"How many people are on your team?" + Employee slider.

- [ ] **Step 2: Implement Step 1 (Resource)**
"What is the average hourly cost?" + Hourly rate slider.

- [ ] **Step 3: Implement Step 2 (Waste)**
"How many hours are lost to manual work?" + Hours slider.

- [ ] **Step 4: Style Step-specific content**
Ensure headlines are large (`3xl`) and context text is subtle.

- [ ] **Step 5: Commit**
```bash
git add src/components/ROICalculator/
git commit -m "feat: implement individual audit steps with provoking copy"
```

---

### Task 4: Final Reveal (Step 3) & Result Animation

**Files:**
- Modify: `src/components/ROICalculator/ROICalculator.tsx`
- Modify: `src/components/ROICalculator/ROICalculator.css`

- [ ] **Step 1: Implement Reveal Screen**
Large "Annual Recovery Potential" metric with gold gradient.

- [ ] **Step 2: Add CTA and Reset Action**
"Book Strategy Call" (Link) and "Adjust Parameters" (Button).

- [ ] **Step 3: Polish Result Animation**
Add a subtle pulse effect to the ROI number when it appears.

- [ ] **Step 4: Commit**
```bash
git add src/components/ROICalculator/
git commit -m "feat: implement high-impact ROI reveal screen"
```

---

### Task 5: Final Polish & Responsive Review

**Files:**
- Modify: `src/components/ROICalculator/ROICalculator.css`

- [ ] **Step 1: Ensure Mobile Fit**
Test on 320px width to ensure no scrolling. Reduce paddings if necessary.

- [ ] **Step 2: Responsive Desktop View**
Ensure the multi-step flow looks premium on larger screens (centered card, larger typography).

- [ ] **Step 3: Commit**
```bash
git add src/components/ROICalculator/
git commit -m "style: final mobile polish for ROI Calculator"
```
