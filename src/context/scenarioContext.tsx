import { createContext, useCallback, useState } from "react";
import _cloneDeep from "lodash/cloneDeep";
import { Card, DeckType, NumberOfPlayers } from "../data/types";
import dataProvider from "../data/dataProvider";
import deckManipulator, { DeckState } from "./deckManipulator";

interface ScenarioCharacter {
  id: string;
  wounds: number;
  phase: number;
  card?: Card;
}

export type DecksStates = Record<DeckType, DeckState>;

interface ScenarioContext {
  characters: Record<string, ScenarioCharacter>;
  numberOfPlayers: NumberOfPlayers;
  decks: null | DecksStates;
  addCharacter: (characterId: string) => void;
  removeCharacter: (characterId: string) => void;
  woundCharacter: (characterId: string) => void;
  healCharacter: (characterId: string) => void;
  changeCharacterPhase: (characterId: string) => void;
  changeNumberOfPlayers: (numberOfPlayers: NumberOfPlayers) => void;
  drawCard: (characterId: string) => void;
  discardCard: (characterId: string) => void;
  resetDecks: () => void;
  drawCards: () => void;
}

export const ScenarioContext = createContext<ScenarioContext>({
  characters: {},
  numberOfPlayers: NumberOfPlayers.Four,
  decks: null,
  addCharacter: () => null,
  removeCharacter: () => null,
  woundCharacter: () => null,
  healCharacter: () => null,
  changeCharacterPhase: () => null,
  changeNumberOfPlayers: () => null,
  drawCard: () => null,
  discardCard: () => null,
  resetDecks: () => null,
  drawCards: () => null,
});

interface ScenarioContextProviderProps {
  children: React.ReactNode;
}

