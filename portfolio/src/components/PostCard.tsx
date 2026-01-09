import Link from 'next/link';
import Image from 'next/image';

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  coverImage: string;
}

export default function PostCard({ slug, title, date, category, description, coverImage }: PostCardProps) {
  return (
    <Link href={`/posts/${slug}`} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="relative aspect-video">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-2 py-1 rounded-full uppercase mb-2">
            {category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {description}
          </p>

          {/* Date */}
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>
    </Link>
  );
}