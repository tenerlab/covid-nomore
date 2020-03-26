import { useCallback, useContext } from 'react';
import { LanguageContext } from '@root/utils/i18n';

export const useTranslate = group => {
  const { translate: translateFn } = useContext(LanguageContext);
  const translate = useCallback(group ? translateFn(group) : translateFn, [
    translateFn,
  ]);
  return translate;
};
