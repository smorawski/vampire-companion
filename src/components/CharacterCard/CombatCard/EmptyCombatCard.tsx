import { FormattedMessage } from "react-intl";
import SmallCard from "../../Card/SmallCard";

const EmptyCombatCard = () => {
  return (
    <SmallCard empty>
      <FormattedMessage id="character.combatCard.placeholder" />
    </SmallCard>
  );
};

export default EmptyCombatCard;
