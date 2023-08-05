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
  id: "bettyDuhamel",
  name: translationStrings.characters.bettyDuhamel.name,
  image: image,
  number: 76,
  combatDeck: DeckType.Vampire,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 1,
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
        [NumberOfPlayers.One]: 4,
        [NumberOfPlayers.Two]: 4,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
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
          name: translationStrings.characters.bettyDuhamel.special1.name,
          description:
            translationStrings.characters.bettyDuhamel.special1.description,
        },
        {
          name: translationStrings.characters.bettyDuhamel.special1.name,
          description:
            translationStrings.characters.bettyDuhamel.special1.description,
        },
      ],
      passive: {
        name: translationStrings.characters.bettyDuhamel.passive1.name,
        description:
          translationStrings.characters.bettyDuhamel.passive1.description,
      },
    },
  ],
} as CharacterStorage;
