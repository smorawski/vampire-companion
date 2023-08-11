import { FormattedMessage } from "react-intl";
import SmallCard from "../../Card/SmallCard";

interface EmptyCombatCardProps {
  onClick: () => void;
}

const EmptyCombatCard = ({ onClick }: EmptyCombatCardProps) => {
  return (
    <SmallCard empty onClick={onClick}>
      <FormattedMessage id="character.combatCard.placeholder" />
    </SmallCard>
  );
};

export default EmptyCombatCard;
