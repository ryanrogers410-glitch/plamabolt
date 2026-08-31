import { ArrowUpRight, Phone, Mail } from 'lucide-react';
import { services, whyChooseItems, accreditations, projects, contactInfo } from '@/data';

type HomePageProps = {
  onNavigate: (path: string) => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
  const featuredProjects = [projects[0], { ...projects[2], number: '02' }];

  return (
    <main className="flex-1">
      {/* Hero */}
      <section id="top" className="relative min-h-[80vh] overflow-hidden bg-[var(--brand-deep)]">
        <img
          src="/assets/interior-living-wide.jpg"
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14181C]/85 via-[#14181C]/55 to-[#14181C]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14181C]/70 to-transparent" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-72 md:h-80"
          style={{
            background:
              'linear-gradient(to bottom, rgba(246,243,236,0.55) 0%, rgba(246,243,236,0.42) 20%, rgba(246,243,236,0.26) 45%, rgba(246,243,236,0.12) 70%, rgba(246,243,236,0.04) 88%, rgba(246,243,236,0) 100%)',
          }}
        />
        <div className="relative container-px mx-auto w-full pt-32 pb-14 md:pt-40 md:pb-20">
          <div className="max-w-4xl animate-rise">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-white/80">
              <span className="h-px w-10 bg-[var(--accent-orange)]"></span>
              Engineering Consultancy · Sydney
            </div>
            <h1 className="mt-4 font-display text-white text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              Engineering Firm <br />
              <span className="italic font-light text-white/90">based in</span>
              <span className="text-[var(--accent-orange)]"> Sydney.</span>
            </h1>
            <div className="mt-6 max-w-3xl space-y-4 text-base md:text-lg text-white/75 leading-relaxed">
              <p>
                Plama Projects banks on nearly 20 years of experience in the construction and
                building consulting industry and has been in the Sydney market since 2017. We have
                experience in residential, commercial, high rise and industrial buildings. We cover
                the Sydney metropolitan area and the built environment — in particular throughout the
                Eastern Suburbs, Sydney CBD, Northern Beaches, Hills District,
                Canterbury-Bankstown, Northern Suburbs, South Western Sydney, Western Sydney, Forest
                District, South-Eastern Sydney, Fairfield-Liverpool, Strathfield-Homebush, and
                Drummoyne, Five Dock area where the business is located.
              </p>
              <p>
                Our hours of operation are from 9am to 5:30pm Monday to Friday and flexible on
                demand. We are fully insured &amp; accredited. Our projects are highly recognized
                and delivered quickly at the highest quality with satisfaction guaranteed. We
                maintain the integrity of designs by carrying out in-house services for a wide range
                of aspects of the project such as Structure, Stormwater, Hydraulic and Civil, Glass
                and Façade Engineering.
              </p>
              <p>
                Our prices are affordable, all-inclusive &amp; fixed without compromising standard
                and quality — quick turnover, reliable and accountable, efficient and best customer
                services.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button onClick={() => onNavigate('/contact')} className="btn-primary">
                Request a Consultation <ArrowUpRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate('/services/structural')}
                className="inline-flex items-center gap-2.5 text-white/90 hover:text-white text-sm font-medium px-2 group"
              >
                <span className="border-b border-white/30 group-hover:border-white pb-0.5">
                  Explore our services
                </span>
              </button>
            </div>
          </div>
          <div className="mt-10 md:mt-14 max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#14181C]/60 backdrop-blur-sm px-6 py-5 rounded-2xl border border-white/15">
                <div className="font-display text-2xl md:text-3xl text-white">
                  APEC<span className="text-[var(--accent-orange)]">.</span>
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/65">
                  Accredited Engineer &amp; <br />
                  Chartered Member EA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations marquee */}
      <section className="bg-[var(--surface)] border-b border-[var(--ink)]/10">
        <div className="container-px mx-auto w-full py-10 md:py-14">
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow">Professional Accreditations</span>
            <p className="mt-3 max-w-xl text-sm md:text-base text-[var(--ink-soft)] leading-relaxed">
              Our team is accredited and registered with leading professional engineering bodies
              across Australia and the Asia-Pacific region.
            </p>
          </div>
          <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex items-center gap-14 md:gap-20 animate-marquee w-max">
              {[0, 1].map((dup) => (
                <div
                  key={dup}
                  className="flex items-center gap-14 md:gap-20 pr-14 md:pr-20"
                >
                  {accreditations.map((acc, i) => (
                    <img
                      key={`${dup}-${i}`}
                      src={acc.image}
                      alt={dup === 1 ? `${acc.name} (Repeated)` : acc.name}
                      loading="lazy"
                      className="h-20 md:h-24 w-auto object-contain transition-all duration-500"
                    />
                  ))}
                  <img src={accreditations[0].image} alt={`${accreditations[0].name} (Repeated)`} loading="lazy" className="h-20 md:h-24 w-auto object-contain transition-all duration-500" />
                  <img src={accreditations[1].image} alt={`${accreditations[1].name} (Repeated)`} loading="lazy" className="h-20 md:h-24 w-auto object-contain transition-all duration-500" />
                  <img src={accreditations[2].image} alt={`${accreditations[2].name} (Repeated)`} loading="lazy" className="h-20 md:h-24 w-auto object-contain transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations intro */}
      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Our Specializations</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
              Innovative solutions in{' '}
              <span className="italic text-[var(--brand)]">various sectors.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-relaxed text-[var(--ink-soft)]">
              At our firm, we take pride in offering a broad services that cater to our clients'
              needs from the outset of a project all the way to its completion. We use advanced
              computer-aided design (CAD), finite element analysis (FEA) software, and modern
              engineering techniques to ensure the quality and accuracy of your projects.
            </p>
            <div className="mt-6">
              <button
                onClick={() => onNavigate('/about')}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] hover:text-[var(--accent-orange)] transition"
              >
                Learn more about us <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative isolate overflow-hidden py-20 md:py-28">
        <img
          src="/assets/site-steel-frame.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[var(--brand-deep)]/85" />
        <div className="container-px mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <span className="eyebrow text-white/60">Featured Services</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-white text-balance">
                Multidisciplinary. <span className="italic text-white/75">One team.</span>
              </h2>
            </div>
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-white/60">
              All 8 disciplines
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => onNavigate(`/services/${s.slug}`)}
                className="group relative overflow-hidden rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm p-6 flex flex-col justify-between transition hover:-translate-y-1 hover:bg-white/15 hover:border-white/30 text-left"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-white/60">
                    <span className="h-px w-6 bg-[var(--accent-orange)]"></span>Service
                  </span>
                  <span className="text-[10px] text-white/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-lg md:text-xl text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 line-clamp-3">
                    {s.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent-orange)] transition-colors">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-6">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
              Best fit <span className="italic text-[var(--brand)]">services.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-sm text-[var(--ink-soft)]">
              We are focused on providing a high level of customer service through our experienced
              team and ensuring the documentation we provide meets time and cost expectations.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyChooseItems.map((item) => {
            const Icon: LucideIcon = item.icon;
            return (
              <div
                key={item.title}
                className="relative rounded-xl p-4 border border-border bg-white"
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)] shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-base text-[var(--ink)]">{item.title}</h3>
                    <p className="mt-1 text-sm text-[var(--ink-soft)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <button
            onClick={() => onNavigate('/about')}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] hover:text-[var(--accent-orange)] transition"
          >
            More about our approach <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-[var(--surface)] py-16 md:py-24 overflow-hidden">
        <div className="container-px mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <span className="eyebrow">Featured Projects</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] text-balance">
                Engineered across the{' '}
                <span className="italic text-[var(--brand)]">built environment.</span>
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] hover:text-[var(--accent-orange)] transition"
            >
              View portfolio <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-16 md:space-y-24">
            {featuredProjects.map((project, i) => (
              <div
                key={project.number}
                className="relative grid grid-cols-12 gap-3 md:gap-6 items-center"
              >
                <div
                  className={`col-span-11 relative ${
                    i % 2 === 0 ? 'col-start-1' : 'col-start-2'
                  }`}
                >
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
                    i % 2 === 0
                      ? 'col-start-2 md:right-0'
                      : 'col-start-1 md:left-0'
                  }`}
                >
                  <div
                    className={`bg-[var(--brand)] text-white p-5 md:p-7 shadow-xl ${
                      i % 2 === 0
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
            ))}
          </div>
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
