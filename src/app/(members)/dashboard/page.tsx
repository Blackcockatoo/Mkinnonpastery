import { memberDashboardMetrics, memberFocusCards } from '@/content/siteContent';

export default function DashboardPage() {
  return (
    <div className="member-content">
      <h2>Dashboard</h2>
      <p>This protected preview shows the shape of the founding member experience: formulas, operating tools, and growth pathways instead of a static recipe dump.</p>

      <div className="billing-grid section-grid-top">
        {memberDashboardMetrics.map((metric) => (
          <article key={metric.label}>
            <p className="plan-label">{metric.label}</p>
            <h3>{metric.value}</h3>
            <p>{metric.note}</p>
          </article>
        ))}
      </div>

      <div className="proof-grid section-grid-top">
        {memberFocusCards.map((card) => (
          <article className="proof-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.detail}</p>
            <ul className="detail-list">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
