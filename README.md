# 🦍 Ape's Console Website

> A visual journal — photography, painting & film by Soumitra Nath.

A **static, dependency-free** portfolio: plain HTML, CSS and vanilla JavaScript.
No build step, no framework. Live at **[www.apesconsole.com](https://www.apesconsole.com)**.

---

## 🚀 Features

- Dark, cinematic editorial design with bold Archivo / Space Mono type
- Animated hero: a grayscale portrait strip that "paints itself to life" and cycles the collection
- Filterable gallery with a smooth expand modal (lightbox)
- Scroll-driven title split and a footer watermark that re-assembles
- Fully responsive — phones, tablets, large & short screens
- Respects `prefers-reduced-motion`

Image/video assets are hosted in a separate repo:
[apesconsole-assets](https://github.com/apesconsole/apesconsole-assets).

---

## 📂 Project structure

```text
index.html      # markup
styles.css      # all styling
app.js          # gallery, lightbox, hero animation, scroll effects
CNAME           # custom domain (www.apesconsole.com)
favicon.ico
.github/workflows/deploy.yml   # copies these files to the gh-pages branch
```

---

## 🖥 Run locally

No install needed — just serve the folder:

```bash
git clone https://github.com/apesconsole/apesconsole-website.git
cd apesconsole-website
python -m http.server 8080      # then open http://localhost:8080
```

(or open `index.html` directly in a browser).

---

## 🌐 Deploy

Pushing to **`master`** triggers `.github/workflows/deploy.yml`, which copies the
site files to the **`gh-pages`** branch. GitHub Pages serves `gh-pages` at the
custom domain. No manual build or upload required.
