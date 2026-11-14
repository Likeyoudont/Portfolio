# Issam Abdelhak — Portfolio

Personal portfolio built with React (Vite), plain CSS and Motion for animations.

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
npm run lint     # check the code with oxlint
```

## Where things are

| What you want to change | File |
|---|---|
| Name, bio, email, social links, skills, languages, education | `src/data/profile.js` |
| Projects (add / edit / remove) | `src/data/projects.js` |
| Profile photo | `src/assets/profile.jpg` |
| Colors, fonts, buttons (whole site) | `src/index.css` (CSS variables at the top) |
| A single section | `src/components/<Section>.jsx` + `.css` |
| Page title, SEO tags, fonts | `index.html` |

## Deploy

Push to GitHub, then import the repo on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
Build command: `npm run build`, output folder: `dist`.
