const imagePaths = [
  "Mark/Screenshot_2026-04-06-06-13-58-81_c37d74246d9c81aa0bb824b57eaf7062.jpg",
  "Mark/IMG_20251224_144110.jpg",
  "Mark/IMG_20251213_154830.jpg",
  "Mark/IMG_20251213_154806.jpg",
  "Mark/IMG_20251213_154741.jpg",
  "Mark/IMG_20251213_154722.jpg",
  "Mark/IMG_20251213_154639.jpg",
  "Mark/IMG_20251213_154608.jpg",
  "Mark/IMG_20251213_154546.jpg",
  "Mark/IMG_20251213_154446.jpg",
  "Mark/IMG_20251213_154406.jpg",
  "Mark/IMG_20251213_154343.jpg",
  "Mark/IMG_20251213_154325.jpg",
  "Mark/IMG_20250225_142848_380.jpg",
  "Mark/IMG_20250225_142848_324.jpg",
  "Mark/IMG_20250225_142848_293.jpg",
  "Mark/IMG_20250225_142848_248.jpg",
  "Mark/IMG_20250225_142848_196.jpg",
  "Mark/IMG_20250225_142848_094.jpg",
  "Mark/IMG_20250225_142848_065.jpg",
  "Mark/IMG_20250225_142847_882.jpg",
  "Mark/IMG_20250225_142847_762.jpg",
  "Mark/IMG20260323071844.jpg",
  "Mark/IMG20260220091506.jpg",
  "Mark/IMG20260219100243.jpg",
  "Mark/IMG20260116070500.jpg",
  "Mark/IMG20260116070308.jpg",
  "Mark/IMG20260116063937.jpg",
  "Mark/IMG20260116060824.jpg",
  "Mark/IMG20260115123729.jpg",
  "Mark/IMG20260110051452.jpg",
  "Mark/IMG20251223063009.jpg",
  "Mark/IMG20251216053913.jpg",
  "Mark/IMG20251212082614.jpg",
  "Mark/IMG20251211093214.jpg",
  "Mark/IMG20251211091210.jpg",
  "Mark/IMG20251211091115.jpg",
  "Mark/IMG20250902073655.jpg",
  "Mark/IMG20250901090216.jpg",
  "Mark/IMG20250901082600.jpg",
  "Mark/IMG20250815073034.jpg",
  "Mark/IMG20250815072217.jpg",
  "Mark/IMG20250814054227.jpg",
  "Mark/IMG20250813135134.jpg",
  "Mark/IMG20250813073640.jpg",
  "Mark/IMG20250812112029.jpg",
  "Mark/IMG20250812105304.jpg",
  "Mark/IMG20250227125942.jpg",
  "Mark/IMG20250224111631.jpg",
  "Mark/IMG20250224111246.jpg",
  "Mark/IMG20250224072936.jpg",
  "Mark/IMG20250224071424.jpg",
  "Mark/IMG20250224063614.jpg",
  "Mark/IMG20250224062409.jpg",
  "Mark/IMG20250223114710.jpg",
  "Mark/IMG20250223104752.jpg",
  "Mark/IMG20250223102722.jpg",
  "Mark/IMG20250223102619.jpg",
  "Mark/IMG20250223102556.jpg",
  "Mark/IMG20250223102551.jpg",
  "Mark/IMG20250223095209.jpg",
  "Mark/IMG20250223092501.jpg",
  "Mark/IMG20250223074507.jpg",
  "Mark/IMG20250223074227.jpg",
  "Mark/IMG20250223070254.jpg",
  "Mark/IMG20250217140014.jpg",
  "Mark/IMG20250217133912.jpg"
];

const gallery = document.getElementById("gallery");
const countEl = document.getElementById("image-count");

countEl.textContent = `${imagePaths.length} images`;

for (const path of imagePaths) {
  const card = document.createElement("figure");
  card.className = "card";

  const img = document.createElement("img");
  img.src = path;
  img.alt = "Pastry portfolio image";
  img.loading = "lazy";
  img.decoding = "async";

  const caption = document.createElement("figcaption");
  caption.textContent = path.replace("Mark/", "");

  card.append(img, caption);
  gallery.appendChild(card);
}
