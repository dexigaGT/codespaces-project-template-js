import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { parseISO, compareDesc } from 'date-fns';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  coverImage: string;
  content: string; // HTML
}

export function getAllPosts(): Omit<Post, 'content'>[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
      description: matterResult.data.description,
      coverImage: matterResult.data.coverImage,
    };
  });
  return allPostsData.sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    category: matterResult.data.category,
    description: matterResult.data.description,
    coverImage: matterResult.data.coverImage,
    content: contentHtml,
  };
}