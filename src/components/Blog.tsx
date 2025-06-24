// app/blog/page.tsx
import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    title: "Alasan Bisnis E-commerce Membutuhkan Jasa Fulfillment Service Flexofast",
    excerpt: "Gw sangat percaya seorang pebisnis di era digital ini memang...",
    image: "/images/flexofast.jpg",
    slug: "alasan-bisnis-ecommerce-fulfillment-flexofast",
  },
  {
    title: "Panduan Aplikasi Jual Foto Shutterstock Contributor",
    excerpt: "Shutterstock Contributor adalah aplikasi yang memungkinkan...",
    image: "/images/shutterstock-app.jpg",
    slug: "panduan-aplikasi-shutterstock-contributor",
  },
  {
    title: "Cara Mendaftar Shutterstock Kontributor",
    excerpt: "Shutterstock contributor adalah orang yang menjual atau menyewakan...",
    image: "/images/daftar-shutterstock.jpg",
    slug: "cara-mendaftar-shutterstock-kontributor",
  },
];

const BlogPage: React.FC = () => {
  return (
    <main className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.slug}`}
            className="block border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="inline-block px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          See All Blog Post
        </Link>
      </div>
    </main>
  );
};

export default BlogPage;
