/* ---------- ӨГӨГДӨЛ ---------- */
const LV = "https://eu.louisvuitton.com/images/is/";
const CENTRAL = LV + "image//content/dam/lv/editorial-content/New-Homepage/2026/central/";
const PROD = LV + "image/lv/1/PP_VP_L/louis-vuitton-";
const VIEW = "_PM2_Front%20view.jpg";

const categories = [
  ["Women’s Handbags", "HOLIDAY_26_WLG_PET3_DII.jpg", "#e8d5b5", "#9a6b3c"],
  ["Women’s Wallets and Small Leather Goods", "HOLIDAY_26_SLG2_DII.jpg", "#f1c9c0", "#a4574b"],
  ["Women’s Accessories", "HOLIDAY_26_WACC_FJ_DII.jpg", "#d7dde8", "#566581"],
  ["Perfumes", "HOLIDAY_26_PERFUMES2_DII.jpg", "#f3e3b3", "#b08a2e"],
  ["Travel", "HOLIDAY_26_TRAVEL2_DII.jpg", "#cdd9cf", "#516656"],
  ["Men’s Shoes", "HOLIDAY_26_MSHOES_DII.jpg", "#d9d2c9", "#5d5247"],
  ["Men’s Wallets and Small Leather Goods", "HOLIDAY_26_MSLG_DII.jpg", "#c9d3e0", "#3d4b63"],
  ["Men’s Accessories", "HOLIDAY_26_MACC2_DII.jpg", "#e2cfd9", "#7d4a64"],
].map(([n, f, a, b]) => ({ n, a, b, img: CENTRAL + "categories/holiday/" + f }));

const collections = [
  { img: LV + "poster-video/a2fc7450-c41a-4f2b-8a41-5fa02d547c04/eLuxgxlHKIkPUy2PFK79AAAC.jpg", a: "#b8860b", b: "#3a2a08", items: [] },
  { who: "Men", title: "Spring-Summer 2027 Pre-Collection", a: "#a9bdd6", b: "#2f3f5c",
    img: LV + "poster-video/a316cd5d-102a-4e55-8521-1d3f9b74c6ff/5GnbrY7TAuF0hzcfs2Bch9c6.jpg",
    items: [["Speedy 18 Bandoulière", "speedy-18-bandouliere--M3A518"],
            ["Monogram Surplus Denim Tracktop", "monogram-surplus-denim-tracktop--HWA22WD1O650"],
            ["LV Trainer Sneaker", "lv-trainer-sneaker--B1UQ84DN20"],
            ["LV Lock Round Square Sunglasses", "lv-lock-round-square-sunglasses--Z3664W"]] },
  { who: "Beauty", title: "Monogram Rouge", a: "#c9364b", b: "#4a0a17",
    img: CENTRAL + "collections/monogram-rouge/MONOGRAM_ROUGE_HP_Push_Nov26_DII.jpg",
    items: [["LV Rouge – Matte Lipstick – 896", "lv-rouge---matte-lipstick---896--LLD012"],
            ["LV Rouge – Satin Lipstick – 896", "lv-rouge---satin-lipstick---896--LLD013"],
            ["LV Baume – Lip Balm – 051", "lv-baume---lip-balm---051--LLD014"],
            ["LV Ombres – Eyeshadow Palette – 896", "lv-ombres---eyeshadow-palette---896--LYD005"]] },
  { who: "Women", title: "Vivienne Winter Holiday", a: "#e9d6a8", b: "#8a5a2a",
    img: CENTRAL + "collections/vivienne-holiday/Vivienne_Holiday_Nov26_WW_HP_Push_DII.jpg",
    items: [["Pochette Hills", "pochette-hills---M2A783"],
            ["Time Out Sneaker", "time-out-sneaker--A1UT5FSL33"],
            ["Rosalie Coin Purse", "rosalie-coin-purse--M2A794"],
            ["Vivienne Sweet BB Bandeau", "vivienne-sweet-bb-bandeau--M9A258"]] },
];

// Зураг ачаалахгүй бол gradient үлдэнэ
const img = src => `<img src="${src}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`;

const menu = {
  "Women": ["New In", "Handbags", "Wallets and Small Leather Goods", "Ready-to-Wear", "Accessories", "Shoes", "Travel"],
  "Men": ["New In", "Bags", "Wallets and Small Leather Goods", "Ready-to-Wear", "Accessories", "Shoes", "Travel"],
  "Holiday Gifts": ["All Holiday Gifts", "Holiday Gifts for Her", "Holiday Gifts for Him", "Personalization"],
  "Monogram Anniversary": ["The Collections", "Speedy", "Alma", "Neverfull", "Keepall"],
  "Bags and Small Leather Goods": ["Women Bags", "Men Bags", "Personalization"],
  "Trunks and Travel": ["Travel Bags", "Rolling Luggages", "Travel Accessories", "Trunks and Boxes"],
  "Perfumes and Beauty": ["All Perfumes", "All Beauty", "Lips", "Eyes"],
  "Jewelry": ["Categories", "Collections", "High Jewelry"],
  "Watches": ["New In", "All Collections", "Objects of Time"],
  "Home, Lifestyle and Library": ["Furniture and Lighting", "Decorative Objects", "Books"],
  "Services": ["Personal Advisors", "Repairs", "Personalization"],
  "The Maison Louis Vuitton": [],
};

/* ---------- RENDER ---------- */
document.getElementById("rail").innerHTML = categories.map(c =>
  `<a class="item" href="#"><div class="ph" style="--a:${c.a};--b:${c.b}">${img(c.img)}</div><span>${c.n}</span></a>`).join("");

document.getElementById("collections").innerHTML = collections.map(c => `
  <section class="collection">
    <div class="banner ph ${c.title ? "" : "plain"}" style="--a:${c.a};--b:${c.b}">
      ${img(c.img)}
      ${c.title ? `<p class="eyebrow">${c.who}</p><h2>${c.title}</h2>` : ""}
    </div>
    ${c.items.length ? `<div class="products">
      ${c.items.map(([n, f]) => `<a class="product" href="#"><div class="ph">${img(PROD + f + VIEW)}</div><span>${n}</span></a>`).join("")}
    </div><a class="discover" href="#">Discover the Collection</a>` : ""}
  </section>`).join("");

document.getElementById("menuList").innerHTML = Object.entries(menu).map(([k, subs]) => `
  <li><button>${k}${subs.length ? "<i>›</i>" : ""}</button>
  ${subs.length ? `<div class="sub">${subs.map(s => `<a href="#">${s}</a>`).join("")}</div>` : ""}</li>`).join("");

/* ---------- ИНТЕРАКТИВ ---------- */
const header = document.getElementById("header");
const hero = document.querySelector(".hero");

// Hero-оос гарахад header цагаан болно
const setHeader = () => header.classList.toggle("solid", scrollY > hero.offsetHeight - 80);
addEventListener("scroll", setHeader); setHeader();

// Drawer нээх / хаах
const toggleMenu = open => document.body.classList.toggle("menu-open", open);
document.getElementById("menuBtn").onclick = () => toggleMenu(true);
document.getElementById("closeBtn").onclick = () => toggleMenu(false);
document.getElementById("overlay").onclick = () => toggleMenu(false);
addEventListener("keydown", e => e.key === "Escape" && toggleMenu(false));

// Accordion цэс
document.querySelectorAll("#menuList > li > button").forEach(btn =>
  btn.addEventListener("click", () => btn.parentElement.classList.toggle("open")));

// Rail сумууд
const rail = document.getElementById("rail");
const step = () => rail.clientWidth * 0.8;
document.getElementById("next").onclick = () => rail.scrollBy({ left: step(), behavior: "smooth" });
document.getElementById("prev").onclick = () => rail.scrollBy({ left: -step(), behavior: "smooth" });