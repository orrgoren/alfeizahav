export interface ShortPost {
  title: string;
  currentSlug: string;
  author: any;
  description: string;
  image: any;
  publishedAt: any;
}

export interface Post {
  title: string;
  currentSlug: string;
  author: any;
  description: string;
  body: any;
  image: any;
  publishedAt: any;
}

export type User = {
  name: string;
  picture: string;
  sub: string;
  email?: string;
};

export type Comment = {
  id: string;
  created_at: number;
  url: string;
  text: string;
  user: User;
};
