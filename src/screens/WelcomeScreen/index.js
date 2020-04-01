import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

// eslint-disable-next-line
export const WelcomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#03A1E9', '#0183D3', '#0063BD']}
    >
      <StatusBar barStyle="light-content" backgroundColor="#03A1E9" />
      <View>
        <Text>Welcome Screen</Text>
      </View>
    </LinearGradient>
  );
};
