import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden border-t border-ink-line"
    >
      <div className="ember-glow -bottom-60 left-1/2 -translate-x-1/2" />

      <div className="container-px relative">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="section-number">05 / Contact</div>
            <h2 className="display-xl mt-4">
              Let&apos;s ship
              <br />
              <span className="italic text-ember">something good</span>.
            </h2>
            <p className="text-body mt-8 max-w-xl">
              Have a headless commerce build, platform migration, or
              architecture audit on your roadmap? I help product and
              engineering teams ship enterprise commerce on Shopify Plus,
              BigCommerce and commercetools — from middleware to AI-powered
              merchandising and locale-aware SEO.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="mailto:ankit19787@gmail.com" className="btn-primary">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                ankit19787@gmail.com
              </a>
              <a href="tel:+917827448032" className="btn-ghost">
                +91 78274 48032
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="md:col-span-5">
            <div className="bento p-8">
              <div className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                / vitals
              </div>
              <dl className="mt-6 divide-y divide-ink-line">
                {[
                  { k: "Role", v: "Technical Lead — Headless & Composable Commerce" },
                  { k: "Currently", v: "Nvizion Solutions" },
                  { k: "Based in", v: "Gurgaon, India · UTC+5:30" },
                  { k: "Onsite experience", v: "1 year in the USA (Olay.com program)" },
                  { k: "Education", v: "B.Tech, Rajasthan University · 2009" },
                  { k: "Availability", v: "Open to Tech Lead / Architect roles" },
                ].map((b) => (
                  <div
                    key={b.k}
                    className="grid grid-cols-3 gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                      {b.k}
                    </dt>
                    <dd className="col-span-2 text-sm text-ink">{b.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
