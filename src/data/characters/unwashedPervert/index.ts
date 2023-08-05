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
  id: "unwashedPervert",
  name: translationStrings.characters.unwashedPervert.name,
  image: image,
  number: 81,
  combatDeck: DeckType.Human,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 2,
      movement: 2,
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
        [NumberOfPlayers.One]: 1,
        [NumberOfPlayers.Two]: 1,
        [NumberOfPlayers.Three]: 1,
        [NumberOfPlayers.Four]: 1,
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
          name: translationStrings.characters.unwashedPervert.special1.name,
          description:
            translationStrings.characters.unwashedPervert.special1.description,
        },
      ],
    },
  ],
} as CharacterStorage;
