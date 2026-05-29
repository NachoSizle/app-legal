export const SUPPORT_EMAIL = 'developer.nacho@gmail.com'

export const LAST_UPDATED = 'May 29, 2026'
export const LAST_UPDATED_ISO = '2026-05-29'

export const APPS = [
  {
    slug: 'wardrobe-studio',
    name: 'Wardrobe Studio',
    description: 'Privacy, terms, and support resources for Wardrobe Studio.',
  },
  {
    slug: 'gymmate',
    name: 'GymMate',
    description: 'Privacy, terms, and support resources for GymMate.',
  },
] as const

export type AppSlug = (typeof APPS)[number]['slug']

export function getAppBySlug(slug: AppSlug) {
  const app = APPS.find((item) => item.slug === slug)

  if (!app) {
    throw new Error(`Unknown app slug: ${slug}`)
  }

  return app
}
