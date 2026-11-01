/* Rendering helpers — content lives in data.js */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function img(src, w = 800, h = 800, mode = "fit") {
  if (!src) return "";
  if (!src.startsWith("594421_")) return src;
  return `https://static.wixstatic.com/media/${src}/v1/${mode}/w_${w},h_${h},al_c,q_85,enc_auto/${src}`;
}

function fmtDate(d) {
  const [y, m] = d.split("-");
  return m ? `${MONTHS[+m - 1]} ${y}` : y;
}

function fmtAuthors(a) {
  return a
    .replace(/\*\*(.+?)\*\*/g, '<b class="me">$1</b>')
    .replace(/([+*]+)/g, "<sup>$1</sup>");
}

function linkList(links) {
  if (!links) return "";
  return Object.entries(links)
    .map(([k, v]) => `<a class="tag-link" href="${v}" target="_blank" rel="noopener">[${k}]</a>`)
    .join(" ");
}

function thumb(src, icon, alt) {
  return src
    ? `<img src="${img(src, 640, 480)}" alt="${alt}" loading="lazy">`
    : `<div class="thumb-placeholder"><i class="fa-solid ${icon || "fa-diagram-project"}"></i></div>`;
}

/* ---------- News ---------- */
function renderNews(el, limit) {
  const items = limit ? NEWS.slice(0, limit) : NEWS;
  let lastYear = "";
  el.innerHTML = items
    .map((n) => {
      const y = n.date.slice(0, 4);
      const yearCell = y !== lastYear ? y : "";
      lastYear = y;
      const more = n.link ? ` <a href="${n.link}" target="_blank" rel="noopener">Link <i class="fa-solid fa-angles-right"></i></a>` : "";
      return `<li><span class="news-year">${yearCell}</span><span class="news-text">${n.text}${more}</span><span class="news-date">${n.date.length > 4 ? MONTHS[+n.date.slice(5, 7) - 1] : ""}</span></li>`;
    })
    .join("");
}

/* ---------- Publications ---------- */
function pubItem(p) {
  return `
  <article class="pub">
    <div class="pub-thumb">${thumb(p.img, p.icon, p.title)}</div>
    <div class="pub-body">
      <h3>${p.title}</h3>
      <p class="pub-authors">${fmtAuthors(p.authors)}</p>
      <p class="pub-venue">${p.venue}</p>
      <p>${linkList(p.links)}</p>
    </div>
  </article>`;
}

function renderPubs(el, filter = () => true) {
  el.innerHTML = PUBLICATIONS.filter(filter).map(pubItem).join("");
}

function renderTalks(el) {
  el.innerHTML = TALKS.map(
    (t) => `
    <li>
      <div class="talk-main">
        <span class="badge ${t.kind === "Poster" ? "badge-alt" : t.kind === "Upcoming" ? "badge-upcoming" : ""}">${t.kind}</span>
        <b>${t.title}</b>
        <div class="talk-authors">${fmtAuthors(t.authors)}</div>
      </div>
      <div class="talk-meta"><b>${t.venue}</b><span>${t.place} · ${t.date}</span></div>
    </li>`
  ).join("");
}

/* ---------- Projects ---------- */
function projectItem(p, withGallery) {
  const tags = (p.tags || []).map((t) => `<span class="chip">${t}</span>`).join("");
  const gallery =
    withGallery && p.gallery
      ? `<div class="gallery">${p.gallery
          .map((g, i) => `<button class="gallery-item" data-project="${p.id}" data-index="${i}" aria-label="Open image ${i + 1}"><img src="${img(g, 240, 160, "fill")}" alt="" loading="lazy"></button>`)
          .join("")}</div>`
      : "";
  return `
  <article class="pub project" id="${p.id}">
    <div class="pub-thumb">${thumb(p.img, p.icon, p.title)}</div>
    <div class="pub-body">
      ${p.funding ? `<div class="kicker">${p.funding}</div>` : ""}
      <h3>${p.title}</h3>
      <div class="chips">${tags}</div>
      <p class="project-summary">${p.summary}</p>
      ${p.people ? `<p class="pub-authors">${p.people}</p>` : ""}
      <p>${linkList(p.links)}</p>
      ${gallery}
    </div>
  </article>`;
}

