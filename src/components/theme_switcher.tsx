'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export const ThemeSwitcher = ({ displayBtn }: { displayBtn: boolean }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`  light:bg-slate-200 w-fit  rounded-md p-2  duration-200 hover:scale-110 active:scale-100  ${displayBtn ? 'block sm:hidden' : 'hidden sm:block'}`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <Image
          className='g'
          src={'/assets/light-mode.svg'}
          height={32}
          width={32}
          alt='light'
        />
      ) : (
        <Image
          src={'/assets/dark-mode.svg'}
          height={32}
          width={32}
          alt='dark'
        />
      )}
    </button>
  );
};
