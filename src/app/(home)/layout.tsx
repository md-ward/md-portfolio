import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/globals.css';
import { ThemeProvider } from '@/lib/them_provider';
import dynamic from 'next/dynamic';
import { main_links } from '@/lib/links';
import MySidebar from '@/components/sidebar';

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
      <body className={`grad  font-['fortnite'] `}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
    
          <div className='flex max-h-screen flex-row  '>
            <MySidebar NavLinks={main_links} />
            {/* splash animation  */}
            <section className='flex w-full flex-col overflow-y-auto'>
              {children}
            </section>{' '}
          </div>
            {/* <ScrollToTop />
            <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
