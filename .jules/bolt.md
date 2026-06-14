## 2026-06-14 - Cache Bootstrap Content
**Learning:** In OpenCode plugins, hooks like `experimental.chat.system.transform` run on every chat turn. Synchronous operations like `fs.readFileSync` in these hot paths block the main thread and degrade performance.
**Action:** Always cache file reads or use asynchronous operations for variables evaluated inside high-frequency hooks.
