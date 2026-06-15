## 2026-06-15 - Cached Plugin Bootstrap Content
**Learning:** Synchronous operations like `fs.readFileSync` in hot paths such as OpenCode plugin hooks (`experimental.chat.system.transform`) block the main thread and degrade performance on every chat turn.
**Action:** Use a module-level cache variable to store and reuse statically loaded file contents in plugin hooks.
