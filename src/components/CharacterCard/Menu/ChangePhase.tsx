import { useCallback, useContext } from "react";
import RefreshIcon from "../../Icons/Refresh";
import { ScenarioContext } from "../../../context/scenarioContext";
import MenuButton from "./MenuItem";

interface ChangePhaseProps {
  characterId: string;
}

const ChangePhase = ({ characterId }: ChangePhaseProps) => {
  const { changeCharacterPhase } = useContext(ScenarioContext);

  const handleChange = useCallback(() => {
    changeCharacterPhase(characterId);
  }, [characterId, changeCharacterPhase]);

  return (
    <MenuButton onClick={handleChange} label="character.menu.changePhase">
      <RefreshIcon width="40px" />
    </MenuButton>
  );
};

export default ChangePhase;
