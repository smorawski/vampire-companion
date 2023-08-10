import characters from "./characters/characters";
import decks from "./decks/decks";
import { fromStorageToDisplay } from "./mappers/character";
import { DeckType, NumberOfPlayers } from "./types";

export * from "./types";

export default {
  getCharacters: (numberOfPlayers: NumberOfPlayers) =>
    characters.map((character) =>
      fromStorageToDisplay(character, numberOfPlayers)
    ),
  getCharacter: (characterId: string, numberOfPlayers: NumberOfPlayers) => {
    const character = characters.find(
      (character) => character.id === characterId
    );
    if (!character) {
      return null;
    }
    return fromStorageToDisplay(character, numberOfPlayers);
  },
  getDecks: () => {
    return decks;
  },
  getDeck: (deckType: DeckType) => {
    return decks.find((deck) => deck.type === deckType);
  },
};
