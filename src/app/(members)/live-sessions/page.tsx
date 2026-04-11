import { liveSessionCards } from '@/content/siteContent';

export default function LiveSessionsPage() {
  return (
    <div className="member-content">
      <h2>Live Sessions</h2>
      <p>Live programming is where the membership moves beyond content and becomes mentorship, implementation support, and accountability.</p>

      <div className="proof-grid section-grid-top">
        {liveSessionCards.map((session) => (
          <article className="proof-card" key={session.title}>
            <p className="plan-label">{session.cadence}</p>
            <h3>{session.title}</h3>
            <p>{session.detail}</p>
            <ul className="detail-list">
              {session.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
