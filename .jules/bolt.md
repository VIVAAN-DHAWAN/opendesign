## 2024-05-24 - Initial Journal
**Learning:** Starting performance journal.
**Action:** Log critical findings.

## 2026-06-11 - Blocking Transform Hook
**Learning:** Synchronous file reading (`fs.readFileSync`) in plugin transform hooks like `experimental.chat.system.transform` will block the main thread on every chat turn.
**Action:** Cache the result of expensive synchronous operations in the module scope so they only run once.
