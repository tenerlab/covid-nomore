import React from 'react';
import { View } from 'react-native';
import RNModal from 'react-native-modal';
import { CloseButton } from './CloseButton';
import { styles } from './styles';

export const Modal = ({ children, hide, isVisible }) => (
  <RNModal isVisible={isVisible}>
    <View style={styles.modal}>
      <CloseButton onPress={hide} />
      {children}
    </View>
  </RNModal>
);
