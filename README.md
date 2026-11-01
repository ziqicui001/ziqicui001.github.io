# Ziqi Cui — Personal Website

Static academic homepage (plain HTML/CSS/JS, no build step), hosted on GitHub Pages.

## Structure

```
index.html           Home: about, education/experience, honors, news, selected pubs & projects
publications.html    All publications + conference presentations
projects.html        Research projects (with image galleries), previous works, lab activities
assets/js/data.js    ← ALL CONTENT lives here (news, publications, talks, projects, CV lists)
assets/js/main.js    Rendering logic
assets/css/style.css Styles
```

## Updating content

- **Add news / a paper / a project:** edit `assets/js/data.js` and copy an existing entry.
- **Bio text:** edit the "About" section in `index.html`.
- **Images:** put files in `assets/img/` and reference them as `"assets/img/name.jpg"`
  (Wix media ids like `"594421_xxx~mv2.jpg"` also work while the old Wix site exists).

## Preview locally

```
python -m http.server 8000
```
then open http://localhost:8000
