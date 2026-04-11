import type { StaticImageData } from 'next/image';

import heroImage from '../../Mkinnonpastery-main/Mkinnonpastery-main/public/assets/images/IMG20250813073640.jpg';
import almondCroissant from '../../Mkinnonpastery-main/Mkinnonpastery-main/public/assets/images/IMG_20251213_154608.jpg';
import raspberryEclair from '../../Mkinnonpastery-main/Mkinnonpastery-main/public/assets/images/IMG20260116063937.jpg';
import profiterole from '../../Mkinnonpastery-main/Mkinnonpastery-main/public/assets/images/IMG20260116070308.jpg';
import basqueCheesecake from '../../Mkinnonpastery-main/Mkinnonpastery-main/public/assets/images/IMG_20251213_154722.jpg';
import brookieMuffin from '../../Mkinnonpastery-main/Mkinnonpastery-main/public/assets/images/IMG20260323071844.jpg';
import chocolateEclair from '../../Mkinnonpastery-main/Mkinnonpastery-main/public/assets/images/IMG20260115123729.jpg';
import spongeProduction from '../../Mkinnonpastery-main/Mkinnonpastery-main/public/assets/images/IMG20250901090216.jpg';
import lemonTarts from '../../Mkinnonpastery-main/Mkinnonpastery-main/public/assets/images/IMG20251211091210.jpg';

export type NavigationItem = {
  href: string;
  label: string;
};

export type HeroCta = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type AudienceSignal = {
  title: string;
  detail: string;
  href: string;
};

export type PositioningPanel = {
  title: string;
  points: string[];
};

export type Pillar = {
  title: string;
  detail: string;
};

export type MembershipFeature = {
  title: string;
  detail: string;
  cadence: string;
};

export type IngredientPercentage = {
  ingredient: string;
  percentage: string;
  note?: string;
};

export type ProcessTimelineStep = {
  stage: string;
  timing: string;
  target: string;
};

export type CostingInput = {
  label: string;
  amount: string;
};

export type TroubleshootingItem = {
  symptom: string;
  fix: string;
};

export type FormulaPublicPreview = {
  tag: string;
  title: string;
  description: string;
  outcome: string;
  previewNotes: string[];
  image: StaticImageData;
  alt: string;
};

export type FormulaMembersOnly = {
  ingredientPercentages: IngredientPercentage[];
  batchSize: string;
  yield: string;
  processTimeline: ProcessTimelineStep[];
  holdShelfNotes: string[];
  costingInputs: CostingInput[];
  troubleshooting: TroubleshootingItem[];
};

export type FormulaItem = {
  publicPreview: FormulaPublicPreview;
  membersOnly: FormulaMembersOnly;
};

export type GalleryItem = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  featured?: boolean;
};

export type MethodStep = {
  step: string;
  title: string;
  place: string;
  points: string[];
};

export type Testimonial = {
  quote: string;
  member: string;
  outcome: string;
};

export type ConsistencyExample = {
  product: string;
  before: string;
  after: string;
};

export type CertifiedPreviewPoint = {
  title: string;
  detail: string;
};

export type ExpertCredibility = {
  name: string;
  role: string;
  contribution: string;
};

export type LaunchRoadmapStage = {
  phase: string;
  title: string;
  detail: string;
  actions: string[];
};

export type AccessPlan = {
  label: string;
  title: string;
  cadence: string;
  detail: string;
  features: string[];
  href: string;
  highlighted?: boolean;
};

export type ConsultingOffer = {
  title: string;
  detail: string;
};

export type MemberMetric = {
  value: string;
  label: string;
  note: string;
};

export type MemberFocusCard = {
  title: string;
  detail: string;
  items: string[];
};

export type MemberLibraryCategory = {
  title: string;
  status: string;
  description: string;
  items: string[];
};

export type LiveSessionCard = {
  title: string;
  cadence: string;
  detail: string;
  notes: string[];
};

export type CommunityTopic = {
  title: string;
  cadence: string;
  detail: string;
};

export type CommunityResource = {
  title: string;
  detail: string;
};

export type BillingAddOn = {
  title: string;
  detail: string;
};

export const siteNavigation: NavigationItem[] = [
  { href: '#membership', label: 'Membership' },
  { href: '#menu', label: 'Formula Menu' },
  { href: '#method', label: 'Method' },
  { href: '#certification', label: 'Certification' },
  { href: '#waitlist', label: 'Waitlist' },
  { href: '#contact', label: 'Contact' }
];

export const hero = {
  eyebrow: 'Professional bakery membership | formulas, systems, and mentoring | Victoria, Australia',
  title: 'Build a pastry line people trust because the method is repeatable, not because the photos look good.',
  description:
    "The McKinnon Collective turns Mark McKinnon's open, process-first approach into a premium membership for bakers, pastry teams, and owner-operators who need products that survive service, staffing changes, and margin pressure.",
  supportingText:
    'The public site stays educational. The protected area delivers the full system: formulas, production notes, business tools, live coaching, and a pathway toward certification.',
  primaryCta: {
    label: 'Join the founding waitlist',
    href: '#waitlist'
  } satisfies HeroCta,
  secondaryCta: {
    label: 'Preview the membership',
    href: '#membership'
  } satisfies HeroCta,
  image: heroImage,
  alt: 'Fresh baked almond croissants finished with flaked almonds and icing sugar.'
};

export const heroStats: StatItem[] = [
  { value: '20+', label: 'Years on bakery and pastry benches' },
  { value: 'Bench-tested', label: 'Methods built for commercial repetition and service windows' },
  { value: 'Production-first', label: 'Yield, hold, finish, and margin sit inside every formula' },
  { value: 'Founding model', label: 'Membership, certification, and consultancy under one standard' }
];

export const audienceSignals: AudienceSignal[] = [
  {
    title: 'Owner-operators',
    detail: 'Tighten formulas, prep flow, and pricing discipline before growth exposes inconsistency.',
    href: '#membership'
  },
  {
    title: 'Bakery teams',
    detail: 'Standardize product families so the range survives handovers, weekends, and busy mornings.',
    href: '#method'
  },
  {
    title: 'Serious pastry professionals',
    detail: 'Study the why behind bakery-ready products, not just an ingredient list with no operating logic.',
    href: '#menu'
  },
  {
    title: 'Future certified partners',
    detail: 'Work toward a McKinnon badge that signals repeatable quality and shared production standards.',
    href: '#certification'
  }
];

export const positioning = {
  eyebrow: 'Why This Restructure Works',
  title: 'This is no longer a brochure for products. It becomes the front door to a professional learning business.',
  paragraphs: [
    'Mark already has the differentiator most bakery sites never develop: a clear point of view about repeatability. The new structure keeps that educational edge, but frames it as a premium membership for people who want usable production knowledge instead of passive inspiration.',
    'That shift matters commercially. The public site attracts and qualifies the right people, the protected member area delivers the real operating material, and certification plus consultancy create higher-trust expansion paths once the core offer proves retention.'
  ]
};

export const positioningPanels: PositioningPanel[] = [
  {
    title: 'What changes on the site',
    points: [
      'The homepage explains who the membership is for, what it solves, and how to join.',
      'Free previews prove the method before anyone pays.',
      'The members area becomes a real product preview instead of a placeholder scaffold.'
    ]
  },
  {
    title: 'What stays true',
    points: [
      'Every product is taught as a repeatable system, not a vanity recipe.',
      'Technique, finish, hold, and economics matter together.',
      'Education remains the center of the brand even as the business model matures.'
    ]
  }
];

export const strategicPillars: Pillar[] = [
  {
    title: 'Educational excellence',
    detail: 'Teach formulas at a masterclass level with baker percentages, filmed methods, troubleshooting, and operating notes.'
  },
  {
    title: 'Creative innovation',
    detail: 'Show signature interpretations of classics that still make sense on a commercial bench and in a real cabinet.'
  },
  {
    title: 'Community and mentorship',
    detail: 'Create an environment where members can ask better questions, compare results, and improve faster together.'
  },
  {
    title: 'The McKinnon standard',
    detail: 'Build toward a visible badge and partner network that signals adherence to a recognizable production discipline.'
  }
];

