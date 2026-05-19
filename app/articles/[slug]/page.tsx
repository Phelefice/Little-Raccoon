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
  return { title: article.title + " | The Little Raccoon", description: article.description };
}

const tagColors: Record<string, string> = { Build:"#8A7A50", Guide:"#5A8A70", Survival:"#9A5858", Seeds:"#7A9A50", Redstone:"#8A5A5A", Tips:"#6A7A8A", Farms:"#7A8A5A" };

const popularPosts = [
  { title: "10 Cozy Minecraft Build Ideas", date: "May 18, 2025", image: "/images/category_builds.webp" },
  { title: "How to Find the Best Survival Seed", date: "May 10, 2025", image: "/images/category-seeds.png" },
  { title: "Beginner Guide to Farming", date: "May 6, 2025", image: "/images/category-farm.png" },
  { title: "How to Build a Storage Room", date: "Apr 30, 2025", image: "/images/brewing.png" },
  { title: "Minecraft Building Styles", date: "Apr 26, 2025", image: "/images/category_builds.webp" },
];

const categories = [
  { name: "Guides", count: 28 }, { name: "Builds", count: 34 }, { name: "Survival", count: 22 },
  { name: "Redstone", count: 16 }, { name: "Inspiration", count: 18 }, { name: "Seeds", count: 12 },
];

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
  const nextArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const tagColor = tagColors[article.tag] || "#5A8A70";
  const readTime = Math.ceil(article.content.split(" ").length / 200);
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0B1410" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 40px 0" }}>
        <Link href="/" style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#C4B47E", textDecoration: "none", opacity: 0.7 }}>← Home</Link>
      </div>
      <div style={{ position: "relative", width: "100%", minHeight: 420, overflow: "hidden", marginTop: 16 }}>
        {article.image ? (<Image src={article.image} alt={article.title} fill style={{ objectFit: "cover" }} priority />) : (<div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0E2010, #162A10, #0A1A10)" }} />)}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,20,16,1) 0%, rgba(11,20,16,0.7) 40%, rgba(11,20,16,0.3) 100%)" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: 420, paddingBottom: 48 }}>
          <span style={{ display: "inline-block", padding: "4px 12px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: tagColor, backgroundColor: "#0A120880", border: "1px solid "+tagColor+"60", borderRadius: 4, marginBottom: 16 }}>{article.tag}</span>
          <h1 style={{ margin: "0 0 16px", fontFamily: "var(--font-oswald)", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 700, color: "#EDE6D6", lineHeight: 1.1, maxWidth: 800, textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>{article.title}</h1>
          {article.description && <p style={{ margin: "0 0 24px", fontSize: "1.05rem", color: "#BDB5A0", maxWidth: 640, lineHeight: 1.6 }}>{article.description}</p>}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", overflow: "hidden", border: "2px solid #C4B47E40", position: "relative", flexShrink: 0 }}>
              <Image src="/images/TLR.png" alt="The Little Raccoon" fill style={{ objectFit: "cover" }} />
            </div>
            <span style={{ fontSize: 12, color: "#BDB5A0" }}>By <strong style={{ color: "#C4B47E" }}>Little Raccoon</strong></span>
            <span style={{ color: "#3A4A35", fontSize: 12 }}>|</span>
            <span style={{ fontSize: 12, color: "#8A9A85" }}>{new Date(article.date).toLocaleDateString("en-US",{ year:"numeric", month:"long", day:"numeric" })}</span>
            <span style={{ color: "#3A4A35", fontSize: 12 }}>•</span>
            <span style={{ fontSize: 12, color: "#8A9A85" }}>{readTime} min read</span>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 40px 80px", display: "grid", gridTemplateColumns: "1fr 300px", gap: 48, alignItems: "start" }}>
        <div>
          <style>{".article-body h2{font-family:var(--font-oswald);font-size:1.5rem;font-weight:700;color:#EDE6D6;margin:2.5rem 0 1rem;padding-bottom:10px;border-bottom:1px solid #1A2E1A}.article-body p{margin:0 0 1.2rem;color:#BDB5A0;line-height:1.85}.article-body ul,.article-body ol{margin:0 0 1.2rem;padding-left:0;list-style:none}.article-body li{margin-bottom:.5rem;color:#BDB5A0;padding-left:20px;position:relative}.article-body li::before{content:"\25b8";position:absolute;left:0;color:#C4B47E}.article-body strong{color:#EDE6D6}"}</style>
          <div className="article-body"><MDXRemote source={article.content} /></div>
          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {prevArticle ? (<Link href={"/articles/"+prevArticle.slug} style={{ padding:"16px 20px", border:"1px solid #1A2E1A", borderRadius:8, textDecoration:"none", backgroundColor:"#0C1810" }}><p style={{ margin:"0 0 4px", fontSize:10, fontWeight:700, textTransform:"uppercase", color:"#5A6A55" }}>← Previous</p><p style={{ margin:0, fontSize:13, color:"#EDE6D6", fontFamily:"var(--font-oswald)" }}>{prevArticle.title}</p></Link>) : <div />}
            {nextArticle ? (<Link href={"/articles/"+nextArticle.slug} style={{ padding:"16px 20px", border:"1px solid #1A2E1A", borderRadius:8, textDecoration:"none", backgroundColor:"#0C1810", textAlign:"right" }}><p style={{ margin:"0 0 4px", fontSize:10, fontWeight:700, textTransform:"uppercase", color:"#5A6A55" }}>Next →</p><p style={{ margin:0, fontSize:13, color:"#EDE6D6", fontFamily:"var(--font-oswald)" }}>{nextArticle.title}</p></Link>) : <div />}
          </div>
        </div>
        <aside style={{ display:"flex", flexDirection:"column", gap:32, position:"sticky", top:24 }}>
          <div style={{ backgroundColor:"#0C1810", border:"1px solid #1A2E1A", borderRadius:10, padding:"20px" }}>
            <h3 style={{ margin:"0 0 16px", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.18em", color:"#C4B47E" }}>Popular Posts</h3>
            {popularPosts.map((post,i) => (<div key={i} style={{ display:"flex", gap:12, alignItems:"center", marginBottom:12 }}><div style={{ width:56, height:56, borderRadius:6, overflow:"hidden", position:"relative", flexShrink:0, backgroundColor:"#0E1A10" }}><Image src={post.image} alt={post.title} fill style={{ objectFit:"cover" }} /></div><div><p style={{ margin:"0 0 4px", fontSize:12, color:"#BDB5A0", lineHeight:1.4 }}>{post.title}</p><p style={{ margin:0, fontSize:10, color:"#3A4A35" }}>{post.date}</p></div></div>))}
          </div>
          <div style={{ backgroundColor:"#0C1810", border:"1px solid #1A2E1A", borderRadius:10, padding:"20px", textAlign:"center" }}>
            <div style={{ fontSize:24, marginBottom:8 }}>✉</div>
            <h3 style={{ margin:"0 0 8px", fontFamily:"var(--font-oswald)", fontSize:"1.1rem", color:"#EDE6D6" }}>Stay Updated</h3>
            <p style={{ margin:"0 0 16px", fontSize:12, color:"#8A9A85", lineHeight:1.5 }}>Get the best Minecraft guides straight to your inbox.</p>
            <input type="email" placeholder="Your email address" style={{ width:"100%", padding:"10px 12px", backgroundColor:"#0A1208", border:"1px solid #1A2E1A", borderRadius:6, color:"#BDB5A0", fontSize:12, marginBottom:8, boxSizing:"border-box", outline:"none" }} />
            <button style={{ width:"100%", padding:"10px", backgroundColor:"#C4B47E", color:"#0B1410", fontSize:11, fontWeight:700, textTransform:"uppercase", border:"none", borderRadius:6, cursor:"pointer" }}>Subscribe</button>
          </div>
          <div style={{ backgroundColor:"#0C1810", border:"1px solid #1A2E1A", borderRadius:10, padding:"20px" }}>
            <h3 style={{ margin:"0 0 16px", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.18em", color:"#C4B47E" }}>Categories</h3>
            {categories.map(cat => (<div key={cat.name} style={{ display:"flex", justifyContent:"space-between", padding:"8px 0", borderBottom:"1px solid #1A2E1A20" }}><span style={{ fontSize:13, color:"#BDB5A0" }}>{cat.name}</span><span style={{ fontSize:11, color:"#3A4A35", backgroundColor:"#0A1208", padding:"2px 8px", borderRadius:20 }}>{cat.count}</span></div>))}
          </div>
        </aside>
      </div>
    </main>
  );
}