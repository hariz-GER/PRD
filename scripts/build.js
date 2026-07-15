const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const files = ["index.html", ".nojekyll"];
const folders = ["assets"];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

for (const folder of folders) {
  fs.cpSync(path.join(root, folder), path.join(dist, folder), {
    recursive: true
  });
}

console.log("Built static site to dist/");
