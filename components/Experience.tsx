import Reveal from "./Reveal";

const roles = [
  {
    company: "Nvizion Solutions",
    title: "Technical Lead",
    period: "Jul 2024 — Present",
    bullets: [
      "Take Shopify Plus, BigCommerce and commercetools enterprise implementations from kickoff through production launch — owning the architecture, the team, and the post-deploy verification.",
      "Architect headless commerce backends in Node.js / TypeScript that the storefront builds against once, not per provider — so adding a new commerce backend is a transform, not a frontend rewrite.",
      "Drive AI initiatives into the surfaces where they move the needle: recommendation engines feeding PDP and basket placements, SEO meta generation at catalog scale, support chatbots that deflect repetitive queries.",
      "Design Next.js headless storefronts that expand into new locales, currencies and markets without an engineering re-architecture each time.",
      "Mentor senior and mid-level engineers; own production deploys on GCP end-to-end including post-deploy verification and incident response.",
    ],
  },
  {
    company: "LTIMindtree",
    title: "Technical Lead / Senior Developer",
    period: "Jun 2018 — Jul 2024",
    bullets: [
      "Delivered B2B and DTC commerce platforms for global brands that held up under enterprise traffic from day one.",
      "Built custom Shopify apps, BigCommerce integrations and headless storefronts that gave merchandising teams operational leverage they didn't have before.",
      "Shipped AI-assisted search optimization and smart merchandising into live shopper journeys, not just admin tooling.",
      "Wired ERP, CRM, payment gateway and marketing automation systems into the commerce backbone so business teams stopped working in disconnected silos.",
      "Led digital transformation across multiple geographies and business units — coordinating engineering, product and stakeholders across timezones.",
    ],
  },
  {
    company: "BigStep Technologies",
    title: "Technical Lead / Developer",
    period: "Dec 2009 — May 2018",
    bullets: [
      "Led Magento 2, SocialEngine and PHP-based eCommerce and community-platform builds — from architecture decisions through production launch.",
      "Productized internal work into reusable extensions, plugins and integrations sold commercially — turning project IP into recurring revenue.",
      "Architected SEO-friendly, high-performance systems that held under significant catalog sizes and traffic loads.",
    ],
  },
];

const flagshipBullets = [
  "Collapsed multi-backend complexity into one API — architected the unified middleware over BigCommerce and commercetools, with the backend selected per request via the x-commerce-provider header. Storefront teams build against a single contract.",
  "Decoupled storefronts from provider shapes with a custom transform SDK (@commerceunifier/transform-sdk) that normalizes heterogeneous provider responses into a JSON-Schema-driven contract — adding a new provider is now a transform, not a frontend rewrite.",
  "Unified content, payments and asset hosting under one contract: Contentstack and Payload CMS, Razorpay, and Google Cloud Storage for media, sitemaps and product feeds — so launching a new market doesn't kick off a fresh integration project.",
  "Made multi-market SEO operable by building a sitemap pipeline that publishes category, product and CMS sitemaps to GCP with cache-bust automation across locales — ops own it, engineering doesn't get paged for routine updates.",
  "Built the runtime to hold under traffic with JWT auth, webhook-driven cache invalidation and Prisma / PostgreSQL persistence for carts, customer mappings and provider configuration.",
  "Closed the merchandising loop with Google Shopping product feeds, bulk Google Translate pipelines and BigCommerce channel sync tooling — so new markets and channels go live without a separate engineering spike.",
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