export const membershipFeatures: MembershipFeature[] = [
  {
    title: 'Formula library',
    detail: 'Versioned formulas with baker percentages, yields, process timelines, hold notes, and clear production targets.',
    cadence: 'Core release'
  },
  {
    title: 'Filmed bench classes',
    detail: 'Step-by-step sessions that show what to look for during mixing, setting, finishing, and recovery when a batch starts drifting.',
    cadence: 'Ongoing classes'
  },
  {
    title: 'Business toolkit',
    detail: 'Costing sheets, production planning templates, QA scorecards, and handover tools for small bakery teams.',
    cadence: 'Operational layer'
  },
  {
    title: 'Live coaching',
    detail: 'Monthly office hours with Mark and specialist contributors focused on production blockers and product reviews.',
    cadence: 'Monthly'
  },
  {
    title: 'Community review',
    detail: 'Member discussion spaces for troubleshooting, bake feedback, launch questions, and peer support.',
    cadence: 'Private community'
  },
  {
    title: 'Certification pathway',
    detail: 'A structured route toward the McKinnon badge for bakeries that can prove method, finish, and repeatability.',
    cadence: 'Application track'
  }
];

export const menuItems: FormulaItem[] = [
  {
    publicPreview: {
      tag: 'Laminated Pastry',
      title: 'Almond Croissant',
      description:
        'Start with well-laminated croissants that still show clear internal honeycomb. Fill with almond frangipane, top with more frangipane and flaked almonds, then bake until the centre is set and the outer layers colour deeply.',
      outcome: 'Crisp laminated shell, moist almond centre, and strong same-day cabinet hold.',
      previewNotes: [
        'Use strong butter layering and controlled proof to preserve lift.',
        'Finish with bold colour so sweetness from frangipane stays balanced.',
        'Keep fill weights standard to stop centres turning heavy.'
      ],
      image: almondCroissant,
      alt: 'Close-up of almond croissants dusted with icing sugar.'
    },
    membersOnly: {
      ingredientPercentages: [
        { ingredient: 'Croissant base', percentage: '100%', note: 'Baked day-old, fully cooled' },
        { ingredient: 'Almond frangipane', percentage: '58%' },
        { ingredient: 'Sugar syrup', percentage: '9%' },
        { ingredient: 'Flaked almonds + icing sugar', percentage: '12%' }
      ],
      batchSize: '120 loaded croissants per bake cycle',
      yield: '120 sale units | average 118 after trim and breakage allowance',
      processTimeline: [
        { stage: 'Split and soak', timing: '0:00-0:25', target: 'Light syrup uptake without soggy base' },
        { stage: 'Fill and top', timing: '0:25-0:55', target: '65-70 g total frangipane per unit' },
        { stage: 'Bake and set', timing: '0:55-1:35', target: 'Core set, dark caramel top, dry base' }
      ],
      holdShelfNotes: [
        'Best flavour window is 45-180 minutes post bake.',
        'Hold at ambient with open airflow; avoid sealed containers.',
        'Not recommended for overnight display once filled.'
      ],
      costingInputs: [
        { label: 'Ingredient cost / unit', amount: 'A$2.18' },
        { label: 'Labour minutes / tray of 20', amount: '32 min' },
        { label: 'Target gross margin', amount: '69%' }
      ],
      troubleshooting: [
        { symptom: 'Dense centre after cooling', fix: 'Reduce fill by 5 g and increase final bake by 3 minutes.' },
        { symptom: 'Soggy bottom within 2 hours', fix: 'Lower syrup pick-up and cool on perforated trays.' }
      ]
    }
  },
  {
    publicPreview: {
      tag: 'Choux And Cream Line',
      title: 'Raspberry Cream Eclair',
      description:
        'Pipe consistent shells, dry the bake fully, and fill with balanced cream for a clean line. Keep finish neat and hold shape through service.',
      outcome: 'Uniform eclair profile with stable cream and clean top finish through service.',
      previewNotes: [
        'Pipe shell weights consistently before baking.',
        'Dry shells fully so they can take full fill load.',
        'Set garnish close to dispatch time for best appearance.'
      ],
      image: raspberryEclair,
      alt: 'Raspberry cream eclairs lined on a stainless steel bench.'
    },
    membersOnly: {
      ingredientPercentages: [
        { ingredient: 'Choux shells', percentage: '100%' },
        { ingredient: 'Raspberry diplomat cream', percentage: '92%' },
        { ingredient: 'Raspberry glaze line', percentage: '11%' },
        { ingredient: 'Freeze-dried raspberry dust', percentage: '1.5%' }
      ],
      batchSize: '180 shells per run',
      yield: '165-170 filled eclairs after reject allowance',
      processTimeline: [
        { stage: 'Pipe and bake', timing: '0:00-0:50', target: 'Straight shells with dry centres' },
        { stage: 'Cool and punch', timing: '0:50-1:10', target: 'Shell temperature below 25C' },
        { stage: 'Fill and finish', timing: '1:10-1:55', target: '48 g fill with flat top glaze' }
      ],
      holdShelfNotes: [
        'Refrigerated hold: 18 hours max with shell integrity checks.',
        'Display hold: 3-4 hours at under 8C.',
        'Do not pre-fill for next-day service.'
      ],
      costingInputs: [
        { label: 'Ingredient cost / unit', amount: 'A$1.64' },
        { label: 'Labour minutes / tray of 30', amount: '27 min' },
        { label: 'Target gross margin', amount: '71%' }
      ],
      troubleshooting: [
        { symptom: 'Shell collapses after filling', fix: 'Increase shell dry time and reduce fill temp to under 7C.' },
        { symptom: 'Glaze sweats in cabinet', fix: 'Lower glaze water activity and avoid warm-room finishing.' }
      ]
    }
  },
  {
    publicPreview: {
      tag: 'Choux And Glaze',
      title: 'Chocolate Profiterole',
      description:
        'Pipe smaller choux rounds with enough space to expand, bake them dry, fill consistently, and glaze with chocolate while the surface temperature still lets the coating settle cleanly.',
      outcome: 'Hollow, crisp shells with balanced cream fill and glossy chocolate coating.',
      previewNotes: [
        'Aim for shells that stay hollow after full cool-down.',
        'Balance fill volume so the shell stays lifted on display.',
        'Glaze while tops are cool but not fridge-cold.'
      ],
      image: profiterole,
      alt: 'Chocolate glazed profiteroles arranged on a bench.'
    },
    membersOnly: {
      ingredientPercentages: [
        { ingredient: 'Choux rounds', percentage: '100%' },
        { ingredient: 'Vanilla cream fill', percentage: '88%' },
        { ingredient: 'Dark chocolate glaze', percentage: '35%' }
      ],
      batchSize: '220 profiteroles per deposit cycle',
      yield: '210 finished units',
      processTimeline: [
        { stage: 'Deposit and bake', timing: '0:00-0:42', target: 'Even expansion and dry shell walls' },
        { stage: 'Fill', timing: '0:42-1:10', target: '24 g cream each, no seam split' },
        { stage: 'Glaze and set', timing: '1:10-1:35', target: 'Thin, glossy coating with no drips' }
      ],
      holdShelfNotes: [
        'Cabinet hold: up to 6 hours at 4-6C.',
        'Glaze bloom risk increases after 12 hours chilled.',
        'For events, glaze no earlier than 90 minutes before dispatch.'
      ],
      costingInputs: [
        { label: 'Ingredient cost / unit', amount: 'A$1.21' },
        { label: 'Labour minutes / tray of 40', amount: '19 min' },
        { label: 'Target gross margin', amount: '73%' }
      ],
      troubleshooting: [
        { symptom: 'Dull glaze finish', fix: 'Warm glaze to working range and avoid over-mixing before dipping.' },
        { symptom: 'Split shells during fill', fix: 'Use smaller nozzle and fill in two short bursts.' }
      ]
    }
  },
  {
    publicPreview: {
      tag: 'Baked Cheesecake',
      title: 'Basque Cheesecake',
      description:
        'Mix the cheesecake base smooth without building too much air, bake hot enough to achieve the dark top, and chill long enough for the centre to settle before slicing.',
      outcome: 'Dark caramel top, set edge, and creamy middle that portions cleanly.',
      previewNotes: [
        'Control mix temperature to avoid over-aeration.',
        'Use high heat for signature top colour and soft centre.',
        'Always chill fully before portioning.'
      ],
      image: basqueCheesecake,
      alt: 'Basque cheesecakes with dark baked tops on a display board.'
    },
    membersOnly: {
      ingredientPercentages: [
        { ingredient: 'Cream cheese base', percentage: '100%' },
        { ingredient: 'Sugar', percentage: '28%' },
        { ingredient: 'Egg + yolk blend', percentage: '42%' },
        { ingredient: 'Cream', percentage: '36%' }
      ],
      batchSize: '8 cakes x 20 cm tins',
      yield: '96 portions at 12 slices per cake',
      processTimeline: [
        { stage: 'Mix and strain', timing: '0:00-0:20', target: 'Smooth batter with minimal trapped air' },
        { stage: 'Bake', timing: '0:20-1:05', target: 'Dark top, slight centre wobble at pull' },
        { stage: 'Set and chill', timing: '1:05-13:05', target: 'Core temp below 6C before slicing' }
      ],
      holdShelfNotes: [
        'Shelf life: 3 days chilled, covered.',
        'Portion quality best on day 2 once fully set.',
        'Avoid freezing once caramel top is developed.'
      ],
      costingInputs: [
        { label: 'Ingredient cost / cake', amount: 'A$19.80' },
        { label: 'Labour minutes / cake', amount: '11 min' },
        { label: 'Target gross margin', amount: '68%' }
      ],
      troubleshooting: [
        { symptom: 'Top too pale', fix: 'Increase deck temperature by 10C and delay fan setting.' },
        { symptom: 'Centre over-set', fix: 'Reduce bake by 4 minutes and increase chill rest before slicing.' }
      ]
    }
  },
  {
    publicPreview: {
      tag: 'Hybrid Counter Bake',
      title: 'Brookie Muffin',
      description:
        'Build a rich chocolate batter with enough cookie-style character to justify the name, then bake for a cracked brownie-like crown and a soft centre that still eats well the next day.',
      outcome: 'Cracked brownie top with moist crumb and strong second-day eating quality.',
      previewNotes: [
        'Fold inclusions late to protect muffin lift.',
        'Use two-stage scoop for dramatic crown and centre texture.',
        'Bake hot then step down to lock in moisture.'
      ],
      image: brookieMuffin,
      alt: 'Chocolate brookie muffins displayed on a wooden stand.'
    },
    membersOnly: {
      ingredientPercentages: [
        { ingredient: 'Chocolate muffin batter', percentage: '100%' },
        { ingredient: 'Cookie dough chunks', percentage: '26%' },
        { ingredient: 'Chocolate chips', percentage: '18%' },
        { ingredient: 'Top crumble', percentage: '9%' }
      ],
      batchSize: '150 muffins per rack cycle',
      yield: '145-148 sale units',
      processTimeline: [
        { stage: 'Scale and scoop', timing: '0:00-0:25', target: '110 g total batter + inclusions each' },
        { stage: 'Bake profile', timing: '0:25-0:55', target: 'High crown with set sidewall' },
        { stage: 'Cool and pack', timing: '0:55-1:45', target: 'Internal temp below 30C before bagging' }
      ],
      holdShelfNotes: [
        'Counter hold: 1 day ambient in breathable bags.',
        'Texture remains soft into day 2 when wrapped after full cool.',
        'Do not refrigerate; it hardens crumb and mutes flavour.'
      ],
      costingInputs: [
        { label: 'Ingredient cost / unit', amount: 'A$1.48' },
        { label: 'Labour minutes / tray of 24', amount: '14 min' },
        { label: 'Target gross margin', amount: '70%' }
      ],
      troubleshooting: [
        { symptom: 'Flat tops', fix: 'Increase initial oven heat and reduce batter rest time.' },
        { symptom: 'Dry crumb on day 2', fix: 'Lower final bake by 2 minutes and verify scaling weights.' }
      ]
    }
  }
];

