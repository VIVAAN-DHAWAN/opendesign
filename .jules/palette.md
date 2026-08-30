
## 2026-06-20 - Added custom keyboard accessibility styling
**Learning:** Custom interactive elements (e.g. spans acting as buttons in sidebars) require explicitly defined :focus-visible styles (like outline with negative outline-offset) and role='button'/aria-label to be fully accessible by screen readers and visible to keyboard navigators.
**Action:** Always verify custom elements have standard focus styling and ARIA attributes in custom built UIs.
