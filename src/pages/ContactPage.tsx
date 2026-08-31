import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Send } from 'lucide-react';
import { contactInfo } from '@/data';

type ContactPageProps = {
  onNavigate: (path: string) => void;
};

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <span className="h-px w-10 bg-[var(--accent-orange)]"></span>Contact
            </div>
            <h1 className="mt-4 font-display text-white text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Let's engineer <span className="italic font-light text-white/90">your next</span><span className="text-[var(--accent-orange)]"> project.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base md:text-lg text-white/75 leading-relaxed">
              Contact us by phone, email or via the online form below. Our company delivers
              top-notch engineering services to a range of industries. Clients trust us to handle
              any project.
            </p>
          </div>
        </div>
      </section>

      {/* Direct contact + Form */}
      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Direct contact */}
          <div className="lg:col-span-5">
            <span className="eyebrow">Direct contact</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)] text-balance">
              Talk to a <span className="italic text-[var(--brand)]">senior engineer.</span>
            </h2>
            <p className="mt-4 text-sm text-[var(--ink-soft)] leading-relaxed">
              No call centre, no gatekeeper. Every enquiry lands with a chartered engineer who can
              talk through your brief on the first call.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)] shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Landline
                  </div>
                  <a
                    href={`tel:${contactInfo.landline}`}
                    className="text-base text-[var(--ink)] hover:text-[var(--brand)] transition"
                  >
                    {contactInfo.landline}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)] shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Mobile
                  </div>
                  <a
                    href={`tel:${contactInfo.mobileTel}`}
                    className="text-base text-[var(--ink)] hover:text-[var(--brand)] transition"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)] shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Email
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-base text-[var(--ink)] hover:text-[var(--brand)] transition"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)] shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Office
                  </div>
                  <div className="text-base text-[var(--ink)]">{contactInfo.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--accent-orange)]/10 text-[var(--accent-orange)] shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Hours
                  </div>
                  <div className="text-base text-[var(--ink)]">
                    Monday – Friday · 9:00am – 5:30pm
                  </div>
                  <div className="text-sm text-[var(--ink-soft)]">Flexible by appointment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <span className="eyebrow">Send an enquiry</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-[var(--ink)] text-balance">
              Brief us on <span className="italic text-[var(--brand)]">your project.</span>
            </h2>

            {submitted ? (
              <div className="mt-6 rounded-xl border border-[var(--accent-orange)]/30 bg-[var(--accent-orange)]/5 p-8 text-center">
                <div className="font-display text-2xl text-[var(--ink)]">
                  Thank you for your enquiry.
                </div>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">
                  We'll be in touch shortly. For urgent matters, call us on{' '}
                  <a
                    href={`tel:${contactInfo.mobileTel}`}
                    className="text-[var(--brand)] font-semibold"
                  >
                    {contactInfo.mobile}
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-[var(--brand)] hover:text-[var(--accent-orange)] transition"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]"
                    >
                      Full name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      name="name"
                      className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--brand)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      name="email"
                      className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--brand)]"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--brand)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]"
                    >
                      Project location
                    </label>
                    <input
                      id="location"
                      type="text"
                      placeholder="Suburb, NSW"
                      name="location"
                      className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--brand)]"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]"
                  >
                    Service required
                  </label>
                  <input
                    id="service"
                    type="text"
                    placeholder="e.g. Structural, Civil, Façade"
                    name="service"
                    className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--brand)]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Project brief
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your site, timeline and what you're trying to build."
                    className="mt-2 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--brand)]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Attachments{' '}
                    <span className="normal-case tracking-normal text-[var(--ink-soft)]">
                      (drawings, photos, reports — files or a folder)
                    </span>
                  </label>
                  <div className="mt-2 grid sm:grid-cols-2 gap-3">
                    <label className="flex items-center justify-center gap-2 rounded-md border border-dashed border-border bg-white px-3 py-3 text-sm text-[var(--ink-soft)] hover:border-[var(--brand)] hover:text-[var(--brand)] cursor-pointer transition">
                      <input type="file" multiple className="sr-only" name="files" />
                      <span>+ Select files</span>
                    </label>
                    <label className="flex items-center justify-center gap-2 rounded-md border border-dashed border-border bg-white px-3 py-3 text-sm text-[var(--ink-soft)] hover:border-[var(--brand)] hover:text-[var(--brand)] cursor-pointer transition">
                      <input type="file" className="sr-only" name="folder" />
                      <span>+ Select folder</span>
                    </label>
                  </div>
                  <p className="mt-2 text-xs text-[var(--ink-soft)]">
                    Large files? Email attachments directly to{' '}
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-[var(--brand)] hover:text-[var(--accent-orange)] transition"
                    >
                      {contactInfo.email}
                    </a>
                    .
                  </p>
                </div>
                <button
                  type="submit"
                  className="btn-primary mt-2"
                >
                  Send enquiry <Send className="h-4 w-4" />
                </button>
                <p className="text-xs text-[var(--ink-soft)]">
                  Prefer to email directly? Reach us at{' '}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-[var(--brand)] hover:text-[var(--accent-orange)] transition"
                  >
                    {contactInfo.email}
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
