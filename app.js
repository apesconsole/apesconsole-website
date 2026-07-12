/* ============================================================
   Ape's Console — reimagined portfolio (standalone prototype)
   Vanilla JS: gallery filtering, lightbox, nav, reveal.
   ============================================================ */

/* Enforce landing at the very top on every (re)load */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);
window.addEventListener("load", function () { window.scrollTo(0, 0); });
window.addEventListener("pageshow", function (e) { if (e.persisted) window.scrollTo(0, 0); });

const ASSET = "https://apesconsole.github.io/apesconsole-assets/images";

const gallery = {
  Artattack: [
    { src: ASSET + "/artattack/1.jpg" },
    { src: ASSET + "/artattack/2.jpeg" },
    { src: ASSET + "/artattack/3.jpeg" },
    { src: ASSET + "/artattack/4.jpg" },
    { src: ASSET + "/artattack/5.jpg" },
    { src: ASSET + "/artattack/6.jpeg" },
    { src: ASSET + "/artattack/7.jpeg" },
    { src: ASSET + "/artattack/8.jpeg" },
    { src: ASSET + "/artattack/9.jpeg" },
    { src: ASSET + "/artattack/10.jpg" },
    { src: ASSET + "/artattack/11.jpeg" },
    { src: ASSET + "/artattack/12.jpg" },
    { src: ASSET + "/artattack/13.jpeg" },
    { src: ASSET + "/artattack/14.jpeg" },
    { src: ASSET + "/artattack/15.jpeg" },
    { src: ASSET + "/artattack/16.jpeg" },
    { src: ASSET + "/artattack/17.jpg" },
    { src: ASSET + "/artattack/18.jpeg" },
    { src: ASSET + "/artattack/19.jpeg" },
    { src: ASSET + "/artattack/20.jpeg" },
    { src: ASSET + "/artattack/21.jpeg" },
    { src: ASSET + "/artattack/22.jpeg" },
    { src: ASSET + "/artattack/23.jpg" },
    { src: ASSET + "/artattack/24.jpeg" },
    { src: ASSET + "/artattack/25.jpeg" },
    { src: ASSET + "/artattack/26.jpeg" },
    { src: ASSET + "/artattack/27.jpeg" },
    { src: ASSET + "/artattack/28.jpeg" },
    { src: ASSET + "/artattack/29.jpeg" },
    { src: ASSET + "/artattack/30.jpeg" },
    { src: ASSET + "/artattack/31.jpeg" },
    { src: ASSET + "/artattack/32.jpeg" },
    { src: ASSET + "/artattack/33.jpg" },
    { src: ASSET + "/artattack/34.jpeg" },
    { src: ASSET + "/artattack/35.jpg" },
    { src: ASSET + "/artattack/36.jpg" },
    { src: ASSET + "/artattack/37.jpg" },
    { src: ASSET + "/artattack/38.jpg" },
    { src: ASSET + "/artattack/39.jpg" },
    { src: ASSET + "/artattack/40.jpg" },
  ],
  Couple: [
    { src: ASSET + "/couple/1.jpg" },
    { src: ASSET + "/couple/2.jpeg" },
    { src: ASSET + "/couple/3.jpg" },
    { src: ASSET + "/couple/4.jpeg" },
    { src: ASSET + "/couple/5.jpeg" },
    { src: ASSET + "/couple/6.jpeg" },
    { src: ASSET + "/couple/7.jpeg" },
    { src: ASSET + "/couple/8.jpeg" },
    { src: ASSET + "/couple/9.jpeg" },
    { src: ASSET + "/couple/10.jpeg" },
    { src: ASSET + "/couple/11.jpeg" },
    { src: ASSET + "/couple/12.jpg" },
    { src: ASSET + "/couple/13.jpeg" },
    { src: ASSET + "/couple/14.jpeg" },
    { src: ASSET + "/couple/15.jpeg" },
    { src: ASSET + "/couple/16.jpeg" },
    { src: ASSET + "/couple/17.jpeg" },
    { src: ASSET + "/couple/18.jpeg" },
    { src: ASSET + "/couple/19.jpg" },
    { src: ASSET + "/couple/20.jpeg" },
    { src: ASSET + "/couple/21.jpeg" },
    { src: ASSET + "/couple/22.jpeg" },
    { src: ASSET + "/couple/23.jpeg" },
    { src: ASSET + "/couple/24.jpeg" },
    { src: ASSET + "/couple/25.jpeg" },
    { src: ASSET + "/couple/26.jpeg" },
    { src: ASSET + "/couple/27.jpeg" },
    { src: ASSET + "/couple/28.jpeg" },
    { src: ASSET + "/couple/29.jpeg" },
    { src: ASSET + "/couple/30.jpg" },
  ],
  Landscapes: [
    { src: ASSET + "/landscape/1.jpeg" },
    { src: ASSET + "/landscape/2.jpeg" },
    { src: ASSET + "/landscape/3.jpeg" },
    { src: ASSET + "/landscape/4.jpeg" },
    { src: ASSET + "/landscape/5.jpeg" },
    { src: ASSET + "/landscape/6.JPG" },
    { src: ASSET + "/landscape/7.jpeg" },
    { src: ASSET + "/landscape/8.jpeg" },
    { src: ASSET + "/landscape/9.jpeg" },
    { src: ASSET + "/landscape/10.jpeg" },
    { src: ASSET + "/landscape/11.jpeg" },
    { src: ASSET + "/landscape/12.jpeg" },
    { src: ASSET + "/landscape/13.jpeg" },
    { src: ASSET + "/landscape/14.jpeg" },
    { src: ASSET + "/landscape/15.jpeg" },
    { src: ASSET + "/landscape/16.jpeg" },
    { src: ASSET + "/landscape/17.jpeg" },
    { src: ASSET + "/landscape/18.jpeg" },
    { src: ASSET + "/landscape/19.jpeg" },
    { src: ASSET + "/landscape/20.jpeg" },
    { src: ASSET + "/landscape/21.jpeg" },
    { src: ASSET + "/landscape/22.jpg" },
    { src: ASSET + "/landscape/23.jpeg" },
    { src: ASSET + "/landscape/24.jpeg" },
    { src: ASSET + "/landscape/25.jpeg" },
    { src: ASSET + "/landscape/26.jpg" },
    { src: ASSET + "/landscape/27.jpeg" },
    { src: ASSET + "/landscape/28.jpeg" },
    { src: ASSET + "/landscape/29.jpg" },
    { src: ASSET + "/landscape/30.jpg" },
    { src: ASSET + "/landscape/31.jpg" },
    { src: ASSET + "/landscape/32.jpg" },
    { src: ASSET + "/landscape/33.jpg" },
    { src: ASSET + "/landscape/34.jpg" },
    { src: ASSET + "/landscape/35.jpg" },
    { src: ASSET + "/landscape/36.jpg" },
    { src: ASSET + "/landscape/37.jpg" },
    { src: ASSET + "/landscape/38.jpg" },
    { src: ASSET + "/landscape/39.jpg" },
  ],
  People: [
    { src: ASSET + "/people/1.jpg" },
    { src: ASSET + "/people/2.jpg" },
    { src: ASSET + "/people/3.jpg" },
    { src: ASSET + "/people/4.jpg" },
    { src: ASSET + "/people/5.jpg" },
    { src: ASSET + "/people/6.jpg" },
    { src: ASSET + "/people/7.jpg" },
    { src: ASSET + "/people/8.jpg" },
    { src: ASSET + "/people/9.jpg" },
    { src: ASSET + "/people/10.jpg" },
    { src: ASSET + "/people/11.jpg" },
    { src: ASSET + "/people/12.jpg" },
    { src: ASSET + "/people/13.jpg" },
    { src: ASSET + "/people/14.jpg" },
    { src: ASSET + "/people/15.jpg" },
    { src: ASSET + "/people/16.jpg" },
    { src: ASSET + "/people/17.jpg" },
    { src: ASSET + "/people/18.jpg" },
    { src: ASSET + "/people/19.jpg" },
    { src: ASSET + "/people/20.jpg" },
    { src: ASSET + "/people/21.jpg" },
    { src: ASSET + "/people/22.jpg" },
    { src: ASSET + "/people/23.jpg" },
    { src: ASSET + "/people/24.jpg" },
    { src: ASSET + "/people/25.jpg" },
    { src: ASSET + "/people/26.jpg" },
    { src: ASSET + "/people/27.jpg" },
    { src: ASSET + "/people/28.jpg" },
    { src: ASSET + "/people/29.jpg" },
    { src: ASSET + "/people/30.jpg" },
    { src: ASSET + "/people/31.jpg" },
    { src: ASSET + "/people/32.jpg" },
    { src: ASSET + "/people/33.jpg" },
    { src: ASSET + "/people/34.jpg" },
    { src: ASSET + "/people/35.jpg" },
    { src: ASSET + "/people/36.jpg" },
  ],
  "Film Photography": [
    { src: ASSET + "/dark/1.jpg" },
    { src: ASSET + "/dark/2.jpg" },
    { src: ASSET + "/dark/3.jpg" },
    { src: ASSET + "/dark/4.jpg" },
    { src: ASSET + "/dark/5.jpg" },
    { src: ASSET + "/dark/6.jpg" },
    { src: ASSET + "/dark/7.jpg" },
    { src: ASSET + "/dark/8.jpg" },
    { src: ASSET + "/dark/9.jpg" },
    { src: ASSET + "/dark/10.jpg" },
    { src: ASSET + "/dark/11.jpg" },
    { src: ASSET + "/dark/12.jpg" },
    { src: ASSET + "/dark/13.jpg" },
    { src: ASSET + "/dark/14.jpg" },
    { src: ASSET + "/dark/15.jpg" },
  ],
};

