import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlogBySlug } from "@/data/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

type ContentBlock =
  | string
  | { type: "heading"; text: string; level?: 1 | 2 }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "image"; src: string; alt?: string };

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-openSans text-sm text-[#686868] hover:text-[#D11417] transition-colors mb-8"
        >
          <span aria-hidden="true">←</span> Back to Blog
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-[#D11417]/10 text-[#D11417] text-xs font-semibold uppercase tracking-wide font-openSans">
            {post.category}
          </span>
          <span className="font-openSans text-sm text-[#9a9a9a]">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-nunito font-bold text-3xl md:text-4xl lg:text-5xl text-[#10111a] leading-tight mb-8">
          {post.title}
        </h1>

        {/* Hero image */}
        <div className="relative w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="font-openSans text-[17px] md:text-lg text-[#3a3a3a] leading-[1.8] space-y-6">
          {(post.content as ContentBlock[]).map((block, i) => {
            if (typeof block === "string") {
              return <p key={i}>{block}</p>;
            }

            if (block.type === "heading") {
              if (block.level === 1) {
                return (
                  <h2
                    key={i}
                    className="font-nunito font-bold text-2xl md:text-4xl text-[#10111a] leading-tight pt-6"
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <h3
                  key={i}
                  className="font-nunito font-bold text-xl md:text-2xl text-[#10111a] leading-snug pt-4"
                >
                  {block.text}
                </h3>
              );
            }

            if (block.type === "list") {
              if (block.ordered) {
                return (
                  <ol key={i} className="list-decimal pl-6 space-y-2 marker:text-[#D11417] marker:font-semibold">
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <ul key={i} className="list-disc pl-6 space-y-2 marker:text-[#D11417]">
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
            }

            if (block.type === "image") {
              return (
                <span
                  key={i}
                  className="relative block w-full h-[280px] md:h-[440px] rounded-2xl overflow-hidden my-8"
                >
                  <Image
                    src={block.src}
                    alt={block.alt ?? ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </span>
              );
            }

            return <p key={i}>{block.text}</p>;
          })}
        </div>
      </article>
    </main>
  );
}
