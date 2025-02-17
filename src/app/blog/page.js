import { getPosts } from "@/lib/sanity";
import BlogContent from "@/components/BlogContent";

export default async function Blog() {
  const posts = await getPosts();

  // Get unique categories from all posts
  const categories = Array.from(new Set(posts?.flatMap((post) => post.categories || []).map((cat) => cat.title)));

  return <BlogContent initialPosts={posts} categories={categories} />;
}