const ScenarioContextProvider = ({
  children,
}: ScenarioContextProviderProps) => {
  const [characters, setCharacters] = useState<
    Record<string, ScenarioCharacter>
  >({});

  const [numberOfPlayers, setNumberOfPlayers] = useState(NumberOfPlayers.Four);

  const initializeDeckState = () =>
    Object.values(DeckType).reduce((acc, deckType) => {
      const deck = dataProvider.getDeck(deckType);
      if (deck) {
        acc[deckType] = deckManipulator.createDeck(deck.cards);
      }
      return acc;
    }, {} as DecksStates);

  const [decks, setDecks] = useState<DecksStates>(initializeDeckState());

  const addCharacter = useCallback(
    (characterId: string) => {
      characters[characterId] = { id: characterId, wounds: 0, phase: 0 };
      setCharacters({
        ...characters,
      });
    },
    [setCharacters, characters]
  );

  const removeCharacter = useCallback(
    (characterId: string) => {
      const character = characters[characterId];
      if (character && character.card) {
        discardCard(characterId);
      }
      delete characters[characterId];
      setCharacters({ ...characters });
    },
    [setCharacters, characters, decks]
  );

  const woundCharacter = useCallback(
    (characterId: string) => {
      const characterData = dataProvider.getCharacter(
        characterId,
        numberOfPlayers
      );

      const character = characters[characterId];

      const activePhase =
        characterData?.phases[character.phase] || characterData?.phases[0];
      if (
        characterData &&
        activePhase &&
        activePhase.maxWounds > character.wounds
      ) {
        characters[characterId].wounds++;
        setCharacters({ ...characters });
      }
    },
    [setCharacters, numberOfPlayers, characters]
  );

  const healCharacter = useCallback(
    (characterId: string) => {
      const character = characters[characterId];
      if (character.wounds > 0) {
        characters[characterId].wounds--;
        setCharacters({ ...characters });
      }
    },
    [setCharacters, characters]
  );

  const changeCharacterPhase = useCallback(
    (characterId: string) => {
      characters[characterId].phase =
        characters[characterId].phase === 0 ? 1 : 0;
      setCharacters({ ...characters });
    },
    [setCharacters, characters]
  );

  const changeNumberOfPlayers = useCallback(
    (numberOfPlayers: NumberOfPlayers) => {
      setNumberOfPlayers(numberOfPlayers);
    },
    [setNumberOfPlayers]
  );

  const drawCard = useCallback(
    (characterId: string) => {
      const characterData = dataProvider.getCharacter(
        characterId,
        numberOfPlayers
      );
      if (!characterData) {
        return;
      }
      let characterDeck = _cloneDeep(decks[characterData.combatDeck]);
      if (!characterDeck) {
        return;
      }

      // reshuffle if no cards available
      if (characterDeck.deck.length <= 0) {
        characterDeck = deckManipulator.reshuffleDeck(characterDeck);
      }

      const card = { ...characterDeck.deck[0] };

      const previousCharacterCard = characters[characterId].card;

      // discard previous card
      if (previousCharacterCard) {
        characterDeck = deckManipulator.discardCard(
          previousCharacterCard,
          characterDeck
        );
      }

      characterDeck = deckManipulator.drawCard(card, characterDeck);

      characters[characterId].card = card;

      setDecks({ ...decks, [characterData.combatDeck]: characterDeck });

      setCharacters({ ...characters });
    },
    [characters, decks, numberOfPlayers]
  );

  const discardCard = useCallback(
    (characterId: string) => {
      const cardToDiscard = characters[characterId].card;

      if (!cardToDiscard) {
        return;
      }

      const characterData = dataProvider.getCharacter(
        characterId,
        numberOfPlayers
      );

      if (!characterData) {
        return;
      }

      const characterDeck = decks[characterData.combatDeck];

      if (!characterDeck) {
        return;
      }

      const newDeck = deckManipulator.discardCard(cardToDiscard, characterDeck);

      delete characters[characterId].card;

      setDecks({ ...decks, [characterData.combatDeck]: newDeck });

      setCharacters({ ...characters });
    },
    [characters, decks, setCharacters, setDecks]
  );

  const resetDecks = useCallback(() => {
    setDecks(initializeDeckState());
    const updatedCharacters = Object.keys(characters).reduce(
      (acc, currentKey) => {
        return {
          ...acc,
          [currentKey]: {
            ...characters[currentKey],
            card: undefined,
          },
        };
      },
      {} as Record<string, ScenarioCharacter>
    );
    setCharacters(updatedCharacters);
  }, [characters, setCharacters, setDecks]);

  const drawCards = useCallback(() => {
    const workingDeck = _cloneDeep(decks);
    const workingCharacters = _cloneDeep(characters);
    Object.keys(workingCharacters).forEach((characterId) => {
      const characterData = dataProvider.getCharacter(
        characterId,
        numberOfPlayers
      );
      if (!characterData) {
        return;
      }
      let characterDeck = workingDeck[characterData.combatDeck];
      if (!characterDeck) {
        return;
      }

      // reshuffle if no cards available
      if (characterDeck.deck.length <= 0) {
        characterDeck = deckManipulator.reshuffleDeck(characterDeck);
      }

      const card = { ...characterDeck.deck[0] };

      const previousCharacterCard = workingCharacters[characterId].card;

      // discard previous card
      if (previousCharacterCard) {
        characterDeck = deckManipulator.discardCard(
          previousCharacterCard,
          characterDeck
        );
      }

      characterDeck = deckManipulator.drawCard(card, characterDeck);
      workingDeck[characterData.combatDeck] = characterDeck;

      workingCharacters[characterId].card = card;
    });

    setCharacters(workingCharacters);
    setDecks(workingDeck);
  }, [characters, decks, setCharacters, setDecks]);

  return (
    <ScenarioContext.Provider
      value={{
        decks: decks,
        characters,
        numberOfPlayers,
        addCharacter,
        removeCharacter,
        drawCard,
        discardCard,
        woundCharacter,
        healCharacter,
        changeCharacterPhase,
        changeNumberOfPlayers,
        resetDecks,
        drawCards,
      }}
    >
      {children}
    </ScenarioContext.Provider>
  );
};

export default ScenarioContextProvider;
