import OpenAI from "openai";
import fs from "fs";
import path from "path";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const slug = process.argv[2];
const title = process.argv[3];

if (!slug || !title) {
  console.error("Uso: node scripts/generate-image.mjs <slug> <title>");
  process.exit(1);
}

const outputPath = path.join("public", "images", "articles", `${slug}.png`);
if (fs.existsSync(outputPath)) {
  console.log(`⚡ Imagem já existe, reutilizando: ${outputPath}`);
  process.exit(0);
}

const prompt = `Minecraft 3D render illustration for an article titled "${title}".
Bright daytime scene, blue sky with fluffy white clouds, vibrant green grass and trees.
High quality isometric 3D view, official Minecraft art style.
Vivid and saturated colors, sharp and clean rendering.
Relevant Minecraft blocks, structures and characters for the topic.
Natural background with lake, mountains and forest.
No text, no letters, no words in the image.
Style: bright, colorful, cheerful — like official Minecraft promotional art.`;

const response = await client.images.generate({
  model: "gpt-image-1",
  prompt,
  n: 1,
  size: "1536x1024",
  quality: "medium",
});

const base64Image = response.data[0].b64_json;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, Buffer.from(base64Image, "base64"));

const indexPath = path.join("public", "images", "articles", "index.json");
let index = [];
if (fs.existsSync(indexPath)) {
  index = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
}
index.push({ slug, title, file: `${slug}.png`, createdAt: new Date().toISOString() });
fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));

console.log(`✅ Imagem gerada: ${outputPath}`);