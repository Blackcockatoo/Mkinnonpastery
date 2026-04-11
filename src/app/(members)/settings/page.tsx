import { billingAddOns } from '@/content/siteContent';
import { getPlanMetadata, getUpgradeablePlans } from '@/lib/plan';

export default function SettingsPage() {
  const plan = getPlanMetadata({ tier: 'collective', cycle: 'monthly' });
  const upgrades = getUpgradeablePlans(plan.tier);

  return (
    <div className="member-content">
      <h2>Account &amp; Billing</h2>
      <p>The billing model now mirrors the public strategy: one core membership, an expansion path for teams, and a higher-touch certification track.</p>

      <div className="billing-grid section-grid-top">
        <article>
          <p className="plan-label">Current plan</p>
          <h3>{plan.tier}</h3>
          <p><strong>Cycle:</strong> {plan.cycle}</p>
          <p><strong>Seats:</strong> {plan.seats}</p>
          <p><strong>Support:</strong> {plan.supportLevel}</p>
        </article>
        <article>
          <p className="plan-label">Upgrade path</p>
          <h3>Available next steps</h3>
          <p>{upgrades.length ? upgrades.join(', ') : 'No higher tiers available.'}</p>
          <p>Future billing work can connect Stripe, seat changes, annual billing, and badge-assessment flows here.</p>
        </article>
      </div>

      <div className="proof-grid section-grid-top">
        {billingAddOns.map((addOn) => (
          <article className="proof-card" key={addOn.title}>
            <h3>{addOn.title}</h3>
            <p>{addOn.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
