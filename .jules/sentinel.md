## 2024-05-24 - Preview Server Binding
 **Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
 **Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
 **Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.
## 2024-05-24 - Fix DOM XSS via javascript URIs
**Vulnerability:** The viewer dynamically assigned user-controlled input (paths) directly to `iframe.src` and `a.href` without sanitizing `javascript:` URIs.
**Learning:** Any dynamic assignment to URI attributes (`href`, `src`) must be strictly validated to prevent script execution.
**Prevention:** Always validate and sanitize URLs before assigning them to DOM elements, ensuring they use safe protocols like `http:`, `https:`, or relative paths. Escape single quotes in `esc()` functions to prevent attribute injection.
