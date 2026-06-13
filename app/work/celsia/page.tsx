import Link from "next/link";
import LightboxImage from "@/components/LightboxImage";

const paragraphs = [
  "Sustainability reporting is data-dense and deadline-driven, involving hundreds of individual data points, nested requirements, and contributors from across an organisation, from sustainability leads to plant managers to HR teams, each contributing different kinds of data with varying levels of context about what the report is actually for.",
  "The scale varies enormously. At one end, a single person completing a report alone. At the other, a group structure with fifteen subsidiaries and over a hundred users working simultaneously. Designing a system that serves both without being bloated for the simple case or insufficient for the complex one was the central problem.",
  "Before this initiative, there was no way to manage any of this from within the product. Ownership existed in theory but not in practice. Deadlines lived in emails. Progress lived in spreadsheets. The actual coordination happened outside the software entirely, through whatever combination of tools each team had landed on.",
  "The initiative centred on bringing that coordination inside, giving every role clarity and agency within the complexity. Contributors needed a reliable picture of what they owned and when it was due. Managers needed to delegate without losing oversight. Reviewers needed to enter the flow at the right moment without disrupting work already done.",
  "The result is a system that coordinates the full reporting cycle from within the product, translating a dense and demanding process into something each user can actually navigate, giving everyone a clear picture of their part in something that can't afford to stall.",
];

const subtitle = "Celsia's built-in system for assigning, tracking, and completing every reporting requirement across a complex sustainability report.";

export default function CelsiaPage() {
  return (
    <div className="relative flex flex-col flex-1 md:flex-row">

      <div className="hidden md:block" style={{ flex: "1 1 33.33%", minWidth: 0, borderRight: "1px solid #333333" }} />
      <div className="px-6 pb-32 md:min-w-[480px]" style={{ flex: "1 1 33.33%" }}>
        <nav className="py-4 mb-16 flex items-baseline justify-between">
          <Link href="/" className="text-base text-[#111111] hover:text-[#888888] transition-colors">
            Ulrik Karlstrøm
          </Link>
          <Link href="/about" className="text-base text-[#aaaaaa] hover:text-[#888888] transition-colors">
            About
          </Link>
        </nav>

        <section>
          <div className="text-base text-white leading-relaxed">
            <p className="italic" style={{ marginBottom: "56px" }}>{subtitle}</p>
            <LightboxImage src="/Celsia1.png" alt="" width={1440} height={880} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px" }} />
            <p className="mb-4">{paragraphs[0]}</p>
            <p className="mb-4">{paragraphs[1]}</p>
            <LightboxImage src="/Celsia2.png" alt="" width={1440} height={880} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px", marginTop: "56px" }} />
            <p className="mb-4">{paragraphs[2]}</p>
            <p className="mb-4">{paragraphs[3]}</p>
            <LightboxImage src="/Celsia3.png" alt="" width={1440} height={880} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px", marginTop: "56px" }} />
            <p className="mb-4">{paragraphs[4]}</p>
          </div>
        </section>
      </div>
      <div className="hidden md:block" style={{ flex: "1 1 33.33%", borderLeft: "1px solid #333333" }} />
    </div>
  );
}