export const methodSteps: MethodStep[] = [
  {
    step: 'Step 01',
    title: 'Build strong bases first',
    place: 'Doughs, batters, shells, and cheesecake mixes',
    points: [
      'Lamination, choux paste, short crusts, and sponge or muffin batters need correct mix development before any finishing happens.',
      'Scaling, resting, and tray setup decide whether the product can be repeated across a full bakery run.',
      'If the base is weak, no garnish or glaze can recover the final result.'
    ]
  },
  {
    step: 'Step 02',
    title: 'Balance fillings and set',
    place: 'Frangipane, creams, curds, glaze, and baked centres',
    points: [
      'Fillings must deliver flavour, hold shape, and sit cleanly inside the product or cabinet display.',
      'Moisture control matters as much as flavour because the wrong balance shortens holding time.',
      'Consistent fill weights make the product eat the same from the first tray to the last.'
    ]
  },
  {
    step: 'Step 03',
    title: 'Finish for display and repeatability',
    place: 'Colour, garnish placement, sugar, glaze, and slicing',
    points: [
      'The final appearance is part of the product specification, not an afterthought.',
      'Good production notes make the finish achievable by the whole bakery team, not only one baker.',
      'The best products look strong early in the morning and still eat well later in the day.'
    ]
  }
];

export const galleryItems: GalleryItem[] = [
  {
    title: 'Chocolate eclairs',
    description: 'Classic choux line with a full top finish and clean, even shell shape.',
    image: chocolateEclair,
    alt: 'Chocolate eclairs lined on a wooden board.',
    featured: true
  },
  {
    title: 'Rolled sponge production',
    description: 'Sheet work built for neat filling, rolling, and reliable portion control.',
    image: spongeProduction,
    alt: 'Rows of rolled sponge logs prepared on a stainless steel bench.'
  },
  {
    title: 'Cheesecake finish',
    description: 'High-colour surface with a soft-set centre and clean round form.',
    image: basqueCheesecake,
    alt: 'Basque cheesecake with a dark caramelised top.'
  },
  {
    title: 'Tart consistency',
    description: 'Even shell work, level fill, and a finish suited to bakery-scale repetition.',
    image: lemonTarts,
    alt: 'Tray of lemon tarts with level citrus filling.'
  }
];

