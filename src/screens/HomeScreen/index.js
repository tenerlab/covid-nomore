import React from 'react';
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
import { LocationUtils } from '@root/utils/location-utils';
import { hasLocationPermissions } from '@root/utils/location';
import { styles } from './styles';

const screenBgImg = require('@root/images/bg.png');

/* ********************************** UTILS ********************************* */

// eslint-disable-next-line no-unused-vars
const navigateToScreen = async (navigation, screenName, screenParams = {}) => {
  navigation.navigate(screenName, screenParams);
};

/* ********************************* EVENTS ********************************* */

const onPressLocationItem = async () => {
  console.log('p1');
  const hasPerm = await hasLocationPermissions();
  console.log('hasPerm', hasPerm);
  console.log('p2');

  if (await LocationUtils.hasLocationPermissions()) {
    Toast.show('Accesul la localizare e deja permis', Toast.SHORT);
    return;
  }

  console.log('p3');

  await LocationUtils.requestLocationPermissions(({ permissionIsGranted }) => {
    console.log('permissionIsGranted', permissionIsGranted);
  });

  console.log('p4');
};

const onPressBluetoothItem = () => {
  console.log('onPressLocationItem');
};

const onPressProfileItem = navigation => {
  navigateToScreen(navigation, 'Profile', {});
};

const onPressQuestionnaireItem = navigation => {
  navigateToScreen(navigation, 'Questionnaire', {});
};

/* ********************************** MAIN ********************************** */

// eslint-disable-next-line
export const HomeScreen = ({ navigation }) => {
  const t = useTranslate(); // eslint-disable-line no-unused-vars

  // TODO: update dictionary.js and implement translation
  // translation usage example: t('slides', 'some text')

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
                onPress={onPressLocationItem}
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
                  <Icon name="close-circle" size={42} color="#ED1C24" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scoreItem}
                onPress={onPressBluetoothItem}
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
                  <Icon name="check-circle" size={42} color="#75B675" />
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
                  <Icon name="check-circle" size={42} color="#C1BCBD" />
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
                  <Icon name="check-circle" size={42} color="#C1BCBD" />
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
