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
  id: "2ndRatSwarm",
  name: translationStrings.characters["2ndRatSwarm"].name,
  image: image,
  number: 12,
  combatDeck: DeckType.Animal,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 3,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          4: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Two]: {
          4: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Three]: {
          6: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          8: {
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
        [NumberOfPlayers.One]: 1,
        [NumberOfPlayers.Two]: 1,
        [NumberOfPlayers.Three]: 1,
        [NumberOfPlayers.Four]: 1,
      },
      specials: [
        {
          name: translationStrings.characters["2ndRatSwarm"].special1.name,
          description:
            translationStrings.characters["2ndRatSwarm"].special1.description,
        },
      ],
    },
  ],
} as CharacterStorage;
