import { CardType, Deck, DeckType, Card, Targeting } from "../types";

const leap1: Card = {
  id: "leap1",
  type: CardType.Attack,
  typeText: "deck.vampire.leap1.typeText",
  title: "deck.vampire.leap1.title",
  description: "deck.vampire.leap1.description",
};

const leap2: Card = {
  id: "leap2",
  type: CardType.Attack,
  typeText: "deck.vampire.leap2.typeText",
  title: "deck.vampire.leap2.title",
  description: "deck.vampire.leap2.description",
  target: Targeting.MostInjured,
};

const bite1: Card = {
  id: "bite1",
  type: CardType.Attack,
  typeText: "deck.vampire.bite1.typeText",
  title: "deck.vampire.bite1.title",
  description: "deck.vampire.bite1.description",
};

const bite2: Card = {
  id: "bite2",
  type: CardType.Attack,
  typeText: "deck.vampire.bite2.typeText",
  title: "deck.vampire.bite2.title",
  description: "deck.vampire.bite2.description",
  target: Targeting.LeastInjured,
};

const claw1: Card = {
  id: "claw1",
  type: CardType.Attack,
  typeText: "deck.vampire.claw1.typeText",
  title: "deck.vampire.claw1.title",
  description: "deck.vampire.claw1.description",
};

const claw2: Card = {
  id: "claw2",
  type: CardType.Attack,
  typeText: "deck.vampire.claw2.typeText",
  title: "deck.vampire.claw2.title",
  description: "deck.vampire.claw2.description",
  target: Targeting.LowestInitiative,
};

const dash1: Card = {
  id: "dash1",
  type: CardType.Attack,
  typeText: "deck.vampire.dash1.typeText",
  title: "deck.vampire.dash1.title",
  description: "deck.vampire.dash1.description",
};

const dash2: Card = {
  id: "dash2",
  type: CardType.Attack,
  typeText: "deck.vampire.dash2.typeText",
  title: "deck.vampire.dash2.title",
  description: "deck.vampire.dash2.description",
  target: Targeting.HighestInitiative,
};

const special1: Card = {
  id: "special1",
  type: CardType.Special1,
};

const special2: Card = {
  id: "special2",
  type: CardType.Special2,
};

export const vampireDeck: Deck = {
  type: DeckType.Vampire,
  cards: [
    leap1,
    leap2,
    bite1,
    bite2,
    claw1,
    claw2,
    dash1,
    dash2,
    special1,
    special2,
  ],
};
