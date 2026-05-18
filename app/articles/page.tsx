import { getAllArticles } from '../../lib/articles';
import Link from 'next/link';

export const metadata = {
  title: 'All Articles | The Little Raccoon',
  description: 'Browse all Minecraft guides, tutorials, and tips from The Little Raccoon.',
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0B1410', paddingBottom: 80 }}>
      <div style={{ backgroundColor: '#0C1810', borderBottom: '1px solid #1A2E1A', padding: '48px 40px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ margin: '0 0 8px', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#C4B47E', opacity: 0.8 }}>The Little Raccoon</p>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-oswald)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#EDE6D6' }}>All Articles</h1>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {articles.map((article) => (
            <Link key={article.slug} href={'/articles/' + article.slug} style={{ display: 'flex', flexDirection: 'column', borderRadius: 10, overflow: 'hidden', border: '1px solid #1A2E1A', backgroundColor: '#0C1810', textDecoration: 'none' }}>
              <div style={{ width: '100%', aspectRatio: '16/9', background: 'linear-gradient(135deg, #0E1A10 0%, #162410 50%, #0A1410 100%)', position: 'relative' }}>
                <span style={{ position: 'absolute', top: 10, left: 10, display: 'inline-block', padding: '3px 8px', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: article.tagColor, backgroundColor: '#0A1208CC', border: '1px solid ' + article.tagColor + '50', borderRadius: 4 }}>{article.tag}</span>
              </div>
              <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                <h2 style={{ margin: 0, fontFamily: 'var(--font-oswald)', fontSize: '0.95rem', fontWeight: 700, color: '#EDE6D6', lineHeight: 1.3 }}>{article.title}</h2>
                <p style={{ margin: 0, fontSize: 12, color: '#8A9A85', lineHeight: 1.5 }}>{article.description}</p>
                <p style={{ margin: 0, fontSize: 11, color: '#3A3425', marginTop: 'auto' }}>{article.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}