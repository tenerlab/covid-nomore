import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppGlobals } from '@root/core/app-globals';
import { styles } from './styles';

// eslint-disable-next-line
export const ProfileScreen = ({ navigation }) => {
  AppGlobals.acceptUpdates();

  return (
    <LinearGradient
      style={styles.container}
      colors={['#03A1E9', '#0183D3', '#0063BD']}
    >
      <StatusBar barStyle="light-content" backgroundColor="#03A1E9" />
      <View>
        <Text>Profile Screen</Text>
      </View>
      <View>
        <Text style={styles.todoText}>
          Current user: {JSON.stringify(AppGlobals.getCurrentUser())}
        </Text>
      </View>
    </LinearGradient>
  );
};
