import Link from "next/link";
import LightboxImage from "@/components/LightboxImage";

const descriptions: Record<string, string[]> = {
  sanity: [
    "Sanity.io is a content platform used by development teams across the world, but like most developer tools, the gap between what the product does and how it looks to the outside is wide. Marketing in that context is not just about aesthetics. It is about building a visual language coherent enough to carry across social platforms, events, campaigns, and product communications without falling apart.",
    "During my masters I worked part-time at Sanity as a UX and graphic designer. The work ranged from maintaining their design system to producing marketing assets for social media, event materials, t-shirts, and branding collateral. The consistent thread was making sure everything produced felt like it came from the same place, regardless of format or context.",
    "Beyond the day-to-day output, I collaborated with another designer to overhaul how Sanity introduces its main product digitally, worked on developing the learning platform for users adopting the product, and supported global marketing efforts by creating targeted promotional materials for different audiences and campaigns.",
  ],
  ask: [
    "Getting a straight answer out of an AI is easy. Getting an answer that a twelve-year-old can actually learn from is a different problem entirely. The way a system communicates, the words it chooses, the questions it asks back, all of it shapes whether a child engages or just copies the output and moves on.",
    "Aschehoug publishes the textbooks that Norwegian primary school students learn from every day. The content is trusted, pedagogically grounded, and written for the classroom. The question was what happens when that same content becomes the basis for a conversational AI, and what it takes to design a chatbot that genuinely supports understanding rather than replacing it.",
    "Ask was developed in collaboration with Aschehoug as a concept for 7th graders. The idea is that students use it to work through subject matter before bringing it into classroom discussion, with Ask drawing exclusively from Aschehoug's own textbooks rather than the open web. The name is a play on Aschehoug, the Norwegian name Ask, and the act of asking a question.",
    "The project covered AI communication research, pedagogical research, concept development, interviews with users and experts, testing, visual design, and prototyping. It was developed together with Hanne Lockertsen. As much as the final service, the output is a linguistic framework for how AI should communicate with children in a learning context, a set of principles that could travel further than this one product.",
  ],
  nav: [
    "Managing multiple social security benefits at the same time is more common than it sounds. A person on sick leave might also be receiving parental benefits. A carer might be drawing on several overlapping schemes simultaneously. NAV administers all of it, but until now there was no way for a user to see the full picture in one place. Each benefit existed in its own corner of the system, with no view that tied them together across time.",
    "The gap this creates is practical. Without a clear picture of what you're receiving and when, basic financial planning becomes harder than it needs to be. The information exists, it is just not organised in a way that serves the person it belongs to.",
    "This project was a proof-of-concept developed during a summer internship at Sopra Steria, in collaboration with two developers. The brief was to design an interface that gives users a genuine overview of all their active benefits, not just a list, but a coherent picture of which benefits apply on which days, with clear access to the detail behind each one. I led both the team and the design process throughout.",
    "The concept was later implemented by NAV, bringing the benefit timeline into the live product that millions of people depend on.",
  ],
  nam: [
    "A museum visit is shaped by more than the art on the walls. It is shaped by the scale of the room, the presence of other people, and the freedom to move through a space on your own terms. These qualities are easy to take for granted in a physical context. They are much harder to account for when the collection moves online.",
    "The National Museum holds one of the largest collections of paintings in Norway, and digitising that collection creates an opportunity that most cultural institutions are still figuring out how to use. Simply putting images on a screen is not enough. The question is what kind of experience becomes possible when the constraints of a physical space no longer apply, and what gets lost in the translation.",
    "This diploma explored that question across eighteen weeks in collaboration with the National Museum. The work moved from field studies and expert interviews through to concept development and testing, covering four distinct use cases: someone engaging alone, a group visiting together, strangers encountering each other around the same work, and structured educational contexts. Each brought different demands on what a digital art experience needs to do.",
    "The result is a set of interaction concepts designed to provoke discussion rather than close it. Art is too subjective a medium for one answer to serve everyone, and the concepts reflect that honestly. What they demonstrate is the range of what becomes designable when physical, expressive, and social factors are treated as variables rather than fixed constraints.",
  ],
  celsia: [
    "Sustainability reporting is data-dense and deadline-driven, involving hundreds of individual data points, nested requirements, and contributors from across an organisation, from sustainability leads to plant managers to HR teams, each contributing different kinds of data with varying levels of context about what the report is actually for.",
    "The scale varies enormously. At one end, a single person completing a report alone. At the other, a group structure with fifteen subsidiaries and over a hundred users working simultaneously. Designing a system that serves both without being bloated for the simple case or insufficient for the complex one was the central problem.",
    "Before this initiative, there was no way to manage any of this from within the product. Ownership existed in theory but not in practice. Deadlines lived in emails. Progress lived in spreadsheets. The actual coordination happened outside the software entirely, through whatever combination of tools each team had landed on.",
    "The initiative centred on bringing that coordination inside, giving every role clarity and agency within the complexity. Contributors needed a reliable picture of what they owned and when it was due. Managers needed to delegate without losing oversight. Reviewers needed to enter the flow at the right moment without disrupting work already done.",
    "The result is a system that coordinates the full reporting cycle from within the product, translating a dense and demanding process into something each user can actually navigate, giving everyone a clear picture of their part in something that can't afford to stall.",
  ],
};

