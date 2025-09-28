import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/utils";

const WEBSITE_URL = process.env.WEBSITE_URL || "https://www.alfeizahav.blog";

type CHANGE_FREQ =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts: [{ currentSlug: string; _updatedAt: string }] =
    await getAllPosts();

  const changeFreq = "daily" as CHANGE_FREQ;

  const posts = allPosts.map(({ currentSlug, _updatedAt }) => ({
    url: `${WEBSITE_URL}/blog/post/${currentSlug}`,
    lastModified: new Date(_updatedAt).toISOString(),
    changeFrequency: changeFreq,
  }));

  const routes = [""].map((route) => ({
    url: `${WEBSITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: changeFreq,
  }));

  return [...routes, ...posts];
}
