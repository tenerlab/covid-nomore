import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { CheckBox } from 'react-native-elements';
import { preExistingHealthConditionTitles as healthConditionTitles } from '@root/utils/constants';
import { styles } from './HealthConditionsModal.styles';

const cloneDeep = require('lodash/cloneDeep');

/* ********************************* UTILS ********************************** */

const onHealthConditionStateToggle = (
  currentlyCheckedHealthConditions,
  setCheckedHealthConditions,
  healthCondition,
  shouldBeChecked
) => {
  let checkedHealthConditions = Array.isArray(currentlyCheckedHealthConditions)
    ? cloneDeep(currentlyCheckedHealthConditions)
    : [];

  let isCurrentlyChecked =
    checkedHealthConditions.indexOf(healthCondition) !== -1;

  if (isCurrentlyChecked && !shouldBeChecked) {
    checkedHealthConditions = checkedHealthConditions.filter(
      cond => cond !== healthCondition
    );
  }

  if (!isCurrentlyChecked && shouldBeChecked) {
    checkedHealthConditions.push(healthCondition);
  }

  setCheckedHealthConditions(checkedHealthConditions);
};

/* ********************************** MAIN ********************************** */

const HealthConditionsModal = props => {
  let initiallyCheckedHeathConditions = props.checkedHealthConditions;

  if (!Array.isArray(initiallyCheckedHeathConditions))
    initiallyCheckedHeathConditions = [];

  const [checkedHealthConditions, setCheckedHealthConditions] = useState(
    initiallyCheckedHeathConditions
  );
  const allHealthConditions = Object.keys(healthConditionTitles);

  return (
    <Modal {...props}>
      <View style={styles.container}>
        <Text style={styles.header}>Select Pre-Existing Health Conditions</Text>
        <ScrollView style={styles.list}>
          {allHealthConditions.map((healthCondition, index) => {
            let title = healthConditionTitles[healthCondition];
            let isChecked =
              Array.isArray(checkedHealthConditions) &&
              checkedHealthConditions.indexOf(healthCondition) !== -1;
            return (
              <View style={styles.healthCondition} key={index}>
                <CheckBox
                  title={title}
                  checked={isChecked}
                  onPress={() => {
                    onHealthConditionStateToggle(
                      checkedHealthConditions,
                      setCheckedHealthConditions,
                      healthCondition,
                      !isChecked
                    );
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => props.closeModal()}
          >
            <Text style={[styles.buttonText, styles.cancel]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              props.onHealthConditionsUpdate(checkedHealthConditions);
              props.closeModal();
            }}
          >
            <Text style={[styles.buttonText, styles.submit]}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default HealthConditionsModal;
