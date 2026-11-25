import { getCollection, type CollectionEntry } from "astro:content";
import githubStars from "../data/github-stars.json";

export type OpenSourceProject = CollectionEntry<"opensource">;

const stars: Record<string, number> = githubStars;

export async function getOpenSourceProjects(): Promise<OpenSourceProject[]> {
  const projects = await getCollection(
    "opensource",
    ({ data }) => data.published,
  );
  return projects.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** "https://github.com/owner/repo" -> "owner/repo" */
export function githubRepo(url: string): string {
  return new URL(url).pathname.replace(/^\/|\/$/g, "");
}

/** Star count refreshed nightly by .github/workflows/github-stars.yml */
export function getStars(project: OpenSourceProject): number | undefined {
  return stars[githubRepo(project.data.code)];
}
