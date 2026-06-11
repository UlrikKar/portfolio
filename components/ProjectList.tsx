"use client";

import Link from "next/link";
import { useState, useRef } from "react";

type Project = {
  slug: string;
  title: string;
  description: string;
};

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [previewPos, setPreviewPos] = useState({ left: 0, top: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (slug: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (wrapperRef.current) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      console.log("[ProjectList] wrapper offsetWidth:", wrapperRef.current.offsetWidth, "| right edge:", wrapperRect.right);

      const li = e.currentTarget.closest("li") as HTMLLIElement | null;
      const liRect = li?.getBoundingClientRect();

      setPreviewPos({
        left: wrapperRect.right + 24, // 1.5rem gap from column right edge
        top: liRect ? liRect.top : wrapperRect.top,
      });
    }
    setHoveredSlug(slug);
  };

  return (
    <div ref={wrapperRef}>
      <ul className="flex flex-col gap-6">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="block hover:opacity-50 transition-opacity"
              onMouseEnter={(e) => handleMouseEnter(project.slug, e)}
              onMouseLeave={() => setHoveredSlug(null)}
            >
              <p className="text-base text-[#111111]">{project.title}</p>
              <p className="text-base text-[#888888]">{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="pointer-events-none fixed transition-opacity duration-[120ms]"
        style={{
          left: previewPos.left,
          top: previewPos.top,
          width: 380,
          height: 260,
          borderRadius: 6,
          overflow: "hidden",
          opacity: hoveredSlug ? 1 : 0,
        }}
      >
        <div className="w-full h-full bg-[#f0f0f0]" />
      </div>
    </div>
  );
}
