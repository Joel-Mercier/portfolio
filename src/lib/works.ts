import { getCollection, type CollectionEntry } from "astro:content";

export type Work = CollectionEntry<"works">;

export async function getWorks(): Promise<Work[]> {
  const works = await getCollection("works", ({ data }) => data.published);
  return works.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
