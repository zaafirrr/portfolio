# Zaafir — Portfolio

My personal portfolio website: experience, skills, certifications and projects.
Live at **https://zaafirrr.github.io**

Plain HTML, CSS and JavaScript. No build step, no frameworks.

## Files

```
index.html            The homepage (all the sections)
css/style.css         All styling: colours, fonts, layout, light/dark mode
js/main.js            The project list, skills list and copy-email button
projects/_template.html   Copy this to write up a project
assets/favicon.svg    Browser tab icon (put screenshots here too)
.nojekyll             Tells GitHub Pages to serve the files as they are
```

## Preview on your computer

Double-click `index.html` to open it in your browser. That's all you need.

If you use VS Code, the **Live Server** extension reloads the page every time you save.

## Common edits

**Add a project to the homepage** — open `js/main.js`, copy one `{ ... }` block in the
`PROJECTS` list and change the text. Set `status` to `"done"`, `"wip"` or `"plan"`.

**Write up a project** — copy `projects/_template.html`, rename it
(e.g. `projects/linux-lab.html`), fill in the sections, then add
`page: "projects/linux-lab.html"` to that project in `js/main.js`. Its title becomes a link.

**Add or change a skill** — edit the `SKILLS` list in `js/main.js`.
`w` = professional experience, `s` = studied, `l` = currently learning.

**Change the text** in experience, certifications or the intro — edit `index.html` directly.

**Change colours** — edit the variables at the top of `css/style.css`
(`--accent` is the blue).

## Publish an update

Edit the files, then commit and push to GitHub (or upload the changed files on
github.com). The live site updates within a minute or two.

## Rules for this repo

This repository is public. Never commit passwords, API keys, client names,
tenant details, internal screenshots or customer data.
