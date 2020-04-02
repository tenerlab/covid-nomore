import React, { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { AppGlobals } from '@root/core/app-globals';
import { styles } from './styles';

const cloneDeep = require('lodash/cloneDeep');

const defaultFormData = { firstName: '', lastName: '' };

/* ********************************* UTILS ********************************** */

const navigateToScreen = async (navigation, screenName, screenParams = {}) => {
  navigation.navigate(screenName, screenParams);
};

/* ********************************* EVENTS ********************************* */

const onFormChange = (currentFormData, setFormData, key, newValue) => {
  let newFormData = cloneDeep(currentFormData);
  newFormData[key] = newValue;
  setFormData(newFormData);
};

const onFormSubmit = (currentFormData, navigation) => {
  let userData = cloneDeep(currentFormData);

  AppGlobals.setCurrentUser(userData);
  navigateToScreen(navigation, 'Profile', {});
};

/* ********************************** MAIN ********************************** */

// eslint-disable-next-line
export const InitProfileScreen = ({ navigation, route }) => {
  AppGlobals.acceptUpdates();

  const currentUser = AppGlobals.getCurrentUser();
  const predefinedFormData = { ...defaultFormData, ...currentUser };
  const [formData, setFormData] = useState(predefinedFormData);

  const birthdayDateFormat = 'DD-MM-YYYY';
  const todayDateDDMMYYYY = moment().format(birthdayDateFormat);

  const sexRadioOptions = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
  ];

  return (
    <LinearGradient
      style={styles.container}
      colors={['#03A1E9', '#0183D3', '#0063BD']}
    >
      <StatusBar barStyle="light-content" backgroundColor="#03A1E9" />
      <View style={styles.contentWrap}>
        <View style={styles.formWrap}>
          <View style={styles.form}>
            <View style={styles.formInputFieldWrap}>
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
            <View style={styles.formInputFieldWrap}>
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
            <View style={styles.formFieldWrap}>
              <Text style={styles.labelStyle}>DATE OF BIRTH</Text>
              <DatePicker
                style={styles.datePicker}
                date={formData.birthday || null}
                mode="date"
                placeholder="select date"
                format={birthdayDateFormat}
                minDate="01-01-1900"
                maxDate={todayDateDDMMYYYY}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                iconComponent={
                  <Icon name="calendar" size={16} color="#444444" />
                }
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    right: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 0,
                    borderWidth: 0,
                    textAlign: 'left',
                  },
                  datePickerIcon: {},
                  placeholderText: { color: '#9E9E9E', textAlign: 'left' },
                  dateText: { textAlign: 'left' },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  onFormChange(formData, setFormData, 'birthday', date);
                }}
              />
            </View>
            <View style={styles.formFieldWrap}>
              <Text style={styles.labelStyle}>SEX</Text>
              <View style={styles.sexRadioOptionsWrap}>
                <RadioForm
                  style={styles.sexRadioOptions}
                  // radio_props={sexRadioOptions}
                  formHorizontal={true}
                  onPress={value => {
                    onFormChange(formData, setFormData, 'sex', value);
                  }}
                >
                  {// eslint-disable-next-line
                  sexRadioOptions.map((obj, i) => (
                    <RadioButton labelHorizontal={true} key={i}>
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={formData.sex === obj.value}
                        borderWidth={1}
                        buttonInnerColor={
                          obj.value == 'male' ? '#0183D3' : '#cc7788'
                        }
                        buttonOuterColor={
                          obj.value == 'male' ? '#0183D3' : '#cc7788'
                        }
                        buttonSize={15}
                        buttonOuterSize={20}
                        buttonStyle={{}}
                        onPress={value => {
                          onFormChange(formData, setFormData, 'sex', value);
                        }}
                        buttonWrapStyle={{ marginLeft: 10 }}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        labelHorizontal={false}
                        onPress={value => {
                          onFormChange(formData, setFormData, 'sex', value);
                        }}
                        labelStyle={{
                          fontSize: 12,
                          color: '#666669',
                          marginLeft: 8,
                          marginRight: 12,
                        }}
                        labelWrapStyle={{}}
                      />
                    </RadioButton>
                  ))}
                </RadioForm>
              </View>
            </View>
            <View style={styles.formActionsWrap}>
              <Button
                title="Submit"
                buttonStyle={styles.btnSubmitStyle}
                onPress={() => {
                  onFormSubmit(formData, navigation);
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
