## 2026-06-10 - Added keyboard and screen reader accessibility to custom UI
**Learning:** Custom span-based interactive elements require manual `role="button"`, focus-visible styles, and `aria-current` states to be accessible. Always try to use native elements (like `<button>`) to avoid this extra work.
**Action:** Applied these attributes to `.file-item` elements and ensured focus outlines are clear.
