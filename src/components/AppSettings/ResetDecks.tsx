import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { ScenarioContext } from "../../context/scenarioContext";

import styles from "./AppSettings.module.css";

const ResetDecks = () => {
  const { resetDecks } = useContext(ScenarioContext);
  return (
    <div onClick={resetDecks} className={styles.button}>
      <FormattedMessage id="appMenu.resetDecks" />
    </div>
  );
};

export default ResetDecks;
