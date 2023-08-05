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
  id: "william",
  name: translationStrings.characters.william.name,
  image: image,
  number: 25,
  combatDeck: DeckType.Boss2,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
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
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      attack: {
        [NumberOfPlayers.One]: 5,
        [NumberOfPlayers.Two]: 5,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
      },
      resistance: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      specials: [
        {
          name: translationStrings.characters.william.special1.name,
          description:
            translationStrings.characters.william.special1.description,
        },
        {
          name: translationStrings.characters.william.special2.name,
          description:
            translationStrings.characters.william.special2.description,
        },
      ],
    },
  ],
} as CharacterStorage;
