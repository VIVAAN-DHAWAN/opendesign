## 2024-05-24 - Preview Server Binding
 **Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
 **Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
 **Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.
## 2026-06-14 - DOM XSS in viewer.html via manifest paths
 **Vulnerability:** The `loadFile` function in `skills/opendesign/viewer.html` assigned `manifest.json` file paths directly to `iframe.src` and `a.href` without protocol validation, allowing DOM XSS via malicious `javascript:` URIs.
 **Learning:** Even when reading from ostensibly 'local' manifest files, client-side viewers must treat URL assignments as untrusted input and validate protocols.
 **Prevention:** Added `new URL(path, window.location.href).protocol` validation to block `javascript:`, `vbscript:`, and `data:` protocols before assignment.
