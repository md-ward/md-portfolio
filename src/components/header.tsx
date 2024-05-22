import Link from 'next/link';
import { Inter } from 'next/font/google';
import CvButton from './download_cv_button';
import MobileSideBar from './mobile_sidebar';
import { NavLinkData } from '@/lib/links';
import dynamic from 'next/dynamic';

const ThemeSwitcher = dynamic(
  () => import('./theme_switcher').then(({ ThemeSwitcher }) => ThemeSwitcher),

  { ssr: false }
);
const inter = Inter({
  weight: '700',
  subsets: ['latin-ext'],
  display: 'swap',
});

interface HeaderProps {
  header_links: NavLinkData[];
  logo?: React.ReactNode;
  showButtons?: boolean;
}

export default function Header({
  logo,
  header_links,
  showButtons,
}: HeaderProps) {
  return (
    <header
      className={`sticky top-0 z-50 mt-2 flex flex-row items-center justify-between px-2  bg-blend-saturation shadow-sm backdrop-blur-sm  sm:justify-evenly sm:px-0`}
    >
      {/*Logo with animation */}
      {logo && (
        <h1 className={`${inter.className} animate-link dark:text-grayName`}>
          {logo}
        </h1>
      )}

      <ul className='hidden flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex sm:w-[initial] sm:flex-nowrap sm:gap-5 '>
        {header_links.map((link, index) => (
          <li
            className='animate-link relative flex h-3/4 items-center justify-center'
            key={link.link}
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <Link
              className={
                'flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300'
              }
              href={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {showButtons && (
        <>
          <CvButton displayBtn={false} />
          <ThemeSwitcher displayBtn={false} />
        </>
      )}

      <MobileSideBar links={header_links} />
    </header>
  );
}
