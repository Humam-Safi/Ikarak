import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
<<<<<<< HEAD
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
      <div className="relative h-52 group">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
=======
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
>>>>>>> b9c3394a008875b0b021604e1f7187147dbae725
          {post.category}
        </div>
      </div>

<<<<<<< HEAD
      <div className="p-5">
        <div className="text-xs text-gray-500 mb-2 tracking-wide">
=======
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-2">
>>>>>>> b9c3394a008875b0b021604e1f7187147dbae725
          {new Date(post.date).toLocaleDateString("ar-SA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

<<<<<<< HEAD
        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{post.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group transition-transform duration-300 hover:translate-x-1"
        >
          اقرأ المزيد
          <span className="mr-1 transform transition-transform duration-300 group-hover:translate-x-1">←</span>
=======
        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>

        <Link
          to={`/blog/${post.id}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          اقرأ المزيد ←
>>>>>>> b9c3394a008875b0b021604e1f7187147dbae725
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
