# Showrov Azam — research portfolio

Next.js site with Tailwind CSS and Framer Motion (Oxford blue / white theme).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Copy & credentials:** edit [`src/content/site.ts`](src/content/site.ts) (publications, experience, education, certifications).
- **Headshot:** replace [`public/profile.svg`](public/profile.svg) or point `Hero.tsx` at your own image under `public/`.
- **Resume PDF:** add `public/resume.pdf` so the navbar “Download resume” link works.

## Build

```bash
npm run build
npm start
```

Deploy on [Vercel](https://vercel.com/new) or any Node host that supports Next.js.
