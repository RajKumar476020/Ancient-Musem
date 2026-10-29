import { Artifact } from '@/types/artifact';

import { punchMarkedSilverCoin } from './punch-marked-silver-coin';
import { indoGreekMenanderSilverCoin } from './indo-greek-menander-silver-coin';
import { kushanKanishkaGoldDinar } from './kushan-kanishka-gold-dinar';
import { samudraguptaLyristGoldDinar } from './samudragupta-lyrist-gold-dinar';
import { chandraguptaIiArcherGoldDinar } from './chandragupta-ii-archer-gold-dinar';
import { kumaraguptaISilverCoin } from './kumaragupta-i-silver-coin';
import { delhiSultanateMuhammadTughluqTanka } from './delhi-sultanate-muhammad-tughluq-tanka';
import { mughalAkbarGoldMohur } from './mughal-akbar-gold-mohur';
import { mughalJahangirZodiacRupee } from './mughal-jahangir-zodiac-rupee';
import { marathaShivajiGoldHon } from './maratha-shivaji-gold-hon';
import { cholaNatarajaBronze } from './chola-nataraja-bronze';
import { guptaStandingVishnuSculpture } from './gupta-standing-vishnu-sculpture';
import { kushanGajalakshmiSculpture } from './kushan-gajalakshmi-sculpture';
import { durgaMahishasuramardiniSculpture } from './durga-mahishasuramardini-sculpture';
import { hoysalaGaneshaSculpture } from './hoysala-ganesha-sculpture';
import { cholaShivaSculpture } from './chola-shiva-sculpture';
import { indusValleyUnicornSeal } from './indus-valley-unicorn-seal';
import { indusValleyDancingGirl } from './indus-valley-dancing-girl';
import { harappanTerracottaFigurine } from './harappan-terracotta-figurine';
import { ashokaLionCapitalSarnath } from './ashoka-lion-capital-sarnath';

import { cmaKushanVimaKadphisesDinar } from './cma-kushan-vima-kadphises-dinar';
import { cmaKushanHuvishkaGoldDinar } from './cma-kushan-huvishka-gold-dinar';
import { cmaKushanVasudevaGoldDinar } from './cma-kushan-vasudeva-gold-dinar';
import { cmaKushanVasudevaIiDinar } from './cma-kushan-vasudeva-ii-dinar';
import { cmaDemetriosTetradrachm } from './cma-demetrios-tetradrachm';
import { cmaEukratidesTetradrachm } from './cma-eukratides-tetradrachm';
import { cmaMauryanPunchMarkedSilver } from './cma-mauryan-punch-marked-silver';
import { cmaGuptaChandraguptaArcherDinar } from './cma-gupta-chandragupta-archer-dinar';
import { cmaMughalKatarDagger } from './cma-mughal-katar-dagger';
import { cmaMughalJadeKhanjarDagger } from './cma-mughal-jade-khanjar-dagger';
import { cmaMughalBlueGlassHookah } from './cma-mughal-blue-glass-hookah';
import { cmaSatavahanaBronzeRoundel } from './cma-satavahana-bronze-roundel';
import { sultanganjBronzeBuddha } from './sultanganj-bronze-buddha';
import { cmaKashmirStandingBuddha } from './cma-kashmir-standing-buddha';
import { cmaCholaGaneshaBronze } from './cma-chola-ganesha-bronze';
import { cmaPalaBuddhaCallingEarth } from './cma-pala-buddha-calling-earth';
import { cmaCholaShivaParvatiBronze } from './cma-chola-shiva-parvati-bronze';
import { cmaKashmirVajrapaniBronze } from './cma-kashmir-vajrapani-bronze';
import { cmaCholaHanumanBronze } from './cma-chola-hanuman-bronze';
import { cmaCholaYogaNarasimhaBronze } from './cma-chola-yoga-narasimha-bronze';
import { cmaGuptaStandingBuddha591 } from './cma-gupta-standing-buddha-591';
import { cmaKurkiharPalaAkshobhyaBronze } from './cma-kurkihar-pala-akshobhya-bronze';
import { cmaCholaArdhanarishvaraTrident } from './cma-chola-ardhanarishvara-trident';
import { cmaCholaBrahmaShivaGranite } from './cma-chola-brahma-shiva-granite';
import { cmaCholaVishnuGranite } from './cma-chola-vishnu-granite';
import { cmaCholaKaliBronze } from './cma-chola-kali-bronze';
import { cmaCholaManikkavachakarBronze } from './cma-chola-manikkavachakar-bronze';
import { cmaPalaManjushriBronze } from './cma-pala-manjushri-bronze';
import { cmaKashmirSiddhalakshmiBronze } from './cma-kashmir-siddhalakshmi-bronze';
import { cmaRajasthanJinaParshvanatha } from './cma-rajasthan-jina-parshvanatha';
import { cmaMathuraKushanRailingPillar } from './cma-mathura-kushan-railing-pillar';
import { cmaBharhutShungaCopingRail } from './cma-bharhut-shunga-coping-rail';
import { cmaBharhutShungaCrossbar } from './cma-bharhut-shunga-crossbar';
import { cmaAgniFireGodSandstone } from './cma-agni-fire-god-sandstone';
import { cmaHoysalaGuardianShiva } from './cma-hoysala-guardian-shiva';
import { cmaHarshagiriMusiciansFrieze } from './cma-harshagiri-musicians-frieze';
import { cmaMathuraKushanGatewayBracket } from './cma-mathura-kushan-gateway-bracket';
import { cmaMathuraKushanSeatedBuddha } from './cma-mathura-kushan-seated-buddha';
import { cmaMathuraGangaRiverGoddess } from './cma-mathura-ganga-river-goddess';
import { cmaAhichchhatraMithunaTerracotta } from './cma-ahichchhatra-mithuna-terracotta';
import { cmaKaushambiSeatedYaksha } from './cma-kaushambi-seated-yaksha';
import { cmaShungaNatureYakshiTerracotta } from './cma-shunga-nature-yakshi-terracotta';
import { cmaChandraketugarhMaleTerracotta } from './cma-chandraketugarh-male-terracotta';
import { cmaPatnaBulandibaghYakshaHead } from './cma-patna-bulandibagh-yaksha-head';
import { cmaShungaToyChariotTerracotta } from './cma-shunga-toy-chariot-terracotta';
import { cmaHarwanKashmirAsceticsTile } from './cma-harwan-kashmir-ascetics-tile';
import { cmaShungaCrouchingMusician } from './cma-shunga-crouching-musician';
import { cmaIndusBullSeal } from './cma-indus-bull-seal';
import { cmaIndusUnicornSealKaolin } from './cma-indus-unicorn-seal-kaolin';
import { cmaCopperHoardAnthropomorph } from './cma-copper-hoard-anthropomorph';
import { cmaMauryaShungaLibationCup } from './cma-maurya-shunga-libation-cup';

