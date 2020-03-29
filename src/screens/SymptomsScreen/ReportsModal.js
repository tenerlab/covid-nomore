import React, { useReducer } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import CheckBox from '@react-native-community/checkbox';

import { thresholds, riskColors } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 3,
    padding: 20,
    flexGrow: 0,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    color: '#999',
    fontWeight: 'bold',
  },
  list: {
    height: 150,
  },
  report: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  date: {
    fontWeight: 'bold',
    color: '#999',
  },
  symptomsContainer: {
    width: 0,
    flexGrow: 1,
    flex: 1,
    marginLeft: 10,
  },
  symptoms: {
    fontWeight: 'bold',
    color: '#444',
    flexWrap: 'wrap',
  },
  button: {
    marginTop: 10,
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#AAA',
  },
});

const ReportsModal = ({ isVisible, closeModal, reports }) => (
  <Modal
    isVisible={isVisible}
    onBackdropPress={closeModal}
    onBackButtonPress={closeModal}
  >
    <View style={styles.container}>
      <Text style={styles.header}>Previous symptoms</Text>
      <ScrollView style={styles.list}>
        {reports.map(report => (
          <View style={styles.report} key={report.date}>
            <Text style={styles.date}>{report.date}: </Text>
            <View style={styles.symptomsContainer}>
              <Text style={styles.symptoms}>{report.symptoms.join(', ')}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={closeModal}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

export default ReportsModal;
