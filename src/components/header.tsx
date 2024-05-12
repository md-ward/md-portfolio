import Link from 'next/link';
import { links } from '@/lib/links';
import { Inter } from 'next/font/google';
import CvButton from './download_cv_button';
import MobileSideBar from './mobile_sidebar';
import { ThemeSwitcher } from './theme_switcher';

const inter = Inter({
  weight: '700',
  subsets: ['latin-ext'],
  display: 'swap',
});
export default function Header() {
  return (
    <header
      className={`sticky top-0 z-50 mt-2 flex flex-row items-center justify-between px-2  bg-blend-saturation shadow-sm backdrop-blur-sm  sm:justify-evenly sm:px-0`}
    >
      {/* my name .. with animation */}
      <h1 className={`${inter.className} animate-link dark:text-grayName`}>
        <span className=' text-2xl text-danger'>{'<'}</span> Mohammad Ward
        <span className='text-2xl text-danger'>{'/>'}</span>
      </h1>
      <ul className='hidden  w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex sm:w-[initial] sm:flex-nowrap sm:gap-5 '>
        {links.map((link, index) => (
          <li
            className='animate-link relative flex h-3/4 items-center justify-center'
            key={link.hash}
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <Link
              className={
                'flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300'
              }
              href={link.hash}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <CvButton displayBtn={false} />
      <MobileSideBar links={links} />
      <ThemeSwitcher displayBtn={false} />
    </header>
  );
}
