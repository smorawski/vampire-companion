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
  id: "injuredYuma",
  name: translationStrings.characters.injuredYuma.name,
  image: image,
  number: 71,
  combatDeck: DeckType.Vampire,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 2,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          8: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Two]: {
          8: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Three]: {
          10: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          12: {
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
        [NumberOfPlayers.One]: 4,
        [NumberOfPlayers.Two]: 4,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
      },
      resistance: {
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      specials: [
        {
          name: translationStrings.characters.injuredYuma.special1.name,
          description:
            translationStrings.characters.injuredYuma.special1.description,
        },
        {
          name: translationStrings.characters.injuredYuma.special2.name,
          description:
            translationStrings.characters.injuredYuma.special2.description,
        },
      ],
    },
  ],
} as CharacterStorage;
