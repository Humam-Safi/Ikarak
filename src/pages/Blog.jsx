import React, { useState } from "react";
import BlogCard from "../components/blog/BlogCard";
import BlogCategories from "../components/blog/BlogCategories";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "جميع المقالات" },
    { id: "market", name: "تحديثات السوق" },
    { id: "tips", name: "نصائح الشراء" },
    { id: "selling", name: "نصائح البيع" },
    { id: "investment", name: "الاستثمار" },
    { id: "legal", name: "النصائح القانونية" },
  ];

  const posts = [
    {
      id: 1,
      title: "فهم سوق العقارات في حمص",
      excerpt:
        "دليل شامل عن الوضع الحالي لسوق العقارات في حمص، بما في ذلك الاتجاهات والأسعار وفرص الاستثمار.",
      category: "market",
      date: "2024-04-10",
      image: "/images/blog/market-update.jpg",
    },
    {
      id: 2,
      title: "أهم 10 نصائح لمشتري المنازل لأول مرة",
      excerpt:
        "نصائح أساسية لمشتري المنازل لأول مرة في حمص، من وضع الميزانية إلى فحص العقار والمفاوضات.",
      category: "tips",
      date: "2024-04-05",
      image: "/images/blog/buying-tips.jpg",
    },
    {
      id: 3,
      title: "فرص الاستثمار في عقارات حمص",
      excerpt:
        "اكتشف أكثر فرص الاستثمار العقاري الواعدة في حمص وكيفية تعظيم عوائدك.",
      category: "investment",
      date: "2024-03-28",
      image: "/images/blog/investment.jpg",
    },
    {
      id: 4,
      title: "الدليل القانوني لمعاملات العقارات",
      excerpt:
        "كل ما تحتاج معرفته عن الجوانب القانونية لشراء وبيع العقارات في حمص.",
      category: "legal",
      date: "2024-03-20",
      image: "/images/blog/legal.jpg",
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">مدونة العقارات</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        ابق على اطلاع بأحدث الأخبار والنصائح والرؤى حول سوق العقارات في حمص.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Categories Sidebar */}
        <div className="w-full md:w-1/4">
          <BlogCategories
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Blog Posts */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
