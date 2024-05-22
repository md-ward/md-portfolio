'use client';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useState, useLayoutEffect } from 'react';
import { Inter } from 'next/font/google';

import Link from 'next/link';
import CvButton from './download_cv_button';
import { ThemeSwitcher } from './theme_switcher';

const intern = Inter({ subsets: ['latin'], weight: '700' });
//! Variants for the individual items in the sidebar
const itemVariants = {
  closed: {
    opacity: 0,
    y: -20,
  },
  open: {
    opacity: 1,
    y: 0,
  },
};

// Variants for the sidebar container
const sideVariants = {
  closed: {
    opacity: 0,
    transition: {
      delay: 0.4,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const MobileSideBar = ({ links }: { links: Array<Record<string, string>> }) => {
  const [open, cycleOpen] = useCycle(false, true); // State for toggling the sidebar
  const [isMobile, setIsMobile] = useState<boolean>(); // State for checking if the window size is mobile

  // Effect for handling window resize and updating the isMobile state
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (!isMobile && open) {
        cycleOpen();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [cycleOpen, isMobile, open]);

  // Effect for closing the sidebar if the window size changes from mobile to desktop
  useLayoutEffect(() => {
    if (!isMobile && open) {
      cycleOpen();
    }
  }, [cycleOpen, isMobile, open]);

  return (
    <main className={`${intern.className} sm:hidden `}>
      {/* Button for toggling the sidebar */}
      <button
        onClick={() => cycleOpen()}
        className='animate-link block aspect-square size-8 rounded-lg bg-white p-1 text-darkCol backdrop-blur-2xl transition-colors duration-300 ease-in-out hover:bg-danger md:hidden'
      >
        <FontAwesomeIcon icon={faBars} rotate={open ? '0deg' : '90deg'} />
      </button>
      {/* used Animated presence to enable the animation when React.Node element demount from dom tree ... */}
      <AnimatePresence>
        {/* Sidebar */}
        {open && (
          <aside className='absolute right-[4rem] top-0  z-50 w-fit  rounded-md bg-darkCol/85  p-4 text-white dark:bg-lightCol dark:text-darkCol '>
            <motion.ul
              className='container flex flex-col gap-y-2 divide-y divide-white'
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
            >
              {/* Sidebar items */}
              {links.map(({ name, link, index }) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className='flex flex-col'
                >
                  <Link href={link}>{name}</Link>
                </motion.li>
              ))}
              <span
                style={{ animationDelay: '1.4s' }}
                className='animate-link mt-2  flex rounded-md dark:!bg-slate-600 bg-white px-3 py-2'
              >
                <CvButton displayBtn={true} />
                <ThemeSwitcher displayBtn={true} />
              </span>
            </motion.ul>
          </aside>
        )}
      </AnimatePresence>
    </main>
  );
};

export default MobileSideBar;
