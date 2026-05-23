import { getAllArticles } from "../../../lib/articles";
import { notFound } from "next/navigation";
import CategoryPageClient from "./CategoryPageClient";

const CATEGORY_META: Record<string, {
  label: string;
  description: string;
  icon: string;
  tag: string;
  accentColor: string;
}> = {
  survival: {
    label: "Survival Essentials",
    description: "Everything you need to stay alive and thrive in Minecraft survival mode. From your first night to the End, we've got you covered.",
    icon: "/images/icon_survival.png",
    tag: "Survival",
    accentColor: "#9A5858",
  },
  farms: {
    label: "Farms & Automation",
    description: "Build efficient farms that work while you sleep. From simple wheat farms to fully automated XP grinders, automate everything.",
    icon: "/images/icon_farm.png",
    tag: "Farms",
    accentColor: "#7A8A5A",
  },
  build: {
    label: "Builds & Designs",
    description: "From cozy starter homes to epic megabuilds. Tutorials, ideas and inspiration for every building style and skill level.",
    icon: "/images/icon_builds.png",
    tag: "Build",
    accentColor: "#8A7A50",
  },
  seeds: {
    label: "Seeds & Worlds",
    description: "Start your next adventure in the perfect world. Handpicked seeds with villages at spawn, rare biomes and hidden treasures.",
    icon: "/images/icon_seeds.png",
    tag: "Seeds",
    accentColor: "#7A9A50",
  },
  redstone: {
    label: "Redstone & Mechanics",
    description: "Master the art of Redstone. From simple circuits to complex contraptions, learn how to automate anything in Minecraft.",
    icon: "/images/icon_redstone.png",
    tag: "Redstone",
    accentColor: "#8A5A5A",
  },
  guide: {
    label: "Guides",
    description: "Step-by-step guides for every aspect of Minecraft. Whether you're a complete beginner or a seasoned player, there's always more to learn.",
    icon: "/images/icon_guides.png",
    tag: "Guide",
    accentColor: "#5A8A70",
  },
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_META).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = CATEGORY_META[slug];
  if (!meta) return {};
  return {
    title: meta.label,
    description: meta.description,
    alternates: {
      canonical: `https://thelittleraccoon.com/category/${slug}`,
    },
    openGraph: {
      type: "website",
      title: `${meta.label} | The Little Raccoon`,
      description: meta.description,
      url: `https://thelittleraccoon.com/category/${slug}`,
      images: [
        {
          url: "/images/og-default.png",
          width: 1200,
          height: 630,
          alt: `${meta.label} — The Little Raccoon`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.label} | The Little Raccoon`,
      description: meta.description,
      images: ["/images/og-default.png"],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = CATEGORY_META[slug];
  if (!meta) notFound();

  const allArticles = getAllArticles();
  const articles = allArticles.filter((a) => a.tag === meta.tag);

  return (
    <CategoryPageClient
      slug={slug}
      label={meta.label}
      description={meta.description}
      icon={meta.icon}
      accentColor={meta.accentColor}
      articles={articles}
    />
  );
}
