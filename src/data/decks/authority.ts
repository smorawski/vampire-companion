import { Card, CardType, Deck, DeckType, Targeting } from "../types";

const hook1: Card = {
  id: "hook1",
  type: CardType.Attack,
  typeText: "deck.authority.hook1.typeText",
  title: "deck.authority.hook1.title",
  description: "deck.authority.hook1.description",
};

const hook2: Card = {
  id: "hook2",
  type: CardType.Attack,
  typeText: "deck.authority.hook2.typeText",
  title: "deck.authority.hook2.title",
  description: "deck.authority.hook2.description",
  target: Targeting.MostInjured,
};

const uppercut1: Card = {
  id: "uppercut1",
  type: CardType.Attack,
  typeText: "deck.authority.uppercut1.typeText",
  title: "deck.authority.uppercut1.title",
  description: "deck.authority.uppercut1.description",
};

const uppercut2: Card = {
  id: "uppercut2",
  type: CardType.Attack,
  typeText: "deck.authority.uppercut2.typeText",
  title: "deck.authority.uppercut2.title",
  description: "deck.authority.uppercut2.description",
  target: Targeting.LeastInjured,
};

const stick: Card = {
  id: "stick",
  type: CardType.Attack,
  typeText: "deck.authority.stick.typeText",
  title: "deck.authority.stick.title",
  description: "deck.authority.stick.description",
};

const straightShot: Card = {
  id: "straightShot",
  type: CardType.Attack,
  typeText: "deck.authority.straightShot.typeText",
  title: "deck.authority.straightShot.title",
  description: "deck.authority.straightShot.description",
  target: Targeting.LowestInitiative,
};

const guard: Card = {
  id: "guard",
  type: CardType.Defense,
  typeText: "deck.authority.guard.typeText",
  title: "deck.authority.guard.title",
  description: "deck.authority.guard.description",
  target: Targeting.LowestInitiative,
};

const special11: Card = {
  id: "special11",
  type: CardType.Special1,
};

const special12: Card = {
  id: "special12",
  type: CardType.Special1,
};

const special21: Card = {
  id: "special21",
  type: CardType.Special2,
};

const special22: Card = {
  id: "special22",
  type: CardType.Special2,
};

export const authorityDeck: Deck = {
  type: DeckType.Authority,
  cards: [
    hook1,
    hook2,
    special11,
    uppercut1,
    uppercut2,
    stick,
    straightShot,
    guard,
    special12,
    special21,
    special22,
  ],
};
