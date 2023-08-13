import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { ScenarioContext } from "../../context/scenarioContext";

import styles from "./AppSettings.module.css";

const DrawCards = () => {
  const { drawCards } = useContext(ScenarioContext);
  return (
    <div onClick={drawCards} className={styles.button}>
      <FormattedMessage id="appMenu.drawCards" />
    </div>
  );
};

export default DrawCards;
