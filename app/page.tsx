import HomeClient from "@/components/HomeClient";

const projects = [
  {
    slug: "celsia",
    title: "Celsia",
    description: "Sustainability reporting, made clear",
  },
  {
    slug: "nam",
    title: "DiM",
    description: "Reimagining how to engage with digitized art",
  },
  {
    slug: "nav",
    title: "NAV",
    description: "Untangling social security for everyday users",
  },
  {
    slug: "sanity",
    title: "Sanity",
    description: "Visual marketing and communications design",
  },
  {
    slug: "ask",
    title: "Ask",
    description: "Bringing AI into primary school education",
  },
  {
    slug: "on-design-and-ai",
    title: "Explorations",
    description: "Design explorations built with AI",
  },
];

export default function Home() {
  return <HomeClient projects={projects} />;
}
