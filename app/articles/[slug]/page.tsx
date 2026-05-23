import { getArticleBySlug, getAllArticles } from "../../../lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const ogImage = `/images/articles/${slug}.png`;
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://thelittleraccoon.com/articles/${slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `https://thelittleraccoon.com/articles/${slug}`,
      publishedTime: article.date,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [ogImage],
    },
  };
}

const tagColors: Record<string, string> = {
  Build: "#8A7A50", Guide: "#5A8A70", Survival: "#9A5858",
  Seeds: "#7A9A50", Redstone: "#8A5A5A", Tips: "#6A7A8A", Farms: "#7A8A5A",
};

function ArticleJsonLd({ article, slug }: { article: NonNullable<ReturnType<typeof getArticleBySlug>>; slug: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `https://thelittleraccoon.com/images/articles/${slug}.png`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "The Little Raccoon",
      url: "https://thelittleraccoon.com",
    },
    publisher: {
      "@type": "Organization",
      name: "The Little Raccoon",
      logo: {
        "@type": "ImageObject",
        url: "https://thelittleraccoon.com/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://thelittleraccoon.com/articles/${slug}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
  const nextArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;

  // Related articles: same tag, excluding current
  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug && a.tag === article.tag)
    .slice(0, 4);

  const tagColor = tagColors[article.tag] || "#5A8A70";
  const readTime = Math.ceil(article.content.split(" ").length / 200);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0B1410" }}>
      <ArticleJsonLd article={article} slug={slug} />

      {/* Breadcrumb */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 40px 0", display: "flex", alignItems: "center", gap: 8 }}>
        <Link href="/" style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#5A6A55", textDecoration: "none" }}>Home</Link>
        <span style={{ color: "#2A3A28", fontSize: 11 }}>›</span>
        <Link href="/articles" style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#5A6A55", textDecoration: "none" }}>All Articles</Link>
        <span style={{ color: "#2A3A28", fontSize: 11 }}>›</span>
        <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#C4B47E", opacity: 0.7 }}>{article.tag}</span>
      </div>

      {/* Hero / Cover */}
      <div style={{ position: "relative", width: "100%", minHeight: 420, overflow: "hidden", marginTop: 16 }}>
        {article.image
          ? <Image src={article.image} alt={article.title} fill style={{ objectFit: "cover" }} priority />
          : <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0E2010, #162A10, #0A1A10)" }} />
        }
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,20,16,1) 0%, rgba(11,20,16,0.7) 40%, rgba(11,20,16,0.2) 100%)" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: 420, paddingBottom: 48 }}>
          <span style={{ display: "inline-block", padding: "4px 12px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: tagColor, backgroundColor: "#0A120880", border: `1px solid ${tagColor}60`, borderRadius: 4, marginBottom: 16, width: "fit-content" }}>{article.tag}</span>
          <h1 style={{ margin: "0 0 16px", fontFamily: "var(--font-oswald)", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 700, color: "#EDE6D6", lineHeight: 1.1, maxWidth: 800, textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>{article.title}</h1>
          {article.description && (
            <p style={{ margin: "0 0 24px", fontSize: "1.05rem", color: "#BDB5A0", maxWidth: 640, lineHeight: 1.6 }}>{article.description}</p>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", overflow: "hidden", border: "2px solid #C4B47E40", position: "relative", flexShrink: 0 }}>
              <Image src="/favicon.png" alt="The Little Raccoon" fill style={{ objectFit: "cover" }} />
            </div>
            <span style={{ fontSize: 12, color: "#BDB5A0" }}>By <strong style={{ color: "#C4B47E" }}>Little Raccoon</strong></span>
            <span style={{ color: "#3A4A35", fontSize: 12 }}>|</span>
            <span style={{ fontSize: 12, color: "#8A9A85" }}>
              {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span style={{ color: "#3A4A35", fontSize: 12 }}>|</span>
            <span style={{ fontSize: 12, color: "#8A9A85" }}>{readTime} min read</span>
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 40px 80px", display: "grid", gridTemplateColumns: "1fr 300px", gap: 48, alignItems: "start" }}>

        {/* Main content */}
        <div>
          <div className="article-body">
            <MDXRemote source={article.content} />
          </div>

          {/* Prev / Next */}
          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {prevArticle ? (
              <Link href={`/articles/${prevArticle.slug}`} style={{ padding: "16px 20px", border: "1px solid #1A2E1A", borderRadius: 8, textDecoration: "none", backgroundColor: "#0C1810" }}>
                <p style={{ margin: "0 0 4px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: "#5A6A55" }}>← Previous</p>
                <p style={{ margin: 0, fontSize: 13, color: "#EDE6D6", fontFamily: "var(--font-oswald)" }}>{prevArticle.title}</p>
              </Link>
            ) : <div />}
            {nextArticle ? (
              <Link href={`/articles/${nextArticle.slug}`} style={{ padding: "16px 20px", border: "1px solid #1A2E1A", borderRadius: 8, textDecoration: "none", backgroundColor: "#0C1810", textAlign: "right" }}>
                <p style={{ margin: "0 0 4px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: "#5A6A55" }}>Next →</p>
                <p style={{ margin: 0, fontSize: 13, color: "#EDE6D6", fontFamily: "var(--font-oswald)" }}>{nextArticle.title}</p>
              </Link>
            ) : <div />}
          </div>

          {/* Back link */}
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <Link href="/articles" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#C4B47E", border: "1px solid #1A2E1A", borderRadius: 8, textDecoration: "none" }}>
              ← Back to All Articles
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 24, position: "sticky", top: 24 }}>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div style={{ backgroundColor: "#0C1810", border: "1px solid #1A2E1A", borderRadius: 10, padding: 20 }}>
              <h3 style={{ margin: "0 0 16px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#C4B47E" }}>Related Articles</h3>
              {relatedArticles.map((a) => (
                <Link key={a.slug} href={`/articles/${a.slug}`} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14, textDecoration: "none" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 6, overflow: "hidden", position: "relative", flexShrink: 0, backgroundColor: "#0E1A10" }}>
                    {a.image
                      ? <Image src={a.image} alt={a.title} fill style={{ objectFit: "cover" }} />
                      : <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#0E1A10,#162410)" }} />
                    }
                  </div>
                  <div>
                    <p style={{ margin: "0 0 4px", fontSize: 12, color: "#BDB5A0", lineHeight: 1.4 }}>{a.title}</p>
                    <p style={{ margin: 0, fontSize: 10, color: "#3A4A35" }}>
                      {new Date(a.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </p>
                  </div>
                </Link>
              ))}
              <Link href={`/category/${article.tag.toLowerCase()}`} style={{ display: "block", marginTop: 4, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#5A6A55", textDecoration: "none" }}>
                More {article.tag} articles →
              </Link>
            </div>
          )}

          {/* Newsletter */}
          <div style={{ backgroundColor: "#0C1810", border: "1px solid #1A2E1A", borderRadius: 10, padding: 20, textAlign: "center" }}>
            <h3 style={{ margin: "0 0 8px", fontFamily: "var(--font-oswald)", fontSize: "1.1rem", color: "#EDE6D6" }}>Stay Updated</h3>
            <p style={{ margin: "0 0 16px", fontSize: 12, color: "#8A9A85", lineHeight: 1.5 }}>Get the best Minecraft guides straight to your inbox.</p>
            <NewsletterForm />
          </div>

          {/* Browse categories */}
          <div style={{ backgroundColor: "#0C1810", border: "1px solid #1A2E1A", borderRadius: 10, padding: 20 }}>
            <h3 style={{ margin: "0 0 16px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#C4B47E" }}>Browse Categories</h3>
            {[
              { name: "Survival", slug: "survival" },
              { name: "Farms", slug: "farms" },
              { name: "Builds", slug: "build" },
              { name: "Seeds", slug: "seeds" },
              { name: "Redstone", slug: "redstone" },
              { name: "Guides", slug: "guide" },
            ].map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #1A2E1A20", textDecoration: "none" }}>
                <span style={{ fontSize: 13, color: cat.slug === article.tag.toLowerCase() ? "#C4B47E" : "#BDB5A0" }}>{cat.name}</span>
                <span style={{ fontSize: 9, color: "#3A4A35", backgroundColor: "#0A1208", padding: "2px 8px", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.1em" }}>View →</span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}

// Inline client component for newsletter form in sidebar
function NewsletterForm() {
  return (
    <form action="/api/newsletter" method="POST" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        required
        style={{ width: "100%", padding: "10px 12px", backgroundColor: "#0A1208", border: "1px solid #1A2E1A", borderRadius: 6, color: "#BDB5A0", fontSize: 12, boxSizing: "border-box", outline: "none" }}
      />
      <button
        type="submit"
        style={{ width: "100%", padding: 10, backgroundColor: "#C4B47E", color: "#0B1410", fontSize: 11, fontWeight: 700, textTransform: "uppercase", border: "none", borderRadius: 6, cursor: "pointer" }}
      >
        Subscribe
      </button>
    </form>
  );
}
