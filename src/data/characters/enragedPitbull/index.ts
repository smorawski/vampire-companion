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
  id: "enragedPitbull",
  name: translationStrings.characters.enragedPitbull.name,
  image: image,
  number: 7,
  combatDeck: DeckType.Animal,
  attitude: Attitude.Aggresive,
  phases: [
    {
      lineOfSight: 3,
      movement: 4,
      targeting: Targeting.Closest,
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
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 4,
        [NumberOfPlayers.Four]: 4,
      },
      attack: {
        [NumberOfPlayers.One]: 3,
        [NumberOfPlayers.Two]: 3,
        [NumberOfPlayers.Three]: 4,
        [NumberOfPlayers.Four]: 4,
      },
      resistance: {
        [NumberOfPlayers.One]: 0,
        [NumberOfPlayers.Two]: 0,
        [NumberOfPlayers.Three]: 0,
        [NumberOfPlayers.Four]: 0,
      },
      specials: [
        {
          name: translationStrings.characters.enragedPitbull.special1.name,
          description:
            translationStrings.characters.enragedPitbull.special1.description,
        },
      ],
    },
  ],
} as CharacterStorage;
