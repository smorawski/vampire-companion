import { createContext, useCallback, useState } from "react";
import { NumberOfPlayers } from "../data/types";
import dataProvider from "../data/dataProvider";

interface ScenarioCharacter {
  id: string;
  wounds: number;
  phase: number;
}

interface ScenarioContext {
  characters: Array<ScenarioCharacter>;
  numberOfPlayers: NumberOfPlayers;
  addCharacter: (characterId: string) => void;
  removeCharacter: (characterId: string) => void;
  woundCharacter: (characterId: string) => void;
  healCharacter: (characterId: string) => void;
  changeCharacterPhase: (characterId: string) => void;
  changeNumberOfPlayers: (numberOfPlayers: NumberOfPlayers) => void;
}

export const ScenarioContext = createContext<ScenarioContext>({
  characters: [],
  numberOfPlayers: NumberOfPlayers.Four,
  addCharacter: () => null,
  removeCharacter: () => null,
  woundCharacter: () => null,
  healCharacter: () => null,
  changeCharacterPhase: () => null,
  changeNumberOfPlayers: () => null,
});

interface ScenarioContextProviderProps {
  children: React.ReactNode;
}

const ScenarioContextProvider = ({
  children,
}: ScenarioContextProviderProps) => {
  const [characters, setCharacters] = useState<Array<ScenarioCharacter>>([]);

  const [numberOfPlayers, setNumberOfPlayers] = useState(NumberOfPlayers.Four);

  const addCharacter = useCallback(
    (characterId: string) => {
      setCharacters((characters) => {
        return [...characters, { id: characterId, wounds: 0, phase: 0 }];
      });
    },
    [setCharacters]
  );

  const removeCharacter = useCallback(
    (characterId: string) => {
      setCharacters((characters) => {
        return characters.filter(({ id }) => id !== characterId);
      });
    },
    [setCharacters]
  );

  const woundCharacter = useCallback(
    (characterId: string) => {
      setCharacters((characters) => {
        return characters.map((character) => {
          if (character.id !== characterId) {
            return character;
          }
          const characterData = dataProvider.getCharacter(
            characterId,
            numberOfPlayers
          );

          const activePhase =
            characterData?.phases[character.phase] || characterData?.phases[0];
          if (
            !characterData ||
            !activePhase ||
            activePhase.maxWounds <= character.wounds
          ) {
            return character;
          }
          return { ...character, wounds: character.wounds + 1 };
        });
      });
    },
    [setCharacters, numberOfPlayers]
  );

  const healCharacter = useCallback(
    (characterId: string) => {
      setCharacters((characters) =>
        characters.map((character) => {
          if (character.id !== characterId || character.wounds <= 0) {
            return character;
          }
          return { ...character, wounds: character.wounds - 1 };
        })
      );
    },
    [setCharacters]
  );

  const changeCharacterPhase = useCallback(
    (characterId: string) => {
      setCharacters((characters) =>
        characters.map((character) => {
          if (character.id !== characterId) {
            return character;
          }
          return {
            ...character,
            phase: character.phase === 0 ? 1 : 0,
            wounds: 0,
          };
        })
      );
    },
    [characters]
  );

  const changeNumberOfPlayers = useCallback(
    (numberOfPlayers: NumberOfPlayers) => {
      setNumberOfPlayers(numberOfPlayers);
    },
    [setNumberOfPlayers]
  );

  return (
    <ScenarioContext.Provider
      value={{
        characters,
        addCharacter,
        removeCharacter,
        numberOfPlayers,
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
