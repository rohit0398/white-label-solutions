"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  TrendingUp,
  Smartphone,
  Layers,
  Tv,
  Film,
  Sparkles,
} from "lucide-react";

export interface BlogPost {
  slug: string;
  category: "Pricing & ROI" | "Web Engineering" | "Mobile Apps" | "Short Drama" | "Cinematic OTT";
  pillar: "all" | "ecommerce" | "short-drama" | "ott";
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
  tags: string[];
}

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "ecommerce" | "short-drama" | "ott">("all");

  const filteredPosts = posts.filter((p) => {
    if (activeFilter === "all") return true;
    return p.pillar === activeFilter;
  });

  const filterOptions = [
    { id: "all" as const, label: "All Guides", count: posts.length },
    { id: "ecommerce" as const, label: "E-Commerce", count: posts.filter((p) => p.pillar === "ecommerce").length },
    { id: "short-drama" as const, label: "9:16 Short Drama", count: posts.filter((p) => p.pillar === "short-drama").length },
    { id: "ott" as const, label: "16:9 Cinematic OTT", count: posts.filter((p) => p.pillar === "ott").length },
  ];

  const getCategoryIcon = (category: BlogPost["category"]) => {
    switch (category) {
      case "Short Drama":
        return <Film className="h-3.5 w-3.5 text-accent shrink-0" />;
      case "Cinematic OTT":
        return <Tv className="h-3.5 w-3.5 text-accent shrink-0" />;
      case "Pricing & ROI":
        return <TrendingUp className="h-3.5 w-3.5 text-accent shrink-0" />;
      case "Web Engineering":
        return <Layers className="h-3.5 w-3.5 text-accent shrink-0" />;
      case "Mobile Apps":
      default:
        return <Smartphone className="h-3.5 w-3.5 text-accent shrink-0" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-line pb-6">
        {filterOptions.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer select-none ${
                isActive
                  ? "bg-ink text-paper font-semibold shadow-xs"
                  : "bg-wash text-ink-2 hover:bg-wash/80 hover:text-ink border border-line"
              }`}
            >
              <span>{filter.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-paper/20 text-paper" : "bg-paper border border-line text-ink-3"
                }`}
              >
                {filter.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Posts Grid with Generous Card Width and Polished UI/UX */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="group p-6 sm:p-7 rounded-2xl border border-line bg-wash/40 hover:bg-wash hover:border-ink/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer relative animate-fade-in"
          >
            <div>
              {/* Top Badge Strip */}
              <div className="flex items-center justify-between gap-3 text-xs font-mono text-ink-3 mb-4">
                <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-line bg-wash text-ink text-[11px] font-medium">
                  {getCategoryIcon(post.category)}
                  <span>{post.category}</span>
                </span>
                <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 text-xs text-ink-3 font-medium">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              {/* Title with full card link */}
              <h2 className="text-lg sm:text-xl font-semibold text-ink tracking-tight group-hover:text-accent transition-colors leading-snug mb-3">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-sm text-ink-2 leading-relaxed mb-5">
                {post.excerpt}
              </p>

              {/* Tags Strip */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-ink-3 px-2 py-0.5 rounded bg-paper border border-line"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-4 border-t border-line/60 flex items-center justify-between z-10">
              <span className="text-xs font-mono text-ink-3">{post.date}</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink group-hover:text-accent group-hover:translate-x-1 transition-all">
                <span>Read guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
