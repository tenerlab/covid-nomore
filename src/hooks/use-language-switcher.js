import { useContext, useMemo } from 'react';
import { always } from 'ramda';
import { DICTIONARY_LANGS, LanguageContext } from '@root/utils/i18n';

export const useLanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const languageSwitcher = useMemo(
    always({ language, changeLanguage, supportedLanguages: DICTIONARY_LANGS }),
    [language, changeLanguage]
  );
  return languageSwitcher;
};