const categories = Object.keys(gallery);
let currentCategory = categories[0];
let currentIndex = 0;

/* ---------- Elements ---------- */
const filtersEl  = document.getElementById("filters");
const masonryEl  = document.getElementById("masonry");
const showingCat = document.getElementById("showingCat");
const showingCnt = document.getElementById("showingCount");

/* ---------- Reveal observer ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

/* ---------- Filters ---------- */
function renderFilters() {
  filtersEl.innerHTML = "";
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-pill" + (cat === currentCategory ? " active" : "");
    btn.textContent = cat;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", cat === currentCategory ? "true" : "false");
    btn.addEventListener("click", () => setCategory(cat));
    filtersEl.appendChild(btn);
  });
}

/* ---------- Gallery grid ---------- */
function renderGallery() {
  const items = gallery[currentCategory];
  masonryEl.innerHTML = "";
  showingCat.textContent = currentCategory;
  showingCnt.textContent = "· " + String(items.length).padStart(2, "0") + " frames";

  items.forEach((item, idx) => {
    const fig = document.createElement("figure");
    fig.className = "tile";
    fig.style.transitionDelay = Math.min(idx, 12) * 40 + "ms";

    const img = document.createElement("img");
    img.src = item.src;
    img.loading = "lazy";
    img.alt = currentCategory + " " + (idx + 1);

    const num = document.createElement("span");
    num.className = "tile-num";
    num.textContent = String(idx + 1).padStart(2, "0") + " / " + currentCategory;

    fig.appendChild(img);
    fig.appendChild(num);
    fig.addEventListener("click", () => openLightbox(idx));
    masonryEl.appendChild(fig);
    revealObserver.observe(fig);
  });
}

