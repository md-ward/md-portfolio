import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
export type NavLinkData = {
  name: string;
  link: string;
};

export const dashboard_links : NavLinkData[] = [
  {
    name: 'Projects Management',
    link: '/dashboard/projects',
  },

  {
    name: 'Skills  Management',
    link: '/dashboard/skills',
  },
];

export const main_links: NavLinkData[] = [
  {
    name: 'Home',
    link: '#home',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Projects',
    link: '#projects',
  },

  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

export const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:mohamadward315@gmail.com',
    icon: <MdEmail className='text-xl' />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/md-ward',
    icon: <FaGithub className='text-xl' />,
  },
  {
    label: 'LinkedIn',
    href: 'http://www.linkedin.com/in/mohammad-ward-4a5839230',
    icon: <FaLinkedin className='text-xl' />,
  },
] as const;
