import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { AppGlobals } from '@root/core/app-globals';
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

/* ********************************** MAIN ********************************** */

// eslint-disable-next-line
export const InitScreen = ({ navigation }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const t = useTranslate();

  AppGlobals.init(() => {
    setIsInitialized(true);
  });

  AppGlobals.acceptUpdates();

  // TODO: when we'll finish implementing main screens,
  // uncomment the bellow code for screen navigation:

  // if (isInitialized) {
  //   const currentUser = AppGlobals.getCurrentUser();

  //   if (!currentUser) navigateToScreen(navigation, 'InitProfile');
  //   else
  //     navigateToScreen(navigation, 'Home', {
  //       initialTabName: 'Risk',
  //     });
  // }

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
        {!isInitialized && (
          <View style={styles.loaderWrapper}>
            <View style={styles.loadingIndicatorWrapper}>
              <ActivityIndicator size={32} color="#ffffff" />
              <Text style={styles.loadingText}>
                {t('common', 'Loading...')}
              </Text>
            </View>
          </View>
        )}
        {isInitialized && (
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
              <Text style={styles.currentUserText}>
                Current user: {JSON.stringify(AppGlobals.getCurrentUser())}
              </Text>
            </View>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};
