import { useEffect, useState } from 'react';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';
import { services, navLinks } from '@/data';

type HeaderProps = {
  currentPath: string;
  onNavigate: (path: string) => void;
};

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const isHome = currentPath === '/';
  const isDark = isHome && !scrolled;
  const headerBg = isDark
    ? 'bg-transparent'
    : isHome
      ? 'bg-[var(--brand-deep)]/95 backdrop-blur-md shadow-lg'
      : 'bg-[#F6F3EC]/95 backdrop-blur-md shadow-[0_1px_0_0_#C9C3B6]';
  const navTextColor = isDark ? 'text-white/85' : 'text-[var(--ink)]';
  const btnClass = isDark
    ? 'bg-white text-[var(--brand)] hover:bg-[var(--accent-orange)] hover:text-white'
    : 'bg-[var(--brand)] text-white hover:bg-[var(--accent-orange)]';
  const mobileMenuIcon = isDark ? 'text-white' : 'text-[var(--ink)]';

  const go = (path: string) => {
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container-px mx-auto w-full flex items-center justify-between transition-all duration-300 py-3 md:py-4">
        <button onClick={() => go('/')} className="flex items-center">
          <img
            src="/plama-logo.png"
            alt="Plama Projects"
            className="w-auto transition-all duration-300 h-20 md:h-28"
          />
        </button>

        <div className="hidden lg:flex items-center gap-8">
          <nav className={`flex items-center gap-9 text-lg md:text-xl transition-colors ${navTextColor}`}>
            {navLinks.slice(0, 2).map((link) => (
              <button
                key={link.path}
                onClick={() => go(link.path)}
                className={`hover:opacity-70 transition ${
                  currentPath === link.path ? 'font-semibold text-[var(--accent-orange)]' : ''
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 hover:opacity-70 transition"
                aria-haspopup="true"
              >
                Services
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
                <div className="w-80 rounded-xl bg-white shadow-2xl border border-[#C9C3B6]/60 py-2 overflow-hidden">
                  {services.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => go(`/services/${s.slug}`)}
                      className="w-full flex items-center justify-between px-5 py-2.5 text-sm text-[var(--ink)] hover:bg-[var(--surface)] hover:text-[var(--brand)] transition text-left"
                    >
                      {s.title}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-40" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <button
                key={link.path}
                onClick={() => go(link.path)}
                className={`hover:opacity-70 transition ${
                  currentPath === link.path ? 'font-semibold text-[var(--accent-orange)]' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => go('/contact')}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition ${btnClass}`}
          >
            Request Consultation <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => go('/contact')}
            className={`hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition ${btnClass}`}
          >
            Request Consultation <ArrowUpRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`grid place-items-center h-10 w-10 rounded-md ${mobileMenuIcon}`}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[var(--brand-deep)] border-t border-white/10">
          <nav className="container-px mx-auto py-6 flex flex-col gap-4 text-white/85 text-lg">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => go(link.path)}
                className={`text-left hover:opacity-70 transition ${
                  currentPath === link.path ? 'text-[var(--accent-orange)] font-semibold' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-white/10 pt-4">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50 mb-3">Services</p>
              <div className="flex flex-col gap-3">
                {services.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => go(`/services/${s.slug}`)}
                    className="text-left text-sm text-white/70 hover:text-[var(--accent-orange)] transition"
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
