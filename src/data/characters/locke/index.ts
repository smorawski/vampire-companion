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
  id: "locke",
  name: translationStrings.characters.locke.name,
  image: image,
  number: 26,
  combatDeck: DeckType.Boss3,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 5,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          12: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Two]: {
          12: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Three]: {
          14: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          16: {
            type: EventType.Death,
          },
        },
      },
      initiative: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 4,
        [NumberOfPlayers.Four]: 4,
      },
      attack: {
        [NumberOfPlayers.One]: 4,
        [NumberOfPlayers.Two]: 4,
        [NumberOfPlayers.Three]: 4,
        [NumberOfPlayers.Four]: 4,
      },
      resistance: {
        [NumberOfPlayers.One]: 5,
        [NumberOfPlayers.Two]: 5,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
      },
      specials: [
        {
          name: translationStrings.characters.locke.special1.name,
          description: translationStrings.characters.locke.special1.description,
        },
        {
          name: translationStrings.characters.locke.special2.name,
          description: translationStrings.characters.locke.special2.description,
        },
      ],
    },
  ],
} as CharacterStorage;
