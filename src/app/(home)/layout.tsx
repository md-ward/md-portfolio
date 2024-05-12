import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeToggleAnimation } from '@/components/theme_toggle_animation';
import Header from '@/components/header';
import ScrollToTop from '@/components/scroll_to_top';
import Footer from '@/components/footer';
import '@/app/globals.css';
import { ThemeProvider } from '@/lib/them_provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohammad Ward - Portfolio',
  description: 'Programmed by : eng.Mohammad ward',
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
          <Header />

          {/* splash animation  */}
          {children}
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
