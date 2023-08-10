import { FormattedMessage, useIntl } from "react-intl";
import CharacterStatistics from "./CharacterStatistics";
import CharacterWounds from "./CharacterWounds";
import {
  HealthThresholdEvent,
  PassiveAbility,
  SpecialAbility,
  Targeting,
} from "../../../data/types";
import CharacterTable from "../CharacterTable";
import MovementIcon from "../../Icons/Movement";
import LineOfSightIcon from "../../Icons/LineOfSight";
import TargetIcon from "../../Icons/Target";

import styles from "./PhaseCard.module.css";
import { useCallback, useContext } from "react";
import { ScenarioContext } from "../../../context/scenarioContext";
import IconWithText from "../../Icons/IconWithText/IconWithText";

interface PhaseCardProps {
  movement: number;
  lineOfSights: number;
  target: Targeting;
  image: string;
  name: string;
  attack: number;
  initiative: number;
  resistance: number;
  passive?: PassiveAbility;
  specials: Array<SpecialAbility>;
  healthThresholds: Record<number, HealthThresholdEvent>;
  wounds: number;
  id: string;
  maxWounds: number;
  phase: number;
}

const PhaseCard = ({
  movement,
  lineOfSights,
  target,
  image,
  name,
  attack,
  initiative,
  resistance,
  passive,
  specials,
  healthThresholds,
  wounds,
  id,
  maxWounds,
  phase,
}: PhaseCardProps) => {
  const intl = useIntl();

  const { woundCharacter, healCharacter } = useContext(ScenarioContext);

  const handleWound = useCallback(() => {
    woundCharacter(id);
  }, [woundCharacter, id]);

  const handleHeal = useCallback(() => {
    healCharacter(id);
  }, [woundCharacter, id]);

  return (
    <div
      className={styles.container}
      style={{
        background: `center no-repeat url(${image})`,
      }}
    >
      <div className={styles.table}>
        <CharacterTable>
          <span>
            <FormattedMessage id={`character.phase${phase + 1}`} />
          </span>
          <IconWithText text={movement}>
            <MovementIcon />
          </IconWithText>
          <IconWithText text={lineOfSights}>
            <LineOfSightIcon />
          </IconWithText>

          <IconWithText text={intl.formatMessage({ id: `target.${target}` })}>
            <TargetIcon />
          </IconWithText>
        </CharacterTable>
      </div>
      <div className={styles.name}>
        <FormattedMessage id={name} />
      </div>

      <div className={styles.stats}>
        <CharacterStatistics
          attack={attack}
          initiative={initiative}
          resistance={resistance}
        />
      </div>

      {passive && (
        <div className={styles.passive}>
          <FormattedMessage id={passive.name} tagName="h2" />
          <p
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: passive.description }),
            }}
          />
        </div>
      )}
      <div className={styles.specials}>
        <h1>Special</h1>
        <div>
          {specials.map((special, index) => (
            <div key={index} className={styles.special}>
              {index > 0 && <hr />}
              <h2>
                {index + 1}. <FormattedMessage id={special.name} />
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: special.description }),
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.wounds}>
        <CharacterWounds
          wounds={wounds}
          maxWounds={maxWounds}
          thresholds={healthThresholds}
          addWound={handleWound}
          removeWound={handleHeal}
        />
      </div>
    </div>
  );
};

export default PhaseCard;
