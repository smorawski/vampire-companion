import { useContext } from "react";
import Select from "react-select";

import { ScenarioContext } from "../../context/scenarioContext";
import { NumberOfPlayers as NumberOfPlayersEnum } from "../../data/types";
import IconWithText from "../Icons/IconWithText/IconWithText";
import PlayersIcon from "../Icons/Players";

const options = Object.values(NumberOfPlayersEnum).map((value) => ({
  value,
  label: (
    <IconWithText text={value}>
      <PlayersIcon />
    </IconWithText>
  ),
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
