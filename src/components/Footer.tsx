import { ArrowUpRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo, navLinks, services } from '@/data';

type FooterProps = {
  onNavigate: (path: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[var(--brand-deep)] text-white">
      <div className="container-px mx-auto w-full py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <img src="/plama-logo.png" alt="Plama Projects" className="h-20 w-auto mb-4" />
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Sydney-based multidisciplinary engineering consultancy delivering structural, civil,
              façade, marine and hydraulic engineering — senior-led, in-house, end-to-end.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.22em] text-white/50 mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-white/70 hover:text-[var(--accent-orange)] transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-white/50 mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => onNavigate(`/services/${s.slug}`)}
                    className="text-white/70 hover:text-[var(--accent-orange)] transition text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-white/50 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[var(--accent-orange)] mt-0.5 shrink-0" />
                <a href={`tel:${contactInfo.landline}`} className="hover:text-white transition">
                  {contactInfo.landline}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[var(--accent-orange)] mt-0.5 shrink-0" />
                <a href={`tel:${contactInfo.mobileTel}`} className="hover:text-white transition">
                  {contactInfo.mobile}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[var(--accent-orange)] mt-0.5 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[var(--accent-orange)] mt-0.5 shrink-0" />
                {contactInfo.address}
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[var(--accent-orange)] mt-0.5 shrink-0" />
                {contactInfo.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Plama Projects Pty Ltd. All rights reserved.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--accent-orange)] hover:text-white transition"
          >
            Request a Consultation <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
