## 2024-05-24 - Preview Server Binding
 **Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
 **Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
 **Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.
## 2025-06-09 - XSS in Viewer via Malicious Manifest Path
**Vulnerability:** The OpenDesign viewer (`viewer.html`) takes file paths from `manifest.json` and assigns them directly to `iframe.src` and `a.href`. A malicious project could supply a `manifest.json` with a path like `javascript:alert(1)` to execute cross-site scripting (XSS) when a developer clicks on the file in the sidebar or the 'Open' link.
**Learning:** Even client-side UI tools reading local configuration files (like `manifest.json`) must sanitize URLs before assigning them to executable contexts (`src`, `href`) since the configuration could originate from an untrusted source (e.g., cloned repository).
**Prevention:** Always validate and sanitize URLs from external sources, explicitly blocking unsafe schemes like `javascript:` and `vbscript:`.
