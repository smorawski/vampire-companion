import { useCallback, useContext } from "react";
import { ScenarioContext } from "../../../context/scenarioContext";
import CrossIcon from "../../Icons/Cross";
import MenuButton from "./MenuItem";

interface RemoveProps {
  characterId: string;
}

const Remove = ({ characterId }: RemoveProps) => {
  const { removeCharacter } = useContext(ScenarioContext);

  const handleChange = useCallback(() => {
    removeCharacter(characterId);
  }, [characterId, removeCharacter]);

  return (
    <MenuButton onClick={handleChange} label="character.menu.remove">
      <CrossIcon width="40px" />
    </MenuButton>
  );
};

export default Remove;
