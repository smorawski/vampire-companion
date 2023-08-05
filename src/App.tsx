import styles from "./App.module.css";
import CharactersList from "./components/CharactersList/CharactersList";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className={styles.app}>
      <CharactersList />
    </div>
  );
}

export default App;
