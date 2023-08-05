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
  id: "2ndShamblingRisenDead",
  name: translationStrings.characters["2ndShamblingRisenDead"].name,
  image: image,
  number: 31,
  combatDeck: DeckType.Animal,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 2,
      movement: 1,
      targeting: Targeting.HighestInitiative,
      healthThreshold: {
        [NumberOfPlayers.One]: {
          4: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Two]: {
          4: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Three]: {
          6: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          8: {
            type: EventType.Death,
          },
        },
      },
      initiative: {
        [NumberOfPlayers.One]: 1,
        [NumberOfPlayers.Two]: 1,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      attack: {
        [NumberOfPlayers.One]: 1,
        [NumberOfPlayers.Two]: 1,
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
          name: translationStrings.characters["2ndShamblingRisenDead"].special1
            .name,
          description:
            translationStrings.characters["2ndShamblingRisenDead"].special1
              .description,
        },
      ],
    },
  ],
} as CharacterStorage;
