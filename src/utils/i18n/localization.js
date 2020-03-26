import * as RNLocalize from 'react-native-localize';
import { __, curry, includes, pathOr } from 'ramda';
import { DICTIONARY, DICTIONARY_LANGS } from './dictionary';
import { CacheManager } from '../cache-manager';

const defaultLang = 'en';
let currentLang = null;

const getCurrentLanguage = () => currentLang;

const isSupportedLanguage = includes(__, DICTIONARY_LANGS);

const setLanguage = async lang => {
  if (!isSupportedLanguage(lang)) return false;
  currentLang = lang;
  await CacheManager.saveCurrentLanguage(lang);
  return true;
};

const getPreferredSystemLanguage = () => {
  // check system languages,
  // and compare them against those supported by this app
  const preferredLocale = RNLocalize.findBestAvailableLanguage(
    DICTIONARY_LANGS
  );
  const preferredLang = preferredLocale.languageTag;
  console.log('getPreferredLanguage', preferredLang);
  return preferredLang;
};

const init = async () => {
  const savedLang = await CacheManager.getCurrentLanguage();
  const langToSet = savedLang || getPreferredSystemLanguage();
  const lang = isSupportedLanguage(langToSet) ? langToSet : defaultLang;

  await setLanguage(lang);
};

const translateWord = curry((lang, group, word) =>
  pathOr(word || '', [lang, group, word], DICTIONARY)
);

const translateWordInCurrentLanguage = curry((group, word) =>
  translateWord(currentLang, group, word)
);

export {
  getCurrentLanguage,
  isSupportedLanguage,
  setLanguage,
  getPreferredSystemLanguage,
  init,
  translateWord,
  translateWordInCurrentLanguage,
};
