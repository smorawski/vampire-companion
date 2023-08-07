import styles from "./App.module.css";
import AppSettings from "./components/AppSettings/AppSettings";
import CharactersList from "./components/CharactersList/CharactersList";

function App() {
  return (
    <div className={styles.app}>
      <AppSettings />
      <CharactersList />
    </div>
  );
}

export default App;
