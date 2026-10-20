# Branding and technical SEO release

## Implemented
- Supplied botanical logo and Marta portrait, optimized brand assets, favicon and social image.
- Static HTML generated for every content route, with route-specific metadata and JSON-LD.
- Vercel clean URLs instead of catch-all SPA rewrite; static 404 document for missing URLs/assets.
- Generated sitemap from content routes, without unverified modification dates.
- Sanitized Markdown links; valid branded image fallbacks where original images were missing.
- Removed unsupported structured product aggregate ratings and credentials, corrected author-profile attribution.
- Affiliate link disclosures and reduced misleading manufacturer/shipping boilerplate.
- Automated build, rendering, branding, Markdown, schema and transparency regression checks.

## Not completed by code changes
- Marta must confirm professional credentials, external contributors' identities/consent, actual authorship, and medical review of doses, contraindications and efficacy claims. No review dates or medical sources were invented.
- Product-comparison methodology and individual affiliate destinations need owner/editor review.
- Do not consolidate or delete overlapping content until search/backlink evidence is reviewed.
- Search Console, field Core Web Vitals and traffic/ranking measurement remain pending. No ranking/performance improvement is promised.
- Existing full-project lint baseline: five errors in UI types, analytics declaration, dormant backend and Tailwind config. Release tests/type checks are separate from this baseline.

## Release verification
Run `npm run build`, `node --test --test-concurrency=1 tests/*.test.mjs`, and both TypeScript configs. Verify production HTML contains actual content before JS; valid deep links return 200, nonexistent URLs and assets return 404, and www redirects preserve path/query. Inspect desktop/mobile hydration and contact alternatives. Do not submit contact messages during smoke tests.
