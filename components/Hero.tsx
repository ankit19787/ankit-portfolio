"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LiveCommerceDemo from "./LiveCommerceDemo";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden border-b border-ink-line pt-28 md:pt-32"
    >
      <div className="ember-glow -top-40 -left-40" />
      <div className="lime-glow top-20 right-0" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 20%), rgba(255,107,74,0.10), transparent 65%)",
        }}
      />

      <div className="container-px relative">
        <div className="grid items-end gap-12 md:grid-cols-12 md:gap-10">
          <div className="order-2 md:order-1 md:col-span-7 lg:col-span-8">
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <span className="pill pill-lime">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-lime" />
                Open to Tech Lead / Architect roles · Q2 2026
              </span>
              <span className="pill">Gurgaon, IN — UTC+5:30</span>
            </div>

            <h1
              className={`display-xl mt-8 transition-all delay-100 duration-700 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              Headless commerce,
              <br />
              <span className="relative inline-block italic text-ember">
                composed
                <svg
                  aria-hidden
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 50 2, 100 6 T 198 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    className="text-ember/60"
                  />
                </svg>
              </span>{" "}
              for scale.
            </h1>

            <p
              className={`text-body mt-8 max-w-xl transition-all delay-200 duration-700 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Technical Lead, 14+ years building enterprise commerce on
              Shopify Plus, BigCommerce, commercetools and Magento. Currently
              shipping <span className="text-ink">Marketing Automation OS for
              Shopify brands</span> — a milestone-architected n8n engine that
              unifies Shopify data, AI content, social, ads and retention
              into one auditable, multi-tenant platform.
            </p>

            <div
              className={`mt-10 flex flex-wrap items-center gap-3 transition-all delay-300 duration-700 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <a href="#projects" className="btn-primary group/cta">
                See selected work
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </div>
          </div>

          <div
            className={`order-1 mx-auto w-full max-w-[280px] md:order-2 md:mx-0 md:max-w-none md:col-span-5 lg:col-span-4 transition-all delay-200 duration-700 ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <PortraitCard />
          </div>
        </div>

        <FeaturedProductBlock />
        <ApiContractBlock />
      </div>

      <Marquee />
    </section>
  );
}

function FeaturedProductBlock() {
  const stats = [
    { n: "13", label: "milestones shipped" },
    { n: "25+", label: "workflows live" },
    { n: "14", label: "journey scenes" },
    { n: "11", label: "platforms integrated" },
  ];
  const integrations = [
    "Shopify",
    "Klaviyo",
    "Anthropic Claude",
    "Meta Graph",
    "LinkedIn",
    "TikTok",
    "Google Ads",
    "Creatomate",
    "Retell AI",
    "Cloudflare R2",
    "Supabase",
    "Slack",
  ];

  return (
    <div className="relative mt-20 md:mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-ember/30 bg-canvas-raised p-7 md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ember/[0.08] via-transparent to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-ember/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -bottom-40 h-[24rem] w-[24rem] rounded-full bg-lime/[0.06] blur-3xl"
        />

        <div className="relative grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="pill pill-ember">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ember" />
                Featured Product
              </span>
              <span className="pill pill-lime">Fully automated</span>
              <span className="pill">Production-ready</span>
            </div>

            <h2 className="display-lg mt-6">
              Marketing Automation OS
              <br />
              <span className="italic text-ember">for Shopify brands.</span>
            </h2>

            <p className="text-body mt-6 max-w-2xl">
              A milestone-architected n8n engine that unifies Shopify commerce
              data, AI content generation, organic social, blog publishing,
              video rendering, ads monitoring, abandoned-cart sequences and
              optional Retell AI voice outreach — into one auditable,
              human-in-the-loop platform. Every workflow keys on{" "}
              <span className="font-mono text-sm text-ember">store_id</span>{" "}
              so adding a second store is a config change, not a re-build.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary group/cta">
                See the build
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost">
                Build one for us
              </a>
            </div>

            <div className="mt-7">
              <div className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                Integrated platforms
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {integrations.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-ink-line bg-canvas/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 md:border-l md:border-ink-line md:pl-10">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-ember/25 bg-gradient-to-br from-ember/[0.10] to-ember/[0.02] p-4 transition hover:border-ember/50"
                >
                  <div className="font-serif text-3xl text-ember md:text-4xl">
                    {s.n}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-ember/30 bg-ember/[0.06] p-4">
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
      </div>
    </div>
  );
}

function PortraitCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[28px] border border-ember/20 bg-ember/[0.04]" />
      <div className="relative overflow-hidden rounded-3xl border border-ink-line bg-canvas-raised">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/ankit.jpg"
            alt="Portrait of Ankit Bansal"
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 40vw, 80vw"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent" />

          <div className="absolute inset-x-4 bottom-4">
            <div className="rounded-2xl border border-ink-line bg-canvas/80 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-ink-dim">
                    Currently
                  </div>
                  <div className="mt-1 text-sm font-medium text-ink">
                    Technical Lead
                  </div>
                  <div className="text-xs text-ink-muted">
                    Nvizion Solutions
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-ink-dim">
                    Since
                  </div>
                  <div className="mt-1 font-mono text-sm text-lime">
                    07 / 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApiContractBlock() {
  return (
    <div className="relative mt-20 grid gap-6 md:mt-28 md:grid-cols-12">
      <div className="md:col-span-4">
        <div className="section-number">// Also shipping — Commerce Unifier</div>
        <h3 className="display-md mt-3">
          One API.
          <br />
          <span className="italic text-ember">Any</span> commerce backend.
        </h3>
        <p className="text-body mt-5">
          Commerce Unifier hides BigCommerce, commercetools and others behind a
          single JSON-Schema contract. Storefront engineers build once. Ops
          choose the backend per market, per request — without rewriting the
          frontend.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-dim">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-lime" />
          watch the header swap →
        </div>
      </div>

      <div className="md:col-span-8">
        <LiveCommerceDemo />
      </div>
    </div>
  );
}

function Marquee() {
  const items = [
    "Shopify Plus",
    "BigCommerce",
    "commercetools",
    "Magento 2",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Google Cloud",
    "OpenAI",
    "Contentstack",
    "Payload CMS",
    "Razorpay",
    "Stencil",
    "GraphQL",
  ];
  const row = [...items, ...items];

  return (
    <div className="mt-20 border-y border-ink-line bg-canvas-raised/40 py-5">
      <div className="group/marquee relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-canvas to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-canvas to-transparent" />
        <div className="flex w-max animate-marquee gap-12 group-hover/marquee:[animation-play-state:paused]">
          {row.map((t, i) => (
            <div
              key={`${t}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="h-1 w-1 rounded-full bg-ember" />
              <span className="font-serif text-2xl italic text-ink-muted transition hover:text-ink">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
