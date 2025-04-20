import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
      <div className="relative h-52 group">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
          {post.category}
        </div>
      </div>

      <div className="p-5">
        <div className="text-xs text-gray-500 mb-2 tracking-wide">
          {new Date(post.date).toLocaleDateString("ar-SA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{post.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group transition-transform duration-300 hover:translate-x-1"
        >
          اقرأ المزيد
          <span className="mr-1 transform transition-transform duration-300 group-hover:translate-x-1">←</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
