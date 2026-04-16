# Wedding Invitation Website

A minimal, premium wedding invitation website built with React, Vite, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build outputs to the `dist/` folder.

---

## Hosting on Render

1. Push your code to a GitHub repository.
2. Go to [render.com](https://render.com) and create a **Static Site**.
3. Connect your GitHub repo.
4. Configure the build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Under **Redirects/Rewrites**, add a rule to support client-side routing:
   - **Source:** `/*`
   - **Destination:** `/index.html`
   - **Action:** `Rewrite`
6. Click **Deploy**. Your site will be live at `https://your-site.onrender.com`.

---

## Hosting on Netlify

1. Push your code to a GitHub repository.
2. Go to [netlify.com](https://netlify.com) and click **Add new site → Import an existing project**.
3. Connect your GitHub repo.
4. Configure the build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Click **Deploy site**.

To support client-side routing, create a `public/_redirects` file with:

```
/*    /index.html   200
```

Your site will be live at `https://your-site.netlify.app`.
