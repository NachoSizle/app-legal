# App Legal

Static legal and support pages for iOS apps, published with GitHub Pages.

This project is intentionally small: Astro generates static HTML, Bun manages dependencies and scripts, and GitHub Actions deploys the `dist` output to GitHub Pages.

## Stack

- Astro
- Bun
- GitHub Pages
- GitHub Actions

## Install

```bash
bun install
```

## Run Locally

```bash
bun run dev
```

## Build

```bash
bun run build
```

## Preview Production Build

```bash
bun run preview
```

## Current URLs

After deployment, the Wardrobe pages are available at:

- `https://nachosizle.github.io/app-legal/`
- `https://nachosizle.github.io/app-legal/apps/wardrobe/privacy-policy/`
- `https://nachosizle.github.io/app-legal/apps/wardrobe/terms-of-use/`
- `https://nachosizle.github.io/app-legal/apps/wardrobe/support/`

## Add a New App

1. Add the app entry to `src/legal-config.ts`.
2. Create a new folder under `src/pages/apps/` using a lowercase slug, for example:

   ```txt
   src/pages/apps/my-new-app/
   ```

3. Copy the three existing app pages:

   ```txt
   privacy-policy.astro
   terms-of-use.astro
   support.astro
   ```

4. Update the app lookup, app name, and copy to match the real app.
5. Run `bun run build` before publishing.

## Update an App

The app directory entry is configured in `src/legal-config.ts`:

```ts
export const APPS = [
  {
    slug: 'wardrobe',
    name: 'Wardrobe',
    description: 'Privacy, terms, and support resources for Wardrobe.',
  },
] as const
```

Change the `slug`, folder name, and visible `name` together when an app slug changes.

The support email is also centralized there:

```ts
export const SUPPORT_EMAIL = 'developer.nacho@gmail.com'
```

## Publish to GitHub Pages

1. Create a public GitHub repository named `app-legal`.
2. Push this project to the repository's `main` branch.
3. In GitHub, open the repository settings and go to **Pages**.
4. Set the source to **GitHub Actions**.
5. Push to `main` or run the **Deploy to GitHub Pages** workflow manually.

The Astro config is already prepared for GitHub Pages:

```js
export default defineConfig({
  site: 'https://nachosizle.github.io',
  base: '/app-legal',
})
```

## Legal Note

These pages are a practical baseline for app publication and support workflows. They do not replace professional legal advice. If an app uses sensitive data, minors, precise location, user-generated content, login, analytics, crash reporting, subscriptions, or in-app purchases, review and adapt the text for that specific app.
