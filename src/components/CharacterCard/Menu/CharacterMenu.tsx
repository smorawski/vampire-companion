import ChangePhase from "./ChangePhase";
import Remove from "./Remove";

import styles from "./CharacterMenu.module.css";

interface CharacterMenu {
  characterId: string;
}

const CharacterMenu = ({ characterId }: CharacterMenu) => {
  return (
    <div className={styles.container}>
      <ChangePhase characterId={characterId} />
      <Remove characterId={characterId} />
    </div>
  );
};

export default CharacterMenu;
