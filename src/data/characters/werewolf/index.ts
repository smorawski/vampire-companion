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
  id: "werewolf",
  name: translationStrings.characters.werewolf.name,
  image: image,
  number: 22,
  combatDeck: DeckType.Boss1,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 4,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          15: {
            type: EventType.Event,
            value: "E.6",
          },
        },
        [NumberOfPlayers.Two]: {
          15: {
            type: EventType.Death,
            value: "E.6",
          },
        },
        [NumberOfPlayers.Three]: {
          15: {
            type: EventType.Death,
            value: "E.6",
          },
        },
        [NumberOfPlayers.Four]: {
          15: {
            type: EventType.Death,
            value: "E.6",
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
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
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
          name: translationStrings.characters.werewolf.special1.name,
          description:
            translationStrings.characters.werewolf.special1.description,
        },
        {
          name: translationStrings.characters.werewolf.special2.name,
          description:
            translationStrings.characters.werewolf.special2.description,
        },
      ],
    },
    {
      lineOfSight: 4,
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
        [NumberOfPlayers.One]: 4,
        [NumberOfPlayers.Two]: 4,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
      },
      attack: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
      },
      resistance: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 4,
        [NumberOfPlayers.Four]: 4,
      },
      specials: [
        {
          name: translationStrings.characters.werewolf.special3.name,
          description:
            translationStrings.characters.werewolf.special3.description,
        },
        {
          name: translationStrings.characters.werewolf.special4.name,
          description:
            translationStrings.characters.werewolf.special4.description,
        },
      ],
    },
  ],
} as CharacterStorage;
