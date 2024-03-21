'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function IntroSection() {
  const intro =
    "I'm Mohammad Ward, a passionate Software Engineer with expertise in full-stack and cross-platform app development. I thrive on creating innovative solutions that make a meaningful impact. Let's turn ideas into reality together.";

  const nameAnimation = {
    initial: { color: '#000000', x: -50, opacity: 0 },
    animate: { color: '#ff00ff', x: 0, opacity: 1 },
  };

  return (
    <section className='flex min-h-screen items-center justify-center bg-gradient-to-t from-gray-900 via-blue-400 to-indigo-500'>
      <div className='relative text-center'>
        <motion.div
          initial={{ scale: 0, opacity: 0, skew: 0 }}
          animate={{
            scale: 0.9,
            opacity: 1,
            skew: 1,
          }}
          transition={{ duration: 0.8 }}
          className='flex items-center justify-center'
        >
          <div className='wrapper mask bg-red-300'>
            <img src='/assets/pic-no-bg.png' alt='personal image' />
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='relative z-10 mt-8 text-4xl font-bold text-white'
        >
          {intro.split(' ').map((word, index) => {
            if (word.toLowerCase() === 'mohammad') {
              return (
                <motion.span key={index} {...nameAnimation}>
                  {word}
                </motion.span>
              );
            } else {
              return <span key={index}>{word} </span>;
            }
          })}
        </motion.h1>
      </div>
    </section>
  );
}
