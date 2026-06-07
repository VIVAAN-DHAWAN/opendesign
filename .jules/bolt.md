## 2024-06-07 - Avoid regex matching on large text content
**Learning:** In `.opencode/plugins/opendesign.js`, the frontmatter extraction function `extractAndStripFrontmatter` used a regex `^---\n([\s\S]*?)\n---\n([\s\S]*)$` which can cause significant performance overhead (backtracking/allocation) when matching large strings (e.g. large markdown files). String operations are much faster.
**Action:** Prefer string operations (`startsWith`, `indexOf`, `slice`) instead of regex when doing simple prefix/suffix or delimited substring extraction on potentially very large text files.
