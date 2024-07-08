import { NavLinkData } from '@/lib/links';
import Link from 'next/link';

const Sidebar = ({ NavLinks }: { NavLinks: NavLinkData[] }) => {
  return (
    <div className='sidebar shadow-md rounded-bl-sm'>
      {NavLinks.map((link) => (
        <Link key={link.name} href={link.link} className='sidebar-link'>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
