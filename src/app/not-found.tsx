import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="error-page">
      <div className="error-shell">
        <section className="error-card">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p className="lead-small">The page you requested is not available.</p>
          <Link className="button button-primary" href="/">Back to home</Link>
        </section>
      </div>
    </main>
  );
}
