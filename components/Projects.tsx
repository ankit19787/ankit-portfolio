import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const projects = [
  {
    n: "01",
    title: "FashionHub",
    sub: "Shopify Plus DTC platform",
    tag: "Shopify Plus",
    summary:
      "End-to-end Shopify Plus build for a high-growth fashion brand. Custom apps for bulk product ops, GraphQL Storefront integrations, Checkout Extensions and an AI upsell engine. Shipped Core Web Vitals + conversion wins.",
    stack: ["Shopify Plus", "GraphQL", "Node.js", "TypeScript", "React", "OpenAI"],
    span: "md:col-span-7",
  },
  {
    n: "02",
    title: "Olay.com",
    sub: "Global DTC · BigCommerce · 1 year onsite, USA",
    tag: "BigCommerce",
    summary:
      "Spent a year onsite in the US partnering directly with the client team on an enterprise BigCommerce implementation for a global beauty brand. Built custom PDP components, merchandising logic, and marketing / analytics integrations optimized for performance and conversion.",
    stack: ["BigCommerce", "React", "Node.js"],
    span: "md:col-span-5",
  },
  {
    n: "03",
    title: "Composite One",
    sub: "B2B commerce on BigCommerce",
    tag: "B2B",
    summary:
      "Enhanced checkout and account flows for complex B2B journeys. Custom analytics integrations and high-volume backend APIs that hold up under enterprise traffic.",
    stack: ["BigCommerce", "Next.js", "PostgreSQL", "TypeScript"],
    span: "md:col-span-5",
  },
  {
    n: "04",
    title: "Shopify → BigCommerce migration",
    sub: "Zero-data-loss platform migration",
    tag: "Migration",
    summary:
      "Full platform migration for an enterprise DTC brand. Preserved URL structure and redirect maps to protect organic rankings; rebuilt custom Shopify functionality natively within BigCommerce.",
    stack: ["Shopify", "BigCommerce", "REST APIs", "Node.js"],
    span: "md:col-span-7",
  },
  {
    n: "05",
    title: "AI commerce initiatives",
    sub: "LLM-powered merchandising",
    tag: "AI / LLMs",
    summary:
      "Built an OpenAI-powered product description generator, a behavior-signal recommendation engine, an AI chatbot for support / order queries, and bulk LLM-driven SEO meta generation across large catalogs.",
    stack: ["OpenAI APIs", "Node.js", "Shopify", "BigCommerce"],
    span: "md:col-span-7",
  },
  {
    n: "06",
    title: "MageCube · Channelize.io · AlmaHub",
    sub: "Commercial extensions & platforms",
    tag: "Earlier work",
    summary:
      "Shipped commercial Magento 2 extensions (MageCube), a real-time messaging integration platform (Channelize.io), and an alumni management product (AlmaHub) during the BigStep years.",
    stack: ["Magento 2", "PHP", "Node.js", "Realtime"],
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
