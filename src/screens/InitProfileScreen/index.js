import React, { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

const cloneDeep = require('lodash/cloneDeep');

const defaultFormData = { firstName: '', lastName: '' };

/* ********************************** UTILS ********************************* */

const onFormChange = (currentFormData, setFormData, key, newValue) => {
  let newFormData = cloneDeep(currentFormData);
  newFormData[key] = newValue;
  setFormData(newFormData);
};

const onFormSubmit = (currentFormData, setCurrentUser) => {
  let userData = cloneDeep(currentFormData);

  if (typeof setCurrentUser == 'function') setCurrentUser(userData);
};

/* ********************************** MAIN ********************************** */

// eslint-disable-next-line
export const InitProfileScreen = ({ navigation, route, setCurrentUser }) => {
  const [formData, setFormData] = useState(defaultFormData);

  return (
    <LinearGradient
      style={styles.container}
      colors={['#03A1E9', '#0183D3', '#0063BD']}
    >
      <StatusBar barStyle="light-content" backgroundColor="#03A1E9" />
      <View style={styles.contentWrap}>
        <View style={styles.formWrap}>
          <View style={styles.form}>
            <View style={styles.formInputWrap}>
              <Input
                label="FIRST NAME"
                placeholder="John..."
                labelStyle={styles.labelStyle}
                inputStyle={styles.inputStyle}
                value={formData.firstName}
                onChangeText={text => {
                  onFormChange(formData, setFormData, 'firstName', text);
                }}
                rightIcon={<Icon name="user" size={16} color="#444444" />}
              />
            </View>
            <View style={styles.formInputWrap}>
              <Input
                label="LAST NAME"
                placeholder="Smith..."
                labelStyle={styles.labelStyle}
                inputStyle={styles.inputStyle}
                value={formData.lastName}
                onChangeText={text => {
                  onFormChange(formData, setFormData, 'lastName', text);
                }}
                rightIcon={<Icon name="user" size={16} color="#444444" />}
              />
            </View>
            <View style={styles.formInputWrap}>
              <Text style={styles.todoText}>TODO: date of birth</Text>
            </View>
            <View style={styles.formInputWrap}>
              <Text style={styles.todoText}>TODO: gender</Text>
            </View>
            <View style={styles.formActionsWrap}>
              <Button
                title="Submit"
                buttonStyle={styles.btnSubmitStyle}
                onPress={() => {
                  onFormSubmit(formData, setCurrentUser);
                }}
              />
            </View>
            <View style={styles.notes}>
              <Text style={styles.disclaimer}>
                By signing up, you agree with the Terms of Service and Privacy
                Policy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
