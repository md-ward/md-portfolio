import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import Sidebar from './components/sidebard';

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
        className={`${inter.className} flex h-full min-h-screen w-full flex-row bg-slate-400`}
      >
        <Sidebar />

        {children}
      </body>
    </html>
  );
}
