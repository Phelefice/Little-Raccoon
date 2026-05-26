const fs = require("fs");
let content = fs.readFileSync("app/layout.tsx", "utf8");
content = content.replace(
  '<meta name="google-adsense-account" content="ca-pub-5219702409402620" />',
  '<meta name="google-adsense-account" content="ca-pub-5219702409402620" />\n        <meta name="msvalidate.01" content="76EE311F26EF52D8045CA871A9C70822" />'
);
fs.writeFileSync("app/layout.tsx", content, "utf8");
console.log("Done");
