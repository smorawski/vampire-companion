import { FormattedMessage } from "react-intl";
import styles from "./CharacterStatistics.module.css";

interface CharacterStatisticsProps {
  initiative: number;
  attack: number;
  resistance: number;
}

const CharacterStatistics = ({
  initiative,
  attack,
  resistance,
}: CharacterStatisticsProps) => {
  return (
    <div className={styles.container}>
      <p>
        <span className={styles.statistic}>{initiative}</span>
        <FormattedMessage id="statistic.initiative" />
      </p>
      <p>
        <span className={styles.statistic}>{attack}</span>
        <FormattedMessage id="statistic.attack" />
      </p>
      <p>
        <span className={styles.statistic}>{resistance}</span>
        <FormattedMessage id="statistic.resistance" />
      </p>
    </div>
  );
};

export default CharacterStatistics;
