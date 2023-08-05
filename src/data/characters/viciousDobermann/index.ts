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
  id: "viciousDobermann",
  name: translationStrings.characters.viciousDobermann.name,
  image: image,
  number: 6,
  combatDeck: DeckType.Animal,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 4,
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
          name: translationStrings.characters.viciousDobermann.special1.name,
          description:
            translationStrings.characters.viciousDobermann.special1.description,
        },
      ],
    },
  ],
} as CharacterStorage;
