## 2024-05-24 - Preview Server Binding
 **Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
 **Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
 **Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.
## 2026-06-12 - Prevent XSS in viewer.html
**Vulnerability:** DOM XSS via unsanitized iframe src and href paths, and unescaped single quotes in HTML attributes.
**Learning:** Always sanitize URLs loaded into iframes or links, blocking javascript: and data: URIs, and properly escape all characters in dynamic attributes.
**Prevention:** Added URL sanitization in loadFile() and updated esc() to escape single quotes.
