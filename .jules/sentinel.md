## 2024-05-24 - Preview Server Binding
 **Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
 **Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
 **Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.
## 2025-02-19 - Fix XSS vulnerability in viewer.html
**Vulnerability:** The `viewer.html` script in `skills/opendesign` takes a `path` parameter from a JSON manifest and injects it directly into an iframe's `src` attribute and an anchor tag's `href` attribute without any form of sanitization. An attacker supplying a malicious `manifest.json` could execute arbitrary JavaScript via a `javascript:alert(1)` URI (Cross-Site Scripting).
**Learning:** HTML elements rendering paths from an external or unsanitized source must explicitly parse and check the URL protocols before using them in DOM elements.
**Prevention:** Implement a standard `sanitizeUrl` function to parse any URL (using `new URL()`) and reject risky protocols like `javascript:`, `vbscript:`, and `data:` before assignment to `href` or `src`.
