import Reveal from "./Reveal";

const roles = [
  {
    company: "Nvizion Solutions",
    title: "Technical Lead",
    period: "Jul 2024 — Present",
    bullets: [
      "Leading Shopify Plus, BigCommerce and commercetools enterprise implementations end-to-end.",
      "Architecting scalable middleware and headless commerce backends in Node.js / TypeScript.",
      "Driving AI-based recommendation, personalization and SEO automation initiatives.",
      "Designing Next.js headless storefronts with multi-locale, multi-currency support.",
      "Mentoring development teams, owning production deploys on GCP, running code reviews.",
    ],
  },
  {
    company: "LTIMindtree",
    title: "Technical Lead / Senior Developer",
    period: "Jun 2018 — Jul 2024",
    bullets: [
      "Delivered enterprise B2B and DTC eCommerce platforms for global brands.",
      "Built custom Shopify apps, BigCommerce integrations and headless storefronts.",
      "Developed AI-assisted search optimization and smart merchandising solutions.",
      "Integrated ERP, CRM, payment gateways and marketing automation systems.",
      "Led digital transformation across multiple geographies and business units.",
    ],
  },
  {
    company: "BigStep Technologies",
    title: "Technical Lead / Developer",
    period: "Dec 2009 — May 2018",
    bullets: [
      "Led Magento 2 and PHP-based eCommerce builds for product and service businesses.",
      "Developed reusable extensions, plugins and integrations published as commercial products.",
      "Architected SEO-friendly, high-performance systems handling significant catalog and traffic loads.",
    ],
  },
];

const flagshipBullets = [
  "Architected the unified backend abstracting BigCommerce + commercetools behind one REST API — provider chosen per request via x-commerce-provider header.",
  "Built a custom transform SDK (@commerceunifier/transform-sdk) that normalizes heterogeneous provider responses into a JSON-Schema-driven contract.",
  "Integrated multi-CMS (Contentstack, Payload CMS), Razorpay payments, and GCS for media, sitemaps and product feed assets.",
  "Engineered the SEO sitemap pipeline — category, product and CMS sitemaps published to GCP with cache-bust automation across markets.",
  "Implemented JWT auth, webhook-driven cache invalidation and Prisma/PostgreSQL persistence for carts, customer mappings and provider config.",
  "Delivered Google Shopping feeds, bulk translation pipelines (Google Translate) and BigCommerce channel sync tooling.",
];

const flagshipStack = [
  "Node.js",
  "TypeScript",
  "Express",
  "PostgreSQL",
  "Prisma",
  "BigCommerce",
  "commercetools",
  "Contentstack",
  "PayloadCMS",
  "Razorpay",
  "Google Cloud Storage",
  "JSON Schema",
  "JWT",
  "Swagger",
  "Docker",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad relative border-t border-ink-line"
    >
      <div className="container-px">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="section-number">03 / Work</div>
            <h2 className="display-lg mt-4">
              14+ years building
              <br />
              for <span className="italic text-ember">global brands</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line">
          {roles.map((r, i) => (
            <div key={r.company} className="bg-canvas p-6 md:p-10">
              <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ember">
                      {String(roles.length - i).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                      {r.period}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl text-ink md:text-3xl">
                    {r.title}
                  </h3>
                  <div className="mt-1 text-sm text-ink-muted">{r.company}</div>
                </div>

                <ul className="space-y-3 text-sm text-ink-muted md:col-span-8">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 inline-block h-1 w-3 flex-shrink-0 bg-ember/50" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {i === 0 && <FlagshipBlock />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlagshipBlock() {
  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-ember/30 bg-ember/[0.03]">
      <div className="flex items-center justify-between border-b border-ember/20 bg-ember/[0.06] px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="pill pill-ember">Flagship</span>
          <h4 className="font-serif text-lg text-ink md:text-xl">
            Commerce Unifier — Multi-Provider Headless Commerce Backend
          </h4>
        </div>
        <span className="hidden font-mono text-[11px] uppercase tracking-wider text-ember md:inline">
          v1 — production
        </span>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-12 md:gap-10 md:p-8">
        <p className="text-sm text-ink-muted md:col-span-12">
          A Node.js + TypeScript middleware that unifies multiple commerce
          platforms, CMS systems and payment gateways behind a single,
          contract-driven REST API. Storefront engineers build against one
          stable surface; ops can swap or mix providers without rewriting the
          frontend.
        </p>

        <ul className="grid gap-3 text-sm text-ink-muted md:col-span-12 md:grid-cols-2">
          {flagshipBullets.map((b) => (
            <li key={b} className="flex gap-2.5">
              <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-ember" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 md:col-span-12">
          {flagshipStack.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
