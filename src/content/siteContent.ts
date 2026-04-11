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
        { stage: 'Cool and punch', timing: '0:50-1:10', target: 'Shell temperature below 25°C' },
        { stage: 'Fill and finish', timing: '1:10-1:55', target: '48 g fill with flat top glaze' }
      ],
      holdShelfNotes: [
        'Refrigerated hold: 18 hours max with shell integrity checks.',
        'Display hold: 3-4 hours at under 8°C.',
        'Do not pre-fill for next-day service.'
      ],
      costingInputs: [
        { label: 'Ingredient cost / unit', amount: 'A$1.64' },
        { label: 'Labour minutes / tray of 30', amount: '27 min' },
        { label: 'Target gross margin', amount: '71%' }
      ],
      troubleshooting: [
        { symptom: 'Shell collapses after filling', fix: 'Increase shell dry time and reduce fill temp to under 7°C.' },
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
        'Cabinet hold: up to 6 hours at 4-6°C.',
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
        { stage: 'Set and chill', timing: '1:05-13:05', target: 'Core temp below 6°C before slicing' }
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
        { symptom: 'Top too pale', fix: 'Increase deck temperature by 10°C and delay fan setting.' },
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
        { stage: 'Cool and pack', timing: '0:55-1:45', target: 'Internal temp below 30°C before bagging' }
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
