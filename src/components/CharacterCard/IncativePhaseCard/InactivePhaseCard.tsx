import { Attitude, DeckType } from "../../../data/types";

import styles from "./IncavtivePhaseCard.module.css";
import { FormattedMessage } from "react-intl";
import FistIcon from "../../Icons/Fist";
import PalmIcon from "../../Icons/Palm";
import LineOfSightIcon from "../../Icons/LineOfSight";
import MovementIcon from "../../Icons/Movement";
import CharacterImage from "./CharacterIcon";
import CharacterTable from "../CharacterTable";

interface InactivePhaseCardProps {
  image: string;
  name: string;
  number: number;
  deckType: DeckType;
  movement: number;
  lineOfSight: number;
  attitude: Attitude;
}

const InactivePhaseCard = ({
  image,
  name,
  number,
  deckType,
  movement,
  lineOfSight,
  attitude,
}: InactivePhaseCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <CharacterImage source={image} />
      </div>
      <div className={styles.number}>n&deg;{number}</div>
      <div className={styles.name}>
        <FormattedMessage id={name} />
      </div>
      <div>
        <CharacterTable>
          {deckType}
          <span>
            <MovementIcon />
            &nbsp;
            {movement}
          </span>
          <span>
            <LineOfSightIcon />
            &nbsp;
            {lineOfSight}
          </span>
          <span>
            {attitude === Attitude.Aggresive ? <FistIcon /> : <PalmIcon />}
          </span>
        </CharacterTable>
      </div>
    </div>
  );
};

export default InactivePhaseCard;
