export const projects = [
  {
    id: 'mobiliai',
    key: 'rimac',
    title: 'MobiliAI',
    year: '2025',
    images: [
      '/assets/mobilia1.png',
      '/assets/mobilia2.png',
      '/assets/mobilia3.png',
    ],
    github: 'https://github.com/Guimenn/MobiliAI',
    live: null,
    stack: [
      'Next.js',
      'Tailwind CSS',
      'NestJS',
      'PostgreSQL',
      'Prisma ORM',
      'OpenAI API',
    ],
  },
  {
    id: 'thornfield',
    key: 'thornfield',
    title: 'Thornfield',
    year: '2025',
    images: ['/assets/thornfield.png'],
    github: 'https://github.com/Guimenn/Thornfield-a',
    live: 'https://thornfield-a.vercel.app',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Firebase'],
  },
  {
    id: 'saldo-verde',
    key: 'saldoverde',
    title: 'Saldo Verde',
    year: '2024',
    images: ['/assets/saldo.png'],
    github: 'https://github.com/Gabriel-Palmieri/Saldo_Verde',
    live: 'https://projeto-financias.vercel.app/',
    stack: ['Next.js', 'Node.js', 'MySQL'],
  },
  {
    id: 'neobank',
    key: 'neobank',
    title: 'NeoBank',
    year: '2024',
    images: ['/assets/neobank.jpeg'],
    github: 'https://github.com/Gabriel-Palmieri/NeoBank',
    live: null,
    stack: ['HTML5', 'CSS3', 'PHP'],
  },
] as const;

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Gabriel-Palmieri' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabriel-palmieri12/',
  },
];
