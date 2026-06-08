## 2024-05-24 - Preview Server Binding

**Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
**Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
**Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.

## 2026-06-08 - XSS in iframe from unvalidated manifest

**Vulnerability:** Unsafe URIs in the generated mockups manifest could be loaded as iframe sources, potentially leading to XSS.
**Learning:** Even locally-generated manifest data containing file paths can be hijacked or mishandled. Data passed to iframe 'src' attributes or hyperlink 'href' tags must be validated against expected schemes.
**Prevention:** Validated all paths parsed from the manifest against 'javascript:', 'data:', and 'vbscript:' URIs, and ensured complete HTML entity escaping including single quotes.
