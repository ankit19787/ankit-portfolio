import Reveal from "./Reveal";
import Counter from "./Counter";

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-px">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <Reveal>
                <div className="section-number">01 / About</div>
                <h2 className="display-lg mt-4">
                  I build the
                  <br />
                  <span className="italic text-ember">plumbing</span> behind
                  modern commerce.
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-6">
              <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">
                &ldquo;Composable commerce isn&apos;t a stack — it&apos;s a
                contract. If the contract is right, you can swap providers in a
                weekend instead of a quarter.&rdquo;
              </p>
              <p className="text-body">
                I architect and lead the delivery of enterprise-scale commerce
                platforms — from contract-driven middleware to multi-locale
                headless storefronts. My focus is systems that hold up in
                production: predictable APIs, sane data models, locale-aware
                SEO, and infrastructure teams can actually operate.
              </p>
              <p className="text-body">
                Over 14+ years I&apos;ve shipped on Shopify Plus, BigCommerce,
                commercetools and Magento — and currently lead Commerce Unifier,
                a provider-agnostic backend that lets storefront engineers build
                against one stable surface while ops can swap or mix commerce
                providers without rewriting the frontend.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-2">
              {[
                {
                  k: "Architecture & delivery",
                  v: "Contract-driven APIs, transform pipelines, JSON Schema, end-to-end ownership.",
                },
                {
                  k: "Team leadership",
                  v: "Mentoring senior engineers, cross-team code reviews, sprint-based delivery.",
                },
                {
                  k: "AI-enabled commerce",
                  v: "OpenAI for descriptions, recommendations, SEO meta, support chatbots.",
                },
                {
                  k: "Production ownership",
                  v: "GCP deploys, post-deploy verification, webhook-driven invalidation.",
                },
              ].map((b) => (
                <div
                  key={b.k}
                  className="bg-canvas p-6 transition hover:bg-canvas-raised"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ember" />
                    <div>
                      <div className="text-sm font-medium text-ink">{b.k}</div>
                      <div className="mt-1.5 text-sm text-ink-muted">
                        {b.v}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink-line pt-8">
              <Reveal delay={0}>
                <div className="font-serif text-4xl text-ink md:text-5xl">
                  <Counter to={14} suffix="+" />
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                  Years shipping commerce
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="font-serif text-4xl text-ink md:text-5xl">
                  <Counter to={10} suffix="+" />
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                  Production releases shipped
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="font-serif text-4xl text-ink md:text-5xl">
                  ∞
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                  Locales, currencies, channels
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
