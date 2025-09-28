import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/search?q=', '/admin/', '/api/'],
    },
    sitemap: ['https://www.alfeizahav.blog/sitemap.xml'],
  };
}
