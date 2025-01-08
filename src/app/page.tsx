import { ShortPost } from "@/lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `
    *[_type == 'post'] | order(_createdAt desc) {
      title,
      "currentSlug": slug.current,
      description,
      author,
      image
    }
  `;

  return await client.fetch(query);
}

export default async function Home() {
  const data: ShortPost[] = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.image).url()}
            alt={post.title}
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />

          <CardContent className="mt-5">
            <h3 className="text-xl font-weight line-clamp-2 font-bold">
              {post.title}
            </h3>
            <p className="line-clamp-3 text-md mt-2 text-gray-600 dark:text-gray-300">
              {post.description}
            </p>
            <Button asChild className="w-full mt-7 text-white">
              <Link href={`/blog/${post.currentSlug}`}>קראו עוד</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
