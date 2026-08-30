## 2024-05-24 - Preview Server Binding
 **Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
 **Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
 **Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.
## 2024-06-15 - Prevent XSS in Preview Viewer
**Vulnerability:** The OpenDesign viewer (`skills/opendesign/viewer.html`) lacked validation when loading paths into the preview iframe and anchor tags, allowing malicious payloads (like `javascript:alert(1)`) from a crafted `manifest.json` to execute.
**Learning:** Always validate and sanitize URLs parsed from external or user-controlled sources before assigning them to sensitive DOM sinks like `src` and `href`.
**Prevention:** Added a regular expression check (`/^\s*javascript:/i.test(path)`) in the `loadFile` function to block any URLs starting with the `javascript:` protocol.
