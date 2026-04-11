export type BillingCycle = 'monthly' | 'annual';
export type PlanTier = 'starter' | 'pro' | 'enterprise';

export type PlanMetadata = {
  tier: PlanTier;
  cycle: BillingCycle;
  seats: number;
  supportLevel: 'standard' | 'priority' | 'dedicated';
  trialEndsAt?: string;
};

const PLAN_DEFAULTS: Record<PlanTier, Omit<PlanMetadata, 'tier' | 'cycle'>> = {
  starter: { seats: 1, supportLevel: 'standard', trialEndsAt: undefined },
  pro: { seats: 5, supportLevel: 'priority', trialEndsAt: undefined },
  enterprise: { seats: 25, supportLevel: 'dedicated', trialEndsAt: undefined },
};

export function getPlanMetadata(options?: Partial<PlanMetadata>): PlanMetadata {
  const tier = options?.tier ?? 'starter';
  const cycle = options?.cycle ?? 'monthly';
  const defaults = PLAN_DEFAULTS[tier];

  return {
    tier,
    cycle,
    seats: options?.seats ?? defaults.seats,
    supportLevel: options?.supportLevel ?? defaults.supportLevel,
    trialEndsAt: options?.trialEndsAt ?? defaults.trialEndsAt,
  };
}

export function getUpgradeablePlans(fromTier: PlanTier) {
  const order: PlanTier[] = ['starter', 'pro', 'enterprise'];
  const currentIndex = order.indexOf(fromTier);
  return order.slice(Math.max(currentIndex + 1, 0));
}
