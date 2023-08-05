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
  id: "sabbatPriest",
  name: translationStrings.characters.sabbatPriest.name,
  image: image,
  number: 66,
  combatDeck: DeckType.Boss8,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 2,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          15: {
            type: EventType.Event,
            value: "E.28",
          },
        },
        [NumberOfPlayers.Two]: {
          15: {
            type: EventType.Death,
            value: "E.28",
          },
        },
        [NumberOfPlayers.Three]: {
          15: {
            type: EventType.Death,
            value: "E.28",
          },
        },
        [NumberOfPlayers.Four]: {
          15: {
            type: EventType.Death,
            value: "E.28",
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
          name: translationStrings.characters.sabbatPriest.special1.name,
          description:
            translationStrings.characters.sabbatPriest.special1.description,
        },
        {
          name: translationStrings.characters.sabbatPriest.special2.name,
          description:
            translationStrings.characters.sabbatPriest.special2.description,
        },
      ],
      passive: {
        name: translationStrings.characters.sabbatPriest.passive1.name,
        description:
          translationStrings.characters.sabbatPriest.passive1.description,
      },
    },
    {
      lineOfSight: 3,
      movement: 2,
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
          16: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          18: {
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
          name: translationStrings.characters.sabbatPriest.special3.name,
          description:
            translationStrings.characters.sabbatPriest.special3.description,
        },
        {
          name: translationStrings.characters.sabbatPriest.special4.name,
          description:
            translationStrings.characters.sabbatPriest.special4.description,
        },
      ],
      passive: {
        name: translationStrings.characters.sabbatPriest.passive2.name,
        description:
          translationStrings.characters.sabbatPriest.passive2.description,
      },
    },
  ],
} as CharacterStorage;
