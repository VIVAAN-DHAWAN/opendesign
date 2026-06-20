## 2024-05-24 - Preview Server Binding
 **Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
 **Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
 **Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.
## 2026-06-20 - DOM XSS in Preview Iframes
**Vulnerability:** The `loadFile` function in `viewer.html` assigned unvalidated paths directly to an iframe's `src` and a link's `href`, allowing DOM-based XSS if an attacker controls the path in `manifest.json` (e.g. `javascript:alert(1)`).
**Learning:** Client-side path validation is essential when dynamic paths are sourced from external/JSON configuration files, as backend sanitization might not be present or sufficient.
**Prevention:** Always validate and sanitize URLs before assigning them to `src` or `href` attributes, specifically checking for and blocking dangerous protocols like `javascript:` and `data:` while accounting for leading whitespace.
