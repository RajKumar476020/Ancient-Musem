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
import { cmaDurgaDestroyingTheBuffaloDemon150996 } from './cma-durga-destroying-the-buffalo-demon-150996';
import { cmaNatarajaShivaAsTheLordOfDance111811 } from './cma-nataraja-shiva-as-the-lord-of-dance-111811';
import { cmaShiva120411 } from './cma-shiva-120411';
import { cmaOneFacedLingaEkamukhalinga147575 } from './cma-one-faced-linga-ekamukhalinga-147575';
import { cmaElevenHeadedBodhisattvaOfCompassion148021 } from './cma-eleven-headed-bodhisattva-of-compassion-148021';
import { cmaKrishnaLiftingMountGovardhan147166 } from './cma-krishna-lifting-mount-govardhan-147166';
import { cmaStandingBuddha147010 } from './cma-standing-buddha-147010';
import { cmaGanesha153619 } from './cma-ganesha-153619';
import { cmaVishnu122253 } from './cma-vishnu-122253';
import { cmaNatureDivinityYakshi143649 } from './cma-nature-divinity-yakshi-143649';
import { cmaBodhisattva141937 } from './cma-bodhisattva-141937';
import { cmaUpperSteleWithHandForKrishnaLiftin454739 } from './cma-upper-stele-with-hand-for-krishna-liftin-454739';
import { cmaEnthronedPlanetaryDeity114975 } from './cma-enthroned-planetary-deity-114975';
import { cmaScenesFromTheLifeOfBuddha135485 } from './cma-scenes-from-the-life-of-buddha-135485';
import { cmaVenerationOfTheBuddhaAsAFieryPill123468 } from './cma-veneration-of-the-buddha-as-a-fiery-pill-123468';
import { cmaSeatedBuddha143465 } from './cma-seated-buddha-143465';
import { cmaMotherGoddess144908 } from './cma-mother-goddess-144908';
import { cmaDancingGanesha137128 } from './cma-dancing-ganesha-137128';
import { cmaBodhisattvaOfWisdomManjushri140439 } from './cma-bodhisattva-of-wisdom-manjushri-140439';
import { cmaVishnuRidingOnGaruda137023 } from './cma-vishnu-riding-on-garuda-137023';
import { cmaRailingPillarWithAYakshiFemaleNatu141661 } from './cma-railing-pillar-with-a-yakshi-female-natu-141661';
import { cmaHeadOfMaleDeityPossiblyAiyanar144893 } from './cma-head-of-male-deity-possibly-aiyanar-144893';
import { cmaDurgaAsTheSlayerOfTheBuffaloDemon159500 } from './cma-durga-as-the-slayer-of-the-buffalo-demon-159500';
import { cmaGoddessVajravarahi140094 } from './cma-goddess-vajravarahi-140094';
import { cmaLintelWithGaruda143463 } from './cma-lintel-with-garuda-143463';
import { cmaVishnu122254 } from './cma-vishnu-122254';
import { cmaHeadOfAFollowerOfShiva170075 } from './cma-head-of-a-follower-of-shiva-170075';
import { cmaHeadOfVishnu122181 } from './cma-head-of-vishnu-122181';
import { cmaStandingBuddha123021 } from './cma-standing-buddha-123021';
import { cmaNagaEnthronedBuddha139455 } from './cma-naga-enthroned-buddha-139455';
import { cmaMaleDeity157340 } from './cma-male-deity-157340';
import { cmaVarahaBoarIncarnationOfVishnu169268 } from './cma-varaha-boar-incarnation-of-vishnu-169268';
import { cmaSeatedBuddha153369 } from './cma-seated-buddha-153369';
import { cmaFastingBuddha153385 } from './cma-fasting-buddha-153385';
import { cmaGoddessUma151000 } from './cma-goddess-uma-151000';
import { cmaHeadOfABodhisattva151938 } from './cma-head-of-a-bodhisattva-151938';
import { cmaHeadOfBuddha139731 } from './cma-head-of-buddha-139731';
import { cmaBodhisattva169273 } from './cma-bodhisattva-169273';
import { cmaFertilityGoddess149128 } from './cma-fertility-goddess-149128';
import { cmaAltarpieceWithBuddhaEnthroned121665 } from './cma-altarpiece-with-buddha-enthroned-121665';
import { cmaTrikalaBhairava135183 } from './cma-trikala-bhairava-135183';
import { cmaTemptationOfBuddhaByTheEvilForces145980 } from './cma-temptation-of-buddha-by-the-evil-forces-145980';
import { cmaSeatedMaitreyaBuddha154788 } from './cma-seated-maitreya-buddha-154788';
import { cmaHeadOfVishnu144793 } from './cma-head-of-vishnu-144793';
import { cmaShakyamuniBuddhaCallingTheEarthToW141682 } from './cma-shakyamuni-buddha-calling-the-earth-to-w-141682';
import { cmaBoxDecoratedWithShivaVishnuKrishna154776 } from './cma-box-decorated-with-shiva-vishnu-krishna-154776';
import { cmaBoxDecoratedWithShivaVishnuKrishna437545 } from './cma-box-decorated-with-shiva-vishnu-krishna-437545';
import { cmaCoverForABoxDecoratedWithShivaVis437547 } from './cma-cover-for-a-box-decorated-with-shiva-vis-437547';
import { cmaGoddessHoldingALotus151924 } from './cma-goddess-holding-a-lotus-151924';
import { cmaBuddhaWithHandsInGestureOfTeaching135328 } from './cma-buddha-with-hands-in-gesture-of-teaching-135328';
import { cmaSuryaTheSunGod142033 } from './cma-surya-the-sun-god-142033';
import { cmaVishnuWithShriAndBhu138690 } from './cma-vishnu-with-shri-and-bhu-138690';
import { cmaHeadOfBodhisattvaAvalokiteshvara152487 } from './cma-head-of-bodhisattva-avalokiteshvara-152487';
import { cmaVishnu148834 } from './cma-vishnu-148834';
import { cmaStandingShivaMahadeva154793 } from './cma-standing-shiva-mahadeva-154793';
import { cmaWalkingBuddha137222 } from './cma-walking-buddha-137222';
import { cmaFemaleTreeDeityWithAttendant143264 } from './cma-female-tree-deity-with-attendant-143264';
import { cmaPortableIconOfShakyamuniBuddhaInTh141481 } from './cma-portable-icon-of-shakyamuni-buddha-in-th-141481';
import { cmaBuddha147403 } from './cma-buddha-147403';
import { cmaStandingBuddha153628 } from './cma-standing-buddha-153628';
import { cmaVishnu149965 } from './cma-vishnu-149965';
import { cmaMaleFertilityDivinityPossiblyShiva153386 } from './cma-male-fertility-divinity-possibly-shiva-153386';
import { cmaBodhisattvaOfWisdomManjushri134346 } from './cma-bodhisattva-of-wisdom-manjushri-134346';
import { cmaMaitreya144836 } from './cma-maitreya-144836';
import { cmaHeadOfShiva119692 } from './cma-head-of-shiva-119692';
import { cmaBodhisattvaOfCompassionAsLokeshvara155851 } from './cma-bodhisattva-of-compassion-as-lokeshvara-155851';
import { cmaHeadOfADeityOrADeifiedKing105872 } from './cma-head-of-a-deity-or-a-deified-king-105872';
import { cmaCrownedBuddhaSeatedOnALionThrone154791 } from './cma-crowned-buddha-seated-on-a-lion-throne-154791';
import { cmaBodhisattvaVajraraksha154787 } from './cma-bodhisattva-vajraraksha-154787';
import { cmaSeatedBuddha121109 } from './cma-seated-buddha-121109';
import { cmaBodhisattvaOfCompassionAvalokiteshvar149361 } from './cma-bodhisattva-of-compassion-avalokiteshvar-149361';
import { cmaHeadOfJina138615 } from './cma-head-of-jina-138615';
import { cmaApsaraBracket155586 } from './cma-apsara-bracket-155586';
import { cmaBodhisattvaAvalokitesvara154254 } from './cma-bodhisattva-avalokitesvara-154254';
import { cmaBustOfBuddha144780 } from './cma-bust-of-buddha-144780';
import { cmaHanuman155866 } from './cma-hanuman-155866';
import { cmaHeadOfBuddha121212 } from './cma-head-of-buddha-121212';
import { cmaFlyingHanuman153739 } from './cma-flying-hanuman-153739';
import { cmaPadmapaniLokeshvaraSeatedOnTheRock146000 } from './cma-padmapani-lokeshvara-seated-on-the-rock-146000';
import { cmaStandingFemaleDeity145922 } from './cma-standing-female-deity-145922';
import { cmaFriezeWithApsaras117826 } from './cma-frieze-with-apsaras-117826';
import { cmaPlaqueWithVishnu147577 } from './cma-plaque-with-vishnu-147577';
import { cmaStandingBuddha147414 } from './cma-standing-buddha-147414';
import { cmaBodhisattvaAvalokiteshvara149036 } from './cma-bodhisattva-avalokiteshvara-149036';
import { cmaShivaAsSlayerOfTheElephantDemon137220 } from './cma-shiva-as-slayer-of-the-elephant-demon-137220';
import { cmaHeadOfAYaksha138613 } from './cma-head-of-a-yaksha-138613';
import { cmaVasudharaGoddessOfAbundance125561 } from './cma-vasudhara-goddess-of-abundance-125561';
import { cmaBodhisattvaMaitreyaTheFutureBuddha150999 } from './cma-bodhisattva-maitreya-the-future-buddha-150999';
import { cmaBirthOfTheBuddha135837 } from './cma-birth-of-the-buddha-135837';
import { cmaShivaAsLordOfMusic145695 } from './cma-shiva-as-lord-of-music-145695';
import { cmaBuddhasPreviousLifeAsAWoodpeckerJa145182 } from './cma-buddhas-previous-life-as-a-woodpecker-ja-145182';
import { cmaNagaEnthronedBuddha139456 } from './cma-naga-enthroned-buddha-139456';
import { cmaAvalokitesvaraPadmapaniBodhisattvaOf148773 } from './cma-avalokitesvara-padmapani-bodhisattva-of-148773';
import { cmaNagaEnthronedBuddhaSerpentHoods139458 } from './cma-naga-enthroned-buddha-serpent-hoods-139458';
import { cmaNagaEnthronedBuddhaBase139457 } from './cma-naga-enthroned-buddha-base-139457';
import { cmaDevi151294 } from './cma-devi-151294';
import { cmaBodhisattvaPadmapani148827 } from './cma-bodhisattva-padmapani-148827';
import { cmaNatureDivinityYakshiWithDwarfHermap146848 } from './cma-nature-divinity-yakshi-with-dwarf-hermap-146848';
import { cmaRishabhaTheFirstJina144579 } from './cma-rishabha-the-first-jina-144579';
import { cmaEnthronedBuddhaPreaching154926 } from './cma-enthroned-buddha-preaching-154926';
import { cmaMaitreyaTheBuddhaOfTheFuture147047 } from './cma-maitreya-the-buddha-of-the-future-147047';
import { cmaMiniatureHeadOfABodhisattva154768 } from './cma-miniature-head-of-a-bodhisattva-154768';
import { cmaBaseForASeatedBuddhaWithFiguresOf148699 } from './cma-base-for-a-seated-buddha-with-figures-of-148699';
import { cmaSeatedBuddha147481 } from './cma-seated-buddha-147481';
import { cmaFinialWithTheTemptationOfBuddhaBy141482 } from './cma-finial-with-the-temptation-of-buddha-by-141482';
import { cmaFinialWithTheTemptationOfBuddhaBy141483 } from './cma-finial-with-the-temptation-of-buddha-by-141483';
import { cmaVidyadeviGoddessOfLearning146703 } from './cma-vidyadevi-goddess-of-learning-146703';
import { cmaBodhisattvaVajrapani151004 } from './cma-bodhisattva-vajrapani-151004';
import { cmaVasudevaVishnuNarayanaAsShridharaOn113024 } from './cma-vasudeva-vishnu-narayana-as-shridhara-on-113024';
import { cmaStandingVishnu139822 } from './cma-standing-vishnu-139822';
import { cmaFeetForStandingBuddha197315147999 } from './cma-feet-for-standing-buddha-197315-147999';
import { cmaGoddess155589 } from './cma-goddess-155589';
import { cmaFigureOfAMaitreyaOnATieredPedesta146799 } from './cma-figure-of-a-maitreya-on-a-tiered-pedesta-146799';
import { cmaVishnuAndShriSupportedByGaruda135716 } from './cma-vishnu-and-shri-supported-by-garuda-135716';
import { cmaShivaAndParvati141270 } from './cma-shiva-and-parvati-141270';
import { cmaSeatedBuddha161215 } from './cma-seated-buddha-161215';
import { cmaSeatedMaitreya139459 } from './cma-seated-maitreya-139459';
import { cmaPadmapani131334 } from './cma-padmapani-131334';
import { cmaStandingDevi154795 } from './cma-standing-devi-154795';
import { cmaVishnu147957 } from './cma-vishnu-147957';
import { cmaParshva136944 } from './cma-parshva-136944';
import { cmaSectionOfMonolithicRailingWithBathe123467 } from './cma-section-of-monolithic-railing-with-bathe-123467';
import { cmaDancersAndMusiciansFromPhrygia111807 } from './cma-dancers-and-musicians-from-phrygia-111807';
import { cmaBracketWithTwoMusicians149913 } from './cma-bracket-with-two-musicians-149913';
import { cmaSiddharthaAtTheBodhiTree159840 } from './cma-siddhartha-at-the-bodhi-tree-159840';
import { cmaBacchanalianScene111808 } from './cma-bacchanalian-scene-111808';
import { cmaForeignersAndNonBuddhistsDrinkDance111806 } from './cma-foreigners-and-non-buddhists-drink-dance-111806';
import { cmaProcessionOfNonBuddhists111809 } from './cma-procession-of-non-buddhists-111809';
import { cmaMonkBearingOfferings143468 } from './cma-monk-bearing-offerings-143468';
import { cmaBhu138693 } from './cma-bhu-138693';
import { cmaLaymanBearingOfferings143467 } from './cma-layman-bearing-offerings-143467';
import { cmaPortableShrine143777 } from './cma-portable-shrine-143777';
import { cmaMiniatureStoneReliquaryOrToiletteCa149138 } from './cma-miniature-stone-reliquary-or-toilette-ca-149138';
import { cmaColossalHeadOfADeva169267 } from './cma-colossal-head-of-a-deva-169267';
import { cmaArchitecturalSculptureFaceOfTimeKal148070 } from './cma-architectural-sculpture-face-of-time-kal-148070';
import { cmaMiniatureStoneReliquaryOrToiletteCa149140 } from './cma-miniature-stone-reliquary-or-toilette-ca-149140';
import { cmaPedimentWithTheFaceOfGloryKirtiMu153837 } from './cma-pediment-with-the-face-of-glory-kirti-mu-153837';
import { cmaMiniatureStoneReliquaryOrToiletteCa149139 } from './cma-miniature-stone-reliquary-or-toilette-ca-149139';
import { cmaWorshippersAtASacredTree145209 } from './cma-worshippers-at-a-sacred-tree-145209';
import { cmaNineCelestialBodiesNavagraha146165 } from './cma-nine-celestial-bodies-navagraha-146165';
import { cmaDoorGuardianMahakala149980 } from './cma-door-guardian-mahakala-149980';
import { cmaElephant150549 } from './cma-elephant-150549';
import { cmaWingedAtlasHercules169251 } from './cma-winged-atlas-hercules-169251';
import { cmaAdoringAttendantFromABuddhistShrine123171 } from './cma-adoring-attendant-from-a-buddhist-shrine-123171';
import { cmaLoversMithuna151020 } from './cma-lovers-mithuna-151020';
import { cmaMiniatureVotiveStupa150702 } from './cma-miniature-votive-stupa-150702';
import { cmaNagaSerpentDivinity123438 } from './cma-naga-serpent-divinity-123438';
import { cmaKubjikanavatman151960 } from './cma-kubjikanavatman-151960';
import { cmaPersonificationOfTheDiscus124396 } from './cma-personification-of-the-discus-124396';
import { cmaAttendantBearingAFlyWhiskChauri141933 } from './cma-attendant-bearing-a-fly-whisk-chauri-141933';
import { cmaManjuvaraWithConsortYabYum153740 } from './cma-manjuvara-with-consort-yab-yum-153740';
import { cmaRingstone149103 } from './cma-ringstone-149103';
import { cmaLion130134 } from './cma-lion-130134';
import { cmaMaleAtlanteanFigure144839 } from './cma-male-atlantean-figure-144839';
import { cmaShri138691 } from './cma-shri-138691';
import { cmaHevajraAndConsort144283 } from './cma-hevajra-and-consort-144283';
import { cmaPlaqueWithAMaleHead154769 } from './cma-plaque-with-a-male-head-154769';
import { cmaDoubleFacedCrossbarFromARailingFem150995 } from './cma-double-faced-crossbar-from-a-railing-fem-150995';
import { cmaHeraldicLion150722 } from './cma-heraldic-lion-150722';
import { cmaYamaAsDharmaTheJudgeOfTheDeceased150706 } from './cma-yama-as-dharma-the-judge-of-the-deceased-150706';
import { cmaDoubleFacedCrossbarFromARailingMal150994 } from './cma-double-faced-crossbar-from-a-railing-mal-150994';
import { cmaRavanaShakingMountKailasa145968 } from './cma-ravana-shaking-mount-kailasa-145968';
import { cmaMonolithicPillar117476 } from './cma-monolithic-pillar-117476';
import { cmaTheGreatMiracleAtShravasti148043 } from './cma-the-great-miracle-at-shravasti-148043';
import { cmaTriad126240 } from './cma-triad-126240';
import { cmaBacchanalianRelief169256 } from './cma-bacchanalian-relief-169256';
import { cmaLoversMithuna137221 } from './cma-lovers-mithuna-137221';
import { cmaStandingFemaleFigure145377 } from './cma-standing-female-figure-145377';
import { cmaLidWithCombatBetweenAManAndALion146717 } from './cma-lid-with-combat-between-a-man-and-a-lion-146717';
import { cmaHeadOfARishi146141 } from './cma-head-of-a-rishi-146141';
import { cmaSectionFromAPortableShrine147578 } from './cma-section-from-a-portable-shrine-147578';
import { cmaRakshasa143167 } from './cma-rakshasa-143167';
import { cmaPortableBuddhistTemple145961 } from './cma-portable-buddhist-temple-145961';
import { cmaShalabhanjikaWomanAndTree147978 } from './cma-shalabhanjika-woman-and-tree-147978';
import { cmaHeadOfLokeshvara133046 } from './cma-head-of-lokeshvara-133046';
import { cmaMaleFigurePossiblyIndra150709 } from './cma-male-figure-possibly-indra-150709';
import { cmaFemaleTorso169266 } from './cma-female-torso-169266';
import { cmaLion145088 } from './cma-lion-145088';
import { cmaMiniatureFemaleHead157109 } from './cma-miniature-female-head-157109';
import { cmaSteleWithShadakshariLokeshvara154818 } from './cma-stele-with-shadakshari-lokeshvara-154818';
import { cmaHevajra169261 } from './cma-hevajra-169261';
import { cmaFemaleAttendants146956 } from './cma-female-attendants-146956';
import { cmaReliquaryBox148828 } from './cma-reliquary-box-148828';
import { cmaPiggyBank149924 } from './cma-piggy-bank-149924';
import { cmaPortraitOfPhagmoDrupaDorjeGyalpo11157009 } from './cma-portrait-of-phagmo-drupa-dorje-gyalpo-11-157009';
import { cmaPalanquinHook150688 } from './cma-palanquin-hook-150688';
import { cmaPairOfDeityEarringsWithVishnuOnGa94681 } from './cma-pair-of-deity-earrings-with-vishnu-on-ga-94681';
import { cmaHookahBowl144663 } from './cma-hookah-bowl-144663';
import { cmaRhyton154258 } from './cma-rhyton-154258';
import { cmaHookahBase144662 } from './cma-hookah-base-144662';
import { cmaRoyalFemaleFigure151003 } from './cma-royal-female-figure-151003';
import { cmaSilverVessels154255 } from './cma-silver-vessels-154255';
import { cmaBeaker154257 } from './cma-beaker-154257';
import { cmaEarringWithVishnuRidingGaruda94777 } from './cma-earring-with-vishnu-riding-garuda-94777';
import { cmaForeheadPendantWithSunGodSuryaInA94680 } from './cma-forehead-pendant-with-sun-god-surya-in-a-94680';
import { cmaVase154256 } from './cma-vase-154256';
import { cmaPendantWithFourArmedGreenVishnuOn94773 } from './cma-pendant-with-four-armed-green-vishnu-on-94773';
import { cmaPlateWithASceneOfRevelry147049 } from './cma-plate-with-a-scene-of-revelry-147049';
import { cmaPairOfEarringsWithVishnuRidingGaru94775 } from './cma-pair-of-earrings-with-vishnu-riding-garu-94775';
import { cmaEarringWithVishnuRidingGaruda94776 } from './cma-earring-with-vishnu-riding-garuda-94776';
import { cmaEarringWithFourArmedVishnuRidingGa94782 } from './cma-earring-with-four-armed-vishnu-riding-ga-94782';
import { cmaJarWithFourIbex161747 } from './cma-jar-with-four-ibex-161747';
import { cmaPairOfEarringsWithFourArmedVishnu94780 } from './cma-pair-of-earrings-with-four-armed-vishnu-94780';
import { cmaRitualAxe149446 } from './cma-ritual-axe-149446';
import { cmaLocket136320 } from './cma-locket-136320';
import { cmaEarringWithFourArmedVishnuRidingGa94781 } from './cma-earring-with-four-armed-vishnu-riding-ga-94781';
import { cmaRoyalFemaleDonor149444 } from './cma-royal-female-donor-149444';
import { cmaKneelingMaleFigure149430 } from './cma-kneeling-male-figure-149430';
import { cmaPlateWithNandiInCenter154775 } from './cma-plate-with-nandi-in-center-154775';
import { cmaMaryAndJosephTravelToBethlehemFoli163665 } from './cma-mary-and-joseph-travel-to-bethlehem-foli-163665';
import { cmaRitualFlayingKnife149448 } from './cma-ritual-flaying-knife-149448';
import { cmaPairOfNagaFinials153607 } from './cma-pair-of-naga-finials-153607';
import { cmaMirrorOfHolinessMiratAlQudsOfFath163646 } from './cma-mirror-of-holiness-mirat-al-quds-of-fath-163646';
import { cmaPendant142837 } from './cma-pendant-142837';
import { cmaTheAdorationOfTheMagiFromAMirror163669 } from './cma-the-adoration-of-the-magi-from-a-mirror-163669';
import { cmaPendantWithShri130373 } from './cma-pendant-with-shri-130373';
import { cmaTheFlagellationFolio182RectoFromA163662 } from './cma-the-flagellation-folio-182-recto-from-a-163662';
import { cmaPendantWithChain142836 } from './cma-pendant-with-chain-142836';
import { cmaShamvaraAndADakini152856 } from './cma-shamvara-and-a-dakini-152856';
import { cmaSitar98646 } from './cma-sitar-98646';
import { cmaVajrasattva125562 } from './cma-vajrasattva-125562';
import { cmaPendants96519 } from './cma-pendants-96519';
import { cmaADakini152858 } from './cma-a-dakini-152858';
import { cmaBidriBasin387677 } from './cma-bidri-basin-387677';
import { cmaBidriHookahBowlWithRoses387679 } from './cma-bidri-hookah-bowl-with-roses-387679';
import { cmaShamvara152857 } from './cma-shamvara-152857';
import { cmaReliquaryBox148829 } from './cma-reliquary-box-148829';
import { cmaSimeonKneelsInFrontOfMaryAndJesus163670 } from './cma-simeon-kneels-in-front-of-mary-and-jesus-163670';
import { cmaNecklaceBeadAndPairOfPendantsInTh147565 } from './cma-necklace-bead-and-pair-of-pendants-in-th-147565';
import { cmaBracelet142839 } from './cma-bracelet-142839';
import { cmaReliquaryBoxLid148830 } from './cma-reliquary-box-lid-148830';
import { cmaPendantWithMatsyaFishIncarnationOf95449 } from './cma-pendant-with-matsya-fish-incarnation-of-95449';
import { cmaAngelsBringFoodToJesusInTheWilder163653 } from './cma-angels-bring-food-to-jesus-in-the-wilder-163653';
import { cmaTheAnnunciationFolio15RectoFromAM163658 } from './cma-the-annunciation-folio-15-recto-from-a-m-163658';
import { cmaNagaFinial153608 } from './cma-naga-finial-153608';
import { cmaJesusBeingAwakenedDuringATempestOn163657 } from './cma-jesus-being-awakened-during-a-tempest-on-163657';
import { cmaFootedPlatter148832 } from './cma-footed-platter-148832';
import { cmaNagaFinial153609 } from './cma-naga-finial-153609';
import { cmaMaryMagdalenePresentsOintmentToJesu163648 } from './cma-mary-magdalene-presents-ointment-to-jesu-163648';
import { cmaTheMagiFollowTheStarFolio34Recto163667 } from './cma-the-magi-follow-the-star-folio-34-recto-163667';
import { cmaSalomeReceivingJohnTheBaptistsHead163649 } from './cma-salome-receiving-john-the-baptists-head-163649';
import { cmaJesusWritesOnTheGroundFolio130Ver163659 } from './cma-jesus-writes-on-the-ground-folio-130-ver-163659';
import { cmaBidriPandanWithChevrons387678 } from './cma-bidri-pandan-with-chevrons-387678';
import { cmaBidriPandanWithChevrons399504 } from './cma-bidri-pandan-with-chevrons-399504';
import { cmaLidForABidriPandanWithChevrons399505 } from './cma-lid-for-a-bidri-pandan-with-chevrons-399505';
import { cmaFemaleAttendantBearingFlyWhiskChaur146958 } from './cma-female-attendant-bearing-fly-whisk-chaur-146958';
import { cmaJesusBeingPortrayedByKingAbgarsPai163660 } from './cma-jesus-being-portrayed-by-king-abgars-pai-163660';
import { cmaIncenseBurner151295 } from './cma-incense-burner-151295';
import { cmaRing124065 } from './cma-ring-124065';
import { cmaCarvedBrackets146874 } from './cma-carved-brackets-146874';
import { cmaPowderHorn154774 } from './cma-powder-horn-154774';
import { cmaTheFloweringOfJosephsRodFolio11Ve163647 } from './cma-the-flowering-of-josephs-rod-folio-11-ve-163647';
import { cmaThePlaceOfJesussBirthFolio25Recto163666 } from './cma-the-place-of-jesuss-birth-folio-25-recto-163666';
import { cmaJohnTheBaptistRecognizesChristByTh163671 } from './cma-john-the-baptist-recognizes-christ-by-th-163671';
import { cmaTheAdorationOfTheShepherdsFromAMi163668 } from './cma-the-adoration-of-the-shepherds-from-a-mi-163668';
import { cmaRitualWeapons149445 } from './cma-ritual-weapons-149445';
import { cmaMaryAscendsTheStairsToTheTempleFr163663 } from './cma-mary-ascends-the-stairs-to-the-temple-fr-163663';
import { cmaPomander154772 } from './cma-pomander-154772';
import { cmaPendantWithTwoArmedBlueDeityOnAL94774 } from './cma-pendant-with-two-armed-blue-deity-on-a-l-94774';
import { cmaARavenBringsFoodToElijahFolio72R163656 } from './cma-a-raven-brings-food-to-elijah-folio-72-r-163656';
import { cmaTheEntryIntoJerusalemFolio156Recto163661 } from './cma-the-entry-into-jerusalem-folio-156-recto-163661';
import { cmaPalanquinRing169272 } from './cma-palanquin-ring-169272';
import { cmaThighboneTrumpet98697 } from './cma-thighbone-trumpet-98697';
import { cmaTheMarriageAtCanaFolio58VersoFrom163651 } from './cma-the-marriage-at-cana-folio-58-verso-from-163651';
import { cmaPortraitOfPhagmoDrupaDorjeGyalpo11157010 } from './cma-portrait-of-phagmo-drupa-dorje-gyalpo-11-157010';
import { cmaInkstand96718 } from './cma-inkstand-96718';
import { cmaMosesPrayingToEndTheSerpentsAttack163652 } from './cma-moses-praying-to-end-the-serpents-attack-163652';
import { cmaJesusOnMountTaborNearNazarethWhere163650 } from './cma-jesus-on-mount-tabor-near-nazareth-where-163650';
import { cmaCalligraphy125581 } from './cma-calligraphy-125581';
import { cmaJesusRaisesJairussDaughterFromTheD163654 } from './cma-jesus-raises-jairuss-daughter-from-the-d-163654';
import { cmaJesusHealsTheNoblemansSonInCaperna163655 } from './cma-jesus-heals-the-noblemans-son-in-caperna-163655';
import { cmaRing124064 } from './cma-ring-124064';
import { cmaCarvedBracket146875 } from './cma-carved-bracket-146875';
import { cmaBuddhistManuscript126835 } from './cma-buddhist-manuscript-126835';
import { cmaRing124063 } from './cma-ring-124063';
import { cmaCarvedBracket146876 } from './cma-carved-bracket-146876';
import { cmaKammavachaBuddhistOrdinationText124171 } from './cma-kammavacha-buddhist-ordination-text-124171';
import { cmaNecklaceBeadInTheFormOfAFish147530 } from './cma-necklace-bead-in-the-form-of-a-fish-147530';
import { cmaJatayuHindersRavanasChariotTryingTo162445 } from './cma-jatayu-hinders-ravanas-chariot-trying-to-162445';
import { cmaIlluminatedOpeningPageFolio1VersoA163664 } from './cma-illuminated-opening-page-folio-1-verso-a-163664';
import { cmaEarring153775 } from './cma-earring-153775';
import { cmaCalligraphicExercisesAndVersesOfHaf170879 } from './cma-calligraphic-exercises-and-verses-of-haf-170879';
import { cmaNecklaceBeadInTheFormOfAFish147532 } from './cma-necklace-bead-in-the-form-of-a-fish-147532';
import { cmaNecklaceBeadInTheFormOfAFish147534 } from './cma-necklace-bead-in-the-form-of-a-fish-147534';
import { cmaNecklaceBeadInTheFormOfAFish147531 } from './cma-necklace-bead-in-the-form-of-a-fish-147531';
import { cmaNecklaceBeadInTheFormOfAFish147535 } from './cma-necklace-bead-in-the-form-of-a-fish-147535';
import { cmaRamaAndSitaInTheRoyalPalaceRecto162515 } from './cma-rama-and-sita-in-the-royal-palace-recto-162515';
import { cmaNecklaceBeadInTheFormOfAFish147533 } from './cma-necklace-bead-in-the-form-of-a-fish-147533';
import { cmaNecklaceBeadInTheFormOfAFish147537 } from './cma-necklace-bead-in-the-form-of-a-fish-147537';
import { cmaNecklaceBeadInTheFormOfAFish147538 } from './cma-necklace-bead-in-the-form-of-a-fish-147538';
import { cmaKatarStabbingDagger152234 } from './cma-katar-stabbing-dagger-152234';
import { cmaDagger112293 } from './cma-dagger-112293';
import { cmaScabbard112288 } from './cma-scabbard-112288';
import { cmaSealWithUnicornAndInscription147417 } from './cma-seal-with-unicorn-and-inscription-147417';
import { cmaDaggerRedVelvetCase112294 } from './cma-dagger-red-velvet-case-112294';
import { cmaTulwarSwordCase112282 } from './cma-tulwar-sword-case-112282';
import { cmaSwordWithScabbard112286 } from './cma-sword-with-scabbard-112286';
import { cmaSword112287 } from './cma-sword-112287';
import { cmaTulwarSword112280 } from './cma-tulwar-sword-112280';
import { cmaTulwarSword112281 } from './cma-tulwar-sword-112281';
import { cmaHelmet100101 } from './cma-helmet-100101';
import { cmaSilapaSword112284 } from './cma-silapa-sword-112284';
import { cmaKatarStabbingDaggerSheath152235 } from './cma-katar-stabbing-dagger-sheath-152235';
import { cmaSword95218 } from './cma-sword-95218';
import { cmaSwordHilt152323 } from './cma-sword-hilt-152323';
import { cmaTulwarSword99989 } from './cma-tulwar-sword-99989';
import { cmaDagger112290 } from './cma-dagger-112290';
import { cmaKhatar99958 } from './cma-khatar-99958';
import { cmaSheathForADagger154785 } from './cma-sheath-for-a-dagger-154785';
import { cmaAmuletInTheShapeOfAPipalLeafFicu96665 } from './cma-amulet-in-the-shape-of-a-pipal-leaf-ficu-96665';
import { cmaSilapaSwordGreenLeatherCase112285 } from './cma-silapa-sword-green-leather-case-112285';
import { cmaDaggerWithBrownLeatherCase112289 } from './cma-dagger-with-brown-leather-case-112289';
import { cmaScabbardForSword97082 } from './cma-scabbard-for-sword-97082';
import { cmaDagger100045 } from './cma-dagger-100045';
import { cmaDaggerBrownLeatherCase112291 } from './cma-dagger-brown-leather-case-112291';
import { cmaSilapaSwordWithGreenLeatherCase112283 } from './cma-silapa-sword-with-green-leather-case-112283';
import { cmaKnife112298 } from './cma-knife-112298';
import { cmaSword97081 } from './cma-sword-97081';
import { cmaSwordKris99028 } from './cma-sword-kris-99028';
import { cmaGun97113 } from './cma-gun-97113';
import { cmaSwordKris99017 } from './cma-sword-kris-99017';
import { cmaSwordKris99045 } from './cma-sword-kris-99045';
import { cmaBattleAxe97072 } from './cma-battle-axe-97072';
import { cmaSwordKris99019 } from './cma-sword-kris-99019';
import { cmaKnife97069 } from './cma-knife-97069';
import { cmaSword95224 } from './cma-sword-95224';
import { cmaSwordAndScabbardScabbard132829 } from './cma-sword-and-scabbard-scabbard-132829';
import { cmaSwordKris99020 } from './cma-sword-kris-99020';
import { cmaSword99050 } from './cma-sword-99050';
import { cmaSwordKris99031 } from './cma-sword-kris-99031';
import { cmaKnife97070 } from './cma-knife-97070';
import { cmaDagger100046 } from './cma-dagger-100046';
import { cmaSwordAndScabbardScabbard132832 } from './cma-sword-and-scabbard-scabbard-132832';
import { cmaSwordKris99046 } from './cma-sword-kris-99046';
import { cmaSwordAndScabbard132830 } from './cma-sword-and-scabbard-132830';
import { cmaKnife97087 } from './cma-knife-97087';
import { cmaKris114591 } from './cma-kris-114591';
import { cmaDaggerKatar97061 } from './cma-dagger-katar-97061';
import { cmaDagger95221 } from './cma-dagger-95221';
import { cmaScabbardForKnifeKukri97058 } from './cma-scabbard-for-knife-kukri-97058';
import { cmaScabbardForDagger97079 } from './cma-scabbard-for-dagger-97079';
import { cmaScabbard97089 } from './cma-scabbard-97089';
import { cmaKnifeOrAxeKharga95226 } from './cma-knife-or-axe-kharga-95226';
import { cmaSwordKris99022 } from './cma-sword-kris-99022';
import { cmaKnifeKris121257 } from './cma-knife-kris-121257';
import { cmaSwordBuckle373842 } from './cma-sword-buckle-373842';
import { cmaScabbardForSword95219 } from './cma-scabbard-for-sword-95219';
import { cmaScabbardForDagger100047 } from './cma-scabbard-for-dagger-100047';
import { cmaSwordKris99018 } from './cma-sword-kris-99018';
import { cmaWoodScabbardForAKnifeKris121256 } from './cma-wood-scabbard-for-a-knife-kris-121256';
import { cmaPunchMarkedCoin143313 } from './cma-punch-marked-coin-143313';
import { cmaPunchMarkedCoin143312 } from './cma-punch-marked-coin-143312';
import { cmaVimaKadphisesReverse160960 } from './cma-vima-kadphises-reverse-160960';
import { cmaCoinOfKushanKingVasudevaIReverse160963 } from './cma-coin-of-kushan-king-vasudeva-i-reverse-160963';
import { cmaVimaKadphisesObverse160959 } from './cma-vima-kadphises-obverse-160959';
import { cmaCoinWithFigureOfAnArcherReverse149136 } from './cma-coin-with-figure-of-an-archer-reverse-149136';
import { cmaCoinOfKushanKingVasudevaIObverse160962 } from './cma-coin-of-kushan-king-vasudeva-i-obverse-160962';
import { cmaPunchMarkedCoin143308 } from './cma-punch-marked-coin-143308';
import { cmaPunchMarkedCoin143310 } from './cma-punch-marked-coin-143310';
import { cmaCoinHavishkaObverse160965 } from './cma-coin-havishka-obverse-160965';
import { cmaCoinHavishkaReverse160966 } from './cma-coin-havishka-reverse-160966';
import { cmaCoinWithFigureOfAnArcherObverse149135 } from './cma-coin-with-figure-of-an-archer-obverse-149135';
import { cmaCoinOfDemetriosIReverse161221 } from './cma-coin-of-demetrios-i-reverse-161221';
import { cmaCoinOfEukratidesI161222 } from './cma-coin-of-eukratides-i-161222';
import { cmaCoinOfEukratidesI169351 } from './cma-coin-of-eukratides-i-169351';
import { cmaPunchMarkedCoin143309 } from './cma-punch-marked-coin-143309';
import { cmaCoinOfDemetriosIObverse161220 } from './cma-coin-of-demetrios-i-obverse-161220';
import { cmaCoinOfEukratidesI161223 } from './cma-coin-of-eukratides-i-161223';
import { cmaGoldenDinar169355 } from './cma-golden-dinar-169355';
import { cmaCoinOfEukratidesI169350 } from './cma-coin-of-eukratides-i-169350';
import { cmaCoinOfEukratidesI169352 } from './cma-coin-of-eukratides-i-169352';
import { cmaGoldenDinar169354 } from './cma-golden-dinar-169354';
import { cmaTetradrachmHeadOfAthenaObverseOwlR101482 } from './cma-tetradrachm-head-of-athena-obverse-owl-r-101482';
import { cmaIndoGreekCoin169347 } from './cma-indo-greek-coin-169347';
import { cmaNecklace96440 } from './cma-necklace-96440';
import { cmaIndoGreekCoin169348 } from './cma-indo-greek-coin-169348';
import { cmaTetradrachmHeadOfAthenaObverseOwlR120477 } from './cma-tetradrachm-head-of-athena-obverse-owl-r-120477';
import { cmaSolidusOfJustinianIReverse144187 } from './cma-solidus-of-justinian-i-reverse-144187';
import { cmaTetradrachmOwlCrescentMoonOliveBran101484 } from './cma-tetradrachm-owl-crescent-moon-olive-bran-101484';
import { cmaSolidusOfJustinianI144185 } from './cma-solidus-of-justinian-i-144185';
import { cmaTetradrachmMacedonianShieldWithHead97361 } from './cma-tetradrachm-macedonian-shield-with-head-97361';
import { cmaWitmenTremissisBustAndTridentObvers144366 } from './cma-witmen-tremissis-bust-and-trident-obvers-144366';
import { cmaSolidusOfMauriceTiberius163300 } from './cma-solidus-of-maurice-tiberius-163300';
import { cmaTetradrachmHeadOfAthenaObverseOwlR97405 } from './cma-tetradrachm-head-of-athena-obverse-owl-r-97405';
import { cmaIndoGreekCoin169349 } from './cma-indo-greek-coin-169349';
import { cmaTetradrachmOwlReverse97407 } from './cma-tetradrachm-owl-reverse-97407';
import { cmaSolidusOfConstansIiAndConstantineI169989 } from './cma-solidus-of-constans-ii-and-constantine-i-169989';
import { cmaTetradrachmHeadOfYoungHeraklesObver97371 } from './cma-tetradrachm-head-of-young-herakles-obver-97371';
import { cmaSolidusOfJustinianIObverse144186 } from './cma-solidus-of-justinian-i-obverse-144186';
import { cmaStaterPlainObverseHorseReverse144323 } from './cma-stater-plain-obverse-horse-reverse-144323';
import { cmaSolidusWithBustsOfConstansIiAndCo169988 } from './cma-solidus-with-busts-of-constans-ii-and-co-169988';
import { cmaTetradrachmCoinOfHerognetosMagistrat169343 } from './cma-tetradrachm-coin-of-herognetos-magistrat-169343';
import { cmaProvincialCoinHeadOfAntoninusPiusL163556 } from './cma-provincial-coin-head-of-antoninus-pius-l-163556';
import { cmaProvincialCoinHeadOfAntoninusPiusO163555 } from './cma-provincial-coin-head-of-antoninus-pius-o-163555';
import { cmaSolidusOfConstansIiAndConstantineI169987 } from './cma-solidus-of-constans-ii-and-constantine-i-169987';
import { cmaSolidusOfTheodosiusIiAndValentinian144182 } from './cma-solidus-of-theodosius-ii-and-valentinian-144182';
import { cmaTetradrachmOwlStandingRCrescentMoon120479 } from './cma-tetradrachm-owl-standing-r-crescent-moon-120479';
import { cmaMoutonDorOfKingJeanLeBonOfFrance140453 } from './cma-mouton-dor-of-king-jean-le-bon-of-france-140453';
import { cmaTetradrachmHeadOfAlexanderObverseAt98320 } from './cma-tetradrachm-head-of-alexander-obverse-at-98320';
import { cmaLeopardDorOfEdwardIiiOfEngland140456 } from './cma-leopard-dor-of-edward-iii-of-england-140456';
import { cmaTremissisOfHonorius144173 } from './cma-tremissis-of-honorius-144173';
import { cmaSolidusOfTheodosiusITheGreat144176 } from './cma-solidus-of-theodosius-i-the-great-144176';
import { cmaTetradrachmCoinOfErognetosMagistrate169345 } from './cma-tetradrachm-coin-of-erognetos-magistrate-169345';
import { cmaSolidusWithHeracliusAndHisSonHerac144188 } from './cma-solidus-with-heraclius-and-his-son-herac-144188';
import { cmaTasciovanusStaterCrossedWreathsObver144339 } from './cma-tasciovanus-stater-crossed-wreaths-obver-144339';
import { cmaHecteHeadOfOmphaleObverseIncuseSqu97346 } from './cma-hecte-head-of-omphale-obverse-incuse-squ-97346';
import { cmaAureusBustOfClaudiusIObverseTriump144363 } from './cma-aureus-bust-of-claudius-i-obverse-triump-144363';
import { cmaHemidrachmChimaeraObverseDoveReverse98304 } from './cma-hemidrachm-chimaera-obverse-dove-reverse-98304';
import { cmaSolidusOfTheodosiusITheGreatObvers144177 } from './cma-solidus-of-theodosius-i-the-great-obvers-144177';
import { cmaTremissisOfHonoriusObverse144174 } from './cma-tremissis-of-honorius-obverse-144174';
import { cmaSolidusOfTheodosiusITheGreatRevers144178 } from './cma-solidus-of-theodosius-i-the-great-revers-144178';
import { cmaTetradrachmHeadOfAntiochosViiiObver97349 } from './cma-tetradrachm-head-of-antiochos-viii-obver-97349';
import { cmaDrachmFemaleHeadObverseEagleReverse97343 } from './cma-drachm-female-head-obverse-eagle-reverse-97343';
import { cmaTetradrachmCoinOfHerognetosMagistrat169344 } from './cma-tetradrachm-coin-of-herognetos-magistrat-169344';
import { cmaSolidusOfTheodosiusIiAndValentinian144184 } from './cma-solidus-of-theodosius-ii-and-valentinian-144184';
import { cmaSolidusOfTheodosiusIiAndValentinian144183 } from './cma-solidus-of-theodosius-ii-and-valentinian-144183';
import { cmaSolidusWithHeracliusAndHisSonHerac144189 } from './cma-solidus-with-heraclius-and-his-son-herac-144189';
import { cmaTetradrachmHeadOfYoungHeraklesObver120471 } from './cma-tetradrachm-head-of-young-herakles-obver-120471';
import { cmaMoutonDorOfKingJeanLeBonOfFrance140455 } from './cma-mouton-dor-of-king-jean-le-bon-of-france-140455';
import { cmaSolidusOfArkadiosReverse144181 } from './cma-solidus-of-arkadios-reverse-144181';
import { cmaMoutonDorOfKingJeanLeBonOfFrance140454 } from './cma-mouton-dor-of-king-jean-le-bon-of-france-140454';
import { cmaAddedomarosStaterCrescentsObverseHor144329 } from './cma-addedomaros-stater-crescents-obverse-hor-144329';
import { cmaSolidusOfArkadios144179 } from './cma-solidus-of-arkadios-144179';
import { cmaSolidusWithHeracliusAndHisSonHerac144190 } from './cma-solidus-with-heraclius-and-his-son-herac-144190';
import { cmaLeopardDorOfEdwardIiiOfEnglandObv140457 } from './cma-leopard-dor-of-edward-iii-of-england-obv-140457';
import { cmaHemidrachmBullsHeadObverseHeadOfAr97377 } from './cma-hemidrachm-bulls-head-obverse-head-of-ar-97377';
import { cmaSolidusOfArkadiosObverse144180 } from './cma-solidus-of-arkadios-obverse-144180';
import { cmaTetradrachmHeadOfAlexanderIiiTheGr97411 } from './cma-tetradrachm-head-of-alexander-iii-the-gr-97411';
import { cmaTetradrachmHeadOfAntiochosVObverse97352 } from './cma-tetradrachm-head-of-antiochos-v-obverse-97352';
import { cmaTremissisOfHonoriusReverse144175 } from './cma-tremissis-of-honorius-reverse-144175';
import { cmaSolidusOfMauriceTiberius163301 } from './cma-solidus-of-maurice-tiberius-163301';
import { cmaRingMoney144316 } from './cma-ring-money-144316';
import { cmaLeopardDorOfEdwardIiiOfEnglandRev140458 } from './cma-leopard-dor-of-edward-iii-of-england-rev-140458';
import { cmaTasciovanusStaterWreathObverseHorse144342 } from './cma-tasciovanus-stater-wreath-obverse-horse-144342';
import { cmaStaterHeadOfBeardedHeraklesObverse97399 } from './cma-stater-head-of-bearded-herakles-obverse-97399';
import { cmaStaterHeadObverseHorseWithVictoryR144317 } from './cma-stater-head-obverse-horse-with-victory-r-144317';
import { cmaSolidusOfMauriceTiberius163302 } from './cma-solidus-of-maurice-tiberius-163302';
import { cmaHemidrachmGorgoneionObverseBullRever98342 } from './cma-hemidrachm-gorgoneion-obverse-bull-rever-98342';
import { cmaStaterPegasosObverseHeadOfAthenaRe97380 } from './cma-stater-pegasos-obverse-head-of-athena-re-97380';
import { cmaHalfTremissisOfJustinianI163296 } from './cma-half-tremissis-of-justinian-i-163296';
import { cmaTwoPoundPieceGeorgeIvObverseShield144546 } from './cma-two-pound-piece-george-iv-obverse-shield-144546';
import { cmaUniteCharlesIObverseCrownedShieldR144473 } from './cma-unite-charles-i-obverse-crowned-shield-r-144473';
import { cmaFiveGuineasGeorgeIiiObverseShieldO144531 } from './cma-five-guineas-george-iii-obverse-shield-o-144531';
import { cmaHalfcrownElizabethIObverseCrownedSh144438 } from './cma-halfcrown-elizabeth-i-obverse-crowned-sh-144438';
import { cmaSovereignOfTwentyShillingsEdwardVi144425 } from './cma-sovereign-of-twenty-shillings-edward-vi-144425';
import { cmaSovereignHenryViiiObverseCrownedShi144410 } from './cma-sovereign-henry-viii-obverse-crowned-shi-144410';
import { cmaNobleEdwardIiiStandingInShipWithS144370 } from './cma-noble-edward-iii-standing-in-ship-with-s-144370';
import { cmaUniteCharlesIObverseCrownedShieldR144476 } from './cma-unite-charles-i-obverse-crowned-shield-r-144476';
import { cmaSovereignHenryViiObverseShieldOfAr144397 } from './cma-sovereign-henry-vii-obverse-shield-of-ar-144397';
import { cmaNobleHenryViInShipWithShieldOfAr144385 } from './cma-noble-henry-vi-in-ship-with-shield-of-ar-144385';
import { cmaNobleHenryVInShipWithShieldOfArm144382 } from './cma-noble-henry-v-in-ship-with-shield-of-arm-144382';
import { cmaAngelStGeorgeSlayingTheDragonObver144391 } from './cma-angel-st-george-slaying-the-dragon-obver-144391';
import { cmaElectrotypeReplicaOfTetradrachmHead97358 } from './cma-electrotype-replica-of-tetradrachm-head-97358';
import { cmaElectrotypeReplicaOfTetradrachmOwlP97360 } from './cma-electrotype-replica-of-tetradrachm-owl-p-97360';
import { cmaSovereignJamesIObverseCrownedShield144456 } from './cma-sovereign-james-i-obverse-crowned-shield-144456';
import { cmaNobleEdwardIiiStandingInShipWithS144373 } from './cma-noble-edward-iii-standing-in-ship-with-s-144373';
import { cmaTwoPoundPieceGeorgeIvObverseStGeo144540 } from './cma-two-pound-piece-george-iv-obverse-st-geo-144540';
import { cmaFivePoundPieceEdwardViiObverseStG144562 } from './cma-five-pound-piece-edward-vii-obverse-st-g-144562';
import { cmaFiveGuineasGeorgeIiObverseShieldOf144518 } from './cma-five-guineas-george-ii-obverse-shield-of-144518';
import { cmaTwoGuineaPieceGeorgeIiiObverseShie144528 } from './cma-two-guinea-piece-george-iii-obverse-shie-144528';
import { cmaFivePoundPieceVictoriaObverseStGeo144559 } from './cma-five-pound-piece-victoria-obverse-st-geo-144559';
import { cmaBrazierWithCoinsMotif447804 } from './cma-brazier-with-coins-motif-447804';
import { cmaSovereignOfThirtyShillingsElizabeth144435 } from './cma-sovereign-of-thirty-shillings-elizabeth-144435';
import { cmaHalfcrownElizabethIObverseCrownedSh144444 } from './cma-halfcrown-elizabeth-i-obverse-crowned-sh-144444';
import { cmaRoseRyalJamesIObverseShieldOfArms144463 } from './cma-rose-ryal-james-i-obverse-shield-of-arms-144463';
import { cmaRyalEdwardIvInShipWithAShieldOf144388 } from './cma-ryal-edward-iv-in-ship-with-a-shield-of-144388';
import { cmaAngelAnAngelSlayingADragonObverse144432 } from './cma-angel-an-angel-slaying-a-dragon-obverse-144432';
import { cmaTwoGuineasJamesIiObverseFourShield144497 } from './cma-two-guineas-james-ii-obverse-four-shield-144497';
import { cmaCoins99223 } from './cma-coins-99223';
import { cmaTwoPoundPieceGeorgeVObverseStGeor144565 } from './cma-two-pound-piece-george-v-obverse-st-geor-144565';
import { cmaHalfPoundElizabethIObverseCrownedS144453 } from './cma-half-pound-elizabeth-i-obverse-crowned-s-144453';
import { cmaFivePoundPieceVictoriaObverseUnaRe144549 } from './cma-five-pound-piece-victoria-obverse-una-re-144549';
import { cmaTwoPoundPieceGeorgeIiiObverseStGe144537 } from './cma-two-pound-piece-george-iii-obverse-st-ge-144537';
import { cmaFiveGuineasWilliamIiiObverseFourSh144503 } from './cma-five-guineas-william-iii-obverse-four-sh-144503';
import { cmaSovereignMaryEnthronedObverseShield144428 } from './cma-sovereign-mary-enthroned-obverse-shield-144428';
import { cmaAngelStGeorgeSlayingTheDragonObver144394 } from './cma-angel-st-george-slaying-the-dragon-obver-144394';
import { cmaSovereignOfThirtyShillingsEdwardVi144422 } from './cma-sovereign-of-thirty-shillings-edward-vi-144422';
import { cmaNobleHenryIvStandingInShipWithShi144379 } from './cma-noble-henry-iv-standing-in-ship-with-shi-144379';
import { cmaCrownOfTheDoubleRoseCrownedDouble144407 } from './cma-crown-of-the-double-rose-crowned-double-144407';
import { cmaGuineaGeorgeIiiObverseShieldOfArms144524 } from './cma-guinea-george-iii-obverse-shield-of-arms-144524';
import { cmaHalfGuineaAnneObverseShieldsAndRos144512 } from './cma-half-guinea-anne-obverse-shields-and-ros-144512';
import { cmaGuineaAnneObverseShieldsAndRoseRev144509 } from './cma-guinea-anne-obverse-shields-and-rose-rev-144509';
import { cmaElectrotypeReplicaOfTetradrachmHead97359 } from './cma-electrotype-replica-of-tetradrachm-head-97359';
import { cmaHalfAngelAngelSlayingADragonObvers144404 } from './cma-half-angel-angel-slaying-a-dragon-obvers-144404';
import { cmaFiveGuineasAnneObverseShieldsAndRo144506 } from './cma-five-guineas-anne-obverse-shields-and-ro-144506';
import { cmaRyalElizabethIInShipObverseRoseOv144441 } from './cma-ryal-elizabeth-i-in-ship-obverse-rose-ov-144441';
import { cmaNobleRichardIiStandingOnShipWithS144376 } from './cma-noble-richard-ii-standing-on-ship-with-s-144376';
import { cmaSovereignHenryViiiEnthronedObverseR144401 } from './cma-sovereign-henry-viii-enthroned-obverse-r-144401';
import { cmaTripleUniteOrThreePoundPieceCharle144480 } from './cma-triple-unite-or-three-pound-piece-charle-144480';
import { cmaHalfSovereignEdwardViObverseCrowned144416 } from './cma-half-sovereign-edward-vi-obverse-crowned-144416';
import { cmaLaurelJamesIObverseShieldOfArmsRe144466 } from './cma-laurel-james-i-obverse-shield-of-arms-re-144466';
import { cmaBroadCharlesIiObverseShieldsReverse144489 } from './cma-broad-charles-ii-obverse-shields-reverse-144489';
import { cmaUniteCharlesIObverseCrownedShieldR144469 } from './cma-unite-charles-i-obverse-crowned-shield-r-144469';
import { cmaFourMonKaneiTshCoin99084 } from './cma-four-mon-kanei-tsh-coin-99084';
import { cmaTenpTshCoin99067 } from './cma-tenp-tsh-coin-99067';
import { cmaBroadOliverCromwellLordProtectorObv144486 } from './cma-broad-oliver-cromwell-lord-protector-obv-144486';
import { cmaFiveGuineasCharlesIiObverseFourShi144492 } from './cma-five-guineas-charles-ii-obverse-four-shi-144492';
import { cmaTripleUniteOrThreePoundPieceCharle144483 } from './cma-triple-unite-or-three-pound-piece-charle-144483';
import { cmaFourMonKaneiTshCoin99085 } from './cma-four-mon-kanei-tsh-coin-99085';
import { cmaTenpTshCoin99069 } from './cma-tenp-tsh-coin-99069';

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
  cmaMauryaShungaLibationCup,
  cmaDurgaDestroyingTheBuffaloDemon150996,
  cmaNatarajaShivaAsTheLordOfDance111811,
  cmaShiva120411,
  cmaOneFacedLingaEkamukhalinga147575,
  cmaElevenHeadedBodhisattvaOfCompassion148021,
  cmaKrishnaLiftingMountGovardhan147166,
  cmaStandingBuddha147010,
  cmaGanesha153619,
  cmaVishnu122253,
  cmaNatureDivinityYakshi143649,
  cmaBodhisattva141937,
  cmaUpperSteleWithHandForKrishnaLiftin454739,
  cmaEnthronedPlanetaryDeity114975,
  cmaScenesFromTheLifeOfBuddha135485,
  cmaVenerationOfTheBuddhaAsAFieryPill123468,
  cmaSeatedBuddha143465,
  cmaMotherGoddess144908,
  cmaDancingGanesha137128,
  cmaBodhisattvaOfWisdomManjushri140439,
  cmaVishnuRidingOnGaruda137023,
  cmaRailingPillarWithAYakshiFemaleNatu141661,
  cmaHeadOfMaleDeityPossiblyAiyanar144893,
  cmaDurgaAsTheSlayerOfTheBuffaloDemon159500,
  cmaGoddessVajravarahi140094,
  cmaLintelWithGaruda143463,
  cmaVishnu122254,
  cmaHeadOfAFollowerOfShiva170075,
  cmaHeadOfVishnu122181,
  cmaStandingBuddha123021,
  cmaNagaEnthronedBuddha139455,
  cmaMaleDeity157340,
  cmaVarahaBoarIncarnationOfVishnu169268,
  cmaSeatedBuddha153369,
  cmaFastingBuddha153385,
  cmaGoddessUma151000,
  cmaHeadOfABodhisattva151938,
  cmaHeadOfBuddha139731,
  cmaBodhisattva169273,
  cmaFertilityGoddess149128,
  cmaAltarpieceWithBuddhaEnthroned121665,
  cmaTrikalaBhairava135183,
  cmaTemptationOfBuddhaByTheEvilForces145980,
  cmaSeatedMaitreyaBuddha154788,
  cmaHeadOfVishnu144793,
  cmaShakyamuniBuddhaCallingTheEarthToW141682,
  cmaBoxDecoratedWithShivaVishnuKrishna154776,
  cmaBoxDecoratedWithShivaVishnuKrishna437545,
  cmaCoverForABoxDecoratedWithShivaVis437547,
  cmaGoddessHoldingALotus151924,
  cmaBuddhaWithHandsInGestureOfTeaching135328,
  cmaSuryaTheSunGod142033,
  cmaVishnuWithShriAndBhu138690,
  cmaHeadOfBodhisattvaAvalokiteshvara152487,
  cmaVishnu148834,
  cmaStandingShivaMahadeva154793,
  cmaWalkingBuddha137222,
  cmaFemaleTreeDeityWithAttendant143264,
  cmaPortableIconOfShakyamuniBuddhaInTh141481,
  cmaBuddha147403,
  cmaStandingBuddha153628,
  cmaVishnu149965,
  cmaMaleFertilityDivinityPossiblyShiva153386,
  cmaBodhisattvaOfWisdomManjushri134346,
  cmaMaitreya144836,
  cmaHeadOfShiva119692,
  cmaBodhisattvaOfCompassionAsLokeshvara155851,
  cmaHeadOfADeityOrADeifiedKing105872,
  cmaCrownedBuddhaSeatedOnALionThrone154791,
  cmaBodhisattvaVajraraksha154787,
  cmaSeatedBuddha121109,
  cmaBodhisattvaOfCompassionAvalokiteshvar149361,
  cmaHeadOfJina138615,
  cmaApsaraBracket155586,
  cmaBodhisattvaAvalokitesvara154254,
  cmaBustOfBuddha144780,
  cmaHanuman155866,
  cmaHeadOfBuddha121212,
  cmaFlyingHanuman153739,
  cmaPadmapaniLokeshvaraSeatedOnTheRock146000,
  cmaStandingFemaleDeity145922,
  cmaFriezeWithApsaras117826,
  cmaPlaqueWithVishnu147577,
  cmaStandingBuddha147414,
  cmaBodhisattvaAvalokiteshvara149036,
  cmaShivaAsSlayerOfTheElephantDemon137220,
  cmaHeadOfAYaksha138613,
  cmaVasudharaGoddessOfAbundance125561,
  cmaBodhisattvaMaitreyaTheFutureBuddha150999,
  cmaBirthOfTheBuddha135837,
  cmaShivaAsLordOfMusic145695,
  cmaBuddhasPreviousLifeAsAWoodpeckerJa145182,
  cmaNagaEnthronedBuddha139456,
  cmaAvalokitesvaraPadmapaniBodhisattvaOf148773,
  cmaNagaEnthronedBuddhaSerpentHoods139458,
  cmaNagaEnthronedBuddhaBase139457,
  cmaDevi151294,
  cmaBodhisattvaPadmapani148827,
  cmaNatureDivinityYakshiWithDwarfHermap146848,
  cmaRishabhaTheFirstJina144579,
  cmaEnthronedBuddhaPreaching154926,
  cmaMaitreyaTheBuddhaOfTheFuture147047,
  cmaMiniatureHeadOfABodhisattva154768,
  cmaBaseForASeatedBuddhaWithFiguresOf148699,
  cmaSeatedBuddha147481,
  cmaFinialWithTheTemptationOfBuddhaBy141482,
  cmaFinialWithTheTemptationOfBuddhaBy141483,
  cmaVidyadeviGoddessOfLearning146703,
  cmaBodhisattvaVajrapani151004,
  cmaVasudevaVishnuNarayanaAsShridharaOn113024,
  cmaStandingVishnu139822,
  cmaFeetForStandingBuddha197315147999,
  cmaGoddess155589,
  cmaFigureOfAMaitreyaOnATieredPedesta146799,
  cmaVishnuAndShriSupportedByGaruda135716,
  cmaShivaAndParvati141270,
  cmaSeatedBuddha161215,
  cmaSeatedMaitreya139459,
  cmaPadmapani131334,
  cmaStandingDevi154795,
  cmaVishnu147957,
  cmaParshva136944,
  cmaSectionOfMonolithicRailingWithBathe123467,
  cmaDancersAndMusiciansFromPhrygia111807,
  cmaBracketWithTwoMusicians149913,
  cmaSiddharthaAtTheBodhiTree159840,
  cmaBacchanalianScene111808,
  cmaForeignersAndNonBuddhistsDrinkDance111806,
  cmaProcessionOfNonBuddhists111809,
  cmaMonkBearingOfferings143468,
  cmaBhu138693,
  cmaLaymanBearingOfferings143467,
  cmaPortableShrine143777,
  cmaMiniatureStoneReliquaryOrToiletteCa149138,
  cmaColossalHeadOfADeva169267,
  cmaArchitecturalSculptureFaceOfTimeKal148070,
  cmaMiniatureStoneReliquaryOrToiletteCa149140,
  cmaPedimentWithTheFaceOfGloryKirtiMu153837,
  cmaMiniatureStoneReliquaryOrToiletteCa149139,
  cmaWorshippersAtASacredTree145209,
  cmaNineCelestialBodiesNavagraha146165,
  cmaDoorGuardianMahakala149980,
  cmaElephant150549,
  cmaWingedAtlasHercules169251,
  cmaAdoringAttendantFromABuddhistShrine123171,
  cmaLoversMithuna151020,
  cmaMiniatureVotiveStupa150702,
  cmaNagaSerpentDivinity123438,
  cmaKubjikanavatman151960,
  cmaPersonificationOfTheDiscus124396,
  cmaAttendantBearingAFlyWhiskChauri141933,
  cmaManjuvaraWithConsortYabYum153740,
  cmaRingstone149103,
  cmaLion130134,
  cmaMaleAtlanteanFigure144839,
  cmaShri138691,
  cmaHevajraAndConsort144283,
  cmaPlaqueWithAMaleHead154769,
  cmaDoubleFacedCrossbarFromARailingFem150995,
  cmaHeraldicLion150722,
  cmaYamaAsDharmaTheJudgeOfTheDeceased150706,
  cmaDoubleFacedCrossbarFromARailingMal150994,
  cmaRavanaShakingMountKailasa145968,
  cmaMonolithicPillar117476,
  cmaTheGreatMiracleAtShravasti148043,
  cmaTriad126240,
  cmaBacchanalianRelief169256,
  cmaLoversMithuna137221,
  cmaStandingFemaleFigure145377,
  cmaLidWithCombatBetweenAManAndALion146717,
  cmaHeadOfARishi146141,
  cmaSectionFromAPortableShrine147578,
  cmaRakshasa143167,
  cmaPortableBuddhistTemple145961,
  cmaShalabhanjikaWomanAndTree147978,
  cmaHeadOfLokeshvara133046,
  cmaMaleFigurePossiblyIndra150709,
  cmaFemaleTorso169266,
  cmaLion145088,
  cmaMiniatureFemaleHead157109,
  cmaSteleWithShadakshariLokeshvara154818,
  cmaHevajra169261,
  cmaFemaleAttendants146956,
  cmaReliquaryBox148828,
  cmaPiggyBank149924,
  cmaPortraitOfPhagmoDrupaDorjeGyalpo11157009,
  cmaPalanquinHook150688,
  cmaPairOfDeityEarringsWithVishnuOnGa94681,
  cmaHookahBowl144663,
  cmaRhyton154258,
  cmaHookahBase144662,
  cmaRoyalFemaleFigure151003,
  cmaSilverVessels154255,
  cmaBeaker154257,
  cmaEarringWithVishnuRidingGaruda94777,
  cmaForeheadPendantWithSunGodSuryaInA94680,
  cmaVase154256,
  cmaPendantWithFourArmedGreenVishnuOn94773,
  cmaPlateWithASceneOfRevelry147049,
  cmaPairOfEarringsWithVishnuRidingGaru94775,
  cmaEarringWithVishnuRidingGaruda94776,
  cmaEarringWithFourArmedVishnuRidingGa94782,
  cmaJarWithFourIbex161747,
  cmaPairOfEarringsWithFourArmedVishnu94780,
  cmaRitualAxe149446,
  cmaLocket136320,
  cmaEarringWithFourArmedVishnuRidingGa94781,
  cmaRoyalFemaleDonor149444,
  cmaKneelingMaleFigure149430,
  cmaPlateWithNandiInCenter154775,
  cmaMaryAndJosephTravelToBethlehemFoli163665,
  cmaRitualFlayingKnife149448,
  cmaPairOfNagaFinials153607,
  cmaMirrorOfHolinessMiratAlQudsOfFath163646,
  cmaPendant142837,
  cmaTheAdorationOfTheMagiFromAMirror163669,
  cmaPendantWithShri130373,
  cmaTheFlagellationFolio182RectoFromA163662,
  cmaPendantWithChain142836,
  cmaShamvaraAndADakini152856,
  cmaSitar98646,
  cmaVajrasattva125562,
  cmaPendants96519,
  cmaADakini152858,
  cmaBidriBasin387677,
  cmaBidriHookahBowlWithRoses387679,
  cmaShamvara152857,
  cmaReliquaryBox148829,
  cmaSimeonKneelsInFrontOfMaryAndJesus163670,
  cmaNecklaceBeadAndPairOfPendantsInTh147565,
  cmaBracelet142839,
  cmaReliquaryBoxLid148830,
  cmaPendantWithMatsyaFishIncarnationOf95449,
  cmaAngelsBringFoodToJesusInTheWilder163653,
  cmaTheAnnunciationFolio15RectoFromAM163658,
  cmaNagaFinial153608,
  cmaJesusBeingAwakenedDuringATempestOn163657,
  cmaFootedPlatter148832,
  cmaNagaFinial153609,
  cmaMaryMagdalenePresentsOintmentToJesu163648,
  cmaTheMagiFollowTheStarFolio34Recto163667,
  cmaSalomeReceivingJohnTheBaptistsHead163649,
  cmaJesusWritesOnTheGroundFolio130Ver163659,
  cmaBidriPandanWithChevrons387678,
  cmaBidriPandanWithChevrons399504,
  cmaLidForABidriPandanWithChevrons399505,
  cmaFemaleAttendantBearingFlyWhiskChaur146958,
  cmaJesusBeingPortrayedByKingAbgarsPai163660,
  cmaIncenseBurner151295,
  cmaRing124065,
  cmaCarvedBrackets146874,
  cmaPowderHorn154774,
  cmaTheFloweringOfJosephsRodFolio11Ve163647,
  cmaThePlaceOfJesussBirthFolio25Recto163666,
  cmaJohnTheBaptistRecognizesChristByTh163671,
  cmaTheAdorationOfTheShepherdsFromAMi163668,
  cmaRitualWeapons149445,
  cmaMaryAscendsTheStairsToTheTempleFr163663,
  cmaPomander154772,
  cmaPendantWithTwoArmedBlueDeityOnAL94774,
  cmaARavenBringsFoodToElijahFolio72R163656,
  cmaTheEntryIntoJerusalemFolio156Recto163661,
  cmaPalanquinRing169272,
  cmaThighboneTrumpet98697,
  cmaTheMarriageAtCanaFolio58VersoFrom163651,
  cmaPortraitOfPhagmoDrupaDorjeGyalpo11157010,
  cmaInkstand96718,
  cmaMosesPrayingToEndTheSerpentsAttack163652,
  cmaJesusOnMountTaborNearNazarethWhere163650,
  cmaCalligraphy125581,
  cmaJesusRaisesJairussDaughterFromTheD163654,
  cmaJesusHealsTheNoblemansSonInCaperna163655,
  cmaRing124064,
  cmaCarvedBracket146875,
  cmaBuddhistManuscript126835,
  cmaRing124063,
  cmaCarvedBracket146876,
  cmaKammavachaBuddhistOrdinationText124171,
  cmaNecklaceBeadInTheFormOfAFish147530,
  cmaJatayuHindersRavanasChariotTryingTo162445,
  cmaIlluminatedOpeningPageFolio1VersoA163664,
  cmaEarring153775,
  cmaCalligraphicExercisesAndVersesOfHaf170879,
  cmaNecklaceBeadInTheFormOfAFish147532,
  cmaNecklaceBeadInTheFormOfAFish147534,
  cmaNecklaceBeadInTheFormOfAFish147531,
  cmaNecklaceBeadInTheFormOfAFish147535,
  cmaRamaAndSitaInTheRoyalPalaceRecto162515,
  cmaNecklaceBeadInTheFormOfAFish147533,
  cmaNecklaceBeadInTheFormOfAFish147537,
  cmaNecklaceBeadInTheFormOfAFish147538,
  cmaKatarStabbingDagger152234,
  cmaDagger112293,
  cmaScabbard112288,
  cmaSealWithUnicornAndInscription147417,
  cmaDaggerRedVelvetCase112294,
  cmaTulwarSwordCase112282,
  cmaSwordWithScabbard112286,
  cmaSword112287,
  cmaTulwarSword112280,
  cmaTulwarSword112281,
  cmaHelmet100101,
  cmaSilapaSword112284,
  cmaKatarStabbingDaggerSheath152235,
  cmaSword95218,
  cmaSwordHilt152323,
  cmaTulwarSword99989,
  cmaDagger112290,
  cmaKhatar99958,
  cmaSheathForADagger154785,
  cmaAmuletInTheShapeOfAPipalLeafFicu96665,
  cmaSilapaSwordGreenLeatherCase112285,
  cmaDaggerWithBrownLeatherCase112289,
  cmaScabbardForSword97082,
  cmaDagger100045,
  cmaDaggerBrownLeatherCase112291,
  cmaSilapaSwordWithGreenLeatherCase112283,
  cmaKnife112298,
  cmaSword97081,
  cmaSwordKris99028,
  cmaGun97113,
  cmaSwordKris99017,
  cmaSwordKris99045,
  cmaBattleAxe97072,
  cmaSwordKris99019,
  cmaKnife97069,
  cmaSword95224,
  cmaSwordAndScabbardScabbard132829,
  cmaSwordKris99020,
  cmaSword99050,
  cmaSwordKris99031,
  cmaKnife97070,
  cmaDagger100046,
  cmaSwordAndScabbardScabbard132832,
  cmaSwordKris99046,
  cmaSwordAndScabbard132830,
  cmaKnife97087,
  cmaKris114591,
  cmaDaggerKatar97061,
  cmaDagger95221,
  cmaScabbardForKnifeKukri97058,
  cmaScabbardForDagger97079,
  cmaScabbard97089,
  cmaKnifeOrAxeKharga95226,
  cmaSwordKris99022,
  cmaKnifeKris121257,
  cmaSwordBuckle373842,
  cmaScabbardForSword95219,
  cmaScabbardForDagger100047,
  cmaSwordKris99018,
  cmaWoodScabbardForAKnifeKris121256,
  cmaPunchMarkedCoin143313,
  cmaPunchMarkedCoin143312,
  cmaVimaKadphisesReverse160960,
  cmaCoinOfKushanKingVasudevaIReverse160963,
  cmaVimaKadphisesObverse160959,
  cmaCoinWithFigureOfAnArcherReverse149136,
  cmaCoinOfKushanKingVasudevaIObverse160962,
  cmaPunchMarkedCoin143308,
  cmaPunchMarkedCoin143310,
  cmaCoinHavishkaObverse160965,
  cmaCoinHavishkaReverse160966,
  cmaCoinWithFigureOfAnArcherObverse149135,
  cmaCoinOfDemetriosIReverse161221,
  cmaCoinOfEukratidesI161222,
  cmaCoinOfEukratidesI169351,
  cmaPunchMarkedCoin143309,
  cmaCoinOfDemetriosIObverse161220,
  cmaCoinOfEukratidesI161223,
  cmaGoldenDinar169355,
  cmaCoinOfEukratidesI169350,
  cmaCoinOfEukratidesI169352,
  cmaGoldenDinar169354,
  cmaTetradrachmHeadOfAthenaObverseOwlR101482,
  cmaIndoGreekCoin169347,
  cmaNecklace96440,
  cmaIndoGreekCoin169348,
  cmaTetradrachmHeadOfAthenaObverseOwlR120477,
  cmaSolidusOfJustinianIReverse144187,
  cmaTetradrachmOwlCrescentMoonOliveBran101484,
  cmaSolidusOfJustinianI144185,
  cmaTetradrachmMacedonianShieldWithHead97361,
  cmaWitmenTremissisBustAndTridentObvers144366,
  cmaSolidusOfMauriceTiberius163300,
  cmaTetradrachmHeadOfAthenaObverseOwlR97405,
  cmaIndoGreekCoin169349,
  cmaTetradrachmOwlReverse97407,
  cmaSolidusOfConstansIiAndConstantineI169989,
  cmaTetradrachmHeadOfYoungHeraklesObver97371,
  cmaSolidusOfJustinianIObverse144186,
  cmaStaterPlainObverseHorseReverse144323,
  cmaSolidusWithBustsOfConstansIiAndCo169988,
  cmaTetradrachmCoinOfHerognetosMagistrat169343,
  cmaProvincialCoinHeadOfAntoninusPiusL163556,
  cmaProvincialCoinHeadOfAntoninusPiusO163555,
  cmaSolidusOfConstansIiAndConstantineI169987,
  cmaSolidusOfTheodosiusIiAndValentinian144182,
  cmaTetradrachmOwlStandingRCrescentMoon120479,
  cmaMoutonDorOfKingJeanLeBonOfFrance140453,
  cmaTetradrachmHeadOfAlexanderObverseAt98320,
  cmaLeopardDorOfEdwardIiiOfEngland140456,
  cmaTremissisOfHonorius144173,
  cmaSolidusOfTheodosiusITheGreat144176,
  cmaTetradrachmCoinOfErognetosMagistrate169345,
  cmaSolidusWithHeracliusAndHisSonHerac144188,
  cmaTasciovanusStaterCrossedWreathsObver144339,
  cmaHecteHeadOfOmphaleObverseIncuseSqu97346,
  cmaAureusBustOfClaudiusIObverseTriump144363,
  cmaHemidrachmChimaeraObverseDoveReverse98304,
  cmaSolidusOfTheodosiusITheGreatObvers144177,
  cmaTremissisOfHonoriusObverse144174,
  cmaSolidusOfTheodosiusITheGreatRevers144178,
  cmaTetradrachmHeadOfAntiochosViiiObver97349,
  cmaDrachmFemaleHeadObverseEagleReverse97343,
  cmaTetradrachmCoinOfHerognetosMagistrat169344,
  cmaSolidusOfTheodosiusIiAndValentinian144184,
  cmaSolidusOfTheodosiusIiAndValentinian144183,
  cmaSolidusWithHeracliusAndHisSonHerac144189,
  cmaTetradrachmHeadOfYoungHeraklesObver120471,
  cmaMoutonDorOfKingJeanLeBonOfFrance140455,
  cmaSolidusOfArkadiosReverse144181,
  cmaMoutonDorOfKingJeanLeBonOfFrance140454,
  cmaAddedomarosStaterCrescentsObverseHor144329,
  cmaSolidusOfArkadios144179,
  cmaSolidusWithHeracliusAndHisSonHerac144190,
  cmaLeopardDorOfEdwardIiiOfEnglandObv140457,
  cmaHemidrachmBullsHeadObverseHeadOfAr97377,
  cmaSolidusOfArkadiosObverse144180,
  cmaTetradrachmHeadOfAlexanderIiiTheGr97411,
  cmaTetradrachmHeadOfAntiochosVObverse97352,
  cmaTremissisOfHonoriusReverse144175,
  cmaSolidusOfMauriceTiberius163301,
  cmaRingMoney144316,
  cmaLeopardDorOfEdwardIiiOfEnglandRev140458,
  cmaTasciovanusStaterWreathObverseHorse144342,
  cmaStaterHeadOfBeardedHeraklesObverse97399,
  cmaStaterHeadObverseHorseWithVictoryR144317,
  cmaSolidusOfMauriceTiberius163302,
  cmaHemidrachmGorgoneionObverseBullRever98342,
  cmaStaterPegasosObverseHeadOfAthenaRe97380,
  cmaHalfTremissisOfJustinianI163296,
  cmaTwoPoundPieceGeorgeIvObverseShield144546,
  cmaUniteCharlesIObverseCrownedShieldR144473,
  cmaFiveGuineasGeorgeIiiObverseShieldO144531,
  cmaHalfcrownElizabethIObverseCrownedSh144438,
  cmaSovereignOfTwentyShillingsEdwardVi144425,
  cmaSovereignHenryViiiObverseCrownedShi144410,
  cmaNobleEdwardIiiStandingInShipWithS144370,
  cmaUniteCharlesIObverseCrownedShieldR144476,
  cmaSovereignHenryViiObverseShieldOfAr144397,
  cmaNobleHenryViInShipWithShieldOfAr144385,
  cmaNobleHenryVInShipWithShieldOfArm144382,
  cmaAngelStGeorgeSlayingTheDragonObver144391,
  cmaElectrotypeReplicaOfTetradrachmHead97358,
  cmaElectrotypeReplicaOfTetradrachmOwlP97360,
  cmaSovereignJamesIObverseCrownedShield144456,
  cmaNobleEdwardIiiStandingInShipWithS144373,
  cmaTwoPoundPieceGeorgeIvObverseStGeo144540,
  cmaFivePoundPieceEdwardViiObverseStG144562,
  cmaFiveGuineasGeorgeIiObverseShieldOf144518,
  cmaTwoGuineaPieceGeorgeIiiObverseShie144528,
  cmaFivePoundPieceVictoriaObverseStGeo144559,
  cmaBrazierWithCoinsMotif447804,
  cmaSovereignOfThirtyShillingsElizabeth144435,
  cmaHalfcrownElizabethIObverseCrownedSh144444,
  cmaRoseRyalJamesIObverseShieldOfArms144463,
  cmaRyalEdwardIvInShipWithAShieldOf144388,
  cmaAngelAnAngelSlayingADragonObverse144432,
  cmaTwoGuineasJamesIiObverseFourShield144497,
  cmaCoins99223,
  cmaTwoPoundPieceGeorgeVObverseStGeor144565,
  cmaHalfPoundElizabethIObverseCrownedS144453,
  cmaFivePoundPieceVictoriaObverseUnaRe144549,
  cmaTwoPoundPieceGeorgeIiiObverseStGe144537,
  cmaFiveGuineasWilliamIiiObverseFourSh144503,
  cmaSovereignMaryEnthronedObverseShield144428,
  cmaAngelStGeorgeSlayingTheDragonObver144394,
  cmaSovereignOfThirtyShillingsEdwardVi144422,
  cmaNobleHenryIvStandingInShipWithShi144379,
  cmaCrownOfTheDoubleRoseCrownedDouble144407,
  cmaGuineaGeorgeIiiObverseShieldOfArms144524,
  cmaHalfGuineaAnneObverseShieldsAndRos144512,
  cmaGuineaAnneObverseShieldsAndRoseRev144509,
  cmaElectrotypeReplicaOfTetradrachmHead97359,
  cmaHalfAngelAngelSlayingADragonObvers144404,
  cmaFiveGuineasAnneObverseShieldsAndRo144506,
  cmaRyalElizabethIInShipObverseRoseOv144441,
  cmaNobleRichardIiStandingOnShipWithS144376,
  cmaSovereignHenryViiiEnthronedObverseR144401,
  cmaTripleUniteOrThreePoundPieceCharle144480,
  cmaHalfSovereignEdwardViObverseCrowned144416,
  cmaLaurelJamesIObverseShieldOfArmsRe144466,
  cmaBroadCharlesIiObverseShieldsReverse144489,
  cmaUniteCharlesIObverseCrownedShieldR144469,
  cmaFourMonKaneiTshCoin99084,
  cmaTenpTshCoin99067,
  cmaBroadOliverCromwellLordProtectorObv144486,
  cmaFiveGuineasCharlesIiObverseFourShi144492,
  cmaTripleUniteOrThreePoundPieceCharle144483,
  cmaFourMonKaneiTshCoin99085,
  cmaTenpTshCoin99069
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
  cmaMauryaShungaLibationCup,
  cmaDurgaDestroyingTheBuffaloDemon150996,
  cmaNatarajaShivaAsTheLordOfDance111811,
  cmaShiva120411,
  cmaOneFacedLingaEkamukhalinga147575,
  cmaElevenHeadedBodhisattvaOfCompassion148021,
  cmaKrishnaLiftingMountGovardhan147166,
  cmaStandingBuddha147010,
  cmaGanesha153619,
  cmaVishnu122253,
  cmaNatureDivinityYakshi143649,
  cmaBodhisattva141937,
  cmaUpperSteleWithHandForKrishnaLiftin454739,
  cmaEnthronedPlanetaryDeity114975,
  cmaScenesFromTheLifeOfBuddha135485,
  cmaVenerationOfTheBuddhaAsAFieryPill123468,
  cmaSeatedBuddha143465,
  cmaMotherGoddess144908,
  cmaDancingGanesha137128,
  cmaBodhisattvaOfWisdomManjushri140439,
  cmaVishnuRidingOnGaruda137023,
  cmaRailingPillarWithAYakshiFemaleNatu141661,
  cmaHeadOfMaleDeityPossiblyAiyanar144893,
  cmaDurgaAsTheSlayerOfTheBuffaloDemon159500,
  cmaGoddessVajravarahi140094,
  cmaLintelWithGaruda143463,
  cmaVishnu122254,
  cmaHeadOfAFollowerOfShiva170075,
  cmaHeadOfVishnu122181,
  cmaStandingBuddha123021,
  cmaNagaEnthronedBuddha139455,
  cmaMaleDeity157340,
  cmaVarahaBoarIncarnationOfVishnu169268,
  cmaSeatedBuddha153369,
  cmaFastingBuddha153385,
  cmaGoddessUma151000,
  cmaHeadOfABodhisattva151938,
  cmaHeadOfBuddha139731,
  cmaBodhisattva169273,
  cmaFertilityGoddess149128,
  cmaAltarpieceWithBuddhaEnthroned121665,
  cmaTrikalaBhairava135183,
  cmaTemptationOfBuddhaByTheEvilForces145980,
  cmaSeatedMaitreyaBuddha154788,
  cmaHeadOfVishnu144793,
  cmaShakyamuniBuddhaCallingTheEarthToW141682,
  cmaBoxDecoratedWithShivaVishnuKrishna154776,
  cmaBoxDecoratedWithShivaVishnuKrishna437545,
  cmaCoverForABoxDecoratedWithShivaVis437547,
  cmaGoddessHoldingALotus151924,
  cmaBuddhaWithHandsInGestureOfTeaching135328,
  cmaSuryaTheSunGod142033,
  cmaVishnuWithShriAndBhu138690,
  cmaHeadOfBodhisattvaAvalokiteshvara152487,
  cmaVishnu148834,
  cmaStandingShivaMahadeva154793,
  cmaWalkingBuddha137222,
  cmaFemaleTreeDeityWithAttendant143264,
  cmaPortableIconOfShakyamuniBuddhaInTh141481,
  cmaBuddha147403,
  cmaStandingBuddha153628,
  cmaVishnu149965,
  cmaMaleFertilityDivinityPossiblyShiva153386,
  cmaBodhisattvaOfWisdomManjushri134346,
  cmaMaitreya144836,
  cmaHeadOfShiva119692,
  cmaBodhisattvaOfCompassionAsLokeshvara155851,
  cmaHeadOfADeityOrADeifiedKing105872,
  cmaCrownedBuddhaSeatedOnALionThrone154791,
  cmaBodhisattvaVajraraksha154787,
  cmaSeatedBuddha121109,
  cmaBodhisattvaOfCompassionAvalokiteshvar149361,
  cmaHeadOfJina138615,
  cmaApsaraBracket155586,
  cmaBodhisattvaAvalokitesvara154254,
  cmaBustOfBuddha144780,
  cmaHanuman155866,
  cmaHeadOfBuddha121212,
  cmaFlyingHanuman153739,
  cmaPadmapaniLokeshvaraSeatedOnTheRock146000,
  cmaStandingFemaleDeity145922,
  cmaFriezeWithApsaras117826,
  cmaPlaqueWithVishnu147577,
  cmaStandingBuddha147414,
  cmaBodhisattvaAvalokiteshvara149036,
  cmaShivaAsSlayerOfTheElephantDemon137220,
  cmaHeadOfAYaksha138613,
  cmaVasudharaGoddessOfAbundance125561,
  cmaBodhisattvaMaitreyaTheFutureBuddha150999,
  cmaBirthOfTheBuddha135837,
  cmaShivaAsLordOfMusic145695,
  cmaBuddhasPreviousLifeAsAWoodpeckerJa145182,
  cmaNagaEnthronedBuddha139456,
  cmaAvalokitesvaraPadmapaniBodhisattvaOf148773,
  cmaNagaEnthronedBuddhaSerpentHoods139458,
  cmaNagaEnthronedBuddhaBase139457,
  cmaDevi151294,
  cmaBodhisattvaPadmapani148827,
  cmaNatureDivinityYakshiWithDwarfHermap146848,
  cmaRishabhaTheFirstJina144579,
  cmaEnthronedBuddhaPreaching154926,
  cmaMaitreyaTheBuddhaOfTheFuture147047,
  cmaMiniatureHeadOfABodhisattva154768,
  cmaBaseForASeatedBuddhaWithFiguresOf148699,
  cmaSeatedBuddha147481,
  cmaFinialWithTheTemptationOfBuddhaBy141482,
  cmaFinialWithTheTemptationOfBuddhaBy141483,
  cmaVidyadeviGoddessOfLearning146703,
  cmaBodhisattvaVajrapani151004,
  cmaVasudevaVishnuNarayanaAsShridharaOn113024,
  cmaStandingVishnu139822,
  cmaFeetForStandingBuddha197315147999,
  cmaGoddess155589,
  cmaFigureOfAMaitreyaOnATieredPedesta146799,
  cmaVishnuAndShriSupportedByGaruda135716,
  cmaShivaAndParvati141270,
  cmaSeatedBuddha161215,
  cmaSeatedMaitreya139459,
  cmaPadmapani131334,
  cmaStandingDevi154795,
  cmaVishnu147957,
  cmaParshva136944,
  cmaSectionOfMonolithicRailingWithBathe123467,
  cmaDancersAndMusiciansFromPhrygia111807,
  cmaBracketWithTwoMusicians149913,
  cmaSiddharthaAtTheBodhiTree159840,
  cmaBacchanalianScene111808,
  cmaForeignersAndNonBuddhistsDrinkDance111806,
  cmaProcessionOfNonBuddhists111809,
  cmaMonkBearingOfferings143468,
  cmaBhu138693,
  cmaLaymanBearingOfferings143467,
  cmaPortableShrine143777,
  cmaMiniatureStoneReliquaryOrToiletteCa149138,
  cmaColossalHeadOfADeva169267,
  cmaArchitecturalSculptureFaceOfTimeKal148070,
  cmaMiniatureStoneReliquaryOrToiletteCa149140,
  cmaPedimentWithTheFaceOfGloryKirtiMu153837,
  cmaMiniatureStoneReliquaryOrToiletteCa149139,
  cmaWorshippersAtASacredTree145209,
  cmaNineCelestialBodiesNavagraha146165,
  cmaDoorGuardianMahakala149980,
  cmaElephant150549,
  cmaWingedAtlasHercules169251,
  cmaAdoringAttendantFromABuddhistShrine123171,
  cmaLoversMithuna151020,
  cmaMiniatureVotiveStupa150702,
  cmaNagaSerpentDivinity123438,
  cmaKubjikanavatman151960,
  cmaPersonificationOfTheDiscus124396,
  cmaAttendantBearingAFlyWhiskChauri141933,
  cmaManjuvaraWithConsortYabYum153740,
  cmaRingstone149103,
  cmaLion130134,
  cmaMaleAtlanteanFigure144839,
  cmaShri138691,
  cmaHevajraAndConsort144283,
  cmaPlaqueWithAMaleHead154769,
  cmaDoubleFacedCrossbarFromARailingFem150995,
  cmaHeraldicLion150722,
  cmaYamaAsDharmaTheJudgeOfTheDeceased150706,
  cmaDoubleFacedCrossbarFromARailingMal150994,
  cmaRavanaShakingMountKailasa145968,
  cmaMonolithicPillar117476,
  cmaTheGreatMiracleAtShravasti148043,
  cmaTriad126240,
  cmaBacchanalianRelief169256,
  cmaLoversMithuna137221,
  cmaStandingFemaleFigure145377,
  cmaLidWithCombatBetweenAManAndALion146717,
  cmaHeadOfARishi146141,
  cmaSectionFromAPortableShrine147578,
  cmaRakshasa143167,
  cmaPortableBuddhistTemple145961,
  cmaShalabhanjikaWomanAndTree147978,
  cmaHeadOfLokeshvara133046,
  cmaMaleFigurePossiblyIndra150709,
  cmaFemaleTorso169266,
  cmaLion145088,
  cmaMiniatureFemaleHead157109,
  cmaSteleWithShadakshariLokeshvara154818,
  cmaHevajra169261,
  cmaFemaleAttendants146956,
  cmaReliquaryBox148828,
  cmaPiggyBank149924,
  cmaPortraitOfPhagmoDrupaDorjeGyalpo11157009,
  cmaPalanquinHook150688,
  cmaPairOfDeityEarringsWithVishnuOnGa94681,
  cmaHookahBowl144663,
  cmaRhyton154258,
  cmaHookahBase144662,
  cmaRoyalFemaleFigure151003,
  cmaSilverVessels154255,
  cmaBeaker154257,
  cmaEarringWithVishnuRidingGaruda94777,
  cmaForeheadPendantWithSunGodSuryaInA94680,
  cmaVase154256,
  cmaPendantWithFourArmedGreenVishnuOn94773,
  cmaPlateWithASceneOfRevelry147049,
  cmaPairOfEarringsWithVishnuRidingGaru94775,
  cmaEarringWithVishnuRidingGaruda94776,
  cmaEarringWithFourArmedVishnuRidingGa94782,
  cmaJarWithFourIbex161747,
  cmaPairOfEarringsWithFourArmedVishnu94780,
  cmaRitualAxe149446,
  cmaLocket136320,
  cmaEarringWithFourArmedVishnuRidingGa94781,
  cmaRoyalFemaleDonor149444,
  cmaKneelingMaleFigure149430,
  cmaPlateWithNandiInCenter154775,
  cmaMaryAndJosephTravelToBethlehemFoli163665,
  cmaRitualFlayingKnife149448,
  cmaPairOfNagaFinials153607,
  cmaMirrorOfHolinessMiratAlQudsOfFath163646,
  cmaPendant142837,
  cmaTheAdorationOfTheMagiFromAMirror163669,
  cmaPendantWithShri130373,
  cmaTheFlagellationFolio182RectoFromA163662,
  cmaPendantWithChain142836,
  cmaShamvaraAndADakini152856,
  cmaSitar98646,
  cmaVajrasattva125562,
  cmaPendants96519,
  cmaADakini152858,
  cmaBidriBasin387677,
  cmaBidriHookahBowlWithRoses387679,
  cmaShamvara152857,
  cmaReliquaryBox148829,
  cmaSimeonKneelsInFrontOfMaryAndJesus163670,
  cmaNecklaceBeadAndPairOfPendantsInTh147565,
  cmaBracelet142839,
  cmaReliquaryBoxLid148830,
  cmaPendantWithMatsyaFishIncarnationOf95449,
  cmaAngelsBringFoodToJesusInTheWilder163653,
  cmaTheAnnunciationFolio15RectoFromAM163658,
  cmaNagaFinial153608,
  cmaJesusBeingAwakenedDuringATempestOn163657,
  cmaFootedPlatter148832,
  cmaNagaFinial153609,
  cmaMaryMagdalenePresentsOintmentToJesu163648,
  cmaTheMagiFollowTheStarFolio34Recto163667,
  cmaSalomeReceivingJohnTheBaptistsHead163649,
  cmaJesusWritesOnTheGroundFolio130Ver163659,
  cmaBidriPandanWithChevrons387678,
  cmaBidriPandanWithChevrons399504,
  cmaLidForABidriPandanWithChevrons399505,
  cmaFemaleAttendantBearingFlyWhiskChaur146958,
  cmaJesusBeingPortrayedByKingAbgarsPai163660,
  cmaIncenseBurner151295,
  cmaRing124065,
  cmaCarvedBrackets146874,
  cmaPowderHorn154774,
  cmaTheFloweringOfJosephsRodFolio11Ve163647,
  cmaThePlaceOfJesussBirthFolio25Recto163666,
  cmaJohnTheBaptistRecognizesChristByTh163671,
  cmaTheAdorationOfTheShepherdsFromAMi163668,
  cmaRitualWeapons149445,
  cmaMaryAscendsTheStairsToTheTempleFr163663,
  cmaPomander154772,
  cmaPendantWithTwoArmedBlueDeityOnAL94774,
  cmaARavenBringsFoodToElijahFolio72R163656,
  cmaTheEntryIntoJerusalemFolio156Recto163661,
  cmaPalanquinRing169272,
  cmaThighboneTrumpet98697,
  cmaTheMarriageAtCanaFolio58VersoFrom163651,
  cmaPortraitOfPhagmoDrupaDorjeGyalpo11157010,
  cmaInkstand96718,
  cmaMosesPrayingToEndTheSerpentsAttack163652,
  cmaJesusOnMountTaborNearNazarethWhere163650,
  cmaCalligraphy125581,
  cmaJesusRaisesJairussDaughterFromTheD163654,
  cmaJesusHealsTheNoblemansSonInCaperna163655,
  cmaRing124064,
  cmaCarvedBracket146875,
  cmaBuddhistManuscript126835,
  cmaRing124063,
  cmaCarvedBracket146876,
  cmaKammavachaBuddhistOrdinationText124171,
  cmaNecklaceBeadInTheFormOfAFish147530,
  cmaJatayuHindersRavanasChariotTryingTo162445,
  cmaIlluminatedOpeningPageFolio1VersoA163664,
  cmaEarring153775,
  cmaCalligraphicExercisesAndVersesOfHaf170879,
  cmaNecklaceBeadInTheFormOfAFish147532,
  cmaNecklaceBeadInTheFormOfAFish147534,
  cmaNecklaceBeadInTheFormOfAFish147531,
  cmaNecklaceBeadInTheFormOfAFish147535,
  cmaRamaAndSitaInTheRoyalPalaceRecto162515,
  cmaNecklaceBeadInTheFormOfAFish147533,
  cmaNecklaceBeadInTheFormOfAFish147537,
  cmaNecklaceBeadInTheFormOfAFish147538,
  cmaKatarStabbingDagger152234,
  cmaDagger112293,
  cmaScabbard112288,
  cmaSealWithUnicornAndInscription147417,
  cmaDaggerRedVelvetCase112294,
  cmaTulwarSwordCase112282,
  cmaSwordWithScabbard112286,
  cmaSword112287,
  cmaTulwarSword112280,
  cmaTulwarSword112281,
  cmaHelmet100101,
  cmaSilapaSword112284,
  cmaKatarStabbingDaggerSheath152235,
  cmaSword95218,
  cmaSwordHilt152323,
  cmaTulwarSword99989,
  cmaDagger112290,
  cmaKhatar99958,
  cmaSheathForADagger154785,
  cmaAmuletInTheShapeOfAPipalLeafFicu96665,
  cmaSilapaSwordGreenLeatherCase112285,
  cmaDaggerWithBrownLeatherCase112289,
  cmaScabbardForSword97082,
  cmaDagger100045,
  cmaDaggerBrownLeatherCase112291,
  cmaSilapaSwordWithGreenLeatherCase112283,
  cmaKnife112298,
  cmaSword97081,
  cmaSwordKris99028,
  cmaGun97113,
  cmaSwordKris99017,
  cmaSwordKris99045,
  cmaBattleAxe97072,
  cmaSwordKris99019,
  cmaKnife97069,
  cmaSword95224,
  cmaSwordAndScabbardScabbard132829,
  cmaSwordKris99020,
  cmaSword99050,
  cmaSwordKris99031,
  cmaKnife97070,
  cmaDagger100046,
  cmaSwordAndScabbardScabbard132832,
  cmaSwordKris99046,
  cmaSwordAndScabbard132830,
  cmaKnife97087,
  cmaKris114591,
  cmaDaggerKatar97061,
  cmaDagger95221,
  cmaScabbardForKnifeKukri97058,
  cmaScabbardForDagger97079,
  cmaScabbard97089,
  cmaKnifeOrAxeKharga95226,
  cmaSwordKris99022,
  cmaKnifeKris121257,
  cmaSwordBuckle373842,
  cmaScabbardForSword95219,
  cmaScabbardForDagger100047,
  cmaSwordKris99018,
  cmaWoodScabbardForAKnifeKris121256,
  cmaPunchMarkedCoin143313,
  cmaPunchMarkedCoin143312,
  cmaVimaKadphisesReverse160960,
  cmaCoinOfKushanKingVasudevaIReverse160963,
  cmaVimaKadphisesObverse160959,
  cmaCoinWithFigureOfAnArcherReverse149136,
  cmaCoinOfKushanKingVasudevaIObverse160962,
  cmaPunchMarkedCoin143308,
  cmaPunchMarkedCoin143310,
  cmaCoinHavishkaObverse160965,
  cmaCoinHavishkaReverse160966,
  cmaCoinWithFigureOfAnArcherObverse149135,
  cmaCoinOfDemetriosIReverse161221,
  cmaCoinOfEukratidesI161222,
  cmaCoinOfEukratidesI169351,
  cmaPunchMarkedCoin143309,
  cmaCoinOfDemetriosIObverse161220,
  cmaCoinOfEukratidesI161223,
  cmaGoldenDinar169355,
  cmaCoinOfEukratidesI169350,
  cmaCoinOfEukratidesI169352,
  cmaGoldenDinar169354,
  cmaTetradrachmHeadOfAthenaObverseOwlR101482,
  cmaIndoGreekCoin169347,
  cmaNecklace96440,
  cmaIndoGreekCoin169348,
  cmaTetradrachmHeadOfAthenaObverseOwlR120477,
  cmaSolidusOfJustinianIReverse144187,
  cmaTetradrachmOwlCrescentMoonOliveBran101484,
  cmaSolidusOfJustinianI144185,
  cmaTetradrachmMacedonianShieldWithHead97361,
  cmaWitmenTremissisBustAndTridentObvers144366,
  cmaSolidusOfMauriceTiberius163300,
  cmaTetradrachmHeadOfAthenaObverseOwlR97405,
  cmaIndoGreekCoin169349,
  cmaTetradrachmOwlReverse97407,
  cmaSolidusOfConstansIiAndConstantineI169989,
  cmaTetradrachmHeadOfYoungHeraklesObver97371,
  cmaSolidusOfJustinianIObverse144186,
  cmaStaterPlainObverseHorseReverse144323,
  cmaSolidusWithBustsOfConstansIiAndCo169988,
  cmaTetradrachmCoinOfHerognetosMagistrat169343,
  cmaProvincialCoinHeadOfAntoninusPiusL163556,
  cmaProvincialCoinHeadOfAntoninusPiusO163555,
  cmaSolidusOfConstansIiAndConstantineI169987,
  cmaSolidusOfTheodosiusIiAndValentinian144182,
  cmaTetradrachmOwlStandingRCrescentMoon120479,
  cmaMoutonDorOfKingJeanLeBonOfFrance140453,
  cmaTetradrachmHeadOfAlexanderObverseAt98320,
  cmaLeopardDorOfEdwardIiiOfEngland140456,
  cmaTremissisOfHonorius144173,
  cmaSolidusOfTheodosiusITheGreat144176,
  cmaTetradrachmCoinOfErognetosMagistrate169345,
  cmaSolidusWithHeracliusAndHisSonHerac144188,
  cmaTasciovanusStaterCrossedWreathsObver144339,
  cmaHecteHeadOfOmphaleObverseIncuseSqu97346,
  cmaAureusBustOfClaudiusIObverseTriump144363,
  cmaHemidrachmChimaeraObverseDoveReverse98304,
  cmaSolidusOfTheodosiusITheGreatObvers144177,
  cmaTremissisOfHonoriusObverse144174,
  cmaSolidusOfTheodosiusITheGreatRevers144178,
  cmaTetradrachmHeadOfAntiochosViiiObver97349,
  cmaDrachmFemaleHeadObverseEagleReverse97343,
  cmaTetradrachmCoinOfHerognetosMagistrat169344,
  cmaSolidusOfTheodosiusIiAndValentinian144184,
  cmaSolidusOfTheodosiusIiAndValentinian144183,
  cmaSolidusWithHeracliusAndHisSonHerac144189,
  cmaTetradrachmHeadOfYoungHeraklesObver120471,
  cmaMoutonDorOfKingJeanLeBonOfFrance140455,
  cmaSolidusOfArkadiosReverse144181,
  cmaMoutonDorOfKingJeanLeBonOfFrance140454,
  cmaAddedomarosStaterCrescentsObverseHor144329,
  cmaSolidusOfArkadios144179,
  cmaSolidusWithHeracliusAndHisSonHerac144190,
  cmaLeopardDorOfEdwardIiiOfEnglandObv140457,
  cmaHemidrachmBullsHeadObverseHeadOfAr97377,
  cmaSolidusOfArkadiosObverse144180,
  cmaTetradrachmHeadOfAlexanderIiiTheGr97411,
  cmaTetradrachmHeadOfAntiochosVObverse97352,
  cmaTremissisOfHonoriusReverse144175,
  cmaSolidusOfMauriceTiberius163301,
  cmaRingMoney144316,
  cmaLeopardDorOfEdwardIiiOfEnglandRev140458,
  cmaTasciovanusStaterWreathObverseHorse144342,
  cmaStaterHeadOfBeardedHeraklesObverse97399,
  cmaStaterHeadObverseHorseWithVictoryR144317,
  cmaSolidusOfMauriceTiberius163302,
  cmaHemidrachmGorgoneionObverseBullRever98342,
  cmaStaterPegasosObverseHeadOfAthenaRe97380,
  cmaHalfTremissisOfJustinianI163296,
  cmaTwoPoundPieceGeorgeIvObverseShield144546,
  cmaUniteCharlesIObverseCrownedShieldR144473,
  cmaFiveGuineasGeorgeIiiObverseShieldO144531,
  cmaHalfcrownElizabethIObverseCrownedSh144438,
  cmaSovereignOfTwentyShillingsEdwardVi144425,
  cmaSovereignHenryViiiObverseCrownedShi144410,
  cmaNobleEdwardIiiStandingInShipWithS144370,
  cmaUniteCharlesIObverseCrownedShieldR144476,
  cmaSovereignHenryViiObverseShieldOfAr144397,
  cmaNobleHenryViInShipWithShieldOfAr144385,
  cmaNobleHenryVInShipWithShieldOfArm144382,
  cmaAngelStGeorgeSlayingTheDragonObver144391,
  cmaElectrotypeReplicaOfTetradrachmHead97358,
  cmaElectrotypeReplicaOfTetradrachmOwlP97360,
  cmaSovereignJamesIObverseCrownedShield144456,
  cmaNobleEdwardIiiStandingInShipWithS144373,
  cmaTwoPoundPieceGeorgeIvObverseStGeo144540,
  cmaFivePoundPieceEdwardViiObverseStG144562,
  cmaFiveGuineasGeorgeIiObverseShieldOf144518,
  cmaTwoGuineaPieceGeorgeIiiObverseShie144528,
  cmaFivePoundPieceVictoriaObverseStGeo144559,
  cmaBrazierWithCoinsMotif447804,
  cmaSovereignOfThirtyShillingsElizabeth144435,
  cmaHalfcrownElizabethIObverseCrownedSh144444,
  cmaRoseRyalJamesIObverseShieldOfArms144463,
  cmaRyalEdwardIvInShipWithAShieldOf144388,
  cmaAngelAnAngelSlayingADragonObverse144432,
  cmaTwoGuineasJamesIiObverseFourShield144497,
  cmaCoins99223,
  cmaTwoPoundPieceGeorgeVObverseStGeor144565,
  cmaHalfPoundElizabethIObverseCrownedS144453,
  cmaFivePoundPieceVictoriaObverseUnaRe144549,
  cmaTwoPoundPieceGeorgeIiiObverseStGe144537,
  cmaFiveGuineasWilliamIiiObverseFourSh144503,
  cmaSovereignMaryEnthronedObverseShield144428,
  cmaAngelStGeorgeSlayingTheDragonObver144394,
  cmaSovereignOfThirtyShillingsEdwardVi144422,
  cmaNobleHenryIvStandingInShipWithShi144379,
  cmaCrownOfTheDoubleRoseCrownedDouble144407,
  cmaGuineaGeorgeIiiObverseShieldOfArms144524,
  cmaHalfGuineaAnneObverseShieldsAndRos144512,
  cmaGuineaAnneObverseShieldsAndRoseRev144509,
  cmaElectrotypeReplicaOfTetradrachmHead97359,
  cmaHalfAngelAngelSlayingADragonObvers144404,
  cmaFiveGuineasAnneObverseShieldsAndRo144506,
  cmaRyalElizabethIInShipObverseRoseOv144441,
  cmaNobleRichardIiStandingOnShipWithS144376,
  cmaSovereignHenryViiiEnthronedObverseR144401,
  cmaTripleUniteOrThreePoundPieceCharle144480,
  cmaHalfSovereignEdwardViObverseCrowned144416,
  cmaLaurelJamesIObverseShieldOfArmsRe144466,
  cmaBroadCharlesIiObverseShieldsReverse144489,
  cmaUniteCharlesIObverseCrownedShieldR144469,
  cmaFourMonKaneiTshCoin99084,
  cmaTenpTshCoin99067,
  cmaBroadOliverCromwellLordProtectorObv144486,
  cmaFiveGuineasCharlesIiObverseFourShi144492,
  cmaTripleUniteOrThreePoundPieceCharle144483,
  cmaFourMonKaneiTshCoin99085,
  cmaTenpTshCoin99069
};
