import { useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { translateWordInCurrentLanguage } from '@root/utils/i18n';
import { useTranslate } from './use-translate';

export const useTranslatedScreenName = screenName => {
  const navigation = useNavigation();
  const translate = useTranslate('screenNames');
  useEffect(() => {
    navigation.setParams({ screenName: translate(screenName) });
  }, [screenName, translate]);
};

export const getScreenName = (navigation, screenName) =>
  navigation.getParam(
    'screenName',
    translateWordInCurrentLanguage('screenNames', screenName)
  );
