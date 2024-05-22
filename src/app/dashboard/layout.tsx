import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import Header from '@/components/header';
import { dashboard_links } from '@/lib/links';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohammad Ward - Portfolio',
  description: 'Programmed by : eng.Mohammad ward',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} flex h-full min-h-screen w-full flex-col `}
      >
        <Header showButtons={false} header_links={dashboard_links}></Header>

        {children}
      </body>
    </html>
  );
}
