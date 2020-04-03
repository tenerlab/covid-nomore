import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-simple-toast';
import { useTranslate } from '@root/hooks';
import { AppGlobals } from '@root/core/app-globals';
import { LocationUtils } from '@root/utils/location-utils';
import { styles } from './styles';

const cloneDeep = require('lodash/cloneDeep');

const screenBgImg = require('@root/images/bg.png');

const defaultScoreItemsState = {
  location: false,
  bluetooth: true,
  profile: false,
  questionnaire: false,
};

let scoreItemsInitState = 'not_initialized';

/* ********************************** UTILS ********************************* */

// eslint-disable-next-line no-unused-vars
const navigateToScreen = async (navigation, screenName, screenParams = {}) => {
  navigation.navigate(screenName, screenParams);
};

const updateStateKey = (currentStateData, setStateData, key, newValue) => {
  let newStateData = cloneDeep(currentStateData);
  newStateData[key] = newValue;
  setStateData(newStateData);
};

/* ********************************* EVENTS ********************************* */

const onPressLocationItem = async ({ scoreItemsState, setScoreItemsState }) => {
  if (await LocationUtils.hasLocationPermissions()) {
    Toast.show('Accesul la localizare e deja permis', Toast.SHORT);
    updateStateKey(scoreItemsState, setScoreItemsState, 'location', true);
    return;
  }

  const requestTitle = 'Access locație';
  const requestMessage =
    'Aplicația are nevoie de acces la locație pentru a ști unde și cu cine ați intrat in contact și sa vă notifice daca acea persoana a fost diagnosticata pozitiv.';

  await LocationUtils.requestLocationPermissions(
    ({ permissionIsGranted }) => {
      const val = !!permissionIsGranted;
      updateStateKey(scoreItemsState, setScoreItemsState, 'location', val);
    },
    requestTitle,
    requestMessage
  );
};

const onPressBluetoothItem = () => {
  Toast.show('Accesul la bluetooth e deja permis', Toast.SHORT);
  // we always have bluetooth permissions, if we have added them to AndroidManifest
};

const onPressProfileItem = navigation => {
  navigateToScreen(navigation, 'Profile', {});
};

const onPressQuestionnaireItem = navigation => {
  navigateToScreen(navigation, 'Questionnaire', {});
};

/* ********************************* ACTIONS ******************************** */

const updateScoreItems = async ({ scoreItemsState, setScoreItemsState }) => {
  let newStateData = cloneDeep(scoreItemsState);
  newStateData.location = await LocationUtils.hasLocationPermissions();
  setScoreItemsState(newStateData);
};

const initScoreItems = async ({ scoreItemsState, setScoreItemsState }) => {
  scoreItemsInitState = 'initializing';

  await updateScoreItems({ scoreItemsState, setScoreItemsState });

  scoreItemsInitState = 'initialized';
};

/* ********************************** MAIN ********************************** */

