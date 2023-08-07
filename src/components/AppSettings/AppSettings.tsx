import styles from "./AppSettings.module.css";
import Language from "./Language";
import NumberOfPlayers from "./NumberOfPlayers";

const AppSettings = () => {
  return (
    <div className={styles.appStatus}>
      <NumberOfPlayers />
      <Language />
    </div>
  );
};

export default AppSettings;
