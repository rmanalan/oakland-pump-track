import fs from "fs";
import path from "path";

export async function getGalleryImages() {
  const galleryDir = path.join("public", "images", "gallery");
  const fileNames = fs.readdirSync(path.join(process.cwd(), galleryDir));
  return fileNames.map((fileName) =>
    require(`../${path.join(galleryDir, fileName)}`)
  );
}
