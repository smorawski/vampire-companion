import { Card, CardType, Deck, DeckType, Targeting } from "../types";

const punch1: Card = {
  id: "punch1",
  type: CardType.Attack,
  typeText: "deck.ally.punch1.typeText",
  title: "deck.ally.punch1.title",
  description: "deck.ally.punch1.description",
};

const punch2: Card = {
  id: "punch2",
  type: CardType.Attack,
  typeText: "deck.ally.punch2.typeText",
  title: "deck.ally.punch2.title",
  description: "deck.ally.punch2.description",
  target: Targeting.HighestInitiative,
};

const bite1: Card = {
  id: "bite1",
  type: CardType.Attack,
  typeText: "deck.ally.bite1.typeText",
  title: "deck.ally.bite1.title",
  description: "deck.ally.bite1.description",
};

const bite2: Card = {
  id: "bite2",
  type: CardType.Attack,
  typeText: "deck.ally.bite2.typeText",
  title: "deck.ally.bite2.title",
  description: "deck.ally.bite2.description",
  target: Targeting.LeastInjured,
};

const guard: Card = {
  id: "guard",
  type: CardType.Defense,
  typeText: "deck.ally.guard.typeText",
  title: "deck.ally.guard.title",
  description: "deck.ally.guard.description",
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

export const allyDeck: Deck = {
  type: DeckType.Ally,
  cards: [
    punch1,
    punch2,
    bite1,
    bite2,
    guard,
    special11,
    special12,
    special21,
    special22,
  ],
};
