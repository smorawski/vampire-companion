import { FormattedMessage, useIntl } from "react-intl";
import { CardType, Targeting } from "../../../data/types";
import SmallCard from "../../Card/SmallCard";

import styles from "./CombatCard.module.css";
import TargetIcon from "../../Icons/Target";
import IconWithText from "../../Icons/IconWithText/IconWithText";

interface CombatCardProps {
  typeText?: string;
  title?: string;
  description?: string;
  target?: Targeting;
  type: CardType;
}

const CombatCard = ({
  type,
  title,
  typeText,
  description,
  target,
}: CombatCardProps) => {
  const titleString =
    title ||
    (type === CardType.Special1 && "deck.shared.special1.title") ||
    (type === CardType.Special2 && "deck.shared.special2.title");

  const intl = useIntl();

  return (
    <SmallCard>
      <div className={styles.container}>
        <div className={styles.header}>
          {typeText && (
            <span className={styles.cardType}>
              {intl.formatMessage({ id: typeText })}
            </span>
          )}
          {titleString && <FormattedMessage id={titleString} tagName="h2" />}
        </div>
        <div className={styles.content}>
          {description && (
            <p
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
      </div>
    </SmallCard>
  );
};

export default CombatCard;