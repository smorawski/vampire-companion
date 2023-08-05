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
  id: "ella",
  name: translationStrings.characters.ella.name,
  image: image,
  number: 29,
  combatDeck: DeckType.Boss5,
  attitude: Attitude.Neutral,
  phases: [
    {
      lineOfSight: 3,
      movement: 5,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          4: {
            type: EventType.Event,
            value: "E.9",
          },
          12: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Two]: {
          4: {
            type: EventType.Event,
            value: "E.9",
          },
          12: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Three]: {
          4: {
            type: EventType.Event,
            value: "E.9",
          },
          12: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          4: {
            type: EventType.Event,
            value: "E.9",
          },
          12: {
            type: EventType.Death,
          },
        },
      },
      initiative: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      attack: {
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      resistance: {
        [NumberOfPlayers.One]: 5,
        [NumberOfPlayers.Two]: 5,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
      },
      specials: [
        {
          name: translationStrings.characters.ella.special1.name,
          description: translationStrings.characters.ella.special1.description,
        },
        {
          name: translationStrings.characters.ella.special2.name,
          description: translationStrings.characters.ella.special2.description,
        },
      ],
      passive: {
        name: translationStrings.characters.ella.passive1.name,
        description: translationStrings.characters.ella.passive1.description,
      },
    },
    {
      lineOfSight: 3,
      movement: 1,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          8: {
            type: EventType.Event,
            value: "E.8",
          },
        },
        [NumberOfPlayers.Two]: {
          8: {
            type: EventType.Event,
            value: "E.8",
          },
        },
        [NumberOfPlayers.Three]: {
          8: {
            type: EventType.Event,
            value: "E.8",
          },
        },
        [NumberOfPlayers.Four]: {
          8: {
            type: EventType.Event,
            value: "E.8",
          },
        },
      },
      initiative: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      attack: {
        [NumberOfPlayers.One]: 5,
        [NumberOfPlayers.Two]: 5,
        [NumberOfPlayers.Three]: 5,
        [NumberOfPlayers.Four]: 5,
      },
      resistance: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
      },
      specials: [
        {
          name: translationStrings.characters.ella.special3.name,
          description: translationStrings.characters.ella.special3.description,
        },
        {
          name: translationStrings.characters.ella.special4.name,
          description: translationStrings.characters.ella.special4.description,
        },
      ],
      passive: {
        name: translationStrings.characters.ella.passive1.name,
        description: translationStrings.characters.ella.passive1.description,
      },
    },
  ],
} as CharacterStorage;
