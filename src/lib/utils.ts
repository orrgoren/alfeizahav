import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { client } from "@/sanity/lib/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getAllPosts() {
  const query = `
    *[_type == 'post'] | order(_createdAt desc) {
      "currentSlug": slug.current,
      _updatedAt
    }
  `;

  return await client.fetch(query);
}