const subtitles: Record<string, string> = {
  celsia: "Celsia’s built-in system for assigning, tracking, and completing every reporting requirement across a complex sustainability report.",
  nam: "Masters thesis exploring what digital engagement with art becomes when physical space stops being a constraint.",
  nav: "Comprehensive benefits overview for NAV, giving users a coherent picture of everything they receive and when, currently live on Norway's most critical public welfare platform.",
  sanity: "Marketing and brand design at Sanity.io, alongside UX work spanning their design system, learning platform, and product communications.",
  ask: "Designing AI communication and developing a linguistic framework for how AI should talk to children in a learning context, resulting in a chatbot built with Aschehoug on their school curriculum.",
};

export default async function WorkPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const paragraphs = descriptions[slug];
  const subtitle = subtitles[slug];

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
          {slug === "nam" && paragraphs ? (
            <div className="text-base text-white leading-relaxed">
              {subtitle && <p className="italic" style={{ marginBottom: "56px" }}>{subtitle}</p>}
              <LightboxImage src="/DiM1.png" alt="" width={1920} height={1080} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px" }} />
              <p className="mb-4">{paragraphs[0]}</p>
              <LightboxImage src="/DiM2.png" alt="" width={1920} height={1080} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px", marginTop: "56px" }} />
              <p className="mb-4">{paragraphs[1]}</p>
              <LightboxImage src="/DiM3.png" alt="" width={1920} height={1080} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px", marginTop: "56px" }} />
              <p className="mb-4">{paragraphs[2]}</p>
              <LightboxImage src="/DiM4.png" alt="" width={1920} height={1080} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px", marginTop: "56px" }} />
              <p className="mb-4">{paragraphs[3]}</p>
            </div>
          ) : slug === "celsia" && paragraphs ? (
            <div className="text-base text-white leading-relaxed">
              {subtitle && <p className="italic" style={{ marginBottom: "56px" }}>{subtitle}</p>}
              <LightboxImage src="/Celsia1.png" alt="" width={1440} height={880} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px" }} />
              <p className="mb-4">{paragraphs[0]}</p>
              <p className="mb-4">{paragraphs[1]}</p>
              <LightboxImage src="/Celsia2.png" alt="" width={1440} height={880} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px", marginTop: "56px" }} />
              <p className="mb-4">{paragraphs[2]}</p>
              <p className="mb-4">{paragraphs[3]}</p>
              <LightboxImage src="/Celsia3.png" alt="" width={1440} height={880} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px", marginTop: "56px" }} />
              <p className="mb-4">{paragraphs[4]}</p>
            </div>
          ) : slug === "nav" && paragraphs ? (
            <div className="text-base text-white leading-relaxed">
              {subtitle && <p className="italic" style={{ marginBottom: "56px" }}>{subtitle}</p>}
              <LightboxImage src="/NAV1.png" alt="" width={1920} height={1080} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px" }} />
              <p className="mb-4">{paragraphs[0]}</p>
              <p className="mb-4">{paragraphs[1]}</p>
              <LightboxImage src="/NAV2.png" alt="" width={1920} height={1080} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px", marginTop: "56px" }} />
              <p className="mb-4">{paragraphs[2]}</p>
              <p className="mb-4">{paragraphs[3]}</p>
            </div>
          ) : slug === "sanity" && paragraphs ? (
            <div className="text-base text-white leading-relaxed">
              {subtitle && <p className="italic" style={{ marginBottom: "56px" }}>{subtitle}</p>}
              <LightboxImage src="/Sanity1.png" alt="" width={1920} height={1080} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px" }} />
              <p className="mb-4">{paragraphs[0]}</p>
              <LightboxImage src="/Sanity2.png" alt="" width={1920} height={1080} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px", marginTop: "56px" }} />
              <p className="mb-4">{paragraphs[1]}</p>
              <LightboxImage src="/Sanity3.png" alt="" width={1920} height={1080} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px", marginTop: "56px" }} />
              <p className="mb-4">{paragraphs[2]}</p>
            </div>
          ) : slug === "ask" && paragraphs ? (
            <div className="text-base text-white leading-relaxed">
              {subtitle && <p className="italic" style={{ marginBottom: "56px" }}>{subtitle}</p>}
              <LightboxImage src="/Ask1.png" alt="" width={1920} height={1080} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px" }} />
              <p className="mb-4">{paragraphs[0]}</p>
              <p className="mb-4">{paragraphs[1]}</p>
              <LightboxImage src="/Ask2.png" alt="" width={1920} height={1080} style={{ width: "100%", height: "auto", borderRadius: "2px", marginBottom: "56px", marginTop: "56px" }} />
              <p className="mb-4">{paragraphs[2]}</p>
              <p className="mb-4">{paragraphs[3]}</p>
            </div>
          ) : slug === "on-design-and-ai" ? (
            <div className="text-base text-white leading-relaxed" style={{ paddingTop: "80px" }}>
              <p className="mb-8">This space is for ongoing side projects, prototypes, and experiments that are still taking shape. The work exists, it just isn&rsquo;t ready to be shown yet. More soon.</p>
              <p className="mb-4 text-[#888888]">Currently building</p>
              <div className="flex flex-col gap-2 text-[#888888]">
                <p>· A digital concept encouraging physical hangouts.</p>
                <p>· Interfaces for keeping humans in the loop on AI decisions.</p>
                <p>· A tool for making multi-agent AI systems comprehensible.</p>
              </div>
            </div>
          ) : paragraphs ? (
            <div className="space-y-4 text-base text-white leading-relaxed">
              {subtitle && <p className="italic mb-4">{subtitle}</p>}
              {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          ) : (
            <p className="text-base text-[#888888]">Coming soon</p>
          )}
        </section>
      </div>
      <div className="hidden md:block" style={{ flex: "1 1 33.33%", borderLeft: "1px solid #333333" }} />
    </div>
  );
}
