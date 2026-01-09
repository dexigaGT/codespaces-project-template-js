import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12">Posts</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            category={post.category}
            description={post.description}
            coverImage={post.coverImage}
          />
        ))}
      </div>
    </div>
  );
}