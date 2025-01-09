"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Card, CardContent } from "@/components/ui/card";
import Avatar from "@/components/avatar";
import { ShortPost } from "@/lib/interface";
import { useRouter } from "next/navigation";

export default function PostCard({ post }: { post: ShortPost }) {
  const router = useRouter();

  return (
    <Card
      className="hover:scale-105 cursor-pointer transition-transform duration-300"
      onClick={() => router.push(`/blog/post/${post.currentSlug}`)}
    >
      <Image
        src={urlFor(post.image).url()}
        alt={post.title}
        width={500}
        height={500}
        className="rounded-t-lg h-[150px] object-cover"
      />

      <CardContent className="mt-5">
        <h3 className="text-lg font-weight line-clamp-2 font-bold">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
          {post.description}
        </p>

        <Avatar author={post.author} publishedAt={post.publishedAt} />
      </CardContent>
    </Card>
  );
}
