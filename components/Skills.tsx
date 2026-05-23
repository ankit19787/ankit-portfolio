const groups = [
  {
    n: "A",
    title: "eCommerce Platforms",
    accent: true,
    items: ["Shopify Plus", "BigCommerce", "commercetools", "Magento 2"],
  },
  {
    n: "B",
    title: "Composable / Headless",
    items: [
      "Multi-provider abstraction",
      "Contract-driven APIs",
      "JSON Schema",
      "Transform pipelines",
    ],
  },
  {
    n: "C",
    title: "AI-Driven Commerce",
    items: [
      "OpenAI APIs",
      "Product recommendations",
      "SEO meta generation",
      "Intelligent search",
      "Chatbots",
    ],
  },
  {
    n: "D",
    title: "Shopify Stack",
    items: [
      "Admin & Storefront GraphQL",
      "Webhooks",
      "Checkout Extensions",
      "Shopify Functions",
      "OAuth multi-tenant apps",
    ],
  },
  {
    n: "E",
    title: "BigCommerce Stack",
    items: [
      "Stencil",
      "Checkout SDK",
      "Catalog / Customer / Order APIs",
      "Webhooks · Channels",
    ],
  },
  {
    n: "F",
    title: "commercetools Stack",
    items: [
      "Platform SDK",
      "GraphQL",
      "Subscriptions",
      "ML-driven catalog modeling",
    ],
  },
  {
    n: "G",
    title: "Backend & APIs",
    items: ["Node.js", "TypeScript", "Express", "REST", "GraphQL", "PHP / Laravel"],
  },
  {
    n: "H",
    title: "Frontend",
    items: ["React", "Next.js", "Headless storefronts"],
  },
  {
    n: "I",
    title: "Data & Infra",
    items: [
      "PostgreSQL / MySQL",
      "Prisma",
      "Redis",
      "Google Cloud",
      "AWS",
      "CI/CD · Docker · Linux",
    ],
  },
];

import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad relative border-t border-ink-line"
    >
      <div className="container-px">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="section-number">02 / Stack</div>
            <h2 className="display-lg mt-4">
              Full-stack toolkit,
              <br />
              built around <span className="italic text-ember">commerce</span>.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <p className="text-body">
              Deep hands-on experience across platforms, backend, frontend,
              data and the AI integrations that increasingly drive
              merchandising and search.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid auto-rows-fr gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className={`group relative bg-canvas p-6 transition hover:bg-canvas-raised ${
                g.accent ? "md:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-dim">
                    {g.n}
                  </span>
                  <h3 className="text-sm font-medium text-ink">{g.title}</h3>
                </div>
                {g.accent && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ember">
                    Primary
                  </span>
                )}
              </div>
              <ul className="mt-5 space-y-2.5">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-2.5 text-sm text-ink-muted"
                  >
                    <span className="font-mono text-[10px] text-ink-dim">
                      ◦
                    </span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
