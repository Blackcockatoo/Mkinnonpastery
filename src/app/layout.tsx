import type { Metadata } from 'next';
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700']
});

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Mark McKinnon | The McKinnon Collective | Victoria, Australia',
  description:
    'Professional bakery membership, formula previews, and consultancy from Mark McKinnon, focused on repeatable pastry production, stronger margins, and certification-ready standards.',
  openGraph: {
    title: 'Mark McKinnon | The McKinnon Collective',
    description:
      'A membership-first bakery site for formulas, production systems, live coaching, and certification-ready pastry standards.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mark McKinnon | The McKinnon Collective',
    description:
      'A membership-first bakery site for formulas, production systems, live coaching, and certification-ready pastry standards.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
        <Script id="analytics-events" strategy="afterInteractive">
          {`window.addEventListener('analytics', (e) => {
            if (window.gtag && e.detail?.event) window.gtag('event', e.detail.event);
          });`}
        </Script>
      </body>
    </html>
  );
}
