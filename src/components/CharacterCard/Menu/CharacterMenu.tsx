import ChangePhase from "./ChangePhase";
import Remove from "./Remove";

import styles from "./CharacterMenu.module.css";
import DrawCard from "./DrawCard";

interface CharacterMenu {
  characterId: string;
}

const CharacterMenu = ({ characterId }: CharacterMenu) => {
  return (
    <div className={styles.container}>
      <ChangePhase characterId={characterId} />
      <DrawCard characterId={characterId} />
      <Remove characterId={characterId} />
    </div>
  );
};

export default CharacterMenu;
