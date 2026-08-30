
## 2026-06-18 - Interactive Custom UI Elements Require Roles and Focus
**Learning:** When building custom file explorers using `<span>` with `tabindex` or `<details><summary>`, default screen reader announcements and keyboard focus rings may be missing or inadequate. Explicitly defining `:focus-visible` with `outline-offset` ensures keyboard navigation is visible, while `role="button"` and `aria-label` restore proper screen reader semantics.
**Action:** Always pair custom interactive elements (`tabindex="0"`) with explicit focus styles and ARIA roles.
