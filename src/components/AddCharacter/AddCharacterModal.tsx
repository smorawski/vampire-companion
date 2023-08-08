import { useCallback, useContext, useMemo, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import dataProvider from "../../data/dataProvider";
import { ScenarioContext } from "../../context/scenarioContext";
import Modal from "../Modal/Modal";

import styles from "./AddCharacterModal.module.css";

interface AddCharacterModalProps {
  onClose: () => void;
}

const AddCharacterModal = ({ onClose }: AddCharacterModalProps) => {
  const { numberOfPlayers } = useContext(ScenarioContext);
  const { formatMessage } = useIntl();

  const [searchTerm, setSearchTerm] = useState("");

  const characters = useMemo(() => {
    const allCharacters = dataProvider.getCharacters(numberOfPlayers);

    const filteredCharacters = searchTerm
      ? allCharacters.filter(
          ({ number, name }) =>
            number.toString().includes(searchTerm) ||
            formatMessage({ id: name })
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        )
      : allCharacters;
    return filteredCharacters.sort(
      ({ number: numberA }, { number: numberB }) => numberA - numberB
    );
  }, [searchTerm, numberOfPlayers, formatMessage]);

  const { addCharacter } = useContext(ScenarioContext);

  const handleClick = useCallback(
    (characterId: string) => {
      addCharacter(characterId);

      onClose();
    },
    [addCharacter, onClose]
  );

  const Search = useMemo(() => {
    return (
      <input
        value={searchTerm}
        className={styles.searchInput}
        onChange={(event) => setSearchTerm(event?.target.value)}
        placeholder={formatMessage({
          id: "addCharacterModal.search.placeholder",
        })}
      />
    );
  }, [searchTerm, setSearchTerm]);

  return (
    <Modal onClose={onClose} header={Search}>
      {characters.map((character) => {
        return (
          <div
            className={styles.character}
            key={character.id}
            onClick={() => handleClick(character.id)}
          >
            {character.number > 0 && (
              <span className={styles.number}>n&deg;{character.number}</span>
            )}
            <span className={styles.name}>
              <FormattedMessage id={character.name} />
            </span>
          </div>
        );
      })}
    </Modal>
  );
};

export default AddCharacterModal;
