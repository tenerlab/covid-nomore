import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslate } from '@root/hooks';
import { styles } from './styles';

const screenBgImg = require('@root/images/bg.png');

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
              <View style={styles.scoreItem}>
                <View style={styles.scoreItemBlock}>
                  <Text style={styles.scoreValue}>10</Text>
                  <Text style={styles.scoreUnit}>pct</Text>
                </View>
                <View style={styles.scoreItemContent}>
                  <Text style={styles.scoreItemTitle}>Access locatie</Text>
                  <Text style={styles.scoreItemDescription}>
                    permiteti accesul la localizare
                  </Text>
                </View>
                <View style={styles.scoreItemIconWrap}>
                  <Icon name="close-circle" size={42} color="#ED1C24" />
                </View>
              </View>
              <View style={styles.scoreItem}>
                <View style={styles.scoreItemBlock}>
                  <Text style={styles.scoreValue}>10</Text>
                  <Text style={styles.scoreUnit}>pct</Text>
                </View>
                <View style={styles.scoreItemContent}>
                  <Text style={styles.scoreItemTitle}>Access bluetooth</Text>
                  <Text style={styles.scoreItemDescription}>
                    permiteti accesul la bluetooth
                  </Text>
                </View>
                <View style={styles.scoreItemIconWrap}>
                  <Icon name="check-circle" size={42} color="#75B675" />
                </View>
              </View>
              <View style={styles.scoreItem}>
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
              </View>
              <View style={styles.scoreItem}>
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
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
