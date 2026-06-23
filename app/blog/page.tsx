import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, stories and updates from Heartland General Trading — on ethical sourcing, healthy eating and sustainable food distribution.",
};

export default function BlogPage() {
  return (
    <main className="bg-white">
      <div className="max-w-[1240px] xl:max-w-[1440px] mx-auto px-6 md:px-[50px] xl:px-[60px] py-12 md:py-20">
        {/* Header */}
        <header className="mb-12 md:mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-4 font-openSans mb-4">
            <span className="text-base lg:text-lg leading-[160%] text-[#D11417]">
              Our
            </span>
            <span className="w-[60px] h-px bg-[#D11417]" />
          </div>
          <h1 className="font-nunito font-bold text-3xl md:text-4xl lg:text-5xl text-[#10111a] mb-4">
            Blog & Insights
          </h1>
          <p className="font-openSans text-base md:text-lg text-[#686868] max-w-2xl mx-auto">
            Perspectives on industry trends, culinary traditions and community
            initiatives from the Heartland team.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Featured image */}
              <div className="relative w-full h-[220px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <span className="self-start mb-3 px-3 py-1 rounded-full bg-[#D11417]/10 text-[#D11417] text-xs font-semibold uppercase tracking-wide font-openSans">
                  {post.category}
                </span>
                <h2 className="font-nunito font-bold text-xl text-[#10111a] leading-snug mb-3 transition-colors duration-300 group-hover:text-[#D11417]">
                  {post.title}
                </h2>
                <p className="font-openSans text-[15px] text-[#686868] leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-auto font-openSans text-sm text-[#9a9a9a]">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
