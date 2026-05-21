import { getAllArticles } from "../../../lib/articles";
import { NextResponse } from "next/server";

export async function GET() {
  const articles = getAllArticles();
  const data = articles.map((a) => ({
    slug: a.slug,
    title: a.title,
    tag: a.tag,
    description: a.description,
    image: a.image,
  }));
  return NextResponse.json(data);
}
