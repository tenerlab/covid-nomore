import React from 'react';
import { Image, Text, TouchableOpacity, StatusBar, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppGlobals } from '@root/core/app-globals';
import { useTranslate } from '@root/hooks';
import { styles } from './styles';

const imgLogo = require('@root/images/logo.png');

/* ********************************** UTILS ********************************* */

const navigateToScreen = async (navigation, screenName, screenParams = {}) => {
  navigation.navigate(screenName, screenParams);
};

/* ********************************** MAIN ********************************** */

// eslint-disable-next-line
export const InfoScreen = ({ navigation }) => {
  const t = useTranslate();

  AppGlobals.acceptUpdates();

  return (
    <LinearGradient
      style={styles.container}
      colors={['#03A1E9', '#0183D3', '#0063BD']}
    >
      <StatusBar barStyle="light-content" backgroundColor="#03A1E9" />
      <View>
        <View style={styles.imgWrapper}>
          <Image style={styles.imgLogo} source={imgLogo} />
        </View>
        <View style={styles.tempTextsWrapper}>
          <Text style={styles.tempTextBig}>Official Information</Text>
          <Text style={styles.tempText}>
            Any official updates will be posted here
          </Text>
          <Text style={styles.tempText}>
            Temporary using this screen for nav shortcuts
          </Text>
        </View>
        <View style={styles.btnContainerWrapper}>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnSpecial}
              onPress={() => {
                navigateToScreen(navigation, 'Welcome', {});
              }}
            >
              <Text style={styles.btnText}>{t('ScreenNames', 'Welcome')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnSpecial}
              onPress={() => {
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
                navigateToScreen(navigation, 'Profile', {});
              }}
            >
              <Text style={styles.btnText}>{t('ScreenNames', 'Profile')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigateToScreen(navigation, 'Risk', {});
              }}
            >
              <Text style={styles.btnText}>{t('ScreenNames', 'Risk')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigateToScreen(navigation, 'Symptoms', {});
              }}
            >
              <Text style={styles.btnText}>{t('ScreenNames', 'Symptoms')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <Text style={styles.currentUserText}>
              Current user: {JSON.stringify(AppGlobals.getCurrentUser())}
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
