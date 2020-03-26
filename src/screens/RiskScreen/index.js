import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { useTranslate } from '@root/hooks';
import { styles } from './styles';

// eslint-disable-next-line
export const RiskScreen = ({ navigation }) => {
  // const t = useTranslate();
  // you can use t() as follows:
  // t('common', 'Some text')

  return (
    <LinearGradient
      style={styles.container}
      colors={['#03A1E9', '#0183D3', '#0063BD']}
    >
      <StatusBar barStyle="light-content" backgroundColor="#03A1E9" />
      <View>
        <Text>Risk Screen</Text>
      </View>
    </LinearGradient>
  );
};

RiskScreen.navigationOptions = {
  header: null, // hide header
};
