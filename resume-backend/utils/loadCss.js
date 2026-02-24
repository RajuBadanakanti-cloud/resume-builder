import fs from "fs";
import path from "path";

export const loadTailwindCSS = () => {
  const cssPath = path.join(process.cwd(), "dist", "tailwind.css");
  return fs.readFileSync(cssPath, "utf8");
};
