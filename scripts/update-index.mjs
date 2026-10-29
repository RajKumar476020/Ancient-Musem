import fs from 'fs';
import { CANDIDATES_51 } from './verify-all-51-sources.mjs';

const origImports = [
  "import { punchMarkedSilverCoin } from './punch-marked-silver-coin';",
  "import { indoGreekMenanderSilverCoin } from './indo-greek-menander-silver-coin';",
  "import { kushanKanishkaGoldDinar } from './kushan-kanishka-gold-dinar';",
  "import { samudraguptaLyristGoldDinar } from './samudragupta-lyrist-gold-dinar';",
  "import { chandraguptaIiArcherGoldDinar } from './chandragupta-ii-archer-gold-dinar';",
  "import { kumaraguptaISilverCoin } from './kumaragupta-i-silver-coin';",
  "import { delhiSultanateMuhammadTughluqTanka } from './delhi-sultanate-muhammad-tughluq-tanka';",
  "import { mughalAkbarGoldMohur } from './mughal-akbar-gold-mohur';",
  "import { mughalJahangirZodiacRupee } from './mughal-jahangir-zodiac-rupee';",
  "import { marathaShivajiGoldHon } from './maratha-shivaji-gold-hon';",
  "import { cholaNatarajaBronze } from './chola-nataraja-bronze';",
  "import { guptaStandingVishnuSculpture } from './gupta-standing-vishnu-sculpture';",
  "import { kushanGajalakshmiSculpture } from './kushan-gajalakshmi-sculpture';",
  "import { durgaMahishasuramardiniSculpture } from './durga-mahishasuramardini-sculpture';",
  "import { hoysalaGaneshaSculpture } from './hoysala-ganesha-sculpture';",
  "import { cholaShivaSculpture } from './chola-shiva-sculpture';",
  "import { indusValleyUnicornSeal } from './indus-valley-unicorn-seal';",
  "import { indusValleyDancingGirl } from './indus-valley-dancing-girl';",
  "import { harappanTerracottaFigurine } from './harappan-terracotta-figurine';",
  "import { ashokaLionCapitalSarnath } from './ashoka-lion-capital-sarnath';"
];

const origVars = [
  'punchMarkedSilverCoin',
  'indoGreekMenanderSilverCoin',
  'kushanKanishkaGoldDinar',
  'samudraguptaLyristGoldDinar',
  'chandraguptaIiArcherGoldDinar',
  'kumaraguptaISilverCoin',
  'delhiSultanateMuhammadTughluqTanka',
  'mughalAkbarGoldMohur',
  'mughalJahangirZodiacRupee',
  'marathaShivajiGoldHon',
  'cholaNatarajaBronze',
  'guptaStandingVishnuSculpture',
  'kushanGajalakshmiSculpture',
  'durgaMahishasuramardiniSculpture',
  'hoysalaGaneshaSculpture',
  'cholaShivaSculpture',
  'indusValleyUnicornSeal',
  'indusValleyDancingGirl',
  'harappanTerracottaFigurine',
  'ashokaLionCapitalSarnath'
];

const newImports = CANDIDATES_51.map(c => {
  const varName = c.slug.replace(/-([a-z0-9])/g, (_, l) => l.toUpperCase());
  return `import { ${varName} } from './${c.slug}';`;
});

const newVars = CANDIDATES_51.map(c => c.slug.replace(/-([a-z0-9])/g, (_, l) => l.toUpperCase()));

const allVars = [...origVars, ...newVars];

const content = `import { Artifact } from '@/types/artifact';

${origImports.join('\n')}

${newImports.join('\n')}

export const artifacts: Artifact[] = [
  ${allVars.join(',\n  ')}
];

export {
  ${allVars.join(',\n  ')}
};
`;

fs.writeFileSync('src/data/artifacts/index.ts', content, 'utf8');
console.log(`src/data/artifacts/index.ts successfully updated with all ${allVars.length} artifacts!`);
