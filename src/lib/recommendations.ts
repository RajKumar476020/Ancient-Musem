import { Artifact } from '@/types/artifact';
import { getAllArtifacts } from './artifacts';

export interface RecommendationWithContext {
  artifact: Artifact;
  score: number;
  contextTag: string;
  reason: string;
}

const MATERIAL_KEYWORDS = [
  'bronze',
  'gold',
  'silver',
  'copper',
  'brass',
  'sandstone',
  'schist',
  'granite',
  'marble',
  'terracotta',
  'clay',
  'steatite',
  'jade',
  'ivory',
  'iron',
  'steel',
  'alloy',
];

const THEMATIC_KEYWORDS = [
  'shiva',
  'nataraja',
  'vishnu',
  'buddha',
  'bodhisattva',
  'ganesha',
  'durga',
  'parvati',
  'krishna',
  'surya',
  'brahma',
  'jina',
  'tirthankara',
  'lakshmi',
  'saraswati',
  'hanuman',
  'kartikeya',
  'dinar',
  'tanka',
  'rupee',
  'karshapana',
  'stater',
  'tetradrachm',
  'drachm',
  'seal',
  'sealing',
  'dagger',
  'katar',
  'sword',
  'tulwar',
  'khanjar',
  'frieze',
  'pillar',
  'stupa',
  'bracket',
  'yaksha',
  'yakshi',
  'apsara',
  'garuda',
  'nandi',
  'linga',
  'unicorn',
  'bull',
  'elephant',
  'lion',
];

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Extracts recognized thematic keywords from an artifact's metadata.
 */
function extractThematicKeywords(artifact: Artifact): Set<string> {
  const corpus = normalize(
    [
      artifact.title,
      artifact.summary,
      artifact.civilization ?? '',
      artifact.dynasty ?? '',
      ...artifact.quickFacts.map((f) => f.value),
    ].join(' ')
  );

  const matched = new Set<string>();
  for (const kw of THEMATIC_KEYWORDS) {
    if (corpus.includes(kw)) {
      matched.add(kw);
    }
  }
  return matched;
}

/**
 * Extracts recognized materials from an artifact's material description.
 */
function extractMaterials(artifact: Artifact): Set<string> {
  const corpus = normalize(artifact.material ?? '');
  const matched = new Set<string>();
  for (const mat of MATERIAL_KEYWORDS) {
    if (corpus.includes(mat)) {
      matched.add(mat);
    }
  }
  return matched;
}

/**
 * Calculates a multi-factor recommendation score between a target artifact and candidate artifact.
 */
