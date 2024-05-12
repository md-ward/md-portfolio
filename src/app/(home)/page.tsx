import About from '@/sections/about';
import IntroSection from '@/sections/intro';
import Projects from '@/sections/projects';
import SkillsSection from '@/sections/skills';
import WhoAmI from '@/sections/who_am_i';

export default function Page() {
  
  return (
    <main className='mx-auto flex w-full max-w-6xl  snap-y snap-mandatory flex-col items-center justify-center   px-2 lg:px-0'>
      <IntroSection></IntroSection>

      <Projects />

      <SkillsSection />

      <WhoAmI></WhoAmI>
      <About key={'about'}></About>
    </main>
  );
}
