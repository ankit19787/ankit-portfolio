"use client";

import { useEffect, useState } from "react";

type Provider = {
  key: string;
  label: string;
  id: string;
  ext: string;
};

const providers: Provider[] = [
  { key: "bigcommerce", label: "bigcommerce", id: "p_1042", ext: "bc_42" },
  {
    key: "commercetools",
    label: "commercetools",
    id: "linen-overshirt-ct",
    ext: "ct_a91f",
  },
  {
    key: "shopify",
    label: "shopify",
    id: "gid://shopify/Product/1042",
    ext: "shp_1042",
  },
];

export default function LiveCommerceDemo() {
  const [i, setI] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFlash(true);
      setTimeout(() => {
        setI((v) => (v + 1) % providers.length);
        setFlash(false);
      }, 220);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  const p = providers[i];

  return (
    <>
      <FloatingTag provider={p} flash={flash} />
      <CodeBlock provider={p} flash={flash} />
    </>
  );
}

function FloatingTag({
  provider,
  flash,
}: {
  provider: Provider;
  flash: boolean;
}) {
  return (
    <div className="absolute -top-4 -right-4 hidden rotate-6 rounded-xl border border-ember/40 bg-canvas px-3 py-2 shadow-2xl shadow-ember/10 md:block">
      <div className="font-mono text-[10px] uppercase tracking-wider text-ember">
        x-commerce-provider
      </div>
      <div className="mt-0.5 flex items-center gap-1 font-mono text-xs text-ink">
        <span>:</span>
        <span
          className={`inline-block transition-all duration-300 ${
            flash
              ? "translate-y-1 opacity-0 blur-sm"
              : "translate-y-0 opacity-100 blur-0"
          }`}
        >
          {provider.label}
        </span>
        <span className="animate-blink text-ember">|</span>
      </div>
    </div>
  );
}

function CodeBlock({
  provider,
  flash,
}: {
  provider: Provider;
  flash: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-line bg-canvas-raised">
      <div className="flex items-center justify-between border-b border-ink-line px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-ember/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
        </div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-ink-dim">
          commerce-unifier · contract
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-ember/40 bg-ember/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ember">
          <span className="h-1 w-1 animate-blink rounded-full bg-ember" />
          live
        </span>
      </div>

      <pre className="scrollbar-none overflow-x-auto p-5 font-mono text-[12px] leading-relaxed md:text-[13px]">
        <code>
          <span className="text-ink-dim"># Same request shape, different backend</span>
          {"\n"}
          <span className="text-ink-muted">GET </span>
          <span className="text-ink">/api/v1/products/linen-overshirt</span>
          {"\n"}
          <span className="text-ink-muted">Host: </span>
          <span className="text-ink">commerce-unifier.app</span>
          {"\n"}
          <span className="text-ember">x-commerce-provider</span>
          <span className="text-ink-muted">: </span>
          <span
            className={`inline-block rounded px-1.5 transition-all duration-300 ${
              flash
                ? "bg-ember/10 text-ember/40"
                : "bg-ember/15 text-ember"
            }`}
          >
            {provider.label}
          </span>
          {"\n\n"}
          <span className="text-lime">200 OK</span>
          <span className="text-ink-muted"> · application/json</span>
          {"\n"}
          <span className="text-ink-muted">{"{"}</span>
          {"\n"}
          {"  "}
          <span className="text-ink">&quot;id&quot;</span>
          <span className="text-ink-muted">: </span>
          <span
            className={`text-ember transition-opacity duration-300 ${
              flash ? "opacity-30" : "opacity-100"
            }`}
          >
            &quot;{provider.id}&quot;
          </span>
          <span className="text-ink-muted">,</span>
          {"\n"}
          {"  "}
          <span className="text-ink">&quot;slug&quot;</span>
          <span className="text-ink-muted">: </span>
          <span className="text-ink-muted">&quot;linen-overshirt&quot;,</span>
          {"\n"}
          {"  "}
          <span className="text-ink">&quot;title&quot;</span>
          <span className="text-ink-muted">: </span>
          <span className="text-ink-muted">&quot;Linen Overshirt&quot;,</span>
          {"\n"}
          {"  "}
          <span className="text-ink">&quot;price&quot;</span>
          <span className="text-ink-muted">
            : {"{ "}&quot;amount&quot;: 12900, &quot;currency&quot;: &quot;USD&quot; {"},"}
          </span>
          {"\n"}
          {"  "}
          <span className="text-ink">&quot;media&quot;</span>
          <span className="text-ink-muted">: [ ... ],</span>
          {"\n"}
          {"  "}
          <span className="text-ink">&quot;variants&quot;</span>
          <span className="text-ink-muted">: [ ... ],</span>
          {"\n"}
          {"  "}
          <span className="text-ink">&quot;seo&quot;</span>
          <span className="text-ink-muted">
            : {"{ "}&quot;canonical&quot;: &quot;/us/linen-overshirt&quot;, &quot;hreflang&quot;: [...] {"},"}
          </span>
          {"\n"}
          {"  "}
          <span className="text-ink-muted">&quot;_provider_ref&quot;: </span>
          <span
            className={`text-ink-muted transition-opacity duration-300 ${
              flash ? "opacity-30" : "opacity-100"
            }`}
          >
            &quot;{provider.ext}&quot;
          </span>
          {"\n"}
          <span className="text-ink-muted">{"}"}</span>
        </code>
      </pre>

      <div className="flex items-center justify-between border-t border-ink-line bg-canvas/60 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          {providers.map((pp, idx) => (
            <span
              key={pp.key}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === providers.indexOf(provider)
                  ? "w-8 bg-ember"
                  : "w-1.5 bg-ink-line"
              }`}
            />
          ))}
        </div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-ink-dim">
          backend swapping · response shape <span className="text-lime">identical</span>
        </div>
      </div>
    </div>
  );
}
