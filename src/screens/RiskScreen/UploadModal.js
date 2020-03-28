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
  listText: {
    flexDirection: 'row',
    paddingBottom: 3,
  },
  encounter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  risk: {
    fontWeight: 'bold',
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

const getRiskColor = score => {
  let risk = 'low';
  if (score >= thresholds.high) {
    risk = 'high';
  } else if (score >= thresholds.medium) {
    risk = 'medium';
  }

  return riskColors[risk] || '#000';
};

const UploadModal = props => {
  const init = encounters =>
    (encounters || []).map(encounter => ({
      ...encounter,
      shouldUpload: true,
    }));

  const reducer = (encounters, action) => {
    let updated;

    switch (action.type) {
      case 'toggle':
        updated = [...encounters];
        updated[action.index].shouldUpload = action.shouldUpload;
        return updated;
      default:
        throw new Error();
    }
  };

  const [encounters, dispatch] = useReducer(reducer, props.encounters, init);

  const toggleDispatcher = index => shouldUpload =>
    dispatch({ type: 'toggle', index, shouldUpload });

  return (
    <Modal {...props}>
      <View style={styles.container}>
        <Text style={styles.header}>Upload my encounters</Text>
        <ScrollView style={styles.list}>
          {encounters.map((encounter, index) => (
            <View style={styles.encounter} key={encounter.id}>
              <CheckBox
                value={encounter.shouldUpload}
                onValueChange={toggleDispatcher(index)}
              />
              <View style={styles.listText}>
                <Text>
                  @{encounter.timestamp}:
                  <Text
                    style={[
                      styles.risk,
                      { color: getRiskColor(encounter.risk) },
                    ]}
                  >
                    {' '}
                    {encounter.risk}%
                  </Text>{' '}
                  risk.
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => props.closeModal()}
          >
            <Text style={[styles.buttonText, styles.cancel]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]}>
            <Text style={[styles.buttonText, styles.submit]}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UploadModal;
