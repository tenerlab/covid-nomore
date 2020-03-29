import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

const IconButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
    <Icon name="calendar" color="#FFFB" size={30} />
  </TouchableOpacity>
);

export default IconButton;
