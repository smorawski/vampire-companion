import { useCallback, useContext } from "react";
import { ScenarioContext } from "../../../context/scenarioContext";
import CrossIcon from "../../Icons/Cross";

interface RemoveProps {
  characterId: string;
}

const Remove = ({ characterId }: RemoveProps) => {
  const { removeCharacter } = useContext(ScenarioContext);

  const handleChange = useCallback(() => {
    removeCharacter(characterId);
  }, [characterId, removeCharacter]);

  return (
    <div style={{ cursor: "pointer" }} onClick={handleChange}>
      <CrossIcon width="40px" />
    </div>
  );
};

export default Remove;
