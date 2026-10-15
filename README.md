# Zaafir — IT Portfolio

My personal portfolio website: experience, skills, certifications, projects and a small security lab.

**Live site:** https://zaafirrr.github.io/portfolio/

[LinkedIn](https://www.linkedin.com/in/zaafir-exe/) · [GitHub](https://github.com/zaafirrr)

---

## About this site

- Plain **HTML, CSS and JavaScript**: no frameworks, no build step
- Hosted free on **GitHub Pages**
- English and French (button in the top bar)
- Light and dark themes, desktop and mobile layouts
- Workplace examples are anonymised

## Files

```
index.html                 Homepage
projects.html              All Projects (year ledger with filters)
certifications.html        All Certifications (with filters)
css/style.css              All styling and design tokens
js/main.js                 Core: skills, certificates, clock/weather, pop-ups
js/i18n.js                 English / French text
js/projects-data.js        PROJECTS list  ← edit to add projects
js/learning-data.js        LEARNING list  ← edit the Learning section and the "Currently" strip
js/terminal.js             Terminal (press / on the site)
js/phishing.js             Lab: Spot the Phish
js/dns.js                  Lab: DNS & Email Checker (live lookups)
js/ca.js                   Lab: Conditional Access Builder
js/triage.js               Lab: Ticket Triage Game
js/interactions.js         Interactions (cursor, tilt and similar)
js/motion.js               Scroll and entrance motion
assets/                    Favicon, share image (og.png), CVs, logos
projects/_template.html    Optional template for a full project write-up
.nojekyll                  Tells GitHub Pages to serve files as they are
```

Keep the folder structure as it is. If a file sits in the wrong folder the page loads without styling or content.

## Preview on your computer

Double-click `index.html`, or in the folder run `python3 -m http.server 8000` and open http://localhost:8000.
(Weather and the DNS checker need internet.)

## Common edits

**Add a project** — `js/projects-data.js`: copy one `{ ... }` block. Fields: `date` ("YYYY-MM"), `status` (`done`, `wip`, `ongoing`, `plan`), `cat`, `with`, `repo` (optional), plus English and French text.
The newest `wip` project appears in the "Currently" strip automatically.

**Add a certification** — `js/main.js`: copy a block in the `CERTS` list (skills shown in the pop-up come from `CERT_SKILLS` in the same file).

**Add or change a skill** — `js/main.js`, `SKILLS` list: `w` = work experience, `s` = studied, `l` = learning.
To link a skill to projects, add it to `SKILL_PROJECTS` (skill name → project titles). Only link projects that really used it.

**Update Learning / Currently** — `js/learning-data.js`. Change the dates, progress and steps, and set `LEARNING_UPDATED`.

**City pop-ups (London, Paris, Dubai, Pondichéry)** — `js/main.js`: `PLACES` (text), `WX_CITIES` (time zone and coordinates).

**Contact email** — set in `js/main.js` (`MAIL`), kept out of the page source on purpose. Do not write it into the HTML files.

**Colours** — variables at the top of `css/style.css`.

## Fonts

Headings use **Archivo** and body text uses **Instrument Sans**, with **JetBrains Mono** for small technical text. All three load from Google Fonts via the `<link>` in the `<head>` of each page, so there's nothing to install. To change them, edit `--display` and `--body` at the top of `css/style.css` and update that `<link>`.

## Updating the live site

On github.com: open a file, click the pencil, edit, **Commit changes**. The site updates in a minute or two (Ctrl+F5 to refresh).
From your computer, see the steps in the handover message: `git add . && git commit -m "..." && git push`.

## Rules for this repository

This repository is **public**. Never commit passwords, API keys, client names, tenant IDs, internal configuration or screenshots from work systems.

---

© 2026 Zaafir
