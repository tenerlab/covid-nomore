import React from 'react';
import { Image, StatusBar, View } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { AppGlobals } from '@root/core/app-globals';
import { styles } from './styles';

const minimumTimeToShowInitScreen = 1000;
const imgLogo = require('@root/images/logo.png');

/* ********************************** UTILS ********************************* */

// eslint-disable-next-line no-unused-vars
const navigateToScreen = async (navigation, screenName, screenParams = {}) => {
  navigation.navigate(screenName, screenParams);
};

// this method will replace current screen in nav stack with screenName,
// such that user wan't be able to go Back here
const navigateToScreenAndReplace = async (
  navigation,
  screenName,
  screenParams = {}
) => {
  navigation.dispatch(StackActions.replace(screenName, screenParams));
};

/* ********************************** MAIN ********************************** */

// eslint-disable-next-line
export const InitScreen = ({ navigation }) => {
  let initStartTimestamp = Date.now();

  AppGlobals.init(() => {
    let currentTimestamp = Date.now();
    let initTimeTotal = currentTimestamp - initStartTimestamp;
    let delay = Math.max(0, minimumTimeToShowInitScreen - initTimeTotal);

    setTimeout(async () => {
      navigateToScreenAndReplace(navigation, 'Welcome', {});
    }, delay); // note: in remote debug mode this may fire immediately due to clock missmatch
  });

  AppGlobals.acceptUpdates();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
      <View>
        <View style={styles.imgWrapper}>
          <Image style={styles.imgLogo} source={imgLogo} />
        </View>
      </View>
    </View>
  );
};
