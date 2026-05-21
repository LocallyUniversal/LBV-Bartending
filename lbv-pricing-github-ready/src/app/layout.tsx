import './globals.css';
import type { Metadata } from 'next';
import { GeistPixelSquare } from 'geist/font/pixel';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'LBV Pricing',
  description: 'Simple pricing page ready for GitHub and Vercel deployment.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistPixelSquare.variable}>
      <body>{children}</body>
    </html>
  );
}
