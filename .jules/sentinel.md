## 2024-05-24 - Preview Server Binding
 **Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
 **Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
 **Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.
## 2026-06-19 - DOM-based XSS in Viewer
 **Vulnerability:** DOM-based XSS was possible by providing malicious URLs (e.g. javascript: or data: URIs) in the manifest, which were directly assigned to iframe src and anchor href.
 **Learning:** Untrusted URLs must be sanitized before being set as href or src to prevent XSS execution.
 **Prevention:** Added URL sanitization in loadFile to block 'javascript:' and 'data:' URIs (accounting for leading whitespace).
