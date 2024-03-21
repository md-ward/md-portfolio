import Link from 'next/link';
import { links } from '@/lib/links';

export default function Header() {
  return (
    <header className='relative z-[999]'>
      <div className='animate-header fixed left-0 right-0  mx-auto h-fit    w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 p-1 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem]  sm:rounded-full'></div>{' '}
      <nav className='fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 '>
          {links.map((link, index) => (
            <li
              className='animate-link relative flex h-3/4 items-center justify-center'
              key={link.hash}
              style={{ animationDelay: `${index * 0.1}s` }}
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
      </nav>
    </header>
  );
}
