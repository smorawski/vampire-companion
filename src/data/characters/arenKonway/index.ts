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
  id: "arenKonway",
  name: translationStrings.characters.arenKonway.name,
  image: image,
  number: 0,
  combatDeck: DeckType.Ally,
  attitude: Attitude.Neutral,
  phases: [
    {
      lineOfSight: 3,
      movement: 4,
      targeting: Targeting.MostInjured,
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
          6: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          4: {
            type: EventType.Death,
          },
        },
      },
      initiative: {
        [NumberOfPlayers.One]: 4,
        [NumberOfPlayers.Two]: 4,
        [NumberOfPlayers.Three]: 4,
        [NumberOfPlayers.Four]: 4,
      },
      attack: {
        [NumberOfPlayers.One]: 4,
        [NumberOfPlayers.Two]: 4,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      resistance: {
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      specials: [
        {
          name: translationStrings.characters.arenKonway.special1.name,
          description:
            translationStrings.characters.arenKonway.special1.description,
        },
        {
          name: translationStrings.characters.arenKonway.special2.name,
          description:
            translationStrings.characters.arenKonway.special2.description,
        },
      ],
      passive: {
        name: translationStrings.characters.arenKonway.passive1.name,
        description:
          translationStrings.characters.arenKonway.passive1.description,
      },
    },
    {
      lineOfSight: 3,
      movement: 5,
      targeting: Targeting.MostInjured,
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
          8: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          6: {
            type: EventType.Death,
          },
        },
      },
      initiative: {
        [NumberOfPlayers.One]: 5,
        [NumberOfPlayers.Two]: 5,
        [NumberOfPlayers.Three]: 4,
        [NumberOfPlayers.Four]: 4,
      },
      attack: {
        [NumberOfPlayers.One]: 5,
        [NumberOfPlayers.Two]: 5,
        [NumberOfPlayers.Three]: 4,
        [NumberOfPlayers.Four]: 4,
      },
      resistance: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      specials: [
        {
          name: translationStrings.characters.arenKonway.special1.name,
          description:
            translationStrings.characters.arenKonway.special1.description,
        },
        {
          name: translationStrings.characters.arenKonway.special2.name,
          description:
            translationStrings.characters.arenKonway.special2.description,
        },
      ],
      passive: {
        name: translationStrings.characters.arenKonway.passive1.name,
        description:
          translationStrings.characters.arenKonway.passive1.description,
      },
    },
  ],
} as CharacterStorage;
