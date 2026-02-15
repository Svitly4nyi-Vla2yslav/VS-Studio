import { favicons } from "favicons";
import fs from "node:fs/promises";
import path from "node:path";

const source = "../assets/logo.png"; // <-- поклади сюди свій PNG (твій золотий VS)
const outDir = "public";

const config = {
  path: "/", // шляхи в html
  appName: "VS Web Studio",
  appShortName: "VS Web Studio",
  appDescription: "Websites, die Anfragen bringen.",
  background: "#0B0B0F",
  theme_color: "#0B0B0F",
  icons: {
    favicons: true,
    android: true,
    appleIcon: true,
    appleStartup: false,
    windows: false,
    yandex: false
  }
};

const res = await favicons(source, config);

await fs.mkdir(outDir, { recursive: true });

await Promise.all(
  res.images.map((img) => fs.writeFile(path.join(outDir, img.name), img.contents))
);

await Promise.all(
  res.files.map((file) => fs.writeFile(path.join(outDir, file.name), file.contents))
);

console.log(
  "Favicons generated:\n" +
    [...res.images.map((i) => i.name), ...res.files.map((f) => f.name)].join("\n")
);