export const memberOutcomes: Testimonial[] = [
  {
    quote: 'Our laminated line now holds shape and colour from first tray to final pickup.',
    member: 'Head Baker, Melbourne Suburban Bakery',
    outcome: 'Reduced remake batches by 32% over 6 weeks.'
  },
  {
    quote: 'The fill-weight checks stopped random portion drift across our eclair and choux range.',
    member: 'Production Lead, Boutique Pastry Team',
    outcome: 'Lifted consistency score from 7.1 to 9.0 on weekly QA sheets.'
  },
  {
    quote: 'Mark\'s templates made handover simpler when weekend staff changed.',
    member: 'Owner-Operator, Regional Cafe Bakery',
    outcome: 'Cut training handover time from 3 shifts to 1 shift.'
  }
];

export const consistencyExamples: ConsistencyExample[] = [
  {
    product: 'Almond Croissant',
    before: 'Variable internal honeycomb and occasional under-colour in the final third of the bake run.',
    after: 'Matched lamination fold sequence and finish colour standard across all production trays.'
  },
  {
    product: 'Basque Cheesecake',
    before: 'Uneven centre set causing soft collapse or over-baked slices at service.',
    after: 'Defined bake-to-core window that preserves the dark top while holding a clean slice.'
  },
  {
    product: 'Raspberry Eclair',
    before: 'Inconsistent shell drying led to short display hold and uneven filling response.',
    after: 'Standardized shell dry-back and fill timing for repeatable bench-to-cabinet stability.'
  }
];

