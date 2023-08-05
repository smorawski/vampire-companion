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
  id: "1stSpiderSwarm",
  name: translationStrings.characters["1stSpiderSwarm"].name,
  image: image,
  number: 77,
  combatDeck: DeckType.Animal,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 4,
      movement: 3,
      targeting: Targeting.LowestInitiative,
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
        [NumberOfPlayers.One]: 4,
        [NumberOfPlayers.Two]: 4,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
      },
      attack: {
        [NumberOfPlayers.One]: 1,
        [NumberOfPlayers.Two]: 1,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      resistance: {
        [NumberOfPlayers.One]: 1,
        [NumberOfPlayers.Two]: 1,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      specials: [
        {
          name: translationStrings.characters["1stSpiderSwarm"].special1.name,
          description:
            translationStrings.characters["1stSpiderSwarm"].special1
              .description,
        },
      ],
    },
  ],
} as CharacterStorage;
