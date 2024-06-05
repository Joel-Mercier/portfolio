import { getWorks } from "@/utils/mdx";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getWorks("fr");
  const projectsSitemap: MetadataRoute.Sitemap = projects.map((project) => {
    return {
      url: "https://joelmercier.io/works/" + project.slug,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    };
  });
  return [
    {
      url: "https://joelmercier.io",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://joelmercier.io/works",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectsSitemap,
  ];
}
