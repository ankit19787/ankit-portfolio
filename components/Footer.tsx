const socials = [
  { label: "YouTube", href: "https://www.youtube.com/@ankitbansaldev", path: "M23 12s0-3.8-.5-5.6a2.9 2.9 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.4a2.9 2.9 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.6a2.9 2.9 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.4a2.9 2.9 0 0 0 2-2C23 15.8 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z" },
  { label: "GitHub", href: "https://github.com/ankit19787", path: "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.6.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ankit19787", path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18V10H5.8v8h2.5zM7 8.8a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8zM18.2 18v-4.4c0-2.4-1.3-3.5-3-3.5-1.4 0-2 .8-2.3 1.3V10h-2.5v8h2.5v-4.4c0-1.2.6-1.9 1.5-1.9s1.3.7 1.3 1.9V18h2.5z" },
  { label: "Instagram", href: "https://www.instagram.com/ankitbansaldev", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" },
  { label: "Facebook", href: "https://www.facebook.com/ankitbansaldev", path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" },
  { label: "X", href: "https://x.com/ankitbansaldev", path: "M18.9 2H22l-7.1 8.1L23 22h-6.6l-5.2-6.8L5.3 22H2.1l7.6-8.7L1.7 2h6.8l4.7 6.2L18.9 2zm-2.3 18h1.7L7.5 3.8H5.7L16.6 20z" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-line py-12">
      <div className="container-px flex flex-col items-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink-line bg-canvas-raised text-ink-muted transition hover:border-ember/50 hover:text-ember"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-ink-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          © {new Date().getFullYear()} Ankit Bansal — Gurgaon, India
        </div>
      </div>
    </footer>
  );
}
