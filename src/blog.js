'use client';

const blogPosts = [
  {
    title: "Boost Your Visibility with Smart SEO",
    description: "Learn how to improve your Google rankings with simple yet powerful strategies.",
    image: "/blog/blog1.webp",
    link: "#"
  },
  {
    title: "Build a Brand That People Remember",
    description: "Discover the secrets to creating a brand that connects emotionally with your audience.",
    image: "/blog/blog1.webp",
    link: "#"
  },
  {
    title: "Content That Converts: What Really Works",
    description: "Not all content is created equal. Here's how to write posts that actually drive results.",
    image: "/blog/blog1.webp",
    link: "#"
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 px-4 md:px-10 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-[43px] font-bold mb-4">Read Latest <span className="text-blue-600">Blog</span></h2>
        <p className="text-gray-500 mb-12">
          Insights, tips, and inspiration to grow your brand online.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg shadow-[#155dfc]/20 hover:shadow-xl hover:shadow-[#155dfc]/30 transition-all duration-300 p-6"
            >
              <img
                src={post.image}
                alt={post.title}
                className="rounded-xl mb-4 w-full h-48 "
              />
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-500 mb-6">{post.description}</p>
              <a
                href={post.link}
                className="inline-block bg-[#155dfc] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0e3ed8] transition"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
