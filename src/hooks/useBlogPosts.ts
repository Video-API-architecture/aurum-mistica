import { BLOG_POSTS, BLOG_POSTS_BY_SLUG } from '@/data/blog/posts';

export function useBlogPosts() {
  return { posts: BLOG_POSTS, bySlug: BLOG_POSTS_BY_SLUG };
}
