import React from 'react';
import { Image, Text, TouchableOpacity, StatusBar, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslate } from '@root/hooks';
import { styles } from './styles';

const imgLogoTop = require('@root/images/logo.top.png');
// const imgLogoBottom = require('@root/images/logo.bottom.png');

/* ********************************** UTILS ********************************* */

// eslint-disable-next-line no-unused-vars
const navigateToScreen = async (navigation, screenName, screenParams = {}) => {
  console.log('navigateToScreen', screenName);
  navigation.navigate(screenName, screenParams);
};

// eslint-disable-next-line no-unused-vars
const navigateToScreenAndReset = async (
  navigation,
  screenName,
  screenParams = {}
) => {
  // this method will remove current screen from stack, such that user wan't be able to go Back to it
  const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: screenName,
        params: screenParams,
      }),
    ],
  });
  navigation.dispatch(resetAction);
};

/* ********************************** MAIN ********************************** */

// eslint-disable-next-line
export const InitScreen = ({ navigation }) => {
  const t = useTranslate();
  return (
    <LinearGradient
      style={styles.container}
      colors={['#03A1E9', '#0183D3', '#0063BD']}
    >
      <StatusBar barStyle="light-content" backgroundColor="#03A1E9" />
      <View>
        <View style={styles.imgWrapper}>
          <Image style={styles.imgLogoTop} source={imgLogoTop} />
        </View>
        {/*
        <View style={styles.loaderWrapper}>
          <View style={styles.loadingIndicatorWrapper}>
            <ActivityIndicator size={32} color="#ffffff" />
            <Text style={styles.loadingText}>{t('common', 'Loading...')}</Text>
          </View>
        </View>
        */}
        <View style={styles.btnContainerWrapper}>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                console.log('onPress');
                navigateToScreen(navigation, 'RiskScreen', {});
              }}
            >
              <Text style={styles.btnText}>{t('ScreenNames', 'Risk')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                console.log('onPress');
                navigateToScreen(navigation, 'SymptomsScreen', {});
              }}
            >
              <Text style={styles.btnText}>{t('ScreenNames', 'Symptoms')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                console.log('onPress');
                navigateToScreen(navigation, 'LocationScreen', {});
              }}
            >
              <Text style={styles.btnText}>{t('ScreenNames', 'Location')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                console.log('onPress');
                navigateToScreen(navigation, 'ProfileScreen', {});
              }}
            >
              <Text style={styles.btnText}>{t('ScreenNames', 'Profile')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

InitScreen.navigationOptions = {
  header: null, // hide header
};
