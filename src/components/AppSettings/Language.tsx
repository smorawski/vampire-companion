import React, { useContext } from "react";

import { SupportedLanguages } from "../../translations/translations";
import { LanguageContext } from "../../translations/IntlProvider";

import BritishFlagIcon from "../Icons/Flags/British";
import FrenchFlagIcon from "../Icons/Flags/French";

import Select from "react-select";

const LanguageToIcon: Record<SupportedLanguages, React.ReactNode> = {
  [SupportedLanguages.en]: <BritishFlagIcon />,
  [SupportedLanguages.fr]: <FrenchFlagIcon />,
};

const options = Object.values(SupportedLanguages).map((value) => ({
  value,
  label: LanguageToIcon[value],
}));

const Language = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <Select
      value={options.find(({ value }) => value === language)}
      onChange={(option) => option?.value && setLanguage(option?.value)}
      options={options}
    />
  );
};

export default Language;
