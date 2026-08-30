
## 2026-06-14 - Keyboard Navigation for File Trees
**Learning:** Custom interactive elements like `<span>` and `<summary>` in the file tree need explicit `:focus-visible` styles and `aria-label`/`role` attributes so screen reader and keyboard users can navigate them effectively.
**Action:** Always provide explicit focus indicators and ARIA semantics when building custom tree navigation components instead of relying on default browser behavior for generic tags.
