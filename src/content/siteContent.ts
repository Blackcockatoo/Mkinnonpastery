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

export type MenuItem = {
  tag: string;
  title: string;
  description: string;
  howTo: string;
  watch: string;
  image: StaticImageData;
  alt: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  featured?: boolean;
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

export const hero = {
  image: heroImage,
  alt: 'Fresh baked almond croissants finished with flaked almonds and icing sugar.'
};

export const heroStats = [
  { value: '20+', label: 'Years on bakery and pastry benches' },
  { value: 'Cert III', label: 'Baking and cake & pastry training' },
  { value: 'Commercially tested', label: 'Built for repeatable daily production' },
  { value: 'Recipe development', label: 'Products refined for consistency and finish' }
] as const;

export const menuItems: MenuItem[] = [
  {
    tag: 'Laminated Pastry',
    title: 'Almond Croissant',
    description:
      'Start with well-laminated croissants that still show clear internal honeycomb. Fill with almond frangipane, top with more frangipane and flaked almonds, then bake until the centre is set and the outer layers colour deeply.',
    howTo:
      'Use strong butter layering, controlled proof, and a bold final bake so the product stays crisp outside and moist through the middle.',
    watch: 'Pale colour, soggy bottoms, or heavy filling will flatten the pastry and mute the eating quality.',
    image: almondCroissant,
    alt: 'Close-up of almond croissants dusted with icing sugar.'
  },
  {
    tag: 'Choux And Cream Line',
    title: 'Raspberry Cream Eclair',
    description:
      'Pipe consistent shells, dry the bake fully, and fill with balanced cream for a clean line. Keep finish neat and hold shape through service.',
    howTo:
      'Maintain uniform piping and bake profile so each shell can take the same fill load without softening early.',
    watch: 'Shell moisture and overfilling reduce hold time and presentation quality.',
    image: raspberryEclair,
    alt: 'Raspberry cream eclairs lined on a stainless steel bench.'
  },
  {
    tag: 'Choux And Glaze',
    title: 'Chocolate Profiterole',
    description:
      'Pipe smaller choux rounds with enough space to expand, bake them dry, fill consistently, and glaze with chocolate while the surface temperature still lets the coating settle cleanly.',
    howTo:
      'Aim for hollow shells, even fill weight, and a chocolate finish thick enough to coat without dragging or turning dull.',
    watch: 'Under-baked shells or over-warm filling will shorten shelf life and collapse the structure.',
    image: profiterole,
    alt: 'Chocolate glazed profiteroles arranged on a bench.'
  },
  {
    tag: 'Baked Cheesecake',
    title: 'Basque Cheesecake',
    description:
      'Mix the cheesecake base smooth without building too much air, bake hot enough to achieve the dark top, and chill long enough for the centre to settle before slicing.',
    howTo:
      'Use a rich custard-style base and let the bake create the contrast between a dark surface, set edge, and creamy middle.',
    watch: 'If the centre sets too hard or the top stays pale, the cake loses the character that makes the style work.',
    image: basqueCheesecake,
    alt: 'Basque cheesecakes with dark baked tops on a display board.'
  },
  {
    tag: 'Hybrid Counter Bake',
    title: 'Brookie Muffin',
    description:
      'Build a rich chocolate batter with enough cookie-style character to justify the name, then bake for a cracked brownie-like crown and a soft centre that still eats well the next day.',
    howTo:
      'Balance muffin lift with dense chocolate richness so the product looks generous but does not turn dry after cooling.',
    watch: 'The top needs visual drama and the crumb needs moisture. If either one fails, the item loses its counter appeal.',
    image: brookieMuffin,
    alt: 'Chocolate brookie muffins displayed on a wooden stand.'
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

export const proofCta = {
  label: 'Join the waitlist for member access',
  href: '#contact',
  supportingText: 'Get early updates on training drops, certification spots, and new production playbooks.'
} as const;

export const memberOutcomes: Testimonial[] = [
  {
    quote: 'Our laminated line now holds shape and colour from first tray to final pickup.',
    member: 'Head Baker, Melbourne Suburban Bakery',
    outcome: 'Reduced remake batches by 32% over 6 weeks.'
  },
  {
    quote: 'The fill-weight checks stopped random portion drift across our éclair and choux range.',
    member: 'Production Lead, Boutique Pastry Team',
    outcome: 'Lifted consistency score from 7.1 to 9.0 on weekly QA sheets.'
  },
  {
    quote: 'Mark’s templates made handover simpler when weekend staff changed.',
    member: 'Owner-Operator, Regional Café Bakery',
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
    product: 'Raspberry Éclair',
    before: 'Inconsistent shell drying led to short display hold and uneven filling response.',
    after: 'Standardized shell dry-back and fill timing for repeatable bench-to-cabinet stability.'
  }
];

export const certifiedProgramPreview = {
  title: '“McKinnon Certified” program preview',
  description:
    'A guided pathway for bakers and pastry teams who want proof-backed production standards they can train, audit, and repeat.',
  points: [
    {
      title: 'Level checks by product family',
      detail: 'Laminated, choux, and baked dessert lines each have practical pass benchmarks.'
    },
    {
      title: 'Production scorecards',
      detail: 'Members track colour, weight, set, and hold-time outcomes with one-page daily cards.'
    },
    {
      title: 'Team readiness drills',
      detail: 'Short bench simulations test whether methods remain stable under real service pressure.'
    }
  ] satisfies CertifiedPreviewPoint[]
};

export const guestExperts: ExpertCredibility[] = [
  {
    name: 'Guest Laminator Mentor',
    role: 'Former hotel pastry trainer',
    contribution: 'Co-reviews fold and proof checkpoints for commercial croissant batches.'
  },
  {
    name: 'Bakery Operations Advisor',
    role: 'Multi-site production consultant',
    contribution: 'Validates workflow maps so methods transfer cleanly across team sizes.'
  },
  {
    name: 'Food Safety Specialist',
    role: 'HACCP implementation lead',
    contribution: 'Contributes hold-time and handling standards for cream and custard products.'
  }
];
