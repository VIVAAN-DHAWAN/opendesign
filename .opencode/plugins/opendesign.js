/**
 * OpenDesign plugin for OpenCode.ai
 *
 * Injects the opendesign bootstrap skill via chat transform,
 * and registers the skills directory via config hook (no symlinks needed).
 */

import path from "path";
import fs from "fs";
import os from "os";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ⚡ Bolt Optimization: Cache bootstrap content to prevent synchronous file system reads on every chat turn in the hot path.
let cachedBootstrapContent = null;
let bootstrapContentCached = false; // Flag to handle null result caching

// Minimal frontmatter extractor (avoids external deps).
const extractAndStripFrontmatter = (content) => {
  // ⚡ Bolt optimization: Avoid regex backtracking on large markdown files
  // Using string manipulation instead of regex is significantly faster for long inputs
  if (!content.startsWith('---\n')) return { frontmatter: {}, content };

  const endIdx = content.indexOf('\n---\n', 3);
  if (endIdx === -1) return { frontmatter: {}, content };

  const frontmatterStr = content.slice(4, endIdx);
  const body = content.slice(endIdx + 5);
  const frontmatter = {};

  for (const line of frontmatterStr.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim();
      const value = line
        .slice(colonIdx + 1)
        .trim()
        .replace(/^["']|["']$/g, "");
      frontmatter[key] = value;
    }
  }

  return { frontmatter, content: body };
};

const normalizePath = (p, homeDir) => {
  if (!p || typeof p !== "string") return null;
  let normalized = p.trim();
  if (!normalized) return null;
  if (normalized.startsWith("~/")) {
    normalized = path.join(homeDir, normalized.slice(2));
  } else if (normalized === "~") {
    normalized = homeDir;
  }
  return path.resolve(normalized);
};

export const OpenDesignPlugin = async ({ client, directory }) => {
  const homeDir = os.homedir();
  const opendesignSkillsDir = path.resolve(__dirname, "../../skills");
  const envConfigDir = normalizePath(process.env.OPENCODE_CONFIG_DIR, homeDir);
  const configDir = envConfigDir || path.join(homeDir, ".config/opencode");

  let cachedBootstrapContent = null;

  let cachedBootstrapContent = undefined;

  let cachedBootstrapContent = undefined;

  // ⚡ Bolt Optimization: Cache bootstrap content to prevent synchronous fs.readFileSync on every chat turn.
  let cachedBootstrapContent = null;

  // ⚡ Bolt Optimization: Cache bootstrap content to prevent blocking the main thread with fs.readFileSync on every chat turn
  let cachedBootstrapContent = undefined;

  // ⚡ Bolt Optimization: Cache bootstrap content to prevent synchronous file reading on every chat turn
  let cachedBootstrapContent = undefined;

  const getBootstrapContent = () => {
    if (cachedBootstrapContent !== undefined) return cachedBootstrapContent;

    const skillPath = path.join(opendesignSkillsDir, 'opendesign', 'SKILL.md');
    if (!fs.existsSync(skillPath)) {
      cachedBootstrapContent = null;
      return null;
    }

    const skillPath = path.join(opendesignSkillsDir, 'opendesign', 'SKILL.md');
    if (!fs.existsSync(skillPath)) {
      cachedBootstrapContent = null;
      return null;
    }

    const skillPath = path.join(opendesignSkillsDir, 'opendesign', 'SKILL.md');
    if (!fs.existsSync(skillPath)) {
      cachedBootstrapContent = null;
      return null;
    }

    const skillPath = path.join(opendesignSkillsDir, 'opendesign', 'SKILL.md');
    if (!fs.existsSync(skillPath)) {
      cachedBootstrapContent = null;
      return null;
    }

    // ⚡ Bolt Optimization: Cache bootstrap content to prevent synchronous file reading (fs.readFileSync) and parsing on every chat turn, avoiding main thread blocking.
    const fullContent = fs.readFileSync(skillPath, 'utf8');
    const { content } = extractAndStripFrontmatter(fullContent);

    const skillPath = path.join(opendesignSkillsDir, "opendesign", "SKILL.md");
    try {
      const fullContent = await fs.promises.readFile(skillPath, "utf8");
      const { content } = extractAndStripFrontmatter(fullContent);

      const toolMapping = `**Tool Mapping for OpenCode:**
When OpenDesign skills reference tools you don't have, substitute OpenCode equivalents:
- \`TodoWrite\` → \`todowrite\`
- \`Task\` tool with subagents → OpenCode's subagent system (@mention)
- \`Skill\` tool → OpenCode's native \`skill\` tool
- \`Read\`, \`Write\`, \`Edit\`, \`Bash\` → your native tools

Use OpenCode's native \`skill\` tool to list and load the other OpenDesign skills (wireframe, make-a-deck, interactive-prototype, etc.) on demand.`;

    cachedBootstrapContent = `<EXTREMELY_IMPORTANT>
You have OpenDesign loaded.

**The opendesign entry-point skill is included below. It is ALREADY LOADED — you are currently following it. Do NOT use the skill tool to load "opendesign" again.**

${content}

${toolMapping}
</EXTREMELY_IMPORTANT>`;

    return cachedBootstrapContent;
  };

  return {
    // Register the skills directory so OpenCode discovers every SKILL.md
    // without the user editing opencode.json or symlinking.
    config: async (config) => {
      config.skills = config.skills || {};
      config.skills.paths = config.skills.paths || [];
      if (!config.skills.paths.includes(opendesignSkillsDir)) {
        config.skills.paths.push(opendesignSkillsDir);
      }
    },

    // Use system prompt transform for compatibility with current OpenCode builds.
    "experimental.chat.system.transform": async (_input, output) => {
      const bootstrap = await getBootstrapContent();
      if (bootstrap) {
        (output.system ||= []).push(bootstrap);
      }
    },
  };
};
