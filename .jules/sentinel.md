## 2024-05-24 - Preview Server Binding
 **Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
 **Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
 **Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.

## 2024-05-18 - Prevent XSS in HTML viewer components
**Vulnerability:** The OpenDesign HTML viewer dynamically sets `iframe.src` and `a.href` attributes based on paths loaded from `manifest.json` without sanitizing for unsafe URI schemes like `javascript:`.
**Learning:** Even when reading from "trusted" data sources like a manifest file, all dynamic link and frame sources must be treated as untrusted to prevent Cross-Site Scripting (XSS) if the source data is ever compromised or user-generated.
**Prevention:** Always validate and sanitize URLs before applying them to `src` or `href` attributes, specifically blocking unsafe protocols (e.g. `javascript:`, `vbscript:`, `data:`).
