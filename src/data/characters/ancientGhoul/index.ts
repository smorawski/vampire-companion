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
  id: "ancientGhoul",
  name: translationStrings.characters.ancientGhoul.name,
  image: image,
  number: 82,
  combatDeck: DeckType.Ghoul,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 2,
      targeting: Targeting.Closest,
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
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      specials: [
        {
          name: translationStrings.characters.ancientGhoul.special1.name,
          description:
            translationStrings.characters.ancientGhoul.special1.description,
        },
        {
          name: translationStrings.characters.ancientGhoul.special2.name,
          description:
            translationStrings.characters.ancientGhoul.special2.description,
        },
      ],
    },
  ],
} as CharacterStorage;
