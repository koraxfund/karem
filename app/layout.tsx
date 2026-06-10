import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { site } from '../lib/site-data';

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    images: [
      {
        url: '/logo.svg',
        width: 400,
        height: 400,
        alt: 'karem logo',
      },
    ],
    siteName: 'karem',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.meta.title,
    description: site.meta.description,
    images: ['/logo.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#04131B] via-[#23235F] to-[#0A3D2B] min-h-screen font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
