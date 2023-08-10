import { createContext, useCallback, useState } from "react";
import { Card, DeckType, NumberOfPlayers } from "../data/types";
import dataProvider from "../data/dataProvider";
import { shuffleArray } from "../utils/shuffleArray";

interface ScenarioCharacter {
  id: string;
  wounds: number;
  phase: number;
  card?: Card;
}

type DeckState = Record<DeckType, { deck: Array<Card>; discard: Array<Card> }>;

interface ScenarioContext {
  characters: Record<string, ScenarioCharacter>;
  numberOfPlayers: NumberOfPlayers;
  decks: null | DeckState;
  addCharacter: (characterId: string) => void;
  removeCharacter: (characterId: string) => void;
  woundCharacter: (characterId: string) => void;
  healCharacter: (characterId: string) => void;
  changeCharacterPhase: (characterId: string) => void;
  changeNumberOfPlayers: (numberOfPlayers: NumberOfPlayers) => void;
  drawCard: (characterId: string) => void;
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

  const initialDeckState = Object.values(DeckType).reduce((acc, deckType) => {
    const deck = dataProvider.getDeck(deckType);
    if (deck) {
      acc[deckType] = { deck: shuffleArray(deck.cards), discard: [] };
    }
    return acc;
  }, {} as DeckState);

  const [decks, setDecks] = useState<DeckState>(initialDeckState);

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
      delete characters[characterId];
      setCharacters({ ...characters });
    },
    [setCharacters, characters]
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
      const characterDeck = decks[characterData.combatDeck];
      if (!characterDeck) {
        return;
      }

      // reshuffle if no cards available

      const card = { ...characterDeck.deck[0] };

      decks[characterData.combatDeck] = {
        deck: decks[characterData.combatDeck].deck.filter(
          ({ id }) => id !== card.id
        ),
        discard: [...decks[characterData.combatDeck].discard, card],
      };

      setDecks({ ...decks });

      characters[characterId].card = card;

      setCharacters({ ...characters });
      console.log(characters);
      console.log(decks);
    },
    [characters, decks, numberOfPlayers]
  );

  return (
    <ScenarioContext.Provider
      value={{
        decks: decks,
        characters,
        numberOfPlayers,
        addCharacter,
        removeCharacter,
        drawCard,
        woundCharacter,
        healCharacter,
        changeCharacterPhase,
        changeNumberOfPlayers,
      }}
    >
      {children}
    </ScenarioContext.Provider>
  );
};

export default ScenarioContextProvider;
