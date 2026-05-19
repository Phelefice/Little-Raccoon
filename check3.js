const fs=require("fs"); const c=fs.readFileSync("app/articles/[slug]/page.tsx","utf8"); const i=c.indexOf("Home"); console.log(JSON.stringify(c.substring(i-5,i+10)));
