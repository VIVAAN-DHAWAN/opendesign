
## 2026-06-18 - OpenCode Plugin Hot Paths
**Learning:** OpenCode plugin hooks like `experimental.chat.system.transform` execute on every chat turn. Synchronous operations (`fs.readFileSync`) here block the main thread repeatedly.
**Action:** Always memoize/cache file reads and parsing inside plugin lifecycle hooks.
