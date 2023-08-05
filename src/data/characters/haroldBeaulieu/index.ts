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
  id: "haroldBeaulieu",
  name: translationStrings.characters.haroldBeaulieu.name,
  image: image,
  number: 0,
  combatDeck: DeckType.Ally,
  attitude: Attitude.Neutral,
  phases: [
    {
      lineOfSight: 3,
      movement: 2,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          6: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Two]: {
          6: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Three]: {
          4: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          2: {
            type: EventType.Death,
          },
        },
      },
      initiative: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      attack: {
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
        [NumberOfPlayers.Three]: 1,
        [NumberOfPlayers.Four]: 1,
      },
      resistance: {
        [NumberOfPlayers.One]: 1,
        [NumberOfPlayers.Two]: 1,
        [NumberOfPlayers.Three]: 1,
        [NumberOfPlayers.Four]: 1,
      },
      specials: [
        {
          name: translationStrings.characters.haroldBeaulieu.special1.name,
          description:
            translationStrings.characters.haroldBeaulieu.special1.description,
        },
        {
          name: translationStrings.characters.haroldBeaulieu.special2.name,
          description:
            translationStrings.characters.haroldBeaulieu.special2.description,
        },
      ],
      passive: {
        name: translationStrings.characters.haroldBeaulieu.passive1.name,
        description:
          translationStrings.characters.haroldBeaulieu.passive1.description,
      },
    },
    {
      lineOfSight: 3,
      movement: 2,
      targeting: Targeting.Closest,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          6: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Two]: {
          6: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Three]: {
          4: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          2: {
            type: EventType.Death,
          },
        },
      },
      initiative: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      attack: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      resistance: {
        [NumberOfPlayers.One]: 1,
        [NumberOfPlayers.Two]: 1,
        [NumberOfPlayers.Three]: 1,
        [NumberOfPlayers.Four]: 1,
      },
      specials: [
        {
          name: translationStrings.characters.haroldBeaulieu.special1.name,
          description:
            translationStrings.characters.haroldBeaulieu.special1.description,
        },
        {
          name: translationStrings.characters.haroldBeaulieu.special2.name,
          description:
            translationStrings.characters.haroldBeaulieu.special2.description,
        },
      ],
      passive: {
        name: translationStrings.characters.haroldBeaulieu.passive1.name,
        description:
          translationStrings.characters.haroldBeaulieu.passive1.description,
      },
    },
  ],
} as CharacterStorage;
