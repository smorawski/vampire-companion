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
  id: "yumaMckenzy",
  name: translationStrings.characters.yumaMckenzy.name,
  image: image,
  number: 8,
  combatDeck: DeckType.Ally,
  attitude: Attitude.Neutral,
  phases: [
    {
      lineOfSight: 3,
      movement: 3,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          14: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Two]: {
          14: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Three]: {
          12: {
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
        [NumberOfPlayers.One]: 6,
        [NumberOfPlayers.Two]: 6,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
      },
      attack: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      resistance: {
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      specials: [
        {
          name: translationStrings.characters.yumaMckenzy.special1.name,
          description:
            translationStrings.characters.yumaMckenzy.special1.description,
        },
        {
          name: translationStrings.characters.yumaMckenzy.special2.name,
          description:
            translationStrings.characters.yumaMckenzy.special2.description,
        },
      ],
    },
  ],
} as CharacterStorage;
