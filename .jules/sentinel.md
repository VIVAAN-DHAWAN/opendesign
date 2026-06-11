## 2024-05-24 - Preview Server Binding
 **Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
 **Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
 **Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.## 2026-06-11 - DOM XSS in viewer.html via path injection
**Vulnerability:** `viewer.html` was susceptible to DOM XSS because it loaded file paths directly from `manifest.json` into an iframe's `src` and a link's `href` without checking for `javascript:` or `data:` URIs. Also, the `esc()` HTML-escaping function failed to escape single quotes, allowing potential attribute injection if quotes were mixed.
**Learning:** Even internal tool viewers that read generated JSON files must sanitize URLs, as the JSON generation process (which could ingest untrusted project files or user input) could be manipulated to include malicious URIs.
**Prevention:** Always validate and sanitize URLs (e.g., using `startsWith('javascript:')`) before assigning them to `src` or `href` attributes, and ensure custom HTML escaping functions handle single quotes (`'`).