function setCategory(cat) {
  if (cat === currentCategory) return;
  currentCategory = cat;
  renderFilters();
  renderGallery();
}

/* ---------- Lightbox ---------- */
const lightbox   = document.getElementById("lightbox");
const lbImg      = document.getElementById("lbImg");
const lbCaption  = document.getElementById("lbCaption");

function openLightbox(idx) {
  currentIndex = idx;
  updateLightbox();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function updateLightbox() {
  const items = gallery[currentCategory];
  const item = items[currentIndex];
  lbImg.src = item.src;
  lbImg.alt = currentCategory + " " + (currentIndex + 1);
  lbCaption.textContent =
    currentCategory + " — " + (currentIndex + 1) + " / " + items.length;
}
function step(dir) {
  const len = gallery[currentCategory].length;
  currentIndex = (currentIndex + dir + len) % len;
  updateLightbox();
}

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", (e) => { e.stopPropagation(); step(-1); });
document.getElementById("lbNext").addEventListener("click", (e) => { e.stopPropagation(); step(1); });
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  else if (e.key === "ArrowLeft") step(-1);
  else if (e.key === "ArrowRight") step(1);
});

/* ---------- Header scroll + progress ---------- */
const header = document.getElementById("siteHeader");
const progress = document.getElementById("scrollProgress");
function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 30);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
}
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- Mobile menu ---------- */
const menuBtn = document.getElementById("menuBtn");
const navMobile = document.getElementById("navMobile");
menuBtn.addEventListener("click", () => {
  const open = navMobile.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});
