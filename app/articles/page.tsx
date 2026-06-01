import { getAllArticles } from "../../lib/articles";
import ArticlesGrid from "./ArticlesGrid";

export const metadata = {
  title: "All Articles | The Little Raccoon",
  description: "Browse all Minecraft guides, tutorials, and tips from The Little Raccoon.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  return <ArticlesGrid articles={articles} />;
}
