import { Card, CardType, Deck, DeckType, Targeting } from "../types";

const punch1: Card = {
  id: "punch1",
  type: CardType.Attack,
  typeText: "deck.ghoul.punch1.typeText",
  title: "deck.ghoul.punch1.title",
  description: "deck.ghoul.punch1.description",
};

const punch2: Card = {
  id: "punch2",
  type: CardType.Attack,
  typeText: "deck.ghoul.punch2.typeText",
  title: "deck.ghoul.punch2.title",
  description: "deck.ghoul.punch2.description",
  target: Targeting.MostInjured,
};

const hook1: Card = {
  id: "hook1",
  type: CardType.Attack,
  typeText: "deck.ghoul.hook1.typeText",
  title: "deck.ghoul.hook1.title",
  description: "deck.ghoul.hook1.description",
};

const hook2: Card = {
  id: "hook2",
  type: CardType.Attack,
  typeText: "deck.ghoul.hook2.typeText",
  title: "deck.ghoul.hook2.title",
  description: "deck.ghoul.hook2.description",
  target: Targeting.LowestInitiative,
};

const kick1: Card = {
  id: "kick1",
  type: CardType.Attack,
  typeText: "deck.ghoul.kick1.typeText",
  title: "deck.ghoul.kick1.title",
  description: "deck.ghoul.kick1.description",
};

const kick2: Card = {
  id: "kick2",
  type: CardType.Attack,
  typeText: "deck.ghoul.kick2.typeText",
  title: "deck.ghoul.kick2.title",
  description: "deck.ghoul.kick2.description",
};

const guard: Card = {
  id: "guard",
  type: CardType.Defense,
  typeText: "deck.ghoul.guard.typeText",
  title: "deck.ghoul.guard.title",
  description: "deck.ghoul.guard.description",
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

export const ghoulDeck: Deck = {
  type: DeckType.Ghoul,
  cards: [
    punch1,
    punch2,
    kick1,
    kick2,
    hook1,
    hook2,
    guard,
    special11,
    special12,
    special21,
    special22,
  ],
};
