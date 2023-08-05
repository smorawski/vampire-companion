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
  id: "jimmySmythe",
  name: translationStrings.characters.jimmySmythe.name,
  image: image,
  number: 30,
  combatDeck: DeckType.Boss6,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 5,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          4: {
            type: EventType.Event,
            value: "E.4",
          },
          8: {
            type: EventType.Event,
            value: "E.5",
          },
          12: {
            type: EventType.Event,
            value: "E.9",
          },
          14: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Two]: {
          4: {
            type: EventType.Event,
            value: "E.4",
          },
          8: {
            type: EventType.Event,
            value: "E.5",
          },
          12: {
            type: EventType.Event,
            value: "E.9",
          },
          14: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Three]: {
          4: {
            type: EventType.Event,
            value: "E.4",
          },
          8: {
            type: EventType.Event,
            value: "E.5",
          },
          12: {
            type: EventType.Event,
            value: "E.9",
          },
          14: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          4: {
            type: EventType.Event,
            value: "E.4",
          },
          8: {
            type: EventType.Event,
            value: "E.5",
          },
          12: {
            type: EventType.Event,
            value: "E.9",
          },
          14: {
            type: EventType.Death,
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
          name: translationStrings.characters.jimmySmythe.special1.name,
          description:
            translationStrings.characters.jimmySmythe.special1.description,
        },
        {
          name: translationStrings.characters.jimmySmythe.special2.name,
          description:
            translationStrings.characters.jimmySmythe.special2.description,
        },
      ],
    },
  ],
} as CharacterStorage;