export const proofCta = {
  label: 'Join the founding waitlist',
  href: '#waitlist',
  supportingText: 'Get monthly launch notes, early-access dates, and the first invitation when doors open.'
} as const;

export const certifiedProgramPreview = {
  title: 'The McKinnon Certified pathway',
  description:
    'A structured route for bakeries that want visible proof of method, finish, and repeatability rather than a vague endorsement.',
  points: [
    {
      title: 'Bench assessments by product family',
      detail: 'Laminated, choux, and baked dessert lines each have practical pass benchmarks and documented review criteria.'
    },
    {
      title: 'Daily production scorecards',
      detail: 'Members track colour, weight, set, hold time, and presentation with one-page QA tools.'
    },
    {
      title: 'Partner-ready brand assets',
      detail: 'Approved bakeries receive badge guidance, listing support, and a shared language for communicating standards.'
    }
  ] satisfies CertifiedPreviewPoint[]
};

export const guestExperts: ExpertCredibility[] = [
  {
    name: 'Guest Laminator Mentor',
    role: 'Former hotel pastry trainer',
    contribution: 'Co-reviews fold, proof, and bake checkpoints for commercial croissant batches.'
  },
  {
    name: 'Bakery Operations Advisor',
    role: 'Multi-site production consultant',
    contribution: 'Stress-tests workflow maps so methods transfer cleanly across team sizes.'
  },
  {
    name: 'Food Safety Specialist',
    role: 'HACCP implementation lead',
    contribution: 'Shapes hold-time and handling standards for cream, custard, and chilled products.'
  }
];