function renderProjects(el, filter, withGallery = false) {
  el.innerHTML = PROJECTS.filter(filter).map((p) => projectItem(p, withGallery)).join("");
}

function renderLab(el) {
  el.innerHTML = PROJECTS.filter((p) => p.group === "lab")
    .map(
      (p) => `
    <figure class="lab-card">
      <img src="${img(p.img, 640, 400, "fill")}" alt="${p.title}" loading="lazy">
      <figcaption><b>${p.title}</b><span>${p.summary}</span></figcaption>
    </figure>`
    )
    .join("");
}

/* ---------- CV lists ---------- */
function renderTimeline(el, items) {
  el.innerHTML = items
    .map(
      (e) => `
    <li>
      <div class="tl-org">${e.org}</div>
      <div class="tl-row"><span>${e.detail}</span><em>${e.date}</em></div>
    </li>`
    )
    .join("");
}

function renderSimple(el, items) {
  el.innerHTML = items
    .map((h) => {
      const text = h.link ? `<a href="${h.link}" target="_blank" rel="noopener">${h.text}</a>` : h.text;
      const detail = h.detail ? `<small class="item-detail">${h.detail}</small>` : "";
      return `<li><span>${h.role ? `<b>${h.role}</b> · ` : ""}${text}${detail}</span><em>${h.date}</em></li>`;
    })
    .join("");
}

/* ---------- Lightbox ---------- */
function setupLightbox() {
  const box = document.getElementById("lightbox");
  if (!box) return;
  const imgEl = box.querySelector("img");
  const counter = box.querySelector(".lb-counter");
  let list = [], idx = 0;

  const show = () => {
    imgEl.src = img(list[idx], 1800, 1800);
    counter.textContent = `${idx + 1} / ${list.length}`;
  };
  const close = () => box.classList.remove("open");
  const step = (d) => { idx = (idx + d + list.length) % list.length; show(); };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".gallery-item");
    if (!btn) return;
    list = PROJECTS.find((p) => p.id === btn.dataset.project).gallery;
    idx = +btn.dataset.index;
    show();
    box.classList.add("open");
  });
  box.querySelector(".lb-close").onclick = close;
  box.querySelector(".lb-prev").onclick = () => step(-1);
  box.querySelector(".lb-next").onclick = () => step(1);
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
}

/* ---------- Nav ---------- */
function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");
  if (toggle) toggle.onclick = () => menu.classList.toggle("open");
  const nav = document.querySelector(".site-nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  setupNav();

  if ($("news")) renderNews($("news"), +($("news").dataset.limit || 0));
  if ($("selected-pubs")) renderPubs($("selected-pubs"), (p) => p.selected);
  if ($("selected-projects")) renderProjects($("selected-projects"), (p) => p.selected);
  if ($("education")) renderTimeline($("education"), EDUCATION);
  if ($("experience")) renderTimeline($("experience"), EXPERIENCE);
  if ($("honors")) renderSimple($("honors"), HONORS);
  if ($("teaching")) renderSimple($("teaching"), TEACHING);

  if ($("pubs-journal")) renderPubs($("pubs-journal"), (p) => p.type === "journal");
  if ($("pubs-conference")) renderPubs($("pubs-conference"), (p) => p.type === "conference");
  if ($("pubs-chapter")) renderPubs($("pubs-chapter"), (p) => p.type === "chapter");
  if ($("talks")) renderTalks($("talks"));

  if ($("projects-research")) renderProjects($("projects-research"), (p) => p.group === "research", true);
  if ($("projects-previous")) renderProjects($("projects-previous"), (p) => p.group === "previous", true);
  if ($("projects-lab")) renderLab($("projects-lab"));
  setupLightbox();

  const y = $("year");
  if (y) y.textContent = new Date().getFullYear();
});
