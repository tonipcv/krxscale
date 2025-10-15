import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://krxscale.com'

  const routes: string[] = [
    '/',
    '/scale',
    '/careers',
    '/66',
    '/blog',
    '/blog/krx-labs-local-payments-global-settlement',
    '/blog/ndr',
    '/blog/how-to-accept-pix-as-a-foreign-company',
    '/blog/how-to-sell-in-brazil-without-a-local-entity',
    '/blog/pix-spei-pse-mpesa-how-they-work',
  ]

  const now = new Date()

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1.0 : 0.8,
  }))
}
