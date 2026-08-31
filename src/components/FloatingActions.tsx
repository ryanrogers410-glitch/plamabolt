import { Phone, MessageSquare, Mail, MessageCircle } from 'lucide-react';
import { contactInfo } from '@/data';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <a
        href={`tel:${contactInfo.mobileTel}`}
        aria-label="Call"
        className="group relative grid h-12 w-12 place-items-center rounded-full bg-emerald-600 text-white shadow-lg hover:scale-105 transition"
      >
        <Phone className="h-5 w-5" />
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-[var(--ink)] px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Call
        </span>
      </a>
      <a
        href={`sms:${contactInfo.mobileTel}`}
        aria-label="SMS"
        className="group relative grid h-12 w-12 place-items-center rounded-full bg-sky-600 text-white shadow-lg hover:scale-105 transition"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-[var(--ink)] px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
          SMS
        </span>
      </a>
      <a
        href={`mailto:${contactInfo.email}`}
        aria-label="Email"
        className="group relative grid h-12 w-12 place-items-center rounded-full bg-[var(--accent-orange)] text-white shadow-lg hover:scale-105 transition"
      >
        <Mail className="h-5 w-5" />
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-[var(--ink)] px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Email
        </span>
      </a>
      <a
        href={`mailto:${contactInfo.email}`}
        aria-label="Open chat"
        className="grid h-14 w-14 place-items-center rounded-full bg-[var(--brand)] text-white shadow-xl hover:bg-[var(--accent-orange)] transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
