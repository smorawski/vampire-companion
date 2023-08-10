import { Card, CardType, Deck, DeckType, Targeting } from "../types";

const charge1: Card = {
  id: "charge1",
  type: CardType.Attack,
  typeText: "deck.animal.charge1.typeText",
  title: "deck.animal.charge1.title",
  description: "deck.animal.charge1.description",
};

const charge2: Card = {
  id: "charge2",
  type: CardType.Attack,
  typeText: "deck.animal.charge2.typeText",
  title: "deck.animal.charge2.title",
  description: "deck.animal.charge2.description",
  target: Targeting.MostInjured,
};

const tear1: Card = {
  id: "tear1",
  type: CardType.Attack,
  typeText: "deck.animal.tear1.typeText",
  title: "deck.animal.tear1.title",
  description: "deck.animal.tear1.description",
};

const tear2: Card = {
  id: "tear2",
  type: CardType.Attack,
  typeText: "deck.animal.tear2.typeText",
  title: "deck.animal.tear2.title",
  description: "deck.animal.tear2.description",
  target: Targeting.LowestInitiative,
};

const bite1: Card = {
  id: "bite1",
  type: CardType.Attack,
  typeText: "deck.animal.bite1.typeText",
  title: "deck.animal.bite1.title",
  description: "deck.animal.bite1.description",
};

const bite2: Card = {
  id: "bite2",
  type: CardType.Attack,
  typeText: "deck.animal.bite2.typeText",
  title: "deck.animal.bite2.title",
  description: "deck.animal.bite2.description",
  target: Targeting.LeastInjured,
};

const special11: Card = {
  id: "special11",
  type: CardType.Special1,
};

const special12: Card = {
  id: "special12",
  type: CardType.Special1,
};

export const animalDeck: Deck = {
  type: DeckType.Animal,
  cards: [charge1, charge2, tear1, tear2, bite1, bite2, special11, special12],
};
