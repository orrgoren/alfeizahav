import { client } from "@/sanity/lib/client";
import { Post } from "@/lib/interface";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

async function getBlog(slug: string) {
  const query = `
    *[_type == "post" && slug.current == '${slug}'] {
      "currentSlug": slug.current,
      title,
      body,
      image,
      author,
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
        <span className="block text-base text-center text-primary font-semibold tracking-wide">
          שלום שלום, בלוג
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {post.title}
        </span>
      </h1>

      <Image
        src={urlFor(post.image).url()}
        alt={post.title}
        width={800}
        height={800}
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="mt-12 prose-xl prose-yellow dark:prose-invert prose-h4:font-bold prose-h4:text-2xl prose-h3:text-xl prose-li:marker:text-primary prose-a:text-primary prose-a:underline">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}
