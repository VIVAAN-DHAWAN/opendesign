
## 2026-06-13 - Focus Visible on Interactive Elements
**Learning:** Custom UI elements like spans with `tabindex="0"` and `<summary>` tags lose default browser focus rings when styled. Users relying on keyboard navigation can't see which item is focused.
**Action:** Always add explicit `:focus-visible` styles and `aria-label`s for short-text links when creating custom interactive elements.