navMobile.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navMobile.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

/* ---------- Footer year ---------- */
document.getElementById("footYear").innerHTML =
  "© " + new Date().getFullYear() + " Ape's Console";

/* ---------- Init ---------- */
renderFilters();
renderGallery();
onScroll();

/* ============================================================
   Hero cover animation — "Inked → Painted"
   Grayscale portrait strip that paints itself to life, loops
   seamlessly, and slowly cycles through the artattack series.
   Self-contained so it can't clash with the gallery code above.
   ============================================================ */
(function () {
  const strip = document.getElementById("heroStrip");
  const sheen = document.getElementById("heroSheen");
  if (!strip) return;

  const ART = "https://apesconsole.github.io/apesconsole-assets/images/artattack/";
  const POOL = [
    "5.jpg","12.jpg","17.jpg","35.jpg","38.jpg","33.jpg","4.jpg",
    "2.jpeg","3.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","11.jpeg","13.jpeg",
    "14.jpeg","15.jpeg","16.jpeg","18.jpeg","19.jpeg","20.jpeg","21.jpeg","22.jpeg",
    "24.jpeg","25.jpeg","26.jpeg","27.jpeg","28.jpeg","29.jpeg","30.jpeg","31.jpeg",
    "32.jpeg","34.jpeg","1.jpg","10.jpg","23.jpg","36.jpg","37.jpg","39.jpg",
  ].map((f) => ART + f);

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const countFor = () => (window.innerWidth < 560 ? 3 : window.innerWidth < 900 ? 4 : 6);

  let N = countFor(), ptr = 0, panels = [], nextRotate = 0;
  const nextSrc = () => POOL[ptr++ % POOL.length];

  function build() {
    strip.innerHTML = ""; panels = []; ptr = 0;
    strip.classList.toggle("kb", !reduce);
    for (let i = 0; i < N; i++) {
      const fig = document.createElement("figure");
      fig.className = "hero-panel"; fig.style.setProperty("--i", i);
      const src = nextSrc();
      const ink = new Image(); ink.className = "layer ink"; ink.alt = ""; ink.src = src;
      const col = new Image(); col.className = "layer colour"; col.alt = ""; col.src = src;
      fig.append(ink, col); strip.appendChild(fig);
      panels.push({ fig, ink, col });
    }
  }

  const FEATHER = 0.14;
  function applyProgress(p) {
    for (let i = 0; i < panels.length; i++) {
      let r = (p * (1 + FEATHER) - i / N) / (1 / N);
      r = r < 0 ? 0 : r > 1 ? 1 : r;
      const c = panels[i].col;
      if (r <= 0.001) { c.style.opacity = "0"; }
      else if (r >= 0.999) { c.style.opacity = "1"; c.style.setProperty("--a", "110%"); c.style.setProperty("--b", "120%"); }
      else { c.style.opacity = "1"; const s = r * 100; c.style.setProperty("--a", (s - 5) + "%"); c.style.setProperty("--b", (s + 11) + "%"); }
    }
  }

  function rotatePanel(idx) {
    const P = panels[idx], src = nextSrc();
    const swap = new Image(); swap.className = "swap"; swap.alt = ""; swap.src = src;
    const commit = () => {
      P.fig.appendChild(swap);
      requestAnimationFrame(() => { swap.style.opacity = "1"; });
      setTimeout(() => { P.ink.src = src; P.col.src = src; swap.remove(); }, 850);
    };
    if (swap.decode) swap.decode().then(commit).catch(commit); else swap.onload = commit;
  }

  const ON = 2500, HOLD = 1500, OFF = 1800, TROUGH = 500, CYCLE = ON + HOLD + OFF + TROUGH;
  let t0 = null, raf = null, rotated = false, base = 0;

  function frame(now) {
    if (t0 === null) t0 = now;
    const local = now - t0 - base;
    let p, sweeping = false, edge = 0;
    if (local < ON) { p = local / ON; sweeping = true; edge = p; }
    else if (local < ON + HOLD) { p = 1; if (!rotated) { rotatePanel(nextRotate++ % N); rotated = true; } }
    else if (local < ON + HOLD + OFF) { p = 1 - (local - ON - HOLD) / OFF; sweeping = true; edge = p; }
    else if (local < CYCLE) { p = 0; }
    else { base += CYCLE; rotated = false; p = 0; }
    applyProgress(p);
    if (sweeping) { const w = strip.clientWidth; sheen.style.opacity = "1"; sheen.style.transform = "translateX(" + (edge * (w + 80) - 40) + "px)"; }
    else { sheen.style.opacity = "0"; }
    raf = requestAnimationFrame(frame);
  }

  function start() {
    cancelAnimationFrame(raf); t0 = null; base = 0; rotated = false;
    if (reduce) { applyProgress(1); return; }
    raf = requestAnimationFrame(frame);
  }

  build(); start();

  /* ---- Controls ---- */
  const shuffleBtn = document.getElementById("heroShuffle");
  const motionBtn = document.getElementById("heroMotion");
  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
      panels.forEach((_, i) => setTimeout(() => rotatePanel(i), i * 90));
    });
  }
  if (motionBtn) {
    const setMotion = (on) => {
      motionBtn.classList.toggle("is-on", on);
      motionBtn.textContent = (on ? "◐ Motion: on" : "◐ Motion: off");
    };
    setMotion(!reduce && strip.classList.contains("kb"));
    motionBtn.addEventListener("click", () => setMotion(strip.classList.toggle("kb")));
  }

  let rz;
  window.addEventListener("resize", () => {
    clearTimeout(rz);
    rz = setTimeout(() => { const n = countFor(); if (n !== N) { N = n; build(); start(); } }, 200);
  });
})();

