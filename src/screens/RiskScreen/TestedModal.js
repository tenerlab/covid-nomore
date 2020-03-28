import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 3,
    padding: 20,
    flexGrow: 0,
  },
  question: {
    fontSize: 17,
    marginBottom: 10,
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  cancel: {
    color: '#AAA',
  },
  submit: {
    color: '#0183D3',
  },
});

const TestedModal = props => (
  <Modal {...props}>
    <View style={styles.container}>
      <Text style={styles.question}>
        Have you taken a COVID-19 test at a health care facility or with an
        in-home kit?
      </Text>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => props.closeModal()}
        >
          <Text style={[styles.buttonText, styles.cancel]}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Text style={[styles.buttonText, styles.submit]}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export default TestedModal;
