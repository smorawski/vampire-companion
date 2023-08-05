import { useCallback, useState } from "react";
import Card from "../Card/Card";
import PlusIcon from "../Icons/Plus";

import styles from "./AddCharacter.module.css";
import AddCharacterModal from "./AddCharacterModal";

const AddCharacter = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = useCallback(() => {
    setModalVisible(true);
  }, [setModalVisible]);

  const hideModal = useCallback(() => {
    setModalVisible(false);
  }, [setModalVisible]);

  return (
    <div className={styles.container}>
      <Card onClick={() => showModal()}>
        <PlusIcon color="#541115" width="100px" height="100px" />
      </Card>

      {modalVisible && <AddCharacterModal onClose={hideModal} />}
    </div>
  );
};

export default AddCharacter;
