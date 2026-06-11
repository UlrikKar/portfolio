import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative flex flex-col flex-1 md:flex-row">
      <div className="hidden md:block" style={{ flex: "1 1 33.33%", minWidth: 0, borderRight: "1px solid #333333" }} />
      <div className="w-full px-6 pb-24" style={{ flex: "1 1 33.33%" }}>
      <nav className="py-4 mb-16">
        <div className="flex items-baseline justify-between">
          <Link href="/" className="text-base text-[#111111] hover:text-[#888888] transition-colors">
            Ulrik Karlstrøm
          </Link>
          <Link href="/" className="text-base text-[#888888] hover:text-[#888888] transition-colors">
            Work
          </Link>
        </div>
      </nav>

      <section className="mb-14">
        <div className="relative w-full rounded-sm mb-14 overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
          <Image src="/PB2.png" alt="Ulrik Karlstrøm" fill className="object-cover" />
        </div>
        <div className="space-y-4 text-base text-[#111111] leading-relaxed">
          <p>
            Hello, I'm Ulrik Karlstrøm. I'm from Oslo, but have also lived in Glasgow and Kristiansand.
          </p>
          <p>
            I design Celsia's product, a sustainability reporting platform that helps companies move through one of the most demanding workflows in business. It's built around the idea that even the most complex processes can be made clear.
          </p>
          <p>
            I had my first real exposure to product design in a startup environment at Sanity, and the pace and ambition of it shaped what I've looked for in my work since.
          </p>
          <p>
            Three years at the Glasgow School of Art taught me to look at digital experiences as something richer than UX standards alone. I brought that with me to AHO in Oslo, where a master's in interaction design connected me to the professional design scene I now work in.
          </p>
          <p>
            I believe great design has always mattered. As building software becomes commoditized, design is the last real differentiator between exceptional products and forgettable ones.
          </p>
        </div>
      </section>

      <section className="mb-14 flex flex-col gap-1 text-base text-[#111111]">
        <a href="mailto:ulrikkm@gmail.com" className="underline decoration-[#888888] underline-offset-2 w-fit">Ulrikkm@gmail.com</a>
        <a href="https://www.linkedin.com/in/ulrik-karlstrøm-5645501b4" className="underline decoration-[#888888] underline-offset-2 w-fit">LinkedIn</a>
      </section>

      <section className="space-y-14">
        <div>
          <p className="text-base text-[#888888] mb-5">Work</p>
          <div className="space-y-6 text-base">
            <div>
              <p className="text-[#111111]"><a href="https://www.celsia.io/no" target="_blank" rel="noopener noreferrer" className="hover:text-[#888888] transition-colors">Celsia</a></p>
              <p className="text-[#888888]">Product Designer · 2024 – present</p>
            </div>
            <div>
              <p className="text-[#111111]"><a href="https://www.sanity.io/" target="_blank" rel="noopener noreferrer" className="hover:text-[#888888] transition-colors">Sanity</a></p>
              <p className="text-[#888888]">Designer · 2023 – 2024</p>
            </div>
            <div>
              <p className="text-[#111111]"><a href="https://www.soprasteria.no/" target="_blank" rel="noopener noreferrer" className="hover:text-[#888888] transition-colors">Sopra Steria / NAV</a></p>
              <p className="text-[#888888]">UX design consultant · 2023</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-base text-[#888888] mb-5">Education</p>
          <div className="space-y-6 text-base">
            <div>
              <p className="text-[#111111]"><a href="https://www.aho.no/english/" target="_blank" rel="noopener noreferrer" className="hover:text-[#888888] transition-colors">AHO</a></p>
              <p className="text-[#888888]">Master of Design<span className="hidden md:inline">, Interaction Design</span> · 2022 – 2024</p>
            </div>
            <div>
              <p className="text-[#111111]"><a href="https://www.uia.no/" target="_blank" rel="noopener noreferrer" className="hover:text-[#888888] transition-colors">UiA</a></p>
              <p className="text-[#888888]">IT & Information Systems · 2021 – 2022</p>
            </div>
            <div>
              <p className="text-[#111111]"><a href="https://www.gsa.ac.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-[#888888] transition-colors">The Glasgow School of Art</a></p>
              <p className="text-[#888888]">BA Interaction Design · 2018 – 2021</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-base text-[#888888] mb-5">Languages</p>
          <div className="space-y-6 text-base">
            <div>
              <p className="text-[#111111]">Norwegian <span className="text-[#888888]">· native</span></p>
            </div>
            <div>
              <p className="text-[#111111]">English <span className="text-[#888888]">· fluent</span></p>
            </div>
          </div>
        </div>
      </section>
      </div>
      <div className="hidden md:block" style={{ flex: "1 1 33.33%", borderLeft: "1px solid #333333" }} />
    </div>
  );
}
