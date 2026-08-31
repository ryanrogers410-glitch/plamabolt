import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { values, credentials, contactInfo } from '@/data';
import type { LucideIcon } from 'lucide-react';

type AboutPageProps = {
  onNavigate: (path: string) => void;
};

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--brand-deep)]">
        <img
          src="/assets/hero-structure.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14181C]/90 via-[#14181C]/70 to-[#14181C]/95" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-72 md:h-80"
          style={{
            background:
              'linear-gradient(to bottom, rgba(246,243,236,0.55) 0%, rgba(246,243,236,0.42) 20%, rgba(246,243,236,0.26) 45%, rgba(246,243,236,0.12) 70%, rgba(246,243,236,0.04) 88%, rgba(246,243,236,0) 100%)',
          }}
        />
        <div className="relative container-px mx-auto w-full pt-36 pb-16 md:pt-44 md:pb-24">
          <div className="max-w-3xl animate-rise">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-white/80">
              <span className="h-px w-10 bg-[var(--accent-orange)]"></span>Our Team
            </div>
            <h1 className="mt-4 font-display text-white text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              A Few Words About <span className="italic font-light text-white/90">Our</span><span className="text-[var(--accent-orange)]"> Firm.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base md:text-lg text-white/75 leading-relaxed">
              Plama Projects provides civil, structural engineering services to the residential,
              commercial, industrial and infrastructure market sectors. Our professional engineers
              are fully qualified and involved in diverse projects across all sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
              Professional engineers providing{' '}
              <span className="italic text-[var(--brand)]">broad vision</span> expertise.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-4 text-base leading-relaxed text-[var(--ink-soft)]">
            <p>
              Plama Projects provides civil, structural engineering services to the residential,
              commercial, industrial and infrastructure market sectors. Our clients include leading
              residential builders, development companies, government authorities, manufacturing
              companies and Architects.
            </p>
            <p>
              Our professional engineers are fully qualified in Civil and Structural Engineering,
              involving in diverse design and construction of all sectors — commercial, industrial,
              infrastructure, community &amp; residential.
            </p>
            <p>
              We are focused on providing a high level of customer service through our experienced
              team. Our commitment is to ensure that the design and documentation we provide meets
              the time, cost, quality and build-ability expectations of our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="container-px mx-auto w-full">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Our Values</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
              What we hold <span className="italic text-[var(--brand)]">ourselves to.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon: LucideIcon = value.icon;
              return (
                <div
                  key={value.number}
                  className="rounded-xl border border-border bg-white p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-2xl text-[var(--ink)]/20">
                      {value.number}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-[var(--ink)]">{value.title}</h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 flex items-center gap-8">
            <div className="font-display text-5xl md:text-6xl text-[var(--brand)]">20+</div>
            <div className="text-sm uppercase tracking-[0.22em] text-[var(--ink-soft)]">
              Years engineering
              <br />
              Sydney
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="bg-[var(--brand)] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 30%, var(--accent-orange) 0%, transparent 50%)',
          }}
        />
        <div className="container-px mx-auto w-full py-16 md:py-24 relative">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-white/60">
                <span className="h-px w-8 bg-[var(--accent-orange)]"></span> Founder Spotlight
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-balance">
                Lucas Tran<span className="text-[var(--accent-orange)]">.</span>
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.15em] text-white/60">
                Principal Engineer, Director, Founder
              </p>
              <p className="mt-6 text-base text-white/75 leading-relaxed">
                Lucas is the principal engineer/designer and founder of Plama Projects. His previous
                experience includes varied roles in design, project management and business
                management.
              </p>
              <blockquote className="mt-6 border-l-2 border-[var(--accent-orange)] pl-4 italic font-display text-lg text-white/85">
                "Great engineering is invisible. It lets architecture, builders and owners do their
                best work — quietly, and without drama."
              </blockquote>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <h3 className="text-xs uppercase tracking-[0.22em] text-white/50 mb-4">
                Credentials &amp; Registrations
              </h3>
              <ul className="space-y-3">
                {credentials.map((cred, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-white/80 border-b border-white/10 pb-3"
                  >
                    <span className="text-[var(--accent-orange)] mt-0.5 shrink-0">—</span>
                    {cred.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Explore / Projects links */}
      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => onNavigate('/services/structural')}
            className="group relative overflow-hidden rounded-xl border border-border bg-white p-8 text-left transition hover:-translate-y-1 hover:border-[var(--brand)]"
          >
            <span className="eyebrow">Explore Services</span>
            <h3 className="mt-4 font-display text-2xl text-[var(--ink)]">
              Structural, civil, façade, hydraulic, marine and more.
            </h3>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] group-hover:text-[var(--accent-orange)] transition">
              Learn more <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>
          <button
            onClick={() => onNavigate('/projects')}
            className="group relative overflow-hidden rounded-xl border border-border bg-white p-8 text-left transition hover:-translate-y-1 hover:border-[var(--brand)]"
          >
            <span className="eyebrow">Projects</span>
            <h3 className="mt-4 font-display text-2xl text-[var(--ink)]">
              A selection of representative work across Sydney.
            </h3>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] group-hover:text-[var(--accent-orange)] transition">
              Learn more <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#14181C] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, var(--accent-orange) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand) 0%, transparent 50%)',
          }}
        />
        <div className="container-px mx-auto w-full py-16 md:py-20 relative">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-white/70">
                <span className="h-px w-8 bg-[var(--accent-orange)]"></span> Start a Project
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl text-balance">
                Let's engineer
                <br />
                <span className="italic text-white/80">your next</span>
                <span className="text-[var(--accent-orange)]"> project.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/75 leading-relaxed">
                Our experienced team is equipped with the knowledge, skills, and tools to ensure
                efficiency and precision. We prioritize quality, excellence, and client
                satisfaction.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button onClick={() => onNavigate('/contact')} className="btn-primary">
                  Request a Consultation <ArrowUpRight className="h-4 w-4" />
                </button>
                <a
                  href={`tel:${contactInfo.mobileTel}`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-[var(--brand)] transition"
                >
                  Call {contactInfo.mobile}
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pl-8 lg:border-l border-white/15 flex flex-col justify-center gap-4 text-sm">
              <a
                href={`tel:${contactInfo.landline}`}
                className="flex items-center gap-3 hover:text-white text-white/80 transition"
              >
                <Phone className="h-4 w-4 text-[var(--accent-orange)]" /> {contactInfo.landline}
              </a>
              <a
                href={`tel:${contactInfo.mobileTel}`}
                className="flex items-center gap-3 hover:text-white text-white/80 transition"
              >
                <Phone className="h-4 w-4 text-[var(--accent-orange)]" /> {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 hover:text-white text-white/80 transition"
              >
                <Mail className="h-4 w-4 text-[var(--accent-orange)]" /> {contactInfo.email}
              </a>
              <div className="text-white/60 text-xs uppercase tracking-[0.22em] mt-2">
                <MapPin className="inline h-3 w-3 mr-1" />
                {contactInfo.address} · {contactInfo.hours}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
