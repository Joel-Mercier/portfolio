import fs from "fs";
import path from "path";

export type Metadata = {
  title: string;
  date: string;
  roles: string;
  client: string;
  url?: string;
  code?: string;
  lead: string;
  technologies?: string;
  published?: string;
  cover: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  const parsedMDXFiles = mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
  return parsedMDXFiles
    .filter((file) => file.metadata.published !== "false")
    .sort((a, b) => {
      return (
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
      );
    });
}

export function getWorks() {
  return getMDXData(path.join(process.cwd(), "app", "works", "works"));
}
