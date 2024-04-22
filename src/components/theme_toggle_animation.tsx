'use client';
import { useEffect, useState } from 'react';
import { useAnimate } from 'framer-motion';
import { useTheme } from 'next-themes';

export const ThemeToggleAnimation = () => {
  const { theme } = useTheme();
  const [oldTheme, setOldTheme] = useState<string>('');
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const enterAnimation = async () => {
      await animate([
        [
          scope.current,
          {
            clipPath: 'circle(100% at 50% 50%)',
            backgroundColor: theme == 'dark' ? '#fafafa' : '#1a1c1f',
          },
          { duration: 0.5, delay: 0.1 },
        ],
        [
          scope.current,
          {
            clipPath: 'circle(0% at 50% 50%)',
            backgroundColor: theme == 'light' ? '#fafafa' : '#1a1c1f',
          },
          { duration: 0.5 },
        ],
      ]);
    };
    if (oldTheme != '') {
      console.count('render');
      enterAnimation();
    }

    setOldTheme(theme || '');
  }, [animate, oldTheme, scope, theme]);

  return <div ref={scope} className='animatedBg '></div>;
};
