import { useCallback, useContext, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import Modal from "react-modal";
import dataProvider from "../../data/dataProvider";
import { ScenarioContext } from "../../context/scenarioContext";

interface AddCharacterModalProps {
  onClose: () => void;
}

Modal.setAppElement("#root");

const AddCharacterModal = ({ onClose }: AddCharacterModalProps) => {
  const { numberOfPlayers } = useContext(ScenarioContext);
  const characters = useMemo(
    () => dataProvider.getCharacters(numberOfPlayers),
    []
  );

  const { addCharacter } = useContext(ScenarioContext);

  const handleClick = useCallback(
    (characterId: string) => {
      addCharacter(characterId);
      onClose();
    },
    [addCharacter, onClose]
  );

  return (
    <Modal isOpen={true}>
      <div>
        {characters.map((character) => {
          return (
            <div key={character.id} onClick={() => handleClick(character.id)}>
              <FormattedMessage id={character.name} />
            </div>
          );
        })}
        <div></div>
      </div>
    </Modal>
  );
};

export default AddCharacterModal;
