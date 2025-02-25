import React from "react";
import { notFound } from "next/navigation";

interface Post {
  id: number;
  title: string;
  views: number;
}

const fetchPost = async (id: string): Promise<Post | null> => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
};

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/posts");
  if (!res.ok) return [];
  
  const data = await res.json();
  return data.posts.slice(0, 10).map((post: Post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  if (!post) return notFound(); 

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4 text-gray-600">Views: {post.views}</p>
    </div>
  );
}

export const revalidate = 60;
