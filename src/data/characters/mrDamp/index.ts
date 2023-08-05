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
  id: "mrDamp",
  name: translationStrings.characters.mrDamp.name,
  image: image,
  number: 23,
  combatDeck: DeckType.Ally,
  attitude: Attitude.Neutral,
  phases: [
    {
      lineOfSight: 3,
      movement: 4,
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
          10: {
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
        [NumberOfPlayers.Three]: 1,
        [NumberOfPlayers.Four]: 1,
      },
      attack: {
        [NumberOfPlayers.One]: 4,
        [NumberOfPlayers.Two]: 4,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      resistance: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      specials: [
        {
          name: translationStrings.characters.mrDamp.special1.name,
          description:
            translationStrings.characters.mrDamp.special1.description,
        },
        {
          name: translationStrings.characters.mrDamp.special2.name,
          description:
            translationStrings.characters.mrDamp.special2.description,
        },
      ],
    },
  ],
} as CharacterStorage;
