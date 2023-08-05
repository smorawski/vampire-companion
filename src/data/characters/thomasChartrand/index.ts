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
  id: "thomasChartrand",
  name: translationStrings.characters.thomasChartrand.name,
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
          name: translationStrings.characters.thomasChartrand.special1.name,
          description:
            translationStrings.characters.thomasChartrand.special1.description,
        },
        {
          name: translationStrings.characters.thomasChartrand.special2.name,
          description:
            translationStrings.characters.thomasChartrand.special2.description,
        },
      ],
      passive: {
        name: translationStrings.characters.thomasChartrand.passive1.name,
        description:
          translationStrings.characters.thomasChartrand.passive1.description,
      },
    },
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
        [NumberOfPlayers.Three]: 3,
        [NumberOfPlayers.Four]: 3,
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
          name: translationStrings.characters.thomasChartrand.special1.name,
          description:
            translationStrings.characters.thomasChartrand.special1.description,
        },
        {
          name: translationStrings.characters.thomasChartrand.special2.name,
          description:
            translationStrings.characters.thomasChartrand.special2.description,
        },
      ],
      passive: {
        name: translationStrings.characters.thomasChartrand.passive1.name,
        description:
          translationStrings.characters.thomasChartrand.passive1.description,
      },
    },
  ],
} as CharacterStorage;
