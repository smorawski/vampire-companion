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
  id: "4thHulkingRisenDead",
  name: translationStrings.characters["4thHulkingRisenDead"].name,
  image: image,
  number: 32,
  combatDeck: DeckType.Animal,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 2,
      movement: 2,
      targeting: Targeting.LowestInitiative,
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
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      attack: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 4,
        [NumberOfPlayers.Four]: 4,
      },
      resistance: {
        [NumberOfPlayers.One]: 1,
        [NumberOfPlayers.Two]: 1,
        [NumberOfPlayers.Three]: 1,
        [NumberOfPlayers.Four]: 1,
      },
      specials: [
        {
          name: translationStrings.characters["4thHulkingRisenDead"].special1
            .name,
          description:
            translationStrings.characters["4thHulkingRisenDead"].special1
              .description,
        },
      ],
    },
  ],
} as CharacterStorage;
