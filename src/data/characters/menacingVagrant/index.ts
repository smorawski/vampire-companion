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
  id: "menacingVagrant",
  name: translationStrings.characters.menacingVagrant.name,
  image: image,
  number: 58,
  combatDeck: DeckType.Ghoul,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 2,
      targeting: Targeting.LeastInjured,
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
        [NumberOfPlayers.One]: 2,
        [NumberOfPlayers.Two]: 2,
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
          name: translationStrings.characters.menacingVagrant.special1.name,
          description:
            translationStrings.characters.menacingVagrant.special1.description,
        },
      ],
    },
  ],
} as CharacterStorage;
