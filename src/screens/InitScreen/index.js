import React from 'react';
import { Image, Text, TouchableOpacity, StatusBar, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { CacheManager } from '@root/utils/cache-manager';
import { useTranslate } from '@root/hooks';
import { styles } from './styles';

const imgLogoTop = require('@root/images/logo.top.png');

let initState = 'not_initialized'; // eslint-disable-line no-unused-vars

/* ********************************** UTILS ********************************* */

// eslint-disable-next-line no-unused-vars
const navigateToScreen = async (navigation, screenName, screenParams = {}) => {
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

  // TODO: check if navigation.dispatch still works as of react-navigation/native 5.0+
};

/* ********************************** INIT ********************************** */

// eslint-disable-next-line no-unused-vars
const InitUser = async navigation => {
  CacheManager.getCurrentUser(async cachedUser => {
    if (cachedUser && cachedUser.id) {
      initState = 'initialized';
      navigateToScreen(navigation, 'InitProfile', { currentUser: cachedUser });
    } else {
      // if there is no user data in local storage,
      // clear all user related local data (including messages and conversations)
      // note: that data is cleared on logout; but we are also deleting it here to double proof
      await CacheManager.clearAllLocalData();
      initState = 'initialized';
      navigateToScreen(navigation, 'Home', {
        initialTabName: 'Risk',
      });
    }
  });
};

// TODO: when accessing InitScreen, initialize required variables like currentUser,
// and nav either to InitProfile (if there is no user data in localStorage),
// or nav to Home screen
// Q: pass currentUser and setCurrentUser as props or via global. ?

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
              style={styles.btnSpecial}
              onPress={() => {
                console.log('onPress');
                navigateToScreen(navigation, 'InitProfile', {});
              }}
            >
              <Text style={styles.btnText}>
                {t('ScreenNames', 'Init Profile')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                console.log('onPress');
                navigateToScreen(navigation, 'Home', {
                  initialTabName: 'Risk',
                });
              }}
            >
              <Text style={styles.btnText}>
                {t('ScreenNames', 'Home > Risk')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                console.log('onPress');
                navigateToScreen(navigation, 'Home', {
                  initialTabName: 'Symptoms',
                });
              }}
            >
              <Text style={styles.btnText}>
                {t('ScreenNames', 'Home > Symptoms')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                console.log('onPress');
                navigateToScreen(navigation, 'Home', {
                  initialTabName: 'Location',
                });
              }}
            >
              <Text style={styles.btnText}>
                {t('ScreenNames', 'Home > Location')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                console.log('onPress');
                navigateToScreen(navigation, 'Home', {
                  initialTabName: 'Profile',
                });
              }}
            >
              <Text style={styles.btnText}>
                {t('ScreenNames', 'Home > Profile')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnSpecial}
              onPress={() => {
                console.log('onPress');
                navigateToScreen(navigation, 'Risk', {});
              }}
            >
              <Text style={styles.btnText}>
                {t('ScreenNames', 'Risk > Direct')}
              </Text>
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
