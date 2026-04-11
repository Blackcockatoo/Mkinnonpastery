import { communityResources, communityTopics } from '@/content/siteContent';

export default function CommunityLinksPage() {
  return (
    <div className="member-content">
      <h2>Community Links</h2>
      <p>The community layer is where member questions, production feedback, and future partner relationships start to compound.</p>

      <div className="proof-grid section-grid-top">
        {communityTopics.map((topic) => (
          <article className="proof-card" key={topic.title}>
            <p className="plan-label">{topic.cadence}</p>
            <h3>{topic.title}</h3>
            <p>{topic.detail}</p>
          </article>
        ))}
      </div>

      <div className="billing-grid section-grid-top">
        {communityResources.map((resource) => (
          <article key={resource.title}>
            <h3>{resource.title}</h3>
            <p>{resource.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
