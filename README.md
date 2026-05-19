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

## Legal consistency checklist

The App Store Connect privacy answers for Wardrobe must remain consistent with the published
Privacy Policy.

When Wardrobe changes any of the following, update both the legal pages and App Store Connect:

- Data collection
- Sign in providers
- Backend providers
- Analytics
- Crash reporting
- In-app purchases
- Subscriptions
- WeatherKit usage
- Location usage
- Account deletion
- Backup/export behavior

TODO for the iOS app: make sure Weather attribution and data source links are displayed wherever
WeatherKit data is shown.

## Legal Note

These pages are a practical publication baseline. They do not replace professional legal advice.
