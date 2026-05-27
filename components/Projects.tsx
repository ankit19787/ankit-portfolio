import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const flagship = {
  title: "Marketing Automation OS",
  italic: "for Shopify brands.",
  sub: "n8n · Supabase · Anthropic Claude · multi-tenant · production-ready",
  summary:
    "A milestone-architected marketing engine that unifies Shopify commerce data, AI content generation, organic social posting, blog publishing, video rendering, ads monitoring, abandoned-cart sequences and optional Retell AI voice outreach into one auditable, human-in-the-loop platform. Every workflow keys on store_id — adding a second Shopify store is a config change, not a re-build.",
  stack: [
    "n8n",
    "TypeScript",
    "Postgres / Supabase",
    "Anthropic Claude",
    "Shopify Admin API",
    "Klaviyo",
    "Docker",
    "Hetzner",
  ],
  stats: [
    { n: "13", label: "milestones shipped" },
    { n: "25+", label: "workflows live" },
    { n: "14", label: "customer-journey scenes" },
    { n: "11", label: "integrated platforms" },
  ],
  integrations: [
    "Shopify",
    "Klaviyo",
    "Anthropic Claude",
    "Meta Graph",
    "LinkedIn",
    "TikTok",
    "Google Ads",
    "Creatomate",
    "Retell AI",
    "Twilio",
    "Cloudflare R2",
    "Supabase",
    "Slack",
  ],
};

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
          <Reveal className="md:col-span-12">
            <TiltCard className="h-full rounded-2xl" intensity={3}>
              <article className="bento bento-hover relative overflow-hidden p-7 md:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-ember/10 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-40 -bottom-40 h-[24rem] w-[24rem] rounded-full bg-lime/[0.04] blur-3xl"
                />

                <div className="relative grid gap-10 md:grid-cols-12">
                  <div className="md:col-span-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-ember">
                        00 / Latest
                      </span>
                      <span className="pill pill-ember">
                        <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ember" />
                        Marketing Automation
                      </span>
                      <span className="pill pill-lime">Fully automated</span>
                    </div>

                    <h3 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl">
                      {flagship.title}
                      <br />
                      <span className="italic text-ember">{flagship.italic}</span>
                    </h3>
                    <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                      {flagship.sub}
                    </div>

                    <p className="mt-6 text-sm leading-relaxed text-ink-muted md:text-base">
                      {flagship.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-ink-line pt-5">
                      {flagship.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[11px] uppercase tracking-wider text-ink-dim"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-5 md:border-l md:border-ink-line md:pl-10">
                    <div className="grid grid-cols-2 gap-3">
                      {flagship.stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-xl border border-ink-line bg-canvas/50 p-4"
                        >
                          <div className="font-serif text-3xl text-ink md:text-4xl">
                            {s.n}
                          </div>
                          <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-dim">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                        Integrated platforms
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {flagship.integrations.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-full border border-ink-line bg-canvas-raised/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-ember/30 bg-ember/[0.06] p-4">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-ember">
                        Architecture
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-ink-muted">
                        Modular by milestone, multi-tenant on{" "}
                        <span className="text-ink">store_id</span>, human-in-the-loop
                        approval before every publish, central{" "}
                        <span className="text-ink">do-not-contact</span> table
                        enforcing CAN-SPAM / GDPR / CCPA / TCPA.
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </TiltCard>
          </Reveal>

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
