import { ArrowUpRight, Phone, Mail } from 'lucide-react';
import { projects, contactInfo } from '@/data';

type ProjectsPageProps = {
  onNavigate: (path: string) => void;
};

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--brand-deep)]">
        <img
          src="/assets/dining-wide.jpg"
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
              <span className="h-px w-10 bg-[var(--accent-orange)]"></span>Projects
            </div>
            <h1 className="mt-4 font-display text-white text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              We Have Solutions for A Wide Range of <span className="italic font-light text-white/90">Projects</span><span className="text-[var(--accent-orange)]">!</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">
              A representative selection of the residential, commercial, and infrastructure work
              delivered by our multidisciplinary team.
            </p>
          </div>
        </div>
      </section>

      {/* Projects alternating layout */}
      <section className="container-px mx-auto w-full py-16 md:py-24 overflow-hidden">
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={project.number}
                className="relative grid grid-cols-12 gap-3 md:gap-6 items-center"
              >
                <div className={`col-span-11 relative ${isEven ? 'col-start-1' : 'col-start-2'}`}>
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/9] group rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div
                  className={`col-span-11 md:col-span-6 -mt-10 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 z-10 ${
                    isEven ? 'col-start-2 md:right-0' : 'col-start-1 md:left-0'
                  }`}
                >
                  <div
                    className={`bg-[var(--brand)] text-white p-5 md:p-7 shadow-xl ${
                      isEven
                        ? 'border-l-4 border-[var(--accent-orange)]'
                        : 'border-r-4 border-[var(--accent-orange)]'
                    }`}
                  >
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-white/60">
                      <span>{project.number}</span>
                      <span className="h-px w-8 bg-[var(--accent-orange)]"></span>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl italic">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
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
                  Call {contactInfo.mobile} <Phone className="h-4 w-4" />
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
                {contactInfo.address} · {contactInfo.hours}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
