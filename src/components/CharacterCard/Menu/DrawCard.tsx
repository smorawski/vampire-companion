import { useCallback, useContext } from "react";
import { ScenarioContext } from "../../../context/scenarioContext";
import CrossIcon from "../../Icons/Cross";
import MenuButton from "./MenuItem";

interface DrawCardProps {
  characterId: string;
}

const DrawCard = ({ characterId }: DrawCardProps) => {
  const { drawCard } = useContext(ScenarioContext);

  const handleDraw = useCallback(() => {
    drawCard(characterId);
  }, [characterId, drawCard]);

  return (
    <MenuButton onClick={handleDraw} label="character.menu.remove">
      <CrossIcon width="40px" />
    </MenuButton>
  );
};

export default DrawCard;
