import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const projects = [
  {
    n: "01",
    title: "FashionHub",
    sub: "Shopify Plus DTC platform",
    tag: "Shopify Plus",
    summary:
      "Took a high-growth fashion brand end-to-end on Shopify Plus. Built bulk-product custom apps that took catalog ops off the merchandising team's bottleneck path, wired GraphQL Storefront integrations and Checkout Extensions tailored to the buying flow, and shipped an AI upsell engine on the product detail page — landing the launch with Core Web Vitals and conversion wins.",
    stack: ["Shopify Plus", "GraphQL", "Node.js", "TypeScript", "React", "OpenAI"],
    span: "md:col-span-7",
  },
  {
    n: "02",
    title: "Olay.com",
    sub: "Global DTC · BigCommerce · 1 year onsite, USA",
    tag: "BigCommerce",
    summary:
      "Embedded onsite in the US for a year, working directly with the client team on an enterprise BigCommerce implementation for a global beauty brand. Delivered custom PDP components, merchandising logic and marketing / analytics integrations — tuned for the conversion paths that mattered most to the brand.",
    stack: ["BigCommerce", "React", "Node.js"],
    span: "md:col-span-5",
  },
  {
    n: "03",
    title: "Composite One",
    sub: "B2B commerce on BigCommerce",
    tag: "B2B",
    summary:
      "Took the friction out of complex B2B checkout and account flows. Custom analytics integrations gave the operations team buying-cycle visibility they couldn't see before, and the backend APIs were sized for enterprise traffic from day one.",
    stack: ["BigCommerce", "Next.js", "PostgreSQL", "TypeScript"],
    span: "md:col-span-5",
  },
  {
    n: "04",
    title: "Shopify → BigCommerce migration",
    sub: "Zero-data-loss platform migration",
    tag: "Migration",
    summary:
      "Moved an enterprise DTC brand off Shopify onto BigCommerce without leaking SEO or losing customer history. Preserved every URL with engineered redirect maps to protect organic rankings, and rebuilt the brand's Shopify-only custom functionality natively in BigCommerce.",
    stack: ["Shopify", "BigCommerce", "REST APIs", "Node.js"],
    span: "md:col-span-7",
  },
  {
    n: "05",
    title: "AI commerce initiatives",
    sub: "LLM-powered merchandising",
    tag: "AI / LLMs",
    summary:
      "Put LLMs to work across the catalog and support surface area. An OpenAI-powered description generator unblocked merchandising teams on every new launch, a behavior-signal recommendation engine fed personalized PDP and basket placements, bulk LLM SEO meta generation closed the long-tail content gap, and an AI chatbot deflected repetitive order and support queries.",
    stack: ["OpenAI APIs", "Node.js", "Shopify", "BigCommerce"],
    span: "md:col-span-7",
  },
  {
    n: "06",
    title: "Earlier products & platforms",
    sub: "MageCube · SocialEngine · Channelize.io · AlmaHub",
    tag: "Earlier work",
    summary:
      "Shipped commercial Magento 2 extensions (MageCube) sold to merchants worldwide, multiple SocialEngine community platform builds in production, a real-time messaging integration platform (Channelize.io) embedded by consumer apps, and the AlmaHub alumni management product — all during the BigStep years.",
    stack: ["Magento 2", "SocialEngine", "PHP", "Node.js", "Realtime"],
    span: "md:col-span-5",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad relative border-t border-ink-line"
    >
      <div className="container-px">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="section-number">04 / Projects</div>
            <h2 className="display-lg mt-4">
              Work that <span className="italic text-ember">shipped</span>
              <br />
              to production.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:justify-self-end">
            <a
              href="mailto:ankit19787@gmail.com"
              className="text-sm text-ink-muted underline decoration-ember/40 decoration-2 underline-offset-4 transition hover:text-ink"
            >
              Ask for a detailed case study →
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-12">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 100}
              className={p.span}
            >
              <TiltCard className="h-full rounded-2xl">
                <article className="bento bento-hover group relative h-full p-7">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ember">
                      {p.n}
                    </span>
                    <span className="pill">{p.tag}</span>
                  </div>

                  <h3 className="mt-5 font-serif text-3xl text-ink transition group-hover:text-ember md:text-4xl">
                    {p.title}
                  </h3>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                    {p.sub}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                    {p.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-ink-line pt-5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] uppercase tracking-wider text-ink-dim"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
