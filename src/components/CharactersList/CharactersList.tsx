import { useContext } from "react";
import { ScenarioContext } from "../../context/scenarioContext";

import styles from "./CharactersList.module.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import AddCharacter from "../AddCharacter/AddCharacter";

const CharactersList = () => {
  const { characters } = useContext(ScenarioContext);

  return (
    <div className={styles.container}>
      {characters.map(({ id, wounds, phase }) => (
        <CharacterCard
          key={id}
          characterId={id}
          wounds={wounds}
          phase={phase}
        />
      ))}

      <AddCharacter />
    </div>
  );
};

export default CharactersList;
