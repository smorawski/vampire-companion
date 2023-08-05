import { CharacterStorage } from "../types";

import constructionWorker1 from "./1stConstructionWorker";
import constructionWorker2 from "./2ndConstructionWorker";
import constructionWorker3 from "./3rdConstructionWorker";
import constructionBoss from "./constructionBoss";
import ghoul1 from "./1stGhoul";
import ghoul2 from "./2ndGhoul";
import ghoul3 from "./3rdGhoul";
import ghoul4 from "./4thGhoul";
import crowd1 from "./1stCrowd";
import crowd2 from "./2ndCrowd";
import crowd3 from "./3rdCrowd";
import hulkingRisenDead1 from "./1stHulkingRisenDead";
import hulkingRisenDead2 from "./2ndHulkingRisenDead";
import hulkingRisenDead3 from "./3rdHulkingRisenDead";
import hulkingRisenDead4 from "./4thHulkingRisenDead";
import ratSwarm1 from "./1stRatSwarm";
import ratSwarm2 from "./2ndRatSwarm";
import ratSwarm3 from "./3rdRatSwarm";
import ratSwarm4 from "./4thRatSwarm";
import siAgent1 from "./1stSIAgent";
import siAgent2 from "./2ndSIAgent";
import siAgent3 from "./3rdSIAgent";
import siAgent4 from "./4thSIAgent";
import shamblingRisenDead1 from "./1stShamblingRisenDead";
import shamblingRisenDead2 from "./2ndShamblingRisenDead";
import shamblingRisenDead3 from "./3rdShamblingRisenDead";
import shamblingRisenDead4 from "./4thShamblingRisenDead";
import spiderSwarm1 from "./1stSpiderSwarm";
import spiderSwarm2 from "./2ndSpiderSwarm";
import spiderSwarm3 from "./3rdSpiderSwarm";
import wolf1 from "./1stWolf";
import wolf2 from "./2ndWolf";
import wolf3 from "./3rdWolf";
import wolf4 from "./4thWolf";
import alexSimard from "./alexSimard";
import ancientGhoul from "./ancientGhoul";
import archbishop from "./archbishop";
import arenKonway from "./arenKonway";
import banuHaqim from "./banuHaqim";
import belligerentPunk from "./belligerentPunk";
import bettyDuhamel from "./bettyDuhamel";
import brujah from "./brujah";
import carlJohnson from "./carlJohnson";
import distractedGuard from "./distractedGuard";
import ella from "./ella";
import enragedPitbull from "./enragedPitbull";
import enzoDeLuca from "./enzoDeLuca";
import fatherTeasdale from "./fatherTeasdale";
import frenziedVampire from "./frenziedVampire";
import gabeTremblay from "./gabeTremblay";
import gangMember from "./gangMember";
import haroldBeaulieu from "./haroldBeaulieu";
import hostileGangrel from "./hostileGangrel";
import injuredYuma from "./injuredYuma";
import jadeLinhDuplessis from "./jadeLinhDuplessis";
import jimmySmythe from "./jimmySmythe";
import jimmySmythe2 from "./jimmySmythe2";
import lasombra from "./lasombra";
import locke from "./locke";
import luciannaRicci from "./luciannaRicci";
import maggie from "./maggie";
import meekPunk from "./meekPunk";
import menacingVagrant from "./menacingVagrant";
import ministry from "./ministry";
import mrDamp from "./mrDamp";
import nicoMiller from "./nicoMiller";
import olderGuard from "./olderGuard";
import oldPriest from "./oldPriest";
import oldVagrant from "./oldVagrant";
import overworkedGuard from "./overworkedGuard";
import policeOfficer from "./policeOfficer";
import punkLeader from "./punkLeader";
import rat from "./rat";
import rookieGuard from "./rookieGuard";
import sabbatPriest from "./sabbatPriest";
import samuelArmstrong from "./samuelArmstrong";
import securityGuard from "./securityGuard";
import sid from "./sid";
import skaterBoi from "./skaterBoi";
import streetMuscle from "./streetMuscle";
import sylvester from "./sylvester";
import thomasChartrand from "./thomasChartrand";
import thoughLookingGuard from "./thoughLookingGuard";
import thug from "./thug";
import thugLeader from "./thugLeader";
import uncannySoldier from "./uncannySoldier";
import unwashedPervert from "./unwashedPervert";
import vargas from "./vargas";
import viciousDoberman from "./viciousDobermann";
import vindictiveNosferatu from "./vindictiveNosferatu";
import watchman from "./watchman";
import werewolf from "./werewolf";
import william from "./william";
import yumaMckenzy from "./yumaMckenzy";

const characters: Array<CharacterStorage> = [
  constructionWorker1,
  constructionWorker2,
  constructionWorker3,
  constructionBoss,
  ghoul1,
  ghoul2,
  ghoul3,
  ghoul4,
  crowd1,
  crowd2,
  crowd3,
  hulkingRisenDead1,
  hulkingRisenDead2,
  hulkingRisenDead3,
  hulkingRisenDead4,
  ratSwarm1,
  ratSwarm2,
  ratSwarm3,
  ratSwarm4,
  siAgent1,
  siAgent2,
  siAgent3,
  siAgent4,
  shamblingRisenDead1,
  shamblingRisenDead2,
  shamblingRisenDead3,
  shamblingRisenDead4,
  spiderSwarm1,
  spiderSwarm2,
  spiderSwarm3,
  wolf1,
  wolf2,
  wolf3,
  wolf4,
  alexSimard,
  ancientGhoul,
  archbishop,
  arenKonway,
  banuHaqim,
  belligerentPunk,
  bettyDuhamel,
  brujah,
  carlJohnson,
  distractedGuard,
  ella,
  enragedPitbull,
  enzoDeLuca,
  fatherTeasdale,
  frenziedVampire,
  gabeTremblay,
  gangMember,
  haroldBeaulieu,
  hostileGangrel,
  injuredYuma,
  jadeLinhDuplessis,
  jimmySmythe,
  jimmySmythe2,
  lasombra,
  locke,
  luciannaRicci,
  maggie,
  meekPunk,
  menacingVagrant,
  ministry,
  mrDamp,
  nicoMiller,
  olderGuard,
  oldPriest,
  oldVagrant,
  overworkedGuard,
  policeOfficer,
  punkLeader,
  rat,
  rookieGuard,
  sabbatPriest,
  samuelArmstrong,
  securityGuard,
  sid,
  skaterBoi,
  streetMuscle,
  sylvester,
  thomasChartrand,
  thoughLookingGuard,
  thug,
  thugLeader,
  uncannySoldier,
  unwashedPervert,
  vargas,
  viciousDoberman,
  vindictiveNosferatu,
  watchman,
  werewolf,
  william,
  yumaMckenzy,
];

export default characters;
