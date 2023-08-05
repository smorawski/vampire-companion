import translationStrings from "../../translationStrings";
import image from "./image.png";

import {
  DeckType,
  Attitude,
  NumberOfPlayers,
  EventType,
  Targeting,
  CharacterStorage,
} from "../../types";

export default {
  id: "sylvester",
  name: translationStrings.characters.sylvester.name,
  image: image,
  number: 83,
  combatDeck: DeckType.Vampire,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 5,
      movement: 2,
      targeting: Targeting.HighestInitiative,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          10: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Two]: {
          10: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Three]: {
          12: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          14: {
            type: EventType.Death,
          },
        },
      },
      initiative: {
        [NumberOfPlayers.One]: 1,
        [NumberOfPlayers.Two]: 1,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      attack: {
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      resistance: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 4,
        [NumberOfPlayers.Four]: 4,
      },
      specials: [
        {
          name: translationStrings.characters.sylvester.special1.name,
          description:
            translationStrings.characters.sylvester.special1.description,
        },
        {
          name: translationStrings.characters.sylvester.special2.name,
          description:
            translationStrings.characters.sylvester.special2.description,
        },
      ],
    },
  ],
} as CharacterStorage;
