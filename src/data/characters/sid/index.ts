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
  id: "sid",
  name: translationStrings.characters.sid.name,
  image: image,
  number: 27,
  combatDeck: DeckType.Boss4,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 8,
      movement: 0,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          4: {
            type: EventType.Event,
            value: "E.5",
          },
          8: {
            type: EventType.Event,
            value: "E.6",
          },
          12: {
            type: EventType.Event,
            value: "E.7",
          },
          14: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Two]: {
          4: {
            type: EventType.Event,
            value: "E.5",
          },
          8: {
            type: EventType.Event,
            value: "E.6",
          },
          12: {
            type: EventType.Event,
            value: "E.7",
          },
          14: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Three]: {
          4: {
            type: EventType.Event,
            value: "E.5",
          },
          8: {
            type: EventType.Event,
            value: "E.6",
          },
          12: {
            type: EventType.Event,
            value: "E.7",
          },
          14: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          4: {
            type: EventType.Event,
            value: "E.5",
          },
          8: {
            type: EventType.Event,
            value: "E.6",
          },
          12: {
            type: EventType.Event,
            value: "E.7",
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
          name: translationStrings.characters.sid.special1.name,
          description: translationStrings.characters.sid.special1.description,
        },
        {
          name: translationStrings.characters.sid.special2.name,
          description: translationStrings.characters.sid.special2.description,
        },
      ],
      passive: {
        name: translationStrings.characters.sid.passive1.name,
        description: translationStrings.characters.sid.passive1.description,
      },
    },
  ],
} as CharacterStorage;
