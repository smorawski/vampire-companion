import { useContext } from "react";
import { ScenarioContext } from "../../context/scenarioContext";

import styles from "./CharactersList.module.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import AddCharacter from "../AddCharacter/AddCharacter";

const CharactersList = () => {
  const { characters } = useContext(ScenarioContext);

  return (
    <div className={styles.container}>
      {Object.values(characters).map(({ id, wounds, phase, card }) => (
        <CharacterCard
          key={id}
          characterId={id}
          wounds={wounds}
          phase={phase}
          card={card}
        />
      ))}

      <AddCharacter />
    </div>
  );
};

export default CharactersList;
