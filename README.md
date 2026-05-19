# Optiiimum Website

The official static website for **Optiiimum** — a digital growth agency building brands, content systems, performance media, and personal-brand programs across Dubai, Cairo, and Alexandria.

Bilingual (English + Arabic) with a light/dark theme that follows the visitor's local time.

---

## What's inside

Top-level pages (each is a standalone HTML file):

| Page                | File                          |
|---------------------|-------------------------------|
| Home (entry)        | `index.html` → `Home.html`    |
| About               | `About.html`                  |
| Services            | `Services.html`               |
| Case Studies        | `CaseStudies.html` (+ 16 detail pages: `case-study-*.html`) |
| Branding portfolio  | `branding.html`               |
| Branding detail     | `branding-project.html?slug=…` |
| Joker Program       | `JokerProgram.html`           |
| Courses             | `Courses.html` (+ `course.html` template) |
| Clients             | `Clients.html`                |
| Blog                | `Blog.html` (+ `blog-post.html` template) |
| Ambassadors         | `Ambassadors.html`            |
| Careers             | `Careers.html`                |
| Internships         | `internships.html`            |
| Contact             | `Consultation.html`           |
| FAQ                 | `FAQ.html`                    |
| Privacy             | `PrivacyPolicy.html`          |
| Terms               | `TermsConditions.html`        |

`contacts.html` is a redirect alias that points to `Consultation.html` (used by the "Contacts & FAQs" nav tab).

`BrandingProjects.html` is a redirect alias that points to `branding.html`.

### Folder layout

```
optiiimum-website/
├── index.html
├── Home.html
├── About.html
├── Services.html
├── CaseStudies.html
├── branding.html
├── branding-project.html
├── branding-projects-data.js
├── JokerProgram.html
├── Courses.html
├── course.html
├── Clients.html
├── Blog.html
├── blog-post.html
├── Ambassadors.html
├── Careers.html
├── internships.html
├── Consultation.html
├── FAQ.html
├── PrivacyPolicy.html
├── TermsConditions.html
├── case-study-*.html            (16 case-study detail pages)
├── home.css                      (shared global stylesheet)
├── nav-slider.js                 (paged primary-nav slider)
├── social-footer.js              (shared social bar + footer wiring)
└── assets/
    ├── branding/
    │   ├── deux/                 (slide-01.jpg … slide-10.jpg)
    │   ├── asala-authentic/
    │   ├── wael-saidy/
    │   ├── youssef-sayed/        (slide-01.jpg … slide-08.jpg)
    │   ├── siwa-natura/
    │   ├── optiiimum/
    │   ├── juicy/
    │   ├── healexia/
    │   ├── bassant-habash/
    │   └── alaa-khalil/
    ├── culture/                  (team/culture photography)
    ├── clients/                  (client logos)
    ├── courses/                  (course covers and instructors)
    └── …
```

All asset paths in the HTML are **relative** so the site works on GitHub Pages without a base URL.

---

## Run it locally

No build step required. Just open `index.html` in a browser, or serve the folder with any static server:

```bash
# Python 3
python3 -m http.server 8080

# Node (with `npx serve`)
npx serve .

# VS Code: Live Server extension
```

Then visit `http://localhost:8080`.

---

## Deploy to GitHub Pages

1. Create a new public GitHub repository (e.g. `optiiimum-website`).
2. Push the entire project folder to the repo's default branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/optiiimum-website.git
   git push -u origin main
   ```
3. In the repo on GitHub, go to **Settings → Pages**.
4. Under **Source**, pick **Deploy from a branch**.
5. Pick branch `main` and folder `/ (root)`. Save.
6. Wait ~1 minute. Your site will be live at:
   `https://<your-username>.github.io/optiiimum-website/`

GitHub Pages will serve `index.html` automatically, which redirects to `Home.html`.

### Custom domain (optional)
- Add your domain in **Settings → Pages → Custom domain**.
- Create a `CNAME` file at the repo root containing the domain.
- Add a `CNAME` DNS record pointing the domain at `<your-username>.github.io`.

---

## Editing content

### Edit copy or layout on any page
Open the `.html` file in any editor. Each page uses two parallel `<span>` versions of every string:

```html
<span class="i18n-en">English copy</span>
<span class="i18n-ar">النص العربي</span>
```

Edit either or both — the page hides one based on the active language.

### Swap an image
Just replace the file at the same path inside `assets/…`. Don't rename it unless you also update the HTML.

### Add a new branding project
1. Drop 8–10 slide images into `assets/branding/<slug>/` named `slide-01.jpg`, `slide-02.jpg`, … .
2. Open `branding-projects-data.js` and append an entry to `window.BRANDING_PROJECTS` with:
   - `slug` (matches the folder name)
   - `titleEn` / `titleAr`
   - `industryEn` / `industryAr`
   - `folder` (e.g. `"branding/<slug>"`)
   - `cover` (usually `"slide-01.jpg"`)
   - `slidePrefix` (usually `"slide-"`)
   - `slideCount`
   - `descEn` / `descAr`
   - `tagsEn` / `tagsAr`

The card appears on `branding.html` automatically. The detail page renders at `branding-project.html?slug=<slug>`.

### Update primary navigation
The top nav lives inside each HTML file under `<nav class="primary-nav-wrap">`. To change every page at once, find and replace the `<div class="nav-track">` block across all files.

### Add a new page
1. Copy any existing page (e.g. `Careers.html`) and rename it.
2. Update the `<title>`, `<meta description>`, `<h1>`, and content.
3. Add a link to it from the primary nav and from the footer.

---

## SEO

Each page has its own `<title>`, `<meta name="description">`, and Open Graph tags. When duplicating a page, always replace these so the new page is indexed correctly.

---

## Browser support

Targets modern evergreen browsers (Chrome, Safari, Firefox, Edge — last 2 versions). No IE 11.

---

## License

Copyright © Optiiimum. All rights reserved.
