export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'first-year-12k',
    title: 'Within my first year, I made over $12,000',
    excerpt:
      'Yes, this is a flex, but hear me out. In the past year, I have actively participated in various hackathons and competitions, which has not only been a great learning experience but also financially rewarding.',
    date: 'November 19, 2025',
    readTime: '7 min read',
  },
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}
