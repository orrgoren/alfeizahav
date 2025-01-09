import { format, formatRelative } from "date-fns";
import { he } from "date-fns/locale";

import { client } from "@/sanity/lib/client";
import { Post } from "@/lib/interface";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Avatar from "@/components/avatar";

async function getBlog(slug: string) {
  const query = `
    *[_type == "post" && slug.current == '${slug}'] {
      "currentSlug": slug.current,
      title,
      body,
      image,
      author->,
      publishedAt
    }[0]
  `;

  return await client.fetch(query);
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: Post = await getBlog(slug);

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-4xl text-center leading-8 font-bold tracking-tight sm:text-5xl">
          {post.title}
        </span>
      </h1>

      <Image
        src={urlFor(post.image).url()}
        alt={post.title}
        width={900}
        height={800}
        priority
        className="rounded-lg mt-6 border mx-auto"
      />

      <Avatar author={post.author} publishedAt={post.publishedAt} />

      <div className="mt-4 mb-12 prose-lg prose-yellow dark:prose-invert prose-headings:font-bold prose-headings:text-2xl prose-li:marker:text-primary prose-a:text-primary prose-a:underline">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}