export function calculateArtifactAffinity(
  target: Artifact,
  candidate: Artifact
): RecommendationWithContext {
  if (target.slug === candidate.slug) {
    return {
      artifact: candidate,
      score: -Infinity,
      contextTag: '',
      reason: 'Self',
    };
  }

  let score = 0;
  const reasonTokens: string[] = [];
  let primaryTag = '';

  // 1. Explicit Curatorial Pairing (Highest Priority)
  if (target.relatedArtifactSlugs.includes(candidate.slug)) {
    score += 150;
    reasonTokens.push('Curatorially linked counterpart');
    primaryTag = 'Curatorial Link';
  }

  // 2. Dynastic & Cultural Lineage
  const targetDynasty = normalize(target.dynasty ?? target.civilization ?? '');
  const candDynasty = normalize(candidate.dynasty ?? candidate.civilization ?? '');
  if (targetDynasty && candDynasty) {
    if (targetDynasty === candDynasty) {
      score += 45;
      const tag = `Same Dynasty: ${target.dynasty ?? target.civilization}`;
      if (!primaryTag) primaryTag = tag;
      reasonTokens.push(tag);
    } else if (
      targetDynasty.includes(candDynasty) ||
      candDynasty.includes(targetDynasty)
    ) {
      score += 30;
      const tag = `Related Cultural Lineage`;
      if (!primaryTag) primaryTag = tag;
      reasonTokens.push(tag);
    }
  }

  // 3. Category Match
  if (target.categorySlug === candidate.categorySlug) {
    score += 35;
    if (!primaryTag) primaryTag = 'Same Category';
    reasonTokens.push('Shared object type');
  }

  // 4. Historical Era Match
  if (target.eraSlug === candidate.eraSlug) {
    score += 25;
    if (!primaryTag) primaryTag = 'Contemporary Era';
    reasonTokens.push('Contemporary historical period');
  }

  // 5. Material & Craftsmanship Affinity
  const targetMaterials = extractMaterials(target);
  const candMaterials = extractMaterials(candidate);
  let sharedMaterial = '';
  for (const mat of targetMaterials) {
    if (candMaterials.has(mat)) {
      sharedMaterial = mat.charAt(0).toUpperCase() + mat.slice(1);
      score += 25;
      break;
    }
  }
  if (sharedMaterial) {
    const tag = `Shared Material: ${sharedMaterial}`;
    if (!primaryTag || primaryTag === 'Same Category') primaryTag = tag;
    reasonTokens.push(`Mastery in ${sharedMaterial.toLowerCase()}`);
  }

  // 6. Thematic & Iconographic Parallel
  const targetThemes = extractThematicKeywords(target);
  const candThemes = extractThematicKeywords(candidate);
  const sharedThemes: string[] = [];
  for (const theme of targetThemes) {
    if (candThemes.has(theme)) {
      sharedThemes.push(theme.charAt(0).toUpperCase() + theme.slice(1));
      score += 20;
    }
  }
  if (sharedThemes.length > 0) {
    const tag = `Iconographic Parallel: ${sharedThemes[0]}`;
    primaryTag = tag; // Iconographic match is highly engaging for visitors
    reasonTokens.push(`Shared devotion/subject of ${sharedThemes.join(', ')}`);
  }

  // 7. Chronological Proximity Decay
  const targetMid = (target.dateStart + target.dateEnd) / 2;
  const candMid = (candidate.dateStart + candidate.dateEnd) / 2;
  const diffYears = Math.abs(targetMid - candMid);
  if (diffYears < 400) {
    const proximityScore = Math.round(30 * (1 - diffYears / 400));
    score += proximityScore;
    if (diffYears <= 80 && !primaryTag.includes('Dynasty') && !primaryTag.includes('Iconographic')) {
      primaryTag = `Contemporary (within ${Math.max(10, Math.round(diffYears))} yrs)`;
    }
  }

  // Default fallback tag if none set
  if (!primaryTag) {
    primaryTag = target.eraSlug === candidate.eraSlug ? 'Historical Contemporary' : 'Curatorial Affinity';
  }

  const finalReason = reasonTokens.length > 0
    ? reasonTokens.slice(0, 2).join(' • ')
    : 'Curated subcontinental heritage counterpart';

  return {
    artifact: candidate,
    score,
    contextTag: primaryTag,
    reason: finalReason,
  };
}

/**
 * Intelligent Recommendation Engine:
 * Returns the top N most relevant artifacts for a given target, sorted by
 * multi-attribute relevance score, with diversity balancing.
 */
export function getIntelligentRecommendations(
  target: Artifact,
  limit = 4,
  allArtifacts?: Artifact[]
): RecommendationWithContext[] {
  const pool = allArtifacts ?? getAllArtifacts();

  // 1. Calculate affinities for all candidate artifacts
  const scoredCandidates: RecommendationWithContext[] = [];

  for (const candidate of pool) {
    if (candidate.slug === target.slug) continue;
    scoredCandidates.push(calculateArtifactAffinity(target, candidate));
  }

  // 2. Sort by descending score
  scoredCandidates.sort((a, b) => b.score - a.score);

  // 3. Diversity balancing: Avoid returning 3 identical fragments/coins if variety exists
  const selected: RecommendationWithContext[] = [];
  const seenPrefixes = new Set<string>();

  for (const item of scoredCandidates) {
    if (selected.length >= limit) break;

    // Use normalized title prefix (first 2 words) to ensure visual and thematic variety
    const titlePrefix = normalize(item.artifact.title).split(/\s+/).slice(0, 2).join(' ');

    if (!seenPrefixes.has(titlePrefix) || selected.length >= limit - 1) {
      selected.push(item);
      seenPrefixes.add(titlePrefix);
    }
  }

  // If diversity filter was too strict, fill from remaining top items
  if (selected.length < limit) {
    for (const item of scoredCandidates) {
      if (selected.length >= limit) break;
      if (!selected.some((s) => s.artifact.slug === item.artifact.slug)) {
        selected.push(item);
      }
    }
  }

  return selected;
}

