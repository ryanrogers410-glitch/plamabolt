import {
  ShieldCheck,
  Layers,
  Sparkles,
  Wallet,
  Gauge,
  Headphones,
  Building2,
  Droplets,
  Waves,
  Ship,
  FileText,
  Award,
  ClipboardCheck,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    slug: 'structural',
    title: 'Structural Engineering',
    description:
      'Specialists in designing, analyzing, and maintaining the adequacy and integrity of structures.',
    icon: Building2,
  },
  {
    slug: 'civil',
    title: 'Civil Engineering',
    description:
      'Design and maintenance of the physical and naturally built environment.',
    icon: Layers,
  },
  {
    slug: 'facade',
    title: 'Glazing/ Glass and Façade Engineering',
    description:
      'Engineering design of glazed features in buildings including windows, skylights, curtain walls, and storefront systems.',
    icon: Sparkles,
  },
  {
    slug: 'marine',
    title: 'Marine Structures Engineering',
    description:
      'Design, construction, and maintenance of structures in the marine environment.',
    icon: Ship,
  },
  {
    slug: 'hydraulic',
    title: 'Hydrologic/ Hydraulic Engineering',
    description: 'Water supply, flood study, and stormwater drainage management.',
    icon: Droplets,
  },
  {
    slug: 'expert-reports',
    title: 'Expert Report',
    description:
      'Investigations, findings, opinions and conclusions backed by structural and civil engineering expertise.',
    icon: FileText,
  },
  {
    slug: 'certificates',
    title: 'Certificate',
    description:
      'Design and compliance certificates against Australian Standards, the NCC and local authority policies.',
    icon: Award,
  },
  {
    slug: 'project-management',
    title: 'Development and Project Management',
    description:
      'Involved in the entire project, from feasibility stage to occupancy certificate.',
    icon: Briefcase,
  },
];

export type WhyChooseItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChooseItems: WhyChooseItem[] = [
  {
    title: 'Experienced team',
    description:
      'Our professional engineers are fully qualified in Civil and Structural Engineering, involving in diverse design and construction of all sectors.',
    icon: ShieldCheck,
  },
  {
    title: 'Customer service',
    description:
      'We are focused on providing a high level of customer service through our experienced team.',
    icon: Layers,
  },
  {
    title: 'Time and cost',
    description:
      'Our commitment is to ensure that the design and documentation we provide meets the time, cost, quality and build-ability expectations of our clients.',
    icon: Sparkles,
  },
  {
    title: 'Broad vision',
    description:
      'Professional engineers providing broad vision expertise for the residential, commercial, industrial and infrastructure market sectors.',
    icon: Wallet,
  },
  {
    title: 'Quality assurance',
    description:
      'We use advanced computer-aided design (CAD), finite element analysis (FEA) software, and modern engineering techniques.',
    icon: Gauge,
  },
  {
    title: 'Diverse sectors',
    description:
      'Clients include leading residential builders, development companies, government authorities, and manufacturing companies.',
    icon: Headphones,
  },
];

export type ProjectItem = {
  number: string;
  category: string;
  title: string;
  image: string;
};

export const projects: ProjectItem[] = [
  {
    number: '01',
    category: 'Knock Down - Rebuilt',
    title: 'New Built',
    image: 'https://plamaprojects.com.au/wp-content/uploads/2023/07/IMG_20180914_150128-scaled.jpg',
  },
  {
    number: '02',
    category: 'Knock Down - Rebuilt',
    title: 'Townhouses',
    image: 'https://plamaprojects.com.au/wp-content/uploads/2023/05/video-bg-1-1.jpg',
  },
  {
    number: '03',
    category: 'Alterations & Additions',
    title: 'Renovations',
    image: 'https://plamaprojects.com.au/wp-content/uploads/2023/05/style_2_right1-1.jpeg',
  },
  {
    number: '04',
    category: 'Facade Engineering',
    title: 'Facade',
    image: 'https://plamaprojects.com.au/wp-content/uploads/2023/07/IMG_20170430_075357-1-scaled.jpg',
  },
  {
    number: '05',
    category: 'Flood Study',
    title: 'Flood Study',
    image: 'https://plamaprojects.com.au/wp-content/uploads/2023/07/flood-map-scaled.jpg',
  },
  {
    number: '06',
    category: 'Flood Study',
    title: 'Flood Study',
    image: 'https://plamaprojects.com.au/wp-content/uploads/2023/07/stamped_1-AEP-Suspended-Floor-Max-Water-Depth-scaled.jpg',
  },
];

export type ValueItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const values: ValueItem[] = [
  {
    number: '01',
    title: 'Innovation & thoroughness',
    description: 'Pragmatic engineering and meticulous detailing for every project.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Responsiveness',
    description: 'Fast project delivery and prompt replies to all client enquiries.',
    icon: Gauge,
  },
  {
    number: '03',
    title: 'Hands-on approach',
    description: 'Ensuring efficiency & quality from start to finish.',
    icon: ClipboardCheck,
  },
];

export type Accreditation = {
  name: string;
  image: string;
};

export const accreditations: Accreditation[] = [
  { name: 'Engineers Australia', image: '/assets/accreditations/EAlogo.jpg' },
  { name: 'National Engineering Register (NER)', image: '/assets/accreditations/NERlogo.png' },
  { name: 'APEC Registered Engineer', image: '/assets/accreditations/APEC.jpg' },
  { name: 'NSW Fair Trading', image: '/assets/accreditations/nsw-fair-trading.png' },
  { name: 'Award Badge', image: '/assets/accreditations/award-badge.png' },
];

export type Credential = {
  text: string;
};

export const credentials: Credential[] = [
  { text: 'Chartered Professional Engineer' },
  { text: 'Accredited by Engineers Australia' },
  { text: 'National Professional Engineers (Structural and Civil)' },
  { text: 'NSW Fair Trading – Class 2 Buildings' },
  { text: 'Registered Professional Engineer (Structure, Civil, Stormwater)' },
  { text: 'Registered Design Practitioner (Structure, Civil, Stormwater)' },
  { text: 'Principal Design Practitioner' },
  { text: 'APEC Engineer' },
  { text: 'International Professional Engineer' },
];

export const contactInfo = {
  landline: '+61 2 8384 3919',
  mobile: '0452 588 578',
  mobileTel: '0452588578',
  email: 'plama.pro@outlook.com',
  address: '1 Kerin Avenue, Five Dock NSW 2046',
  hours: 'Mon–Fri 9:00–5:30',
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];