/* ============================================================
   v2 hero reveal — black vertical strips fling away + fade,
   exposing the animated banner underneath.
   ============================================================ */
(function () {
  const host = document.getElementById("heroReveal");
  if (!host) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { host.remove(); return; }

  const M = window.innerWidth < 560 ? 9 : window.innerWidth < 900 ? 13 : 18; // strip count
  const strips = [];
  for (let i = 0; i < M; i++) {
    const s = document.createElement("div");
    s.className = "reveal-strip";
    s.style.left = (i * 100 / M) + "%";
    s.style.width = (100 / M + 0.7) + "%";   // slight overlap hides seams
    host.appendChild(s);
    strips.push(s);
  }
  host.style.background = "transparent";       // strips now provide the black cover

  // ease-IN curve: each strip starts slow, then accelerates as it flies off + fades
  const ACCEL = "cubic-bezier(.45, 0, .85, .12)";

  // two rAFs guarantee the strips paint before we transition them away
  requestAnimationFrame(() => requestAnimationFrame(() => {
    let maxEnd = 0;
    strips.forEach((s) => {
      const dir  = Math.random() < 0.5 ? -1 : 1;          // left or right
      const dist = 90 + Math.random() * 70;               // 90–160vw, fully clears
      const dur  = 650 + Math.random() * 520;             // longer, so the slow→fast ramp reads
      const delay = Math.random() * 300;                  // random stagger
      maxEnd = Math.max(maxEnd, dur + delay);
      s.style.transition =
        "transform " + dur + "ms " + ACCEL + " " + delay + "ms, " +
        "opacity "   + dur + "ms " + ACCEL + " " + delay + "ms";
      s.style.transform = "translateX(" + (dir * dist) + "vw)";
      s.style.opacity = "0";
    });
    setTimeout(() => host.remove(), maxEnd + 120);
  }));
})();

