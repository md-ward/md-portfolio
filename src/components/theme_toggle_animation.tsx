'use client';
import { useEffect,  } from 'react';
import { useAnimate } from 'framer-motion';
import usePlayThemeAnimationStore from '@/lib/state_store/play_theme_animation_store';

export const ThemeToggleAnimation = () => {

  const [scope, animate] = useAnimate();


const theme=usePlayThemeAnimationStore((state) => state.playThemeAnimationState);
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
    enterAnimation();
  }, [animate, , scope,theme]);

  return <div ref={scope} className='animatedBg  '></div>;
};
