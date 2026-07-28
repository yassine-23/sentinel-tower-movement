/**
 * Data for the "Reckoning" scroll sequence — four cinematic panels that
 * frame the twin crises (blade waste, wildfire) before the transformation story.
 *
 * All figures are verified:
 * - 43,000,000 t cumulative blade waste by 2050 — Liu & Barlow, 2017
 * - $15,000–40,000 per blade recycling cost ($1,000–2,000/ton, 15–20 t blades)
 * - EU wind industry landfill ban in force since 1 January 2026
 * - $394–893 billion/yr US wildfire cost — US Joint Economic Committee, 2023
 * - <10% containment odds past 2 hectares — Canadian Journal of Forest Research
 * - Under wind, a fire crosses 2 ha in ~15–30 minutes
 */

export interface ReckoningStat {
  /** Rendered before the animated value, e.g. "$". Empty string for none. */
  prefix: string;
  /** Numeric target the counter animates to; formatted with thousands separators. */
  value: number;
  /** Rendered after the animated value, e.g. "B", "t", "min". Empty string for none. */
  suffix: string;
}

export interface ReckoningImage {
  src: string;
  alt: string;
  /** Peak opacity of the dimmed background image (0–1). */
  opacity: number;
}

interface ReckoningPanelBase {
  id: string;
  eyebrow: string;
}

export interface ReckoningStatPanel extends ReckoningPanelBase {
  kind: 'stat';
  stat: ReckoningStat;
  title: string;
  body: readonly string[];
  source: string;
  image?: ReckoningImage;
}

export interface ReckoningQuestionPanel extends ReckoningPanelBase {
  kind: 'question';
  /** Rendered in huge display type; the final question carries the ember accent. */
  questions: readonly string[];
  /** Closing line inviting the reader to scroll into the transformation. */
  closing: string;
}

export type ReckoningPanel = ReckoningStatPanel | ReckoningQuestionPanel;

export const reckoningPanels: readonly ReckoningPanel[] = [
  {
    kind: 'stat',
    id: 'waste',
    eyebrow: 'The Waste',
    stat: { prefix: '', value: 43_000_000, suffix: 't' },
    title: 'Tonnes of turbine blades bound for the ground by 2050',
    body: [
      'A wind turbine blade is an aerospace-grade composite engineered to survive two decades of hurricane-force loads. When it retires, its owner pays $15,000 to $40,000 per blade to saw it apart and bury or burn it.',
      'Since 1 January 2026, Europe’s wind industry has closed the landfill door on its own blades. The strongest structures we mass-produce now have nowhere to go.',
    ],
    source: 'Liu & Barlow, 2017',
    image: {
      src: '/campaign/grave-vs-guardian-diptych.jpg',
      alt: 'Split view: sawn wind turbine blade segments half-buried in a landfill beside the same blade raised as a sentinel watchtower over forest, labeled Landfill and Sentinel',
      opacity: 0.25,
    },
  },
  {
    kind: 'stat',
    id: 'fire',
    eyebrow: 'The Fire',
    stat: { prefix: '$', value: 893, suffix: 'B' },
    title: 'Worst-case annual cost of wildfire to the United States',
    body: [
      'Wildfire drains an estimated $394 to $893 billion from the US economy every year — destroyed homes, poisoned air, lost lives and livelihoods.',
      'Insurers are already retreating from entire regions, withdrawing coverage faster than communities can rebuild.',
    ],
    source: 'US Joint Economic Committee, 2023',
    image: {
      src: '/campaign/lattice-aerial.jpg',
      alt: 'Aerial view at dusk of a hexagonal lattice of faintly glowing sentinel towers spread across dark forested hills',
      opacity: 0.15,
    },
  },
  {
    kind: 'stat',
    id: 'window',
    eyebrow: 'The Window',
    stat: { prefix: '', value: 15, suffix: 'min' },
    title: 'Past two hectares, containment odds collapse below 10%',
    body: [
      'Under wind, a fire crosses two hectares in fifteen to thirty minutes. Beyond that line, fewer than one initial attack in ten succeeds.',
      'The nearest fire station is 20 to 60 minutes away. Satellites revisit twice a day. The fire needs fifteen minutes.',
    ],
    source: 'Canadian Journal of Forest Research',
  },
  {
    kind: 'question',
    id: 'question',
    eyebrow: 'The Question',
    questions: [
      'Why do we pay to bury the strongest structures we have ever built — beside the forests we are failing to protect?',
      'What if the waste of one crisis was the answer to the other?',
    ],
    closing: 'Keep scrolling. The transformation begins.',
  },
];
