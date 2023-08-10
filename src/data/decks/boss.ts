import { Card, CardType, Deck, DeckType, Targeting } from "../types";

const sharedBoss: Array<Card> = [
  {
    id: "special11",
    type: CardType.Special1,
  },
  {
    id: "special12",
    type: CardType.Special1,
  },
  {
    id: "special13",
    type: CardType.Special1,
  },
  {
    id: "special21",
    type: CardType.Special2,
  },
  {
    id: "special22",
    type: CardType.Special2,
  },
  {
    id: "special23",
    type: CardType.Special2,
  },
];

const tear1: Card = {
  id: "tear",
  type: CardType.Attack,
  typeText: "deck.boss1.tear.typeText",
  title: "deck.boss1.tear.title",
  description: "deck.boss1.tear.description",
  target: Targeting.LeastInjured,
};

const bite1: Card = {
  id: "bite",
  type: CardType.Attack,
  typeText: "deck.boss1.bite.typeText",
  title: "deck.boss1.bite.title",
  description: "deck.boss1.bite.description",
  target: Targeting.Closest,
};

const charge1: Card = {
  id: "charge",
  type: CardType.Attack,
  typeText: "deck.boss1.charge.typeText",
  title: "deck.boss1.charge.title",
  description: "deck.boss1.charge.description",
  target: Targeting.MostInjured,
};

const howl1: Card = {
  id: "howl",
  type: CardType.Defense,
  typeText: "deck.boss1.howl.typeText",
  title: "deck.boss1.howl.title",
  description: "deck.boss1.howl.description",
  target: Targeting.All,
};

export const boss1Deck: Deck = {
  type: DeckType.Boss1,
  cards: [...sharedBoss, tear1, bite1, charge1, howl1],
};

const punch2: Card = {
  id: "punch",
  type: CardType.Attack,
  typeText: "deck.boss2.punch.typeText",
  title: "deck.boss2.punch.title",
  description: "deck.boss2.punch.description",
  target: Targeting.Closest,
};

const guard2: Card = {
  id: "guard",
  type: CardType.Defense,
  typeText: "deck.boss2.guard.typeText",
  title: "deck.boss2.guard.title",
  description: "deck.boss2.guard.description",
  target: Targeting.Self,
};

export const boss2Deck: Deck = {
  type: DeckType.Boss2,
  cards: [...sharedBoss, punch2, guard2],
};

const tear3: Card = {
  id: "tear",
  type: CardType.Attack,
  typeText: "deck.boss3.tear.typeText",
  title: "deck.boss3.tear.title",
  description: "deck.boss3.tear.description",
  target: Targeting.Closest,
};

const charge3: Card = {
  id: "charge",
  type: CardType.Attack,
  typeText: "deck.boss3.charge.typeText",
  title: "deck.boss3.charge.title",
  description: "deck.boss3.charge.description",
  target: Targeting.Closest,
};

export const boss3Deck: Deck = {
  type: DeckType.Boss3,
  cards: [...sharedBoss, tear3, charge3],
};

const bloodBoil4: Card = {
  id: "bloodBoil",
  type: CardType.Attack,
  typeText: "deck.boss4.bloodBoil.typeText",
  title: "deck.boss4.bloodBoil.title",
  description: "deck.boss4.bloodBoil.description",
  target: Targeting.Closest,
};

const piercingShot4: Card = {
  id: "piercingShot",
  type: CardType.Attack,
  typeText: "deck.boss4.piercingShot.typeText",
  title: "deck.boss4.piercingShot.title",
  description: "deck.boss4.piercingShot.description",
  target: Targeting.Closest,
};

export const boss4Deck: Deck = {
  type: DeckType.Boss4,
  cards: [...sharedBoss, bloodBoil4, piercingShot4],
};

const claw5: Card = {
  id: "claw",
  type: CardType.Attack,
  typeText: "deck.boss5.claw.typeText",
  title: "deck.boss5.claw.title",
  description: "deck.boss5.claw.description",
  target: Targeting.Closest,
};

const dash5: Card = {
  id: "dash",
  type: CardType.Attack,
  typeText: "deck.boss5.dash.typeText",
  title: "deck.boss5.dash.title",
  description: "deck.boss5.dash.description",
  target: Targeting.Closest,
};

export const boss5Deck: Deck = {
  type: DeckType.Boss5,
  cards: [...sharedBoss, claw5, dash5],
};

const tear6: Card = {
  id: "tear",
  type: CardType.Attack,
  typeText: "deck.boss6.tear.typeText",
  title: "deck.boss6.tear.title",
  description: "deck.boss6.tear.description",
  target: Targeting.Closest,
};

const fleshOfMarble6: Card = {
  id: "fleshOfMarble",
  type: CardType.Defense,
  typeText: "deck.boss6.fleshOfMarble.typeText",
  title: "deck.boss6.fleshOfMarble.title",
  description: "deck.boss6.fleshOfMarble.description",
  target: Targeting.Self,
};

const frenzy6: Card = {
  id: "frenzy",
  type: CardType.Attack,
  typeText: "deck.boss6.frenzy.typeText",
  title: "deck.boss6.frenzy.title",
  description: "deck.boss6.frenzy.description",
  target: Targeting.HighestInitiative,
};

const bite6: Card = {
  id: "bite",
  type: CardType.Attack,
  typeText: "deck.boss6.bite.typeText",
  title: "deck.boss6.bite.title",
  description: "deck.boss6.bite.description",
  target: Targeting.LowestInitiative,
};

export const boss6Deck: Deck = {
  type: DeckType.Boss6,
  cards: [...sharedBoss, tear6, fleshOfMarble6, frenzy6, bite6],
};

const begone7: Card = {
  id: "begone",
  type: CardType.Defense,
  typeText: "deck.boss7.begone.typeText",
  title: "deck.boss7.begone.title",
  description: "deck.boss7.begone.description",
  target: Targeting.All,
};

const salvation7: Card = {
  id: "salvation",
  type: CardType.Defense,
  typeText: "deck.boss7.salvation.typeText",
  title: "deck.boss7.salvation.title",
  description: "deck.boss7.salvation.description",
  target: Targeting.Self,
};

export const boss7Deck: Deck = {
  type: DeckType.Boss7,
  cards: [...sharedBoss, begone7, salvation7],
};

const auraOfDecay8: Card = {
  id: "auraOfDecay",
  type: CardType.Attack,
  typeText: "deck.boss8.auraOfDecay.typeText",
  title: "deck.boss8.auraOfDecay.title",
  description: "deck.boss8.auraOfDecay.description",
  target: Targeting.Closest,
};

const freeze8: Card = {
  id: "freeze",
  type: CardType.Defense,
  typeText: "deck.boss8.freeze.typeText",
  title: "deck.boss8.freeze.title",
  description: "deck.boss8.freeze.description",
  target: Targeting.Closest,
};

const smash8: Card = {
  id: "smash",
  type: CardType.Attack,
  typeText: "deck.boss8.smash.typeText",
  title: "deck.boss8.smash.title",
  description: "deck.boss8.smash.description",
  target: Targeting.Closest,
};

export const boss8Deck: Deck = {
  type: DeckType.Boss8,
  cards: [...sharedBoss, auraOfDecay8, freeze8, smash8],
};
