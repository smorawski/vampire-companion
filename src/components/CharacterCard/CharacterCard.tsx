import { useContext, useMemo } from "react";
import CardComponent from "../Card/Card";
import dataProvider, { Card } from "../../data/dataProvider";
import InactivePhaseCard from "./IncativePhaseCard/InactivePhaseCard";
import { ScenarioContext } from "../../context/scenarioContext";
import PhaseCard from "./PhaseCard/PhaseCard";
import styles from "./CharacterCard.module.css";
import CharacterMenu from "./Menu/CharacterMenu";
import CombatCard from "./CombatCard/CombatCard";
import EmptyCombatCard from "./CombatCard/EmptyCombatCard";

interface CharacterCardProps {
  characterId: string;
  wounds: number;
  phase: number;
  card?: Card;
}

const CharacterCard = ({
  characterId,
  phase,
  wounds,
  card,
}: CharacterCardProps) => {
  const { numberOfPlayers } = useContext(ScenarioContext);

  const character = useMemo(() => {
    return dataProvider.getCharacter(characterId, numberOfPlayers);
  }, [characterId, numberOfPlayers]);

  if (!character) {
    // unknown card here
    return <></>;
  }

  const hasMutiplePhases = character?.phases.length > 1;

  const effectivePhase = hasMutiplePhases ? phase : phase - 1;

  return (
    <div className={styles.container}>
      <CardComponent>
        {effectivePhase < 0 ? (
          <InactivePhaseCard
            image={character.image}
            name={character.name}
            number={character.number}
            deckType={character.combatDeck}
            movement={character.phases[0].movement}
            lineOfSight={character.phases[0].lineOfSight}
            attitude={character.attitude}
          />
        ) : (
          <PhaseCard
            movement={character.phases[effectivePhase].movement}
            lineOfSights={character.phases[effectivePhase].lineOfSight}
            target={character.phases[effectivePhase].targeting}
            image={character.image}
            name={character.name}
            attack={character.phases[effectivePhase].attack}
            initiative={character.phases[effectivePhase].initiative}
            resistance={character.phases[effectivePhase].resistance}
            passive={character.phases[effectivePhase].passive}
            specials={character.phases[effectivePhase].specials}
            wounds={wounds}
            healthThresholds={character.phases[effectivePhase].healthThreshold}
            id={characterId}
            maxWounds={character.phases[effectivePhase].maxWounds}
            phase={effectivePhase}
          />
        )}
      </CardComponent>
      <div className={styles.menu}>
        <CharacterMenu characterId={characterId} />
      </div>
      <div className={styles.combatCard}>
        {card ? (
          <CombatCard
            type={card.type}
            typeText={card.typeText}
            title={card.title}
            description={card.description}
            target={card?.target}
          />
        ) : (
          <EmptyCombatCard />
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
