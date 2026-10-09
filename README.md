# Zaafir — IT Portfolio

My personal portfolio website, covering my experience, skills, certifications and projects across IT support, Microsoft technologies, cybersecurity and AI and automation.

**Live site:** https://zaafirrr.github.io/portfolio/

[LinkedIn](https://www.linkedin.com/in/zaafir-exe/) · [GitHub](https://github.com/zaafirrr)

---

## About this site

- Built with plain **HTML, CSS and JavaScript**, with no frameworks and no build step
- Hosted for free on **GitHub Pages**
- Works on desktop, tablet and mobile
- Supports light and dark mode automatically
- Projects are labelled **Completed**, **In progress** or **Planned**
- Workplace examples are anonymised

## Files

```
index.html                The homepage
projects.html             The All Projects page (filters by year, category, who with)
css/style.css             Styling: colours, fonts, layout, light/dark mode, animations
js/projects-data.js       All projects — add new ones here
js/main.js                Certifications, skills, and everything that makes the site work
js/i18n.js                French translations
js/terminal.js            The terminal (press / on the site) and its commands
js/dmarc.js               The live DMARC checker
projects/_template.html   Template for a full project write-up (optional)
assets/favicon.svg        Browser tab icon
assets/logos/             Company logos (see assets/logos/README.md for file names)
.nojekyll                 Tells GitHub Pages to serve the files as they are
README.md                 This file
```

The folder structure matters. If a file sits in the wrong folder, the page loads without its styling or content.

## Preview on your computer

Download or clone the repository and double-click `index.html` to open it in a browser.

If you use VS Code, the **Live Server** extension refreshes the page every time you save.

## Common edits

### Add a project
Open `js/projects-data.js`, copy one `{ ... }` block and edit it. Newest projects
appear first; the homepage shows the latest 3 and `projects.html` shows them all.

- `date`: `"YYYY-MM"`
- `status`: `"done"`, `"wip"`, `"ongoing"` or `"plan"`
- `cat`: `ai`, `sec`, `cloud`, `infra`, `data` or `web`
- `with`: `personal`, `client`, `zinath`, `apprenticeship` or `education`
- `repo`: a GitHub link (optional) — adds the code button to the card

### Add a certification
Open `js/main.js`, find the `CERTS` list near the top and copy one block.

### Add or change a skill
Edit the `SKILLS` list in `js/main.js`:
- `w` = professional experience
- `s` = studied
- `l` = currently learning

### Change text
Experience, certifications, education and the intro are all in `index.html`. Edit the text between the tags.

### Change colours
Edit the variables at the top of `css/style.css`. `--accent` is the blue.

## Updating the live site

**On github.com:** open a file, click the pencil icon, make the change, then click **Commit changes**. The site updates within a minute or two. Press Ctrl+F5 to see it.

**Uploading new files:** use **Add file → Upload files**. If GitHub drops the folder names, open the file, click the pencil icon and type the folder name and a slash before the filename (e.g. `css/`) to move it into place.

## Rules for this repository

This repository is **public**. Never commit:
- passwords, API keys or secrets
- client names, tenant IDs or internal configuration
- screenshots from work systems or customer data

---

© 2026 Zaafir
