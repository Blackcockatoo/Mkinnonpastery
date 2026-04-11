import Link from 'next/link';
import { requireMember } from '@/lib/auth';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/formula-library', label: 'Formula Library' },
  { href: '/live-sessions', label: 'Live Sessions' },
  { href: '/community-links', label: 'Community Links' },
  { href: '/settings', label: 'Account & Billing' },
];

export default async function MembersLayout({ children }: { children: React.ReactNode }) {
  await requireMember();

  return (
    <main className="member-shell">
      <div className="member-card member-layout">
        <header>
          <p className="member-eyebrow">Member Area</p>
          <h1>Bakery Collective</h1>
        </header>
        <nav className="member-nav" aria-label="Member routes">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>
        <section>{children}</section>
      </div>
    </main>
  );
}
