import React, { useCallback, useEffect, useState } from 'react';
import * as Localization from './localization';

export const LanguageContext = React.createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const changeLanguage = useCallback(async lang => {
    await Localization.setLanguage(lang);
    setLanguage(lang);
  }, []);
  const translate = useCallback(Localization.translateWord(language), [
    language,
  ]);
  useEffect(() => {
    const initLanguage = async () => {
      await Localization.init();
      setLanguage(Localization.getCurrentLanguage());
    };
    initLanguage();
  }, []);
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};