/* ============================================================
   v3 title split — as you scroll down from the banner, the
   "APE'S CONSOLE" title breaks into 3 segments that drift
   vertically (random up/down), slowly, tracking scroll.
   ============================================================ */
(function () {
  const title = document.getElementById("heroTitle");
  if (!title) return;
  const segs = Array.prototype.slice.call(title.querySelectorAll(".hero-seg"));
  if (!segs.length) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // random vertical drift factor per segment (a slow fraction of scroll distance),
  // random up/down direction — assigned once on load.
  const factors = segs.map(function () {
    const mag = 0.5 + Math.random() * 0.6;            // 0.5–1.1 × scroll → clearly visible drift
    return (Math.random() < 0.5 ? -1 : 1) * mag;
  });
  // make sure they don't all go the same way, so the title visibly breaks apart
  if (factors.every((f) => f > 0) || factors.every((f) => f < 0)) factors[0] = -factors[0];

  let ticking = false;
  function update() {
    const y = window.scrollY || window.pageYOffset || 0;
    for (let i = 0; i < segs.length; i++) {
      segs[i].style.transform = "translateY(" + (y * factors[i]).toFixed(2) + "px)";
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

/* ============================================================
   v3 footer assembly — the counterpart to the hero split.
   As the user scrolls to the very bottom, the right-side
   "APESCONSOLE" watermark's 3 segments slowly arrange together.
   ============================================================ */
(function () {
  const wm = document.querySelector(".contact-watermark");
  if (!wm) return;
  const segs = Array.prototype.slice.call(wm.querySelectorAll(".wm-seg"));
  if (!segs.length) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // scattered offsets (vertical, along the writing direction), random per segment
  const amps = segs.map(function () {
    return (70 + Math.random() * 90) * (Math.random() < 0.5 ? -1 : 1);  // ±70–160px apart
  });

  let ticking = false;
  function update() {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const y = window.scrollY || window.pageYOffset || 0;
    const distFromBottom = maxScroll - y;
    const R = window.innerHeight;                 // assemble across the last viewport of scroll
    let p = 1 - distFromBottom / R;               // 0 = scattered, 1 = fully together (at bottom)
    p = p < 0 ? 0 : p > 1 ? 1 : p;
    if (reduce) p = 1;
    for (let i = 0; i < segs.length; i++) {
      segs[i].style.transform = "translateY(" + ((1 - p) * amps[i]).toFixed(1) + "px)";
    }
    wm.style.opacity = (0.12 + p * 0.88).toFixed(3);   // resolves into view as it assembles
    ticking = false;
  }
  const onScroll = function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
})();
