import { memberLibraryCategories } from '@/content/siteContent';

export default function FormulaLibraryPage() {
  return (
    <div className="member-content">
      <h2>Formula Library</h2>
      <p>The library is organized by product family so members can find the commercial logic behind each category, not just isolated formulas.</p>

      <div className="proof-grid section-grid-top">
        {memberLibraryCategories.map((category) => (
          <article className="proof-card" key={category.title}>
            <p className="plan-label">{category.status}</p>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <ul className="detail-list">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