export const artifacts: Artifact[] = [
  punchMarkedSilverCoin,
  indoGreekMenanderSilverCoin,
  kushanKanishkaGoldDinar,
  samudraguptaLyristGoldDinar,
  chandraguptaIiArcherGoldDinar,
  kumaraguptaISilverCoin,
  delhiSultanateMuhammadTughluqTanka,
  mughalAkbarGoldMohur,
  mughalJahangirZodiacRupee,
  marathaShivajiGoldHon,
  cholaNatarajaBronze,
  guptaStandingVishnuSculpture,
  kushanGajalakshmiSculpture,
  durgaMahishasuramardiniSculpture,
  hoysalaGaneshaSculpture,
  cholaShivaSculpture,
  indusValleyUnicornSeal,
  indusValleyDancingGirl,
  harappanTerracottaFigurine,
  ashokaLionCapitalSarnath,
  cmaKushanVimaKadphisesDinar,
  cmaKushanHuvishkaGoldDinar,
  cmaKushanVasudevaGoldDinar,
  cmaKushanVasudevaIiDinar,
  cmaDemetriosTetradrachm,
  cmaEukratidesTetradrachm,
  cmaMauryanPunchMarkedSilver,
  cmaGuptaChandraguptaArcherDinar,
  cmaMughalKatarDagger,
  cmaMughalJadeKhanjarDagger,
  cmaMughalBlueGlassHookah,
  cmaSatavahanaBronzeRoundel,
  sultanganjBronzeBuddha,
  cmaKashmirStandingBuddha,
  cmaCholaGaneshaBronze,
  cmaPalaBuddhaCallingEarth,
  cmaCholaShivaParvatiBronze,
  cmaKashmirVajrapaniBronze,
  cmaCholaHanumanBronze,
  cmaCholaYogaNarasimhaBronze,
  cmaGuptaStandingBuddha591,
  cmaKurkiharPalaAkshobhyaBronze,
  cmaCholaArdhanarishvaraTrident,
  cmaCholaBrahmaShivaGranite,
  cmaCholaVishnuGranite,
  cmaCholaKaliBronze,
  cmaCholaManikkavachakarBronze,
  cmaPalaManjushriBronze,
  cmaKashmirSiddhalakshmiBronze,
  cmaRajasthanJinaParshvanatha,
  cmaMathuraKushanRailingPillar,
  cmaBharhutShungaCopingRail,
  cmaBharhutShungaCrossbar,
  cmaAgniFireGodSandstone,
  cmaHoysalaGuardianShiva,
  cmaHarshagiriMusiciansFrieze,
  cmaMathuraKushanGatewayBracket,
  cmaMathuraKushanSeatedBuddha,
  cmaMathuraGangaRiverGoddess,
  cmaAhichchhatraMithunaTerracotta,
  cmaKaushambiSeatedYaksha,
  cmaShungaNatureYakshiTerracotta,
  cmaChandraketugarhMaleTerracotta,
  cmaPatnaBulandibaghYakshaHead,
  cmaShungaToyChariotTerracotta,
  cmaHarwanKashmirAsceticsTile,
  cmaShungaCrouchingMusician,
  cmaIndusBullSeal,
  cmaIndusUnicornSealKaolin,
  cmaCopperHoardAnthropomorph,
  cmaMauryaShungaLibationCup
];

