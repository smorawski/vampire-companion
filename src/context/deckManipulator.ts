import { Card } from "../data/types";
import { shuffleArray } from "../utils/shuffleArray";

export type DeckState = {
  deck: Array<Card>;
  discard: Array<Card>;
  inUse: Array<Card>;
};

export const createDeck = (cards: Array<Card>): DeckState => {
  return {
    deck: shuffleArray(cards),
    inUse: [],
    discard: [],
  };
};

export const discardCard = (card: Card, deckState: DeckState): DeckState => {
  return {
    deck: deckState.deck.filter(({ id }) => id !== card.id),
    inUse: deckState.inUse.filter(({ id }) => id !== card.id),
    discard: [...deckState.discard, card],
  };
};

export const drawCard = (card: Card, deckState: DeckState): DeckState => {
  return {
    deck: deckState.deck.filter(({ id }) => id !== card.id),
    inUse: [...deckState.inUse, card],
    discard: deckState.discard.filter(({ id }) => id !== card.id),
  };
};

export const shuffleCard = (card: Card, deckState: DeckState): DeckState => {
  return {
    deck: shuffleArray([...deckState.deck, card]),
    inUse: deckState.inUse.filter(({ id }) => id !== card.id),
    discard: deckState.discard.filter(({ id }) => id !== card.id),
  };
};

export const reshuffleDeck = (deckState: DeckState): DeckState => {
  return {
    deck: shuffleArray([...deckState.deck, ...deckState.discard]),
    inUse: deckState.inUse,
    discard: [],
  };
};

export default {
  createDeck,
  discardCard,
  drawCard,
  shuffleCard,
  reshuffleDeck,
};
