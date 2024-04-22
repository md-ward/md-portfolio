import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
type NavLinkData = {
  name: string;
  hash: string;
};

export const links: NavLinkData[] = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },

  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
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
