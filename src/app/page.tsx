import Footer from '@/components/footer';
import Header from '@/components/header';
import About from '@/sections/about';
import IntroSection from '@/sections/intro';

export default function Page() {
  return (
    <main>
      <Header></Header>
      <IntroSection></IntroSection>
      <About key={'about'}></About>

      <Footer />
    </main>
  );
}
