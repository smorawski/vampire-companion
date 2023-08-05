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
  id: "4thWolf",
  name: translationStrings.characters["4thWolf"].name,
  image: image,
  number: 70,
  combatDeck: DeckType.Animal,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 5,
      movement: 2,
      targeting: Targeting.HighestInitiative,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          6: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Two]: {
          6: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Three]: {
          8: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          10: {
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
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      resistance: {
        [NumberOfPlayers.One]: 1,
        [NumberOfPlayers.Two]: 1,
        [NumberOfPlayers.Three]: 1,
        [NumberOfPlayers.Four]: 1,
      },
      specials: [
        {
          name: translationStrings.characters["4thWolf"].special1.name,
          description:
            translationStrings.characters["4thWolf"].special1.description,
        },
      ],
    },
  ],
} as CharacterStorage;
