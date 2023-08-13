import styles from "./AppSettings.module.css";
import DrawCards from "./DrawCards";
import Language from "./Language";
import NumberOfPlayers from "./NumberOfPlayers";
import ResetDecks from "./ResetDecks";

const AppSettings = () => {
  return (
    <div className={styles.appStatus}>
      <ResetDecks />
      <DrawCards />
      <NumberOfPlayers />
      <Language />
    </div>
  );
};

export default AppSettings;
