## 2024-05-24 - Preview Server Binding
 **Vulnerability:** Preview server was binding to all interfaces (0.0.0.0), potentially exposing mockups to the local network.
 **Learning:** HTTP servers should be explicitly bound to localhost when meant only for local viewing.
 **Prevention:** Added `--bind 127.0.0.1` flag for `python -m http.server` and `-l tcp://127.0.0.1:8289` for `serve` in the run-opendesign skill.

## 2026-06-18 - Prevent XSS and Tabnabbing in AI-generated UI
**Vulnerability:** The OpenDesign viewer allowed target="_blank" without rel="noopener noreferrer" (tabnabbing) and failed to escape single quotes or block data:/javascript: URIs in LLM-generated mockups (DOM XSS).
**Learning:** AI-generated artifacts displayed in iframes must be treated as untrusted user input, requiring strict URI sanitization and full HTML entity escaping to prevent the AI from executing malicious scripts in the parent context.
**Prevention:** Always validate URL schemes before assigning to src/href, escape all quotes in dynamic DOM insertion, and apply noopener/noreferrer to external links.
