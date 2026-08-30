## 2024-05-24 - Accessibility focus management in viewer.html
**Learning:** Custom interactive elements like spans serving as list items need explicit `role="button"` and programmatic toggling of `aria-current="true"` in JS to be properly announced by screen readers, in addition to explicit `:focus-visible` styles for keyboard navigation visibility.
**Action:** Always verify keyboard focus visibility and screen reader semantics when building custom tree/list interactive components.
