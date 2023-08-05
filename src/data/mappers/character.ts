import {
  CharacterDisplay,
  CharacterPhaseDisplay,
  CharacterPhaseStorage,
  CharacterStorage,
  NumberOfPlayers,
} from "../types";

export const fromStorageToDisplay = (
  storageCharacter: CharacterStorage,
  numberOfPlayers: NumberOfPlayers
): CharacterDisplay => {
  return {
    name: storageCharacter.name,
    id: storageCharacter.id,
    attitude: storageCharacter.attitude,
    image: storageCharacter.image,
    number: storageCharacter.number,
    combatDeck: storageCharacter.combatDeck,
    phases: storageCharacter.phases.map((phase) =>
      fromPhaseStorageToDisplay(phase, numberOfPlayers)
    ),
  };
};

export const fromPhaseStorageToDisplay = (
  phaseStorage: CharacterPhaseStorage,
  numberOfPlayers: NumberOfPlayers
): CharacterPhaseDisplay => {
  const highestThreshold = Object.keys(
    phaseStorage.healthThreshold[numberOfPlayers]
  )
    .map((key) => parseInt(key))
    .sort((a, b) => b - a)[0];

  return {
    lineOfSight: phaseStorage.lineOfSight,
    movement: phaseStorage.movement,
    targeting: phaseStorage.targeting,
    passive: phaseStorage.passive,
    specials: phaseStorage.specials,
    healthThreshold: phaseStorage.healthThreshold[numberOfPlayers],
    attack: phaseStorage.attack[numberOfPlayers],
    initiative: phaseStorage.initiative[numberOfPlayers],
    resistance: phaseStorage.resistance[numberOfPlayers],
    maxWounds: highestThreshold,
  };
};
