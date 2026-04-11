import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mark McKinnon | Bakery Formula Menu | Victoria, Australia',
  description:
    'Bakery formula menu for Mark McKinnon, a pastry chef with 20+ years of experience producing commercially tested pastries, tarts, choux, cheesecakes, and baked goods across Victoria.',
  openGraph: {
    title: 'Mark McKinnon | Bakery Formula Menu',
    description:
      'A menu-style guide to tried-and-tested bakery products by Mark McKinnon, showing how signature pastries and desserts are built for repeatable commercial results.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mark McKinnon | Bakery Formula Menu',
    description:
      'A menu-style guide to tried-and-tested bakery products by Mark McKinnon, showing how signature pastries and desserts are built for repeatable commercial results.',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
