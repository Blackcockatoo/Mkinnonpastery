import { getPlanMetadata, getUpgradeablePlans } from '@/lib/plan';

export default function SettingsPage() {
  const plan = getPlanMetadata({ tier: 'starter', cycle: 'monthly' });
  const upgrades = getUpgradeablePlans(plan.tier);

  return (
    <div className="member-content">
      <h2>Account &amp; Billing</h2>
      <p>This scaffold is ready for Stripe/customer-portal integration and usage-based add-ons.</p>
      <div className="billing-grid">
        <article>
          <h3>Current plan</h3>
          <p><strong>Tier:</strong> {plan.tier}</p>
          <p><strong>Cycle:</strong> {plan.cycle}</p>
          <p><strong>Seats:</strong> {plan.seats}</p>
          <p><strong>Support:</strong> {plan.supportLevel}</p>
        </article>
        <article>
          <h3>Expansion hooks</h3>
          <ul>
            <li>Switch monthly/annual billing cycle.</li>
            <li>Expose enterprise quote workflow.</li>
            <li>Map add-ons to plan metadata.</li>
            <li>Available upgrades: {upgrades.join(', ') || 'None'}.</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
