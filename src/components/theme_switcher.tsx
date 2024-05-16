'use client';
import usePlayThemeAnimationStore from '@/lib/state_store/play_theme_animation_store';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = ({ displayBtn }: { displayBtn: boolean }) => {
  const [mounted, setMounted] = useState<string>(); // Add mounted state
  const { togglePlayThemeAnimation } = usePlayThemeAnimationStore((state) => ({
    togglePlayThemeAnimation: state.togglePlayThemeAnimation,
  }));
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
    togglePlayThemeAnimation();
  }
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(theme);
  }, [theme]);

  return (
    <button
      style={{ animationDelay: `1.4s` }}
      className={` animate-link  light:bg-slate-200 w-fit  rounded-md p-2  duration-200 hover:scale-110 active:scale-100  ${displayBtn ? 'block sm:hidden' : 'hidden sm:block'}`}
      onClick={toggleTheme}
    >
      {mounted === 'light' ? (
        <Image
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
