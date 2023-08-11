import { FormattedMessage, useIntl } from "react-intl";
import { CardType, Targeting } from "../../../data/types";
import SmallCard from "../../Card/SmallCard";

import styles from "./CombatCard.module.css";
import TargetIcon from "../../Icons/Target";
import IconWithText from "../../Icons/IconWithText/IconWithText";
import CrossIcon from "../../Icons/Cross";
import { useState } from "react";

interface CombatCardProps {
  typeText?: string;
  title?: string;
  description?: string;
  target?: Targeting;
  type: CardType;
  onDiscard: () => void;
}

const CombatCard = ({
  type,
  title,
  typeText,
  description,
  target,
  onDiscard,
}: CombatCardProps) => {
  const titleString =
    title ||
    (type === CardType.Special1 && "deck.shared.special1.title") ||
    (type === CardType.Special2 && "deck.shared.special2.title");

  const intl = useIntl();

  const [revealed, setRevealed] = useState(false);

  return (
    <SmallCard>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            {typeText && (
              <span className={styles.cardType}>
                {intl.formatMessage({ id: typeText })}
              </span>
            )}
            {titleString && <FormattedMessage id={titleString} tagName="h2" />}
          </div>
          <div onClick={onDiscard}>
            <CrossIcon />
          </div>
        </div>
        <div className={styles.content}>
          {description && (
            <div
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: description }),
              }}
            />
          )}
        </div>
        <div className={styles.target}>
          {target && (
            <IconWithText
              text={intl.formatMessage({
                id: `target.${target}`,
              })}
            >
              <TargetIcon />
            </IconWithText>
          )}
        </div>
        {!revealed && (
          <div
            className={styles.unrevealedOverlay}
            onClick={() => setRevealed(true)}
          >
            <FormattedMessage id="character.combatCard.unrevealed" />
          </div>
        )}
      </div>
    </SmallCard>
  );
};

export default CombatCard;
