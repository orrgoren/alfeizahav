import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/search?q=', '/admin/', '/api/'],
    },
    sitemap: ['https://alfeizahav.blog/sitemap.xml'],
  };
}
