## 2024-05-24 - Preview Server Binding

**Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
**Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
**Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.

## 2024-06-08 - Cross-Site Scripting (XSS) in OpenDesign Viewer

**Vulnerability:** Unvalidated file paths in the OpenDesign viewer could be set as the `src` attribute of an iframe or `href` of an anchor, allowing malicious `javascript:` URIs to execute arbitrary code (XSS).
**Learning:** Input passed to `src` or `href` attributes must be validated, specifically against potentially executable protocols like `javascript:`, `vbscript:`, and `data:`, even if the input appears to come from an internal configuration (like a manifest).
**Prevention:** Use the `URL` API to parse the path with the current page's origin as the base, and check `url.protocol` against an allowlist or blocklist of dangerous protocols.
