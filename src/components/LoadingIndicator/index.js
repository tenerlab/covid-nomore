import React from 'react';
import { ActivityIndicator } from 'react-native';
import { styles } from './styles';

export const LoadingIndicator = () => (
  <ActivityIndicator size="small" color="#de2922" style={styles.loader} />
);
