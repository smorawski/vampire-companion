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
  id: "1stSIAgent",
  name: translationStrings.characters["1stSIAgent"].name,
  image: image,
  number: 15,
  combatDeck: DeckType.Authority,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 2,
      movement: 2,
      targeting: Targeting.HighestInitiative,
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
          10: {
            type: EventType.Death,
          },
        },
        [NumberOfPlayers.Four]: {
          12: {
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
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
        [NumberOfPlayers.Three]: 2,
        [NumberOfPlayers.Four]: 2,
      },
      specials: [
        {
          name: translationStrings.characters["1stSIAgent"].special1.name,
          description:
            translationStrings.characters["1stSIAgent"].special1.description,
        },
        {
          name: translationStrings.characters["1stSIAgent"].special2.name,
          description:
            translationStrings.characters["1stSIAgent"].special2.description,
        },
      ],
    },
  ],
} as CharacterStorage;
