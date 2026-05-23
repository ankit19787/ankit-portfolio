export default function Footer() {
  return (
    <footer className="border-t border-ink-line py-10">
      <div className="container-px flex flex-col items-start justify-between gap-3 text-xs md:flex-row md:items-center">
        <div className="flex items-center gap-3 font-mono uppercase tracking-wider text-ink-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          © {new Date().getFullYear()} Ankit Bansal — Gurgaon, India
        </div>
        <div className="font-mono uppercase tracking-wider text-ink-dim">
          Built with Next.js · TypeScript · Tailwind
        </div>
      </div>
    </footer>
  );
}
