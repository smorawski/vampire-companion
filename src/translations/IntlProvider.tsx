import { IntlProvider as OriginalIntlProvider } from "react-intl";
import translations, { SupportedLanguages } from "./translations";
import { useMemo, createContext, useState } from "react";

interface IntlProviderProps {
  children: React.ReactNode;
}

interface LanguageContext {
  language: SupportedLanguages;
  setLanguage: (language: SupportedLanguages) => void;
}

export const LanguageContext = createContext<LanguageContext>({
  language: SupportedLanguages.en,
  setLanguage: () => null,
});

const IntlProvider = ({ children }: IntlProviderProps) => {
  const [language, setLanguage] = useState(SupportedLanguages.en);

  const currentMessages = useMemo(() => {
    return translations[language];
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      <OriginalIntlProvider
        messages={currentMessages}
        locale={language}
        defaultLocale="en"
      >
        {children}
      </OriginalIntlProvider>
    </LanguageContext.Provider>
  );
};

export default IntlProvider;
