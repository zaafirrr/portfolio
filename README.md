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
index.html                The homepage (all sections)
css/style.css             Styling: colours, fonts, layout, light/dark mode
js/main.js                Project list, skills list and copy-email button
projects/_template.html   Template for writing up a project
assets/favicon.svg        Browser tab icon (put screenshots here too)
.nojekyll                 Tells GitHub Pages to serve the files as they are
README.md                 This file
```

The folder structure matters. The page looks for `css/style.css` and `js/main.js`, so if those files sit in the wrong place the site loads with no styling.

## Preview on your computer

Download or clone the repository and double-click `index.html` to open it in a browser.

If you use VS Code, the **Live Server** extension refreshes the page every time you save.

## Common edits

### Add a project to the homepage
Open `js/main.js` and find the `PROJECTS` list. Copy one `{ ... }` block and edit it:

```js
{title:"Linux security lab", cat:"IT & Infrastructure", status:"wip", kind:"Personal project",
 desc:"One or two sentences about the project.",
 tags:["Ubuntu","Linux"]},
```

- `status`: `"done"` (Completed), `"wip"` (In progress) or `"plan"` (Planned)
- `cat`: one of `IT & Infrastructure`, `Cybersecurity`, `Cloud & Microsoft`, `AI & Automation`, `Data & Programming`

### Write up a project in full
1. Copy `projects/_template.html` and rename the copy, e.g. `projects/linux-lab.html`
2. Fill in the ten sections: overview, problem, objectives, tools, my role, method, testing, results, evidence and links
3. In `js/main.js`, add `page:"projects/linux-lab.html"` to that project. Its title becomes a link.

### Add or change a skill
Edit the `SKILLS` list in `js/main.js`:
- `w` = professional experience
- `s` = studied (BTEC)
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