export const launchRoadmap: LaunchRoadmapStage[] = [
  {
    phase: 'Phase 01',
    title: 'Waitlist and audience research',
    detail: 'Use the public site to qualify the right bakers before the membership opens.',
    actions: [
      'Collect baker type, experience level, and top operational challenge through the waitlist.',
      'Send one thoughtful update per month with build notes and research prompts.',
      'Use responses to prioritize the first formulas, tools, and guest sessions.'
    ]
  },
  {
    phase: 'Phase 02',
    title: 'Founding cohort launch',
    detail: 'Release the first working version of the McKinnon Collective with strong proof of value.',
    actions: [
      'Ship 10-15 signature formulas with full production notes.',
      'Launch monthly live office hours and an archived replay library.',
      'Bundle the first costing, QA, and production-planning templates.'
    ]
  },
  {
    phase: 'Phase 03',
    title: 'Certification and closed-door growth',
    detail: 'Expand only after standards, retention, and member outcomes are strong enough to protect the brand.',
    actions: [
      'Open certification applications for qualified bakery partners.',
      'Introduce referral-led growth and a partner directory.',
      'Move toward selective intake rather than permanent open enrollment.'
    ]
  }
];

export const accessPlans: AccessPlan[] = [
  {
    label: 'Core offer',
    title: 'Collective membership',
    cadence: 'Monthly or annual billing',
    detail: 'For solo bakers, pastry professionals, and serious operators who want the full formula and coaching library.',
    features: [
      'Formula library and production playbooks',
      'Monthly live coaching with replay access',
      'Private troubleshooting and peer discussion'
    ],
    href: '#waitlist',
    highlighted: true
  },
  {
    label: 'Team expansion',
    title: 'Bakery team access',
    cadence: 'Seat packs and onboarding',
    detail: 'For growing bakeries that need shared standards across multiple staff and service days.',
    features: [
      'Multi-seat access for production teams',
      'Handover, QA, and implementation templates',
      'Priority support for setup and rollout questions'
    ],
    href: '#contact'
  },
  {
    label: 'Brand network',
    title: 'Certified partner track',
    cadence: 'Application-based advisory',
    detail: 'For bakeries wanting the McKinnon badge, partner visibility, or deeper product-development support.',
    features: [
      'Assessment and standards review',
      'Badge readiness and partner listing pathway',
      'Consultancy and limited-edition collaboration options'
    ],
    href: '#contact'
  }
];

export const waitlistBenefits: string[] = [
  'Receive monthly launch updates instead of constant promotional emails.',
  'See behind-the-scenes previews of formulas, toolkits, and filming in development.',
  'Influence the first release with surveys about your toughest production and margin problems.',
  'Get early-access entry before the public launch window.'
];

export const consultingOffers: ConsultingOffer[] = [
  {
    title: 'Custom formula development',
    detail: 'Develop or refine menu lines with stronger hold, clearer specs, and better repeatability.'
  },
  {
    title: 'Bakery systems review',
    detail: 'Audit production flow, fill control, QA habits, and handover friction across the bench.'
  },
  {
    title: 'Guest training and workshops',
    detail: 'Run focused sessions for teams that need skill lifts in laminated pastry, choux, finishing, or product consistency.'
  }
];

export const memberDashboardMetrics: MemberMetric[] = [
  {
    value: '10-15',
    label: 'Founding formulas',
    note: 'Signature products across laminated pastry, choux, cheesecake, and counter bakes.'
  },
  {
    value: 'Monthly',
    label: 'Live coaching cadence',
    note: 'Office hours with Mark plus guest expert sessions and replay access.'
  },
  {
    value: '3',
    label: 'Growth tracks',
    note: 'Formula execution, business systems, and certification readiness.'
  }
];

export const memberFocusCards: MemberFocusCard[] = [
  {
    title: 'Bench systems',
    detail: 'The first release focuses on bakery lines that reward strong foundations and clean finishing standards.',
    items: [
      'Laminated pastry checkpoints',
      'Choux shell drying and fill control',
      'Cheesecake and counter-bake consistency'
    ]
  },
  {
    title: 'Business systems',
    detail: 'Members do not just get formulas. They get the working documents that make formulas trainable and profitable.',
    items: [
      'Costing and margin review sheets',
      'Prep planning and batch scheduling templates',
      'One-page QA and handover tools'
    ]
  },
  {
    title: 'Partner systems',
    detail: 'The longer-term value is not just learning new products. It is adopting a standard the market can recognize.',
    items: [
      'Certification requirements and audits',
      'Badge readiness reviews',
      'Partner listings and collaboration pathways'
    ]
  }
];