export {
  punchMarkedSilverCoin,
  indoGreekMenanderSilverCoin,
  kushanKanishkaGoldDinar,
  samudraguptaLyristGoldDinar,
  chandraguptaIiArcherGoldDinar,
  kumaraguptaISilverCoin,
  delhiSultanateMuhammadTughluqTanka,
  mughalAkbarGoldMohur,
  mughalJahangirZodiacRupee,
  marathaShivajiGoldHon,
  cholaNatarajaBronze,
  guptaStandingVishnuSculpture,
  kushanGajalakshmiSculpture,
  durgaMahishasuramardiniSculpture,
  hoysalaGaneshaSculpture,
  cholaShivaSculpture,
  indusValleyUnicornSeal,
  indusValleyDancingGirl,
  harappanTerracottaFigurine,
  ashokaLionCapitalSarnath,
  cmaKushanVimaKadphisesDinar,
  cmaKushanHuvishkaGoldDinar,
  cmaKushanVasudevaGoldDinar,
  cmaKushanVasudevaIiDinar,
  cmaDemetriosTetradrachm,
  cmaEukratidesTetradrachm,
  cmaMauryanPunchMarkedSilver,
  cmaGuptaChandraguptaArcherDinar,
  cmaMughalKatarDagger,
  cmaMughalJadeKhanjarDagger,
  cmaMughalBlueGlassHookah,
  cmaSatavahanaBronzeRoundel,
  sultanganjBronzeBuddha,
  cmaKashmirStandingBuddha,
  cmaCholaGaneshaBronze,
  cmaPalaBuddhaCallingEarth,
  cmaCholaShivaParvatiBronze,
  cmaKashmirVajrapaniBronze,
  cmaCholaHanumanBronze,
  cmaCholaYogaNarasimhaBronze,
  cmaGuptaStandingBuddha591,
  cmaKurkiharPalaAkshobhyaBronze,
  cmaCholaArdhanarishvaraTrident,
  cmaCholaBrahmaShivaGranite,
  cmaCholaVishnuGranite,
  cmaCholaKaliBronze,
  cmaCholaManikkavachakarBronze,
  cmaPalaManjushriBronze,
  cmaKashmirSiddhalakshmiBronze,
  cmaRajasthanJinaParshvanatha,
  cmaMathuraKushanRailingPillar,
  cmaBharhutShungaCopingRail,
  cmaBharhutShungaCrossbar,
  cmaAgniFireGodSandstone,
  cmaHoysalaGuardianShiva,
  cmaHarshagiriMusiciansFrieze,
  cmaMathuraKushanGatewayBracket,
  cmaMathuraKushanSeatedBuddha,
  cmaMathuraGangaRiverGoddess,
  cmaAhichchhatraMithunaTerracotta,
  cmaKaushambiSeatedYaksha,
  cmaShungaNatureYakshiTerracotta,
  cmaChandraketugarhMaleTerracotta,
  cmaPatnaBulandibaghYakshaHead,
  cmaShungaToyChariotTerracotta,
  cmaHarwanKashmirAsceticsTile,
  cmaShungaCrouchingMusician,
  cmaIndusBullSeal,
  cmaIndusUnicornSealKaolin,
  cmaCopperHoardAnthropomorph,
  cmaMauryaShungaLibationCup
};
