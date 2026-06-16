## 2024-05-24 - Preview Server Binding
 **Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
 **Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
 **Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.
## 2026-06-16 - Prevent XSS and Tabnabbing in OpenDesign Viewer
**Vulnerability:** The viewer.html lacked target=_blank protections (reverse tabnabbing) and was vulnerable to DOM-based XSS through unsanitized javascript: URIs in manifest.json.
**Learning:** Local viewer tools often implicitly trust file paths. When parsing user-generated or auto-generated manifests, paths injected into iframe.src or a.href must be strictly sanitized.
**Prevention:** Always use rel="noopener noreferrer" with target="_blank", and validate URLs to reject javascript:, vbscript:, and data: schemes in client-side routing/loading.
