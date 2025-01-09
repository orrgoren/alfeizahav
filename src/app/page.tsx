import { ShortPost } from "@/lib/interface";
import { client } from "@/sanity/lib/client";
import PostCard from "@/components/post-card";

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

export default async function Home() {
  const data: ShortPost[] = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden my-6 gap-5 p-8">
      {data.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  );
}

export const revalidate = 60;
