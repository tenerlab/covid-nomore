import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
    width: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  basic: {
    // backgroundColor: '#8ACBE940',
  },
  positive: {
    backgroundColor: '#FF5031',
    marginTop: 15,
  },
  negative: {
    backgroundColor: '#63F70D',
    marginTop: 15,
  },
});

const ActionButton = ({ variant = 'basic', text, onPress }) => {
  const variantStyles = styles[variant] || styles.basic;

  return (
    <TouchableOpacity style={[styles.button, variantStyles]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
