import { IntlProvider as OriginalIntlProvider } from "react-intl";
import translations from "./translations";
import { useMemo } from "react";

interface IntlProviderProps {
  children: React.ReactNode;
}

const IntlProvider = ({ children }: IntlProviderProps) => {
  const language = "en";

  const currentMessages = useMemo(() => {
    return translations[language];
  }, [language]);

  return (
    <OriginalIntlProvider
      messages={currentMessages}
      locale={language}
      defaultLocale="en"
    >
      {children}
    </OriginalIntlProvider>
  );
};

export default IntlProvider;
