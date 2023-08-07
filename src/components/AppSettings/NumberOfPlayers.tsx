import { useContext } from "react";
import Select from "react-select";

import { ScenarioContext } from "../../context/scenarioContext";
import { NumberOfPlayers as NumberOfPlayersEnum } from "../../data/types";

const options = Object.values(NumberOfPlayersEnum).map((value) => ({
  value,
  label: value,
}));

const NumberOfPlayers = () => {
  const { changeNumberOfPlayers, numberOfPlayers } =
    useContext(ScenarioContext);

  return (
    <Select
      value={options.find(({ value }) => value === numberOfPlayers)}
      onChange={(option) =>
        option?.value && changeNumberOfPlayers(option?.value)
      }
      options={options}
    />
  );
};

export default NumberOfPlayers;
