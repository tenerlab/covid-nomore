import React from 'react';
import { StatusBar, View } from 'react-native';
import { LanguageProvider } from '@root/utils/i18n';
import { ConnectionContextProvider } from '@root/utils/connection-context';
import { Lifecycle } from '@root/utils/lifecycle';
import { Root } from './Root';
import { isRemoteDebuggingEnabled } from './src/utils';
import OfflineNotice from './src/components/OfflineNotice';

console.disableYellowBox = true; // eslint-disable-line no-console

if (!isRemoteDebuggingEnabled()) {
  console.log = () => {};
}

const styles = {
  container: {
    flex: 1,
  },
};

Lifecycle.listenForStateChanges();
Lifecycle.checkIfFirstLaunch();

export const App = () => (
  <View style={styles.container}>
    <LanguageProvider>
      <ConnectionContextProvider>
        <StatusBar barStyle="light-content" backgroundColor="#de2922" />
        <Root />
        <OfflineNotice />
      </ConnectionContextProvider>
    </LanguageProvider>
  </View>
);