export const memberLibraryCategories: MemberLibraryCategory[] = [
  {
    title: 'Laminated lines',
    status: 'Founding release',
    description: 'Commercial pastry systems built around lift, layering, colour, and hold.',
    items: ['Almond Croissant', 'Croissant base audit sheet', 'Seasonal Danish framework']
  },
  {
    title: 'Choux and cream lines',
    status: 'Founding release',
    description: 'Products where shell integrity, fill temperature, and finish timing all decide the final result.',
    items: ['Raspberry Cream Eclair', 'Chocolate Profiterole', 'Shell dry-back troubleshooting']
  },
  {
    title: 'Baked desserts and counter bakes',
    status: 'Founding release',
    description: 'Items that need reliable set, clean slicing, strong day-two quality, and cabinet discipline.',
    items: ['Basque Cheesecake', 'Brookie Muffin', 'Tart shell and curd balance notes']
  },
  {
    title: 'Operational toolkits',
    status: 'Supporting layer',
    description: 'Documents that help a formula survive staff change, volume pressure, and inconsistent habits.',
    items: ['Costing worksheet', 'Prep planner', 'Daily QA scorecard']
  }
];

export const liveSessionCards: LiveSessionCard[] = [
  {
    title: 'Monthly office hours',
    cadence: 'Live each month',
    detail: 'A standing session for production blockers, formula questions, and post-launch feedback.',
    notes: [
      'Bring real bench problems and cabinet issues.',
      'Recorded for replay and future reference.',
      'Focused on practical fixes, not generic inspiration.'
    ]
  },
  {
    title: 'Guest expert masterclasses',
    cadence: 'Quarterly feature',
    detail: 'Specialist sessions that sharpen one area of the standard, from operations to finishing or food safety.',
    notes: [
      'Commercially relevant guest contributors only.',
      'Built to deepen the certification standard over time.',
      'Paired with notes or worksheets where relevant.'
    ]
  },
  {
    title: 'Replay archive',
    cadence: 'On-demand',
    detail: 'Members keep a searchable bank of previous training calls, demonstrations, and implementation notes.',
    notes: [
      'Useful for new staff handovers and refreshers.',
      'Organized by product family and topic.',
      'Supports the shift from one-off learning to repeatable systems.'
    ]
  }
];

export const communityTopics: CommunityTopic[] = [
  {
    title: 'Troubleshooting board',
    cadence: 'Always open',
    detail: 'Members post issues with structure, finishing, holding, or service stability and get practical responses.'
  },
  {
    title: 'Product review room',
    cadence: 'Weekly feedback rhythm',
    detail: 'Share results, compare standards, and review what changed when a product starts drifting.'
  },
  {
    title: 'Supplier and ops swaps',
    cadence: 'Monthly prompts',
    detail: 'Discuss packaging, ingredient substitutions, service realities, and workflow adjustments between bakeries.'
  },
  {
    title: 'Certification circle',
    cadence: 'Cohort-based',
    detail: 'A tighter group for teams preparing badge assessments, audits, and partner applications.'
  }
];

export const communityResources: CommunityResource[] = [
  {
    title: 'Launch surveys',
    detail: 'Member research prompts help shape the next formulas, guest sessions, and operations tools.'
  },
  {
    title: 'Implementation notes',
    detail: 'Short summaries explain what changed in a release and what members should update on the bench.'
  },
  {
    title: 'Partner referrals',
    detail: 'Over time, the community becomes a trusted network for subcontracting, staffing, and cross-promotion.'
  }
];

export const billingAddOns: BillingAddOn[] = [
  {
    title: 'Additional team seats',
    detail: 'Expand access beyond the core bakery team when operations start scaling.'
  },
  {
    title: 'Custom formula review',
    detail: 'Submit an in-house product for feedback on structure, finish, and profitability.'
  },
  {
    title: 'Workshop intensives',
    detail: 'Book focused training blocks for laminated pastry, choux, or consistency-driven counter lines.'
  },
  {
    title: 'Badge assessment prep',
    detail: 'Add structured guidance before formal certification review.'
  }
];
