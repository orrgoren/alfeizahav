import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { formatRelative } from "date-fns";
import { he } from "date-fns/locale";

export default function Avatar({
  author,
  publishedAt,
}: {
  author: any;
  publishedAt: any;
}) {
  return (
    <div className="my-4 flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Image
          src={urlFor(author.image).url()}
          alt={author.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold text-sm">{author.name}</span>
          <span className="text-gray-600 text-xs">
            {formatRelative(publishedAt, new Date(), { locale: he })}
          </span>
        </div>
      </div>
    </div>
  );
}
