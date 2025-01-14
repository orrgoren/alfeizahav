import { ShortPost } from '@/lib/interface';
import { client } from '@/sanity/lib/client';
import PostCard from '@/components/post-card';
import { Metadata } from 'next';
import Head from 'next/head';

async function getData() {
  const query = `
    *[_type == 'post'] | order(_createdAt desc) {
      title,
      "currentSlug": slug.current,
      description,
      author->,
      image,
      publishedAt
    }
  `;

  return await client.fetch(query);
}

export const metadata: Metadata = {
  title: 'אלפיזהב - בלוג השקעות, טכנולוגיה וחיים',
  description:
    'אלפיזהב - בלוג שמשלב השקעות חכמות, טכנולוגיה פורצת דרך ותובנות לחיים עם ערך. כי העתיד שלכם מתחיל כאן!',
  robots: 'index, follow',
  keywords:
    'בלוג, אלפיזהב, השקעות, טכנולוגיה, blog, alfeizahav, tech, technology, investments, stock market',
  openGraph: {
    siteName: 'אלפיזהב - בלוג השקעות, טכנולוגיה וחיים',
    locale: 'he',
    type: 'website',
    description:
      'אלפיזהב - בלוג שמשלב השקעות חכמות, טכנולוגיה פורצת דרך ותובנות לחיים עם ערך. כי העתיד שלכם מתחיל כאן!',
  },
};

export default async function Home() {
  const data: ShortPost[] = await getData();

  return (
    <div>
      <Head>
        <link rel="canonical" href="https://www.alfeizahav.blog" />
      </Head>
      <div className="my-6 grid grid-cols-1 gap-5 overflow-hidden p-8 md:grid-cols-2">
        {data.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </div>
    </div>
  );
}

export const revalidate = 60;
