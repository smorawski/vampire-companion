import { CardType, Deck, DeckType, Card, Targeting } from "../types";

const punch: Card = {
  id: "punch",
  type: CardType.Attack,
  typeText: "deck.human.punch.typeText",
  title: "deck.human.punch.title",
  description: "deck.human.punch.description",
};

const kneeStrike: Card = {
  id: "kneeStrike",
  type: CardType.Attack,
  typeText: "deck.human.kneeStrike.typeText",
  title: "deck.human.kneeStrike.title",
  description: "deck.human.kneeStrike.description",
};

const kick1: Card = {
  id: "kick1",
  type: CardType.Attack,
  typeText: "deck.human.kick1.typeText",
  title: "deck.human.kick1.title",
  description: "deck.human.kick1.description",
};

const kick2: Card = {
  id: "kick2",
  type: CardType.Attack,
  typeText: "deck.human.kick2.typeText",
  title: "deck.human.kick2.title",
  description: "deck.human.kick2.description",
  target: Targeting.HighestInitiative,
};

const guard: Card = {
  id: "guard",
  type: CardType.Defense,
  typeText: "deck.human.guard.typeText",
  title: "deck.human.guard.title",
  description: "deck.human.guard.description",
};

const special11: Card = {
  id: "special11",
  type: CardType.Special1,
};

const special12: Card = {
  id: "special12",
  type: CardType.Special1,
};

export const humanDeck: Deck = {
  type: DeckType.Human,
  cards: [punch, kneeStrike, kick1, kick2, guard, special11, special12],
};
