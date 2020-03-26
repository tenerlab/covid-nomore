import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

export const CloseButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name="close" size={20} color="#565656" style={styles.closeIcon} />
  </TouchableOpacity>
);
