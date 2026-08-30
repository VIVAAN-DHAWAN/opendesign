## 2026-06-07 - Focus states and ARIA labels in OpenDesign Viewer
**Learning:** The simple HTML viewer lacked native interactive roles on custom elements (spans used as clickable file items) and clear focus outlines. Since the viewer acts as an ad-hoc IDE sidebar, keyboard navigability is crucial.
**Action:** Always verify custom clickable elements have `role="button"` and `tabindex="0"` and provide explicit `:focus-visible` states matching the design system's accent color.
