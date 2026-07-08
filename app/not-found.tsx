import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex flex-col flex-1 md:flex-row">
      <div className="hidden md:block" style={{ flex: "1 1 33.33%", minWidth: 0, borderRight: "1px solid #333333" }} />

      <div className="px-6 pb-24 w-full md:min-w-[480px]" style={{ flex: "1 1 33.33%" }}>
        <nav className="py-4 mb-16 flex items-baseline justify-between">
          <Link href="/" className="text-base text-[#111111] hover:text-[#888888] transition-colors">
            Ulrik Karlstrøm
          </Link>
          <Link href="/about" className="text-base text-[#aaaaaa] hover:text-[#888888] transition-colors">
            About
          </Link>
        </nav>

        <section>
          <p className="text-base text-[#111111] mb-3">404 — this page doesn&apos;t exist.</p>
          <p className="text-base text-[#888888]">
            <Link href="/" className="underline decoration-[#888888] underline-offset-2 hover:text-[#888888] transition-colors">
              Back to work
            </Link>
          </p>
        </section>
      </div>

      <div className="hidden md:block" style={{ flex: "1 1 33.33%", minWidth: 0, borderLeft: "1px solid #333333" }} />
    </div>
  );
}
