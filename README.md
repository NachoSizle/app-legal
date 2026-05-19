# App Legal

Public legal and support pages for Sizle apps.

Live site:

- https://nachosizle.github.io/app-legal/

Wardrobe:

- https://nachosizle.github.io/app-legal/apps/wardrobe/privacy-policy/
- https://nachosizle.github.io/app-legal/apps/wardrobe/terms-of-use/
- https://nachosizle.github.io/app-legal/apps/wardrobe/support/

## Edit Content

Wardrobe pages live in:

```txt
src/pages/apps/wardrobe/
```

Shared app metadata and support email live in:

```txt
src/legal-config.ts
```

Brand icon:

```txt
public/sizle-icon.png
```

## Local Check

```bash
bun install
bun run build
```

For local preview:

```bash
bun run dev
```

## Deploy

Push to `main`.

GitHub Actions publishes the site automatically to GitHub Pages.

## Legal Note

These pages are a practical publication baseline. They do not replace professional legal advice.
