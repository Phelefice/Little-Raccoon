const fs=require("fs"); let c=fs.readFileSync("app/articles/[slug]/page.tsx","utf8"); c=c.replace("? Home","? Home"); fs.writeFileSync("app/articles/[slug]/page.tsx",c,"utf8"); console.log("OK");
