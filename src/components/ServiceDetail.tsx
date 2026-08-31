import { ArrowUpRight } from 'lucide-react';
import { services, type ServiceItem } from '@/data';
import type { LucideIcon } from 'lucide-react';

type ServiceDetailProps = {
  service: ServiceItem;
  onNavigate: (path: string) => void;
};

export default function ServiceDetail({ service, onNavigate }: ServiceDetailProps) {
  const Icon: LucideIcon = service.icon;
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  const serviceContent: Record<string, { overview: string; scope: string[] }> = {
    structural: {
      overview:
        'We design, analyze and certify structures across residential, commercial, industrial and high-rise developments. Our team uses advanced finite element analysis to ensure every beam, column and connection meets Australian Standards and the NCC.',
      scope: [
        'Residential and multi-unit structural design',
        'Commercial and industrial building certification',
        'Retaining walls and basement design',
        'Structural inspections and defect reports',
      ],
    },
    civil: {
      overview:
        'From subdivision earthworks to road and pavement design, we deliver civil engineering solutions that integrate seamlessly with the built environment and local authority requirements.',
      scope: [
        'Site grading and earthworks design',
        'Road and pavement design',
        'Stormwater and drainage systems',
        'Subdivision and DA documentation',
      ],
    },
    facade: {
      overview:
        'We provide engineering design for glazed features in buildings — windows, skylights, curtain walls, and storefront systems — ensuring performance, safety and compliance.',
      scope: [
        'Curtain wall and window wall design',
        'Structural sealant glazing systems',
        'Skylight and canopy engineering',
        'Façade compliance certification',
      ],
    },
    marine: {
      overview:
        'We design, assess and maintain structures in the marine environment, from jetties and seawalls to pontoons and waterfront developments, engineered for durability in harsh coastal conditions.',
      scope: [
        'Jetty, pier and pontoon design',
        'Seawall and revetment engineering',
        'Marine inspections and assessments',
        'Waterfront development certification',
      ],
    },
    hydraulic: {
      overview:
        'We manage water supply, flood studies and stormwater drainage — from site-scale OSD and infiltration systems to catchment-wide flood modelling and council compliance.',
      scope: [
        'Stormwater drainage design',
        'On-site detention (OSD) systems',
        'Flood modelling and flood impact assessments',
        'Water supply and reticulation',
      ],
    },
    'expert-reports': {
      overview:
        'We provide independent expert investigations, findings, opinions and conclusions backed by structural and civil engineering expertise — for legal proceedings, insurance claims and dispute resolution.',
      scope: [
        'Expert witness reports',
        'Insurance and damage assessments',
        'Defect investigation and diagnosis',
        'Compliance and code opinion reports',
      ],
    },
    certificates: {
      overview:
        'We issue design and compliance certificates against Australian Standards, the NCC and local authority policies — providing the assurance councils and certifiers require.',
      scope: [
        'Structural design certificates',
        'Compliance certificates (NCC, AS)',
        'Construction certificates',
        'Compliance with DA conditions',
      ],
    },
    'project-management': {
      overview:
        'We are involved in the entire project, from feasibility stage to occupancy certificate — coordinating design, approvals, construction and handover to deliver on time and budget.',
      scope: [
        'Feasibility and concept stage input',
        'DA and CC documentation management',
        'Construction phase supervision',
        'Occupation certificate sign-off',
      ],
    },
  };

  const content = serviceContent[service.slug] || serviceContent.structural;

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-[var(--brand-deep)] pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, var(--accent-orange) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand) 0%, transparent 50%)',
          }}
        />
        <div className="container-px mx-auto w-full relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-white/70">
              <span className="h-px w-8 bg-[var(--accent-orange)]"></span> Service
            </span>
            <h1 className="mt-4 font-display text-white text-4xl md:text-5xl lg:text-6xl text-balance">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-white/75 leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Overview</span>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">
              {content.overview}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-border bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-[var(--ink)]">Scope of Services</h3>
              </div>
              <ul className="space-y-3">
                {content.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--ink-soft)]">
                    <span className="text-[var(--accent-orange)] mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="container-px mx-auto w-full">
          <span className="eyebrow">Related Services</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)] text-balance">
            Other disciplines
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((s) => {
              const RelatedIcon: LucideIcon = s.icon;
              return (
                <button
                  key={s.slug}
                  onClick={() => onNavigate(`/services/${s.slug}`)}
                  className="group relative overflow-hidden rounded-xl border border-border bg-white p-6 flex flex-col justify-between transition hover:-translate-y-1 hover:border-[var(--brand)] text-left"
                >
                  <div className="flex items-start justify-between">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)]">
                      <RelatedIcon className="h-4 w-4" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[var(--ink-soft)] group-hover:text-[var(--brand)] transition" />
                  </div>
                  <h3 className="mt-6 font-display text-base text-[var(--ink)]">{s.title}</h3>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
