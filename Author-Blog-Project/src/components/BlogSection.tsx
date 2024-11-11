import BlogCard from "./BlogCard";
import { Typography } from "@mui/material";

const blogPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400",
    title: "Modern Web Development",
    content:
      "Exploring the latest trends and best practices in web development for 2024.",
    author: "JXPYTER",
    date: "Mar 1, 2024",
    category: "Development",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=400",
    title: "The Future of AI",
    content:
      "How artificial intelligence is reshaping the software development landscape.",
    author: "JXPYTER",
    date: "Feb 28, 2024",
    category: "AI & ML",
  },
  {
    image:
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&h=400",
    title: "Cloud Architecture",
    content: "Building scalable applications with modern cloud infrastructure.",
    author: "JXPYTER",
    date: "Feb 25, 2024",
    category: "Cloud",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&h=400",
    title: "Mastering TypeScript",
    content:
      "Advanced TypeScript patterns and practices for better code quality.",
    author: "JXPYTER",
    date: "Feb 20, 2024",
    category: "TypeScript",
  },
];

export default function BlogSection() {
  return (
    <div className="h-full bg-white/10 backdrop-blur-lg rounded-3xl p-8">
      <Typography variant="h5" className="font-bold mb-6 text-white">
        Latest Articles
      </Typography>
      <div className="grid grid-cols-2 gap-6 overflow-y-auto max-h-[calc(100vh-12rem)]">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
