/* Контент нь index.html дотор static байдлаар бичигдсэн (SEO-д зориулсан).
   Энд зөвхөн интерактив хэсэг байна. */

/* ---------- ИНТЕРАКТИВ ---------- */
const header = document.getElementById("header");
const hero = document.querySelector(".hero");

// Hero-оос гарахад header цагаан болно
const setHeader = () => header.classList.toggle("solid", scrollY > hero.offsetHeight - 80);
addEventListener("scroll", setHeader); setHeader();

// Drawer нээх / хаах
const menuBtn = document.getElementById("menuBtn");
const toggleMenu = open => {
  document.body.classList.toggle("menu-open", open);
  menuBtn.setAttribute("aria-expanded", open);
};
menuBtn.onclick = () => toggleMenu(true);
document.getElementById("closeBtn").onclick = () => toggleMenu(false);
document.getElementById("overlay").onclick = () => toggleMenu(false);
addEventListener("keydown", e => e.key === "Escape" && toggleMenu(false));

// Accordion цэс
document.querySelectorAll("#menuList > li > button").forEach(btn =>
  btn.addEventListener("click", () => {
    const open = btn.parentElement.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  }));

// Rail сумууд
const rail = document.getElementById("rail");
const step = () => rail.clientWidth * 0.8;
document.getElementById("next").onclick = () => rail.scrollBy({ left: step(), behavior: "smooth" });
document.getElementById("prev").onclick = () => rail.scrollBy({ left: -step(), behavior: "smooth" });