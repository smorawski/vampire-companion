export enum DeckType {
  Human = "human",
  Ghoul = "ghoul",
  Animal = "animal",
  Ally = "ally",
  Authority = "authority",
  Vampire = "vampire",
  Boss1 = "boss1",
  Boss2 = "boss2",
  Boss3 = "boss3",
  Boss4 = "boss4",
  Boss5 = "boss5",
  Boss6 = "boss6",
  Boss7 = "boss7",
  Boss8 = "boss8",
}

export enum Attitude {
  Aggresive = "aggresive",
  Neutral = "neutral",
}

export enum NumberOfPlayers {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
}

export enum Targeting {
  Closest = "closest",
  Self = "self",
  MostInjured = "most-injured",
  LeastInjured = "least-injured",
  HighestInitiative = "highest-initiative",
  LowestInitiative = "lowest-initiative",
}

export enum EventType {
  Death = "death",
  Event = "event",
}

export type HealthThresholdEvent = {
  type: EventType;
  value?: string;
};

export type PassiveAbility = {
  name: string;
  description: string;
};

export type SpecialAbility = {
  name: string;
  description: string;
};

export type CharacterPhaseStorage = {
  lineOfSight: number;
  movement: number;
  targeting: Targeting;
  healthThreshold: Record<
    NumberOfPlayers,
    Record<number, HealthThresholdEvent>
  >;
  initiative: Record<NumberOfPlayers, number>;
  attack: Record<NumberOfPlayers, number>;
  resistance: Record<NumberOfPlayers, number>;
  passive?: PassiveAbility;
  specials: Array<SpecialAbility>;
};

export type CharacterStorage = {
  id: string;
  image: string;
  name: string;
  number: number;
  combatDeck: DeckType;
  phases: Array<CharacterPhaseStorage>;
  attitude: Attitude;
};

export type CharacterPhaseDisplay = Pick<
  CharacterPhaseStorage,
  "lineOfSight" | "movement" | "targeting" | "passive" | "specials"
> & {
  healthThreshold: Record<number, HealthThresholdEvent>;
  attack: number;
  initiative: number;
  resistance: number;
  maxWounds: number;
};

export type CharacterDisplay = Pick<
  CharacterStorage,
  "id" | "attitude" | "combatDeck" | "image" | "name" | "number"
> & {
  phases: Array<CharacterPhaseDisplay>;
};
