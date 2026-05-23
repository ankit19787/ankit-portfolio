export default function Footer() {
  return (
    <footer className="border-t border-ink-line py-10">
      <div className="container-px flex items-center justify-center text-xs">
        <div className="flex items-center gap-3 font-mono uppercase tracking-wider text-ink-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          © {new Date().getFullYear()} Ankit Bansal — Gurgaon, India
        </div>
      </div>
    </footer>
  );
}
