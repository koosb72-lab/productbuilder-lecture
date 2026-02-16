# ProductBuilder Lecture

Static HTML/CSS/JS project.

## Cloudflare Pages (GitHub Integration)

Use Cloudflare Pages with GitHub so deployment works on every `main` push without local API tokens.

1. In Cloudflare Dashboard, go to `Workers & Pages` -> `Create` -> `Pages` -> `Connect to Git`.
2. Select repository: `koosb72-lab/productbuilder-lecture`
3. Configure build:
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: *(leave empty)*
   - Build output directory: `.`
   - Root directory: `/` (repo root)
4. Save and deploy.

After first setup, every push to `main` triggers automatic deployment.
