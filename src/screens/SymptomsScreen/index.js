import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { useTranslate } from '@root/hooks';
import { styles } from './styles';

// eslint-disable-next-line
export const SymptomsScreen = ({ navigation }) => {
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
        <Text>Symptoms Screen</Text>
      </View>
    </LinearGradient>
  );
};

// NOTE: with react-navigation/native 5+, navigationOptions are now obsolete
// TODO: remove them in future updates:
SymptomsScreen.navigationOptions = {
  header: null, // hide header
};
