import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type Article = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  tagColor: string;
  description: string;
  image: string;
  content: string;
};

const tagColors: Record<string, string> = {
  Build: "#8A7A50",
  Guide: "#5A8A70",
  Survival: "#9A5858",
  Seeds: "#7A9A50",
  Redstone: "#8A5A5A",
  Tips: "#6A7A8A",
  Farms: "#7A8A5A",
};

export function getAllArticles(): Omit<Article, "content">[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        tag: data.tag || "Guide",
        tagColor: tagColors[data.tag] || "#5A8A70",
        description: data.description || "",
        image: data.image || "",
      };
    });
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    tag: data.tag || "Guide",
    tagColor: tagColors[data.tag] || "#5A8A70",
    description: data.description || "",
    image: data.image || "",
    content,
  };
}