// eslint-disable-next-line
export const HomeScreen = ({ navigation }) => {
  AppGlobals.acceptUpdates();

  const [scoreItemsState, setScoreItemsState] = useState(
    defaultScoreItemsState
  );

  if (scoreItemsInitState == 'not_initialized')
    initScoreItems({ scoreItemsState, setScoreItemsState });

  const t = useTranslate(); // eslint-disable-line no-unused-vars

  // TODO: update dictionary.js and implement translation
  // translation usage example: t('slides', 'some text')

  const iconSize = 42;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#20C1FF" />
      <ImageBackground style={styles.screenBg} source={screenBgImg}>
        <View style={styles.screenPage}>
          <View style={styles.screenHeader}>
            <Text style={styles.titleTexts}>
              <Text style={styles.titleTextCovid}>COVID-19</Text>
              <Text style={styles.titleTextNoMore}> no more</Text>
            </Text>
            <Text style={styles.slogan}>contribue la oprirea răspândirii</Text>
            <View style={styles.scoreBoard}>
              <View style={styles.scoreBlock}>
                <View>
                  <Text style={styles.scoreLabel}>total</Text>
                </View>
                <Text>
                  <Text style={styles.scoreValue}>10</Text>
                  <Text style={styles.scoreUnit}> pct</Text>
                </Text>
              </View>
              <View style={styles.scoreBlock}>
                <View>
                  <Text style={styles.scoreLabel}>astâzi</Text>
                </View>
                <Text>
                  <Text style={styles.scoreValue}>0 / 20</Text>
                  <Text style={styles.scoreUnit}> pct</Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.screenBody}>
            <ScrollView style={styles.scoreItems}>
              <TouchableOpacity
                style={styles.scoreItem}
                onPress={() => {
                  onPressLocationItem({ scoreItemsState, setScoreItemsState });
                }}
              >
                <View style={styles.scoreItemBlock}>
                  <Text style={styles.scoreValue}>10</Text>
                  <Text style={styles.scoreUnit}>pct</Text>
                </View>
                <View style={styles.scoreItemContent}>
                  <Text style={styles.scoreItemTitle}>Access locație</Text>
                  <Text style={styles.scoreItemDescription}>
                    permiteți accesul la localizare
                  </Text>
                </View>
                <View style={styles.scoreItemIconWrap}>
                  {scoreItemsState.location && (
                    <Icon name="check-circle" size={iconSize} color="#75B675" />
                  )}
                  {!scoreItemsState.location && (
                    <Icon name="close-circle" size={iconSize} color="#ED1C24" />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scoreItem}
                onPress={() => {
                  onPressBluetoothItem({ scoreItemsState, setScoreItemsState });
                }}
              >
                <View style={styles.scoreItemBlock}>
                  <Text style={styles.scoreValue}>10</Text>
                  <Text style={styles.scoreUnit}>pct</Text>
                </View>
                <View style={styles.scoreItemContent}>
                  <Text style={styles.scoreItemTitle}>Access bluetooth</Text>
                  <Text style={styles.scoreItemDescription}>
                    permiteți accesul la bluetooth
                  </Text>
                </View>
                <View style={styles.scoreItemIconWrap}>
                  {scoreItemsState.bluetooth && (
                    <Icon name="check-circle" size={iconSize} color="#75B675" />
                  )}
                  {!scoreItemsState.bluetooth && (
                    <Icon name="close-circle" size={iconSize} color="#ED1C24" />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scoreItem}
                onPress={() => {
                  onPressProfileItem(navigation);
                }}
              >
                <View style={styles.scoreItemBlock}>
                  <Text style={styles.scoreValue}>10</Text>
                  <Text style={styles.scoreUnit}>pct</Text>
                </View>
                <View style={styles.scoreItemContent}>
                  <Text style={styles.scoreItemTitle}>
                    Creaza profil personal
                  </Text>
                  <Text style={styles.scoreItemDescription}>
                    date legate de starea de sanatate
                  </Text>
                </View>
                <View style={styles.scoreItemIconWrap}>
                  {scoreItemsState.profile && (
                    <Icon name="check-circle" size={iconSize} color="#75B675" />
                  )}
                  {!scoreItemsState.profile && (
                    <Icon name="check-circle" size={iconSize} color="#C1BCBD" />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scoreItem}
                onPress={() => {
                  onPressQuestionnaireItem(navigation);
                }}
              >
                <View style={styles.scoreItemBlock}>
                  <Text style={styles.scoreValue}>10</Text>
                  <Text style={styles.scoreUnit}>pct</Text>
                </View>
                <View style={styles.scoreItemContent}>
                  <Text style={styles.scoreItemTitle}>Chestionar zilnic</Text>
                  <Text style={styles.scoreItemDescription}>
                    afla despre riskul de a fi infectat
                  </Text>
                </View>
                <View style={styles.scoreItemIconWrap}>
                  {scoreItemsState.questionnaire && (
                    <Icon name="check-circle" size={iconSize} color="#75B675" />
                  )}
                  {!scoreItemsState.questionnaire && (
                    <Icon name="check-circle" size={iconSize} color="#C1BCBD" />
                  )}
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
