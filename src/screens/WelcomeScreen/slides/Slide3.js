import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useTranslate } from '@root/hooks';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  infoCard: {
    width: width * 0.7866,
    backgroundColor: '#3497fc',
    height: '70%',
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: '9%',
    justifyContent: 'center',
  },
  infoCardImage: {
    alignSelf: 'center',
    width: width * 0.5,
    height: width * 0.5,
    marginTop: '16%',
  },
  infoCardHeadText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    lineHeight: 55,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  infoCardBodyText: {
    opacity: 0.8,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
    maxWidth: '84%',
    alignSelf: 'center',
    marginTop: 20,
  },
  navigationDotsView: {
    flexDirection: 'row',
    left: width * 0.445,
    marginTop: 30,
  },
  activeIndicator: {
    width: 8,
    height: 8,
    borderRadius: 13,
    backgroundColor: '#665EFF',
    opacity: 1,
    marginRight: 8,
  },
  inactiveIndicator: {
    width: 8,
    height: 8,
    opacity: 0.32,
    borderRadius: 13,
    backgroundColor: '#78849e',
    marginRight: 8,
  },
  primaryButtonTouchable: {
    borderRadius: 12,
    backgroundColor: '#665eff',
    height: 52,
    alignSelf: 'center',
    width: width * 0.38,
    marginTop: 30,
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.7866,
    alignSelf: 'center',
  },
  secondaryButtonTouchable: {
    borderRadius: 12,
    backgroundColor: 'rgba(120, 132, 158, 0.16)',
    height: 52,
    alignSelf: 'center',
    width: width * 0.38,
    marginTop: 30,
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#454f63',
  },
});

export const Slide3 = props => {
  const t = useTranslate();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.infoCard}>
        <Text style={styles.infoCardHeadText}>
          {t('slides', 'label.slide3_title1')}
        </Text>
        <Text style={styles.infoCardBodyText}>
          {t('slides', 'label.slide3_para1')}
        </Text>
        <Text
          style={[
            styles.infoCardBodyText,
            { fontFamily: 'OpenSans-Bold', opacity: 1, marginTop: 12 },
          ]}
        >
          {t('slides', 'label.slide3_para2')}
        </Text>
      </View>
      <View style={styles.navigationDotsView}>
        <TouchableOpacity
          onPress={() => props.swipe(-2)}
          style={styles.inactiveIndicator}
        />
        <TouchableOpacity
          onPress={() => props.swipe(-1)}
          style={styles.inactiveIndicator}
        />
        <View style={styles.activeIndicator} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.swipe(-1)}
          style={styles.secondaryButtonTouchable}
        >
          <Text style={styles.secondaryButtonText}>
            {t('slides', 'label.back')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.primaryButtonTouchable}
        >
          <Text style={styles.primaryButtonText}>
            {t('slides', 'label.start')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
