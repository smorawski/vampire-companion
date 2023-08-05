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
  id: "jimmySmythe2",
  name: translationStrings.characters.jimmySmythe2.name,
  image: image,
  number: 48,
  combatDeck: DeckType.Boss6,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 5,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          17: {
            type: EventType.Event,
            value: "E.10",
          },
        },
        [NumberOfPlayers.Two]: {
          17: {
            type: EventType.Event,
            value: "E.10",
          },
        },
        [NumberOfPlayers.Three]: {
          17: {
            type: EventType.Event,
            value: "E.10",
          },
        },
        [NumberOfPlayers.Four]: {
          17: {
            type: EventType.Event,
            value: "E.10",
          },
        },
      },
      initiative: {
        [NumberOfPlayers.One]: 5,
        [NumberOfPlayers.Two]: 5,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
      },
      attack: {
        [NumberOfPlayers.One]: 5,
        [NumberOfPlayers.Two]: 5,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
      },
      resistance: {
        [NumberOfPlayers.One]: 5,
        [NumberOfPlayers.Two]: 5,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
      },
      specials: [
        {
          name: translationStrings.characters.jimmySmythe2.special1.name,
          description:
            translationStrings.characters.jimmySmythe2.special1.description,
        },
        {
          name: translationStrings.characters.jimmySmythe2.special2.name,
          description:
            translationStrings.characters.jimmySmythe2.special2.description,
        },
      ],
    },
  ],
} as CharacterStorage;
