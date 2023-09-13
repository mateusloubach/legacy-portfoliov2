import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  leaderboard,
  cacto,
  valenet,
  smart,
  freelancer,
  jsmanager,
  loubach,
  fast,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Front-End Developer',
    icon: frontend,
  },
  {
    title: 'Back-End Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
];

const experiences = [
  {
    title: 'Systems Analyst',
    company_name: 'VALENET',
    icon: valenet,
    iconBg: '#333333',
    date: 'Jan 2022 - Present',
  },
  {
    title: 'Front-End Developer',
    company_name: 'Freelancer',
    icon: freelancer,
    iconBg: '#ffffff',
    date: 'Feb 2020 - Present',
  },
  {
    title: 'Front-End Developer',
    company_name: 'Smart Innovation',
    icon: smart,
    iconBg: '#ffffff',
    date: 'July 2021 - December 2021',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Js-Manager',
    description: 'An internal helpdesk built with Typescript.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: jsmanager,
    repo: 'https://github.com/mateusloubach/tr_challenge',
    demo: 'https://tr-challenge.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Cactolândia',
    description: 'This is a single-page Store app built with Javascript',
    tags: [
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
      {
        name: 'html',
        color: 'red-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: cacto,
    repo: 'https://github.com/mateusloubach/cactolandia',
    demo: 'https://cactolandia.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-4',
    name: 'Fast Entregas',
    description: `A single-page delivery service application for clients.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: fast,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://fastentregas.vercel.app/',
  },
  {
    id: 'project-5',
    name: 'Loubach Imóveis',
    description:
      'This is a demo real-estate website for a real-estate company called Loubach Imóveis.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: loubach,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://loubachimoveis.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
