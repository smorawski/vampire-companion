import { useCallback, useContext, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { Modal } from "react-bootstrap";
import dataProvider from "../../data/dataProvider";
import { ScenarioContext } from "../../context/scenarioContext";

interface AddCharacterModalProps {
  onClose: () => void;
}

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
    <Modal onHide={onClose} show={true}>
      <Modal.Header closeButton />
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
  );
};

export default AddCharacterModal;
