import { useState, useCallback } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { CardType, Targeting } from "../../../data/types";
import SmallCard from "../../Card/SmallCard";
import TargetIcon from "../../Icons/Target";
import IconWithText from "../../Icons/IconWithText/IconWithText";
import CrossIcon from "../../Icons/Cross";

import styles from "./CombatCard.module.css";

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

  const triggerRevealed = useCallback(() => {
    setRevealed((previousValue) => !previousValue);
  }, [setRevealed]);

  return (
    <SmallCard>
      <div className={styles.container} onClick={triggerRevealed}>
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
          <div className={styles.unrevealedOverlay}>
            <FormattedMessage id="character.combatCard.revealCard" />
          </div>
        )}
      </div>
    </SmallCard>
  );
};

export default CombatCard;
