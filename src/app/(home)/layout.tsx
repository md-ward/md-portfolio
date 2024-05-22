import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import ScrollToTop from '@/components/scroll_to_top';
import Footer from '@/components/footer';
import '@/app/globals.css';
import { ThemeProvider } from '@/lib/them_provider';
import dynamic from 'next/dynamic';
import Portfolio_Logo from '@/components/logo';
import { main_links } from '@/lib/links';
//
const ThemeToggleAnimation = dynamic(
  () =>
    import('@/components/theme_toggle_animation').then(
      ({ ThemeToggleAnimation }) => ThemeToggleAnimation
    ),

  { ssr: false }
);

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohammad Ward - Portfolio',
  description: 'Programmed by: eng.Mohammad ward',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} bg-lightCol dark:bg-darkCol`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggleAnimation />
          <Header
            header_links={main_links}
            logo={<Portfolio_Logo />}
            showButtons={true}
          />

          {/* splash animation  */}
          {children}
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
