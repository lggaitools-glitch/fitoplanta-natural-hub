# FitoPlantaMed

Content site about phytotherapy and medicinal plants — articles, product pages, and
silo pages — live at [fitoplantamed.com](https://fitoplantamed.com).

## Stack

- Vite + React + TypeScript
- shadcn-ui + Tailwind CSS
- Supabase (`send-contact-email` edge function via Resend)
- Prepared for Vercel deployment (see `vercel.json`); production migration is pending

## Run locally

Requires Node.js and npm.

```sh
npm install
cp .env.example .env   # then fill in the Supabase values
npm run dev            # http://localhost:8080
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Environment

| Variable | Purpose |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable (anon) key |
| `VITE_SUPABASE_PROJECT_ID` | Supabase project ref |

`.env` is git-ignored. The edge function needs `RESEND_API_KEY` set as a Supabase
secret (never in the repo).

## Layout

- `src/pages`, `src/components` — app UI
- `src/data` — article, plant, and product content
- `public/sitemap.xml`, `public/robots.txt` — update the sitemap when adding content
- `supabase/` — config and edge functions
- `docs/` — content and video plans
- `ebook/`, `video/` — ebook generator and video production scripts

## Deploy

After the Vercel Git integration is configured with `main` as its production branch,
pushing to `main` will trigger a production deploy. That setup is not yet verified.
