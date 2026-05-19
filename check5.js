const fs=require("fs"); const c=fs.readFileSync("app/articles/[slug]/page.tsx","utf8"); const lines=c.split("\n"); console.log(JSON.stringify(lines[69]));
