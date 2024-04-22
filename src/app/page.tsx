
import About from '@/sections/about';
import IntroSection from '@/sections/intro';
import SkillsSection from '@/sections/skills';
import WhoAmI from '@/sections/who_am_i';

export default function Page() {
  return (
    <main className='flex flex-col items-center w-full mx-auto px-2 lg:px-0  max-w-6xl justify-center'>
      <IntroSection></IntroSection>
      <SkillsSection />

      <WhoAmI></WhoAmI>
      <About key={'about'}></About>
    </main>
  );
}
