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
  id: "archbishop",
  name: translationStrings.characters.archbishop.name,
  image: image,
  number: 65,
  combatDeck: DeckType.Boss7,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 0,
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
        [NumberOfPlayers.Three]: 1,
        [NumberOfPlayers.Four]: 1,
      },
      attack: {
        [NumberOfPlayers.One]: 1,
        [NumberOfPlayers.Two]: 1,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      resistance: {
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      specials: [
        {
          name: translationStrings.characters.archbishop.special1.name,
          description:
            translationStrings.characters.archbishop.special1.description,
        },
        {
          name: translationStrings.characters.archbishop.special2.name,
          description:
            translationStrings.characters.archbishop.special2.description,
        },
      ],
    },
  ],
} as CharacterStorage;
