// Fetches the GitHub star count of every open source project and writes them
// to src/data/github-stars.json. Run nightly by .github/workflows/github-stars.yml.
import { readdir, readFile, writeFile } from "node:fs/promises";

const CONTENT_DIR = new URL("../src/content/opensource/", import.meta.url);
const OUTPUT = new URL("../src/data/github-stars.json", import.meta.url);

const files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith(".md"));
const repos = new Set();
for (const file of files) {
  const source = await readFile(new URL(file, CONTENT_DIR), "utf8");
  const match = source.match(
    /^code:\s*["']?https:\/\/github\.com\/([^/\s"']+\/[^/\s"']+?)\/?["']?\s*$/m,
  );
  if (match) repos.add(match[1]);
  else console.warn(`No GitHub "code" URL found in ${file}`);
}

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "portfolio-github-stars",
  ...(process.env.GITHUB_TOKEN && {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  }),
};

const stars = {};
for (const repo of [...repos].sort()) {
  const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status} for ${repo}: ${await res.text()}`);
  }
  const { stargazers_count } = await res.json();
  stars[repo] = stargazers_count;
  console.log(`${repo}: ${stargazers_count}`);
}

await writeFile(OUTPUT, `${JSON.stringify(stars, null, 2)}\n`);
