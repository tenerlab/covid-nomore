import React from 'react';
import { Text, View } from 'react-native';
import { ConnectionContextConsumer } from '@root/utils/connection-context';
import { styles } from './styles';

const OfflineNotice = () => (
  <ConnectionContextConsumer>
    {context => {
      if (context.isInternetReachable) {
        return null;
      }

      let errorMessage = !context.isConnected
        ? 'No Connection'
        : 'No Internet Connection';

      return (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>{errorMessage}</Text>
        </View>
      );
    }}
  </ConnectionContextConsumer>
);

export default OfflineNotice;
