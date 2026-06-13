"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UnlockPage() {
  const [password, setPassword] = useState("");
  const [errorShown, setErrorShown] = useState(false);
  const [errorOpacity, setErrorOpacity] = useState(1);
  const [arrowHover, setArrowHover] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const router = useRouter();

  useEffect(() => () => { timers.current.forEach(clearTimeout); }, []);

  const showError = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setErrorShown(true);
    setErrorOpacity(1);
    timers.current.push(setTimeout(() => setErrorOpacity(0), 2500));
    timers.current.push(setTimeout(() => setErrorShown(false), 3000));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Celsia2026") {
      document.cookie = "celsia_access=granted; path=/; max-age=86400";
      router.push("/work/celsia");
    } else {
      showError();
    }
  };

  return (
    <div className="relative flex flex-col flex-1 md:flex-row">

      <div className="hidden md:block" style={{ flex: "1 1 33.33%", minWidth: 0, borderRight: "1px solid #333333" }} />

      <div
        className="px-6 md:min-w-[480px]"
        style={{ flex: "1 1 33.33%", display: "flex", flexDirection: "column" }}
      >
        <nav className="py-4 mb-16 flex items-baseline justify-between">
          <Link href="/" className="text-base text-[#111111] hover:text-[#888888] transition-colors">
            Ulrik Karlstrøm
          </Link>
          <Link href="/about" className="text-base text-[#aaaaaa] hover:text-[#888888] transition-colors">
            About
          </Link>
        </nav>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: "10vh" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "17px", color: "#888888", margin: 0 }}>
            <a href="mailto:ulrikkm@gmail.com" style={{ color: "#888888", textDecoration: "underline" }}>Get in touch</a> for access.
          </p>
          <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #333333" }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                appearance: "none",
                WebkitAppearance: "none",
                color: "#eeeeee",
                fontSize: "17px",
                fontFamily: "var(--font-geist-sans)",
                padding: "8px 0",
              }}
            />
            <button
              type="submit"
              onMouseEnter={() => setArrowHover(true)}
              onMouseLeave={() => setArrowHover(false)}
              style={{
                background: "none",
                border: "none",
                outline: "none",
                color: arrowHover ? "#eeeeee" : "#888888",
                fontSize: "17px",
                fontFamily: "var(--font-geist-sans)",
                cursor: "pointer",
                width: "33px",
                height: "33px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                flexShrink: 0,
                transition: "color 150ms",
              }}
            >
              ›
            </button>
          </div>
          <p style={{
            fontSize: "17px",
            color: "#888888",
            margin: 0,
            visibility: errorShown ? "visible" : "hidden",
            opacity: errorOpacity,
            transition: "opacity 0.5s ease",
          }}>
            Incorrect password
          </p>
        </form>
        </div>
      </div>

      <div className="hidden md:block" style={{ flex: "1 1 33.33%", borderLeft: "1px solid #333333" }} />
    </div>
  );
}
