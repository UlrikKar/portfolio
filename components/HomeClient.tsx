"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type Project = {
  slug: string;
  title: string;
  description: string;
};

const PROJECT_COLORS: Record<string, string> = {
  celsia: "#d4e3d0",
  nam: "#d0d8e3",
  nav: "#e3d8d0",
  sanity: "#e3e0d0",
  ask: "#d0e3e0",
};

const SANITY_SLIDES = ["/4.png", "/5.png", "/6.png"];
const CELSIA_SLIDES = ["/Celsia1.png", "/Celsia2.png", "/Celsia3.png"];

function CelsiaSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % CELSIA_SLIDES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "sticky", top: "50vh", transform: "translateY(-50%)", display: "flex", justifyContent: "center" }}>
      <div style={{ position: "relative", width: "calc(100% - 30px)", aspectRatio: "1440 / 880", borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.25)" }}>
        {CELSIA_SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: i === index ? 1 : 0,
              transition: "opacity 300ms",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function SanitySlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % SANITY_SLIDES.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {SANITY_SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(1.4)",
            transformOrigin: "center center",
            opacity: i === index ? 1 : 0,
            transition: "opacity 300ms",
          }}
        />
      ))}
    </div>
  );
}

export default function HomeClient({ projects }: { projects: Project[] }) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [prevSlug, setPrevSlug] = useState<string | null>(null);
  const [prevVisible, setPrevVisible] = useState(false);
  const [enterTransition, setEnterTransition] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const rightColRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (_e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setIsLeaving(false);
    setHoveredSlug((current) => {
      if (current && current !== slug) {
        setPrevSlug(current);
        setPrevVisible(true);
        if (prevTimerRef.current) clearTimeout(prevTimerRef.current);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setPrevVisible(false));
        });
        prevTimerRef.current = setTimeout(() => setPrevSlug(null), 150);
      }
      return slug;
    });
    setEnterTransition(true);
  };

  const handleListMouseLeave = () => {
    setEnterTransition(false);
    setIsLeaving(true);
    hideTimerRef.current = setTimeout(() => {
      setHoveredSlug(null);
      setIsLeaving(false);
    }, 300);
  };

  useEffect(() => () => {
    if (prevTimerRef.current) clearTimeout(prevTimerRef.current);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.href = "/Ask.mp4";
    document.head.appendChild(link);
    return () => { link.parentNode?.removeChild(link); };
  }, []);

  useEffect(() => {
    const check = () => setIsNarrow(window.innerWidth < 1200);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative flex flex-col flex-1 md:flex-row">

      <div className="hidden md:block" style={{ flex: isNarrow ? "1 999 33.33%" : "1 1 33.33%", minWidth: 0, borderRight: "1px solid #333333" }} />

      {/* Content column */}
      <div className="px-6 pb-12 w-full md:min-w-[480px]" style={{ flex: "1 1 33.33%" }}>
        <nav className="py-4 mb-16 flex items-baseline justify-between">
          <Link href="/" className="text-base text-[#111111] hover:text-[#888888] transition-colors">
            Ulrik Karlstrøm
          </Link>
          <Link href="/about" className="text-base text-[#aaaaaa] hover:text-[#888888] transition-colors">
            About
          </Link>
        </nav>

        <section className="mb-14">
          <p data-scramble className="text-base text-[#111111] leading-relaxed mb-3">
            Hello, I'm Ulrik. I design and build interfaces with intention.
          </p>
          <p className="text-base text-[#111111]">
            Product Designer at{" "}
            <a
              href="https://www.celsia.io/no"
              className="underline decoration-[#888888] underline-offset-2"
            >
              Celsia
            </a>
            .
          </p>
        </section>

        <section>
          <ul className="flex flex-col gap-6" onMouseLeave={handleListMouseLeave}>
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="block hover:opacity-50 transition-opacity"
                  onMouseEnter={(e) => handleMouseEnter(e, project.slug)}
                >
                  <p className="text-base text-[#111111]">{project.title}</p>
                  <p className="text-base text-[#888888]">{project.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Right column — hover card */}
      <div ref={rightColRef} className="hidden md:block relative" style={{ flex: isNarrow ? "1 0 33.33%" : "1 1 33.33%", borderLeft: "1px solid #333333" }}>
        {/* Outgoing layer — fades out during cross-dissolve */}
        {prevSlug && (
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 57,
              bottom: 57,
              background: PROJECT_COLORS[prevSlug] || "transparent",
              pointerEvents: "none",
              opacity: prevVisible ? 1 : 0,
              transition: "opacity 150ms",
            }}
          />
        )}
        {/* Incoming layer */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 57,
            bottom: 57,
            background: (hoveredSlug && PROJECT_COLORS[hoveredSlug]) || "transparent",
            pointerEvents: "none",
            opacity: hoveredSlug && !isLeaving ? 1 : 0,
            transition: enterTransition ? "opacity 150ms" : "opacity 300ms",
          }}
        />
        {/* Sanity hover card */}
        {hoveredSlug === "sanity" && (
          <div
            style={{
              position: "absolute",
              inset: "57px 0px 57px 0px",
              pointerEvents: "none",
              opacity: !isLeaving ? 1 : 0,
              transition: enterTransition ? "opacity 150ms" : "opacity 300ms",
              overflow: "visible",
              background: "#F5F5F0",
            }}
          >
            <SanitySlideshow />
          </div>
        )}
        {/* Celsia hover card */}
        {hoveredSlug === "celsia" && (
          <div
            style={{
              position: "absolute",
              inset: "57px 0px 57px 0px",
              pointerEvents: "none",
              opacity: !isLeaving ? 1 : 0,
              transition: enterTransition ? "opacity 150ms" : "opacity 300ms",
              background: "#F2EDF7",
            }}
          >
            <CelsiaSlideshow />
          </div>
        )}
        {/* NaM hover card */}
        {hoveredSlug === "nam" && (
          <div
            style={{
              position: "absolute",
              inset: "57px 0px 57px 0px",
              pointerEvents: "none",
              opacity: !isLeaving ? 1 : 0,
              transition: enterTransition ? "opacity 150ms" : "opacity 300ms",
              background: "#EDE8E1",
            }}
          >
            <div style={{ position: "sticky", top: "50vh", transform: "translateY(-50%)", display: "flex", justifyContent: "center" }}>
              <video
                src="/Dim.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{
                  width: "calc(100% - 30px)",
                  borderRadius: 12,
                }}
              />
            </div>
          </div>
        )}
        {/* NAV hover card */}
        {hoveredSlug === "nav" && (
          <div
            style={{
              position: "absolute",
              inset: "57px 0px 57px 0px",
              pointerEvents: "none",
              opacity: !isLeaving ? 1 : 0,
              transition: enterTransition ? "opacity 150ms" : "opacity 300ms",
              background: "#C8D8E8",
            }}
          >
            <div style={{ position: "sticky", top: "50vh", transform: "translateY(-50%)", display: "flex", justifyContent: "center" }}>
              <video
                src="/Nav.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{
                  width: "calc(100% - 30px)",
                  borderRadius: 12,
                  boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
                }}
              />
            </div>
          </div>
        )}
        {/* Ask hover card */}
        {hoveredSlug === "ask" && (
          <div
            style={{
              position: "absolute",
              inset: "57px 0px 57px 0px",
              pointerEvents: "none",
              opacity: !isLeaving ? 1 : 0,
              transition: enterTransition ? "opacity 150ms" : "opacity 300ms",
              background: "#d4e3d0",
            }}
          >
            {/* Sticky video container */}
            <div style={{ position: "sticky", top: "50vh", transform: "translateY(-50%)", display: "flex", justifyContent: "center" }}>
              <video
                src="/Ask.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{
                  width: "calc(100% - 30px)",
                  borderRadius: 12,
                  boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
                }}
              />
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
