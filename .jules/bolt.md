## 2024-06-12 - Sync I/O in Chat Transforms
**Learning:** In OpenCode plugins, hooks like `experimental.chat.system.transform` run on every chat turn. Performing synchronous operations like `fs.readFileSync` in these hot paths creates a performance bottleneck by blocking the main thread repeatedly.
**Action:** Always cache file contents read during initialization or the first run of hot path functions like chat transforms, avoiding repetitive blocking disk I/O.
