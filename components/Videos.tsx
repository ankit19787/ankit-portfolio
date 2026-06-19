import Reveal from "./Reveal";

const CHANNEL = "https://www.youtube.com/@ankitbansaldev";
const PLAYLIST =
  "https://www.youtube.com/playlist?list=PLwbp_GSTYdP7hiKwo_5mtubhTeOEORbqf";

const featured = {
  id: "mXRYgtcLeLk",
  title: "10 AI Agents Every Shopify Store Needs in 2026",
  blurb:
    "The agents every online store will run — what each one does, and how to build them in Node.js on a local LLM, with no API keys.",
};

const builds = [
  { id: "3V_L8mLmeNQ", title: "AI Support Agent", tag: "Node.js" },
  { id: "LS7yKKEQEBk", title: "Product Listing & SEO Agent", tag: "Node.js" },
  { id: "fHoRLGvIvuU", title: "Personalization Agent", tag: "Node.js" },
  { id: "gLhE7Ke5as8", title: "Ads & Creative Agent", tag: "Node.js" },
];

function PlayIcon() {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-full border border-ember/50 bg-canvas/70 backdrop-blur transition group-hover:scale-110 group-hover:border-ember">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-ember">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export default function Videos() {
  return (
    <section
      id="videos"
      className="section-pad relative overflow-hidden border-t border-ink-line"
    >
      <div className="lime-glow -top-40 right-0" />
      <div className="container-px relative">
        <Reveal>
          <div className="section-number">05 / Building in public</div>
          <h2 className="display-lg mt-4">
            Real builds,
            <br />
            <span className="italic text-ember">on camera.</span>
          </h2>
          <p className="text-body mt-6 max-w-2xl">
            A build series on YouTube — I design and ship real AI agents for
            ecommerce in Node.js, running on a local LLM (no API keys), one
            episode at a time.
          </p>
        </Reveal>

        {/* Featured */}
        <Reveal delay={100} className="mt-12">
          <a
            href={`https://youtu.be/${featured.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid overflow-hidden rounded-3xl border border-ember/30 bg-canvas-raised md:grid-cols-12"
          >
            <div className="relative aspect-video md:col-span-7">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${featured.id}/hqdefault.jpg`}
                alt={featured.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 grid place-items-center bg-canvas/30">
                <PlayIcon />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 p-7 md:col-span-5 md:p-9">
              <span className="pill pill-ember w-max">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ember" />
                Series overview
              </span>
              <h3 className="display-md">{featured.title}</h3>
              <p className="text-body">{featured.blurb}</p>
              <span className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                Watch on YouTube
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </div>
          </a>
        </Reveal>

        {/* Build episodes */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {builds.map((b, i) => (
            <Reveal key={b.id} delay={150 + i * 70}>
              <a
                href={`https://youtu.be/${b.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-ink-line bg-canvas-raised transition hover:border-ember/40"
              >
                <div className="relative aspect-video">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${b.id}/hqdefault.jpg`}
                    alt={b.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 grid place-items-center bg-canvas/25 opacity-0 transition group-hover:opacity-100">
                    <PlayIcon />
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm font-medium text-ink">{b.title}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-dim">
                    {b.tag}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex flex-wrap items-center gap-3">
          <a href={PLAYLIST} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View the full playlist
          </a>
          <a href={CHANNEL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Subscribe on YouTube
          </a>
        </Reveal>
      </div>
    </section>
  );
}
