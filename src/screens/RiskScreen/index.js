import React, { useState } from 'react';
import { StatusBar, View, Text, Alert } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
// import { useTranslate } from '@root/hooks';

import { thresholds, riskColors } from '../../utils/constants';
import { styles } from './styles';
import ActionButton from './ActionButton';
import UploadModal from './UploadModal';
import TestedModal from './TestedModal';

// eslint-disable-next-line
export const RiskScreen = ({ navigation, percentageScore = 10 }) => {
  // const t = useTranslate();
  // you can use t() as follows:
  // t('common', 'Some text')

  const [showUploadModal, toggleUploadModal] = useState(false);
  const [showTestedModal, toggleTestedModal] = useState(false);

  let risk = 'low';
  if (percentageScore >= thresholds.high) {
    risk = 'high';
  } else if (percentageScore >= thresholds.medium) {
    risk = 'medium';
  }

  const riskLabels = {
    low: 'LOW',
    medium: 'MEDIUM',
    high: 'HIGH!',
  };

  const encounters = [
    { id: '12345', timestamp: '3/25/2020 5:00pm', risk: '29' },
    { id: '12345', timestamp: '3/25/2020 5:00pm', risk: '56' },
    { id: '12345', timestamp: '3/25/2020 5:00pm', risk: '29' },
    { id: '12345', timestamp: '3/25/2020 5:00pm', risk: '70' },
  ];

  return (
    <LinearGradient
      style={styles.container}
      colors={['#03A1E9', '#0183D3', '#0063BD']}
    >
      <StatusBar barStyle="light-content" backgroundColor="#03A1E9" />
      <View>
        <View style={styles.upper}>
          <Text style={styles.header}>Your risk is</Text>
          <AnimatedCircularProgress
            style={styles.dial}
            size={250}
            width={25}
            fill={percentageScore}
            tintColor={riskColors[risk]}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#8ACBE940"
            arcSweepAngle={200}
            rotation={-100}
          >
            {() => <Text style={styles.currentStatus}>{riskLabels[risk]}</Text>}
          </AnimatedCircularProgress>
          <Text style={styles.recommendations}>
            Stay indoors, and limit yourself to social contact. If you are
            experiencing symptoms, please reach out to your health care provider
            or go to your nearest testing facility.
          </Text>
        </View>
        <View style={styles.lower}>
          <ActionButton
            text="Show testing centers near me"
            onPress={() => Alert.alert('Showing testing centers...')}
          />
          <ActionButton
            variant="positive"
            text="Report as POSITIVE for COVID-19"
            onPress={() => toggleUploadModal(true)}
          />
          <ActionButton
            variant="negative"
            text="Report as NEGATIVE for COVID-19"
            onPress={() => toggleTestedModal(true)}
          />
        </View>
      </View>
      <UploadModal
        closeModal={() => toggleUploadModal(false)}
        isVisible={showUploadModal}
        onBackdropPress={() => toggleUploadModal(false)}
        onBackButtonPress={() => toggleUploadModal(false)}
        encounters={encounters}
      />
      <TestedModal
        closeModal={() => toggleTestedModal(false)}
        isVisible={showTestedModal}
        onBackdropPress={() => toggleTestedModal(false)}
        onBackButtonPress={() => toggleTestedModal(false)}
      />
    </LinearGradient>
  );
};

RiskScreen.navigationOptions = {
  header: null, // hide header
};
