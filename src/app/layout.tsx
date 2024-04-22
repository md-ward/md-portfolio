import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/them_provider';
import { ThemeToggleAnimation } from '@/components/theme_toggle_animation';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
    <html lang='en'>
      <ThemeProvider defaultTheme='light' attribute='class'>
        <body className={`${inter.className} bg-lightCol dark:bg-darkCol`}>
          <ThemeToggleAnimation />
          <Header />

          {/* splash animation  */}
          {children}
          <Footer />
        </body>
      </ThemeProvider>{' '}
    </html>
  );
}
