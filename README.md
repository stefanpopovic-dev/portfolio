## Portfolio

A personal portfolio built with [Next.js](https://nextjs.org) and Tailwind CSS, ready to deploy on [Vercel](https://vercel.com).

### Personalize it

All editable content lives in one place: [`src/data/site.ts`](./src/data/site.ts). Your name and details, education, experience, skills, and projects are all there, and the pages pick up changes automatically.

To add photos to a project:

1. Put the images in `public/projects/<project-slug>/`.
2. In `site.ts`, set the project's `cover` (shown on the home page) and add rows to its `gallery` (shown on the project page). Images in the same row sit side by side at equal height.

Projects without photos show a "Photos coming soon" placeholder.

A project can also have a `writeup` (a few short paragraphs, shown instead of a highlights list) and a `video` (shown muted and looping above the photos). Keep videos short and small: an H.264 `.mp4` with no audio track autoplays in every major browser.

### Develop locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it.

### Deploy on Vercel

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — leave the defaults and click **Deploy**.

Every push to the main branch will automatically redeploy.
