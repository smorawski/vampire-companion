import { useCallback, useContext } from "react";
import RefreshIcon from "../../Icons/Refresh";
import { ScenarioContext } from "../../../context/scenarioContext";

interface ChangePhaseProps {
  characterId: string;
}

const ChangePhase = ({ characterId }: ChangePhaseProps) => {
  const { changeCharacterPhase } = useContext(ScenarioContext);

  const handleChange = useCallback(() => {
    changeCharacterPhase(characterId);
  }, [characterId, changeCharacterPhase]);

  return (
    <div style={{ cursor: "pointer" }} onClick={handleChange}>
      <RefreshIcon width="40px" />
    </div>
  );
};

export default ChangePhase;
