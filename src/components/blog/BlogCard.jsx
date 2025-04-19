import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
          {post.category}
        </div>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500 mb-2">
          {new Date(post.date).toLocaleDateString("ar-SA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>

        <Link
          to={`/blog/${post.id}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          اقرأ المزيد ←
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
