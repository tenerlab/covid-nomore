import React, { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { dotPathOr } from 'ramda-extension';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import { CheckBox } from 'react-native-elements';
import { AppGlobals } from '@root/core/app-globals';
import { preExistingHealthConditionTitles as healthConditionTitles } from '@root/utils/constants';
import HealthConditionsModal from './modals/HealthConditionsModal';
import { styles } from './styles';

/* ********************************** UTILS ********************************* */

const navigateToScreen = async (navigation, screenName, screenParams = {}) => {
  navigation.navigate(screenName, screenParams);
};

const preprocessUserDataForDisplay = user => {
  let data = {};
  data.firstName = dotPathOr('', 'firstName', user);
  data.lastName = dotPathOr('', 'lastName', user);
  data.fullName = `${data.firstName} ${data.lastName}`.trim();
  data.sex = dotPathOr(null, 'sex', user);
  data.sexToDisplay = '-';

  if (data.sex == 'male' || data.sex === 1) data.sexToDisplay = 'Male';
  if (data.sex == 'female' || data.sex === 0) data.sexToDisplay = 'Female';

  data.birthday = dotPathOr('', 'birthday', user);
  data.birthdayToDisplay = data.birthday
    ? moment(data.birthday, 'DD-MM-YYYY').format('MMMM D, YYYY')
    : '-';

  data.preExistingHealthConditions = user
    ? user.preExistingHealthConditions
    : [];
  data.preExistingHealthConditionsToDisplay = [];

  if (!Array.isArray(data.preExistingHealthConditions))
    data.preExistingHealthConditions = [];

  data.preExistingHealthConditions.forEach(healthCondition => {
    if (typeof healthConditionTitles[healthCondition] == 'string')
      data.preExistingHealthConditionsToDisplay.push(
        healthConditionTitles[healthCondition]
      );
  });

  data.shareSymptomReport = dotPathOr(false, 'shareSymptomReport', user);
  data.sharePreExistingHealthConditions = dotPathOr(
    false,
    'sharePreExistingHealthConditions',
    user
  );

  return data;
};

/* ********************************* EVENTS ********************************* */

const onEditProfilePress = navigation => {
  navigateToScreen(navigation, 'InitProfile');
};

const onEditHealthConditionsPress = setIsHealthConditionsModalVisible => {
  setIsHealthConditionsModalVisible(true);
};

/* ********************************** MAIN ********************************** */

// eslint-disable-next-line
export const ProfileScreen = ({ navigation, route }) => {
  const [
    isHealthConditionsModalVisible,
    setIsHealthConditionsModalVisible,
  ] = useState(false);

  AppGlobals.acceptUpdates();

  const currentUser = AppGlobals.getCurrentUser();
  const userData = preprocessUserDataForDisplay(currentUser);

  return (
    <LinearGradient
      style={styles.container}
      colors={['#03A1E9', '#0183D3', '#0063BD']}
    >
      <StatusBar barStyle="light-content" backgroundColor="#03A1E9" />
      <View style={styles.contentWrap}>
        <View style={[styles.section, styles.profileSection]}>
          <View style={styles.profileData}>
            <View style={styles.profileField}>
              <Text style={styles.profileName}>
                {userData.fullName || 'PROFILE'}
              </Text>
            </View>
            <View style={styles.profileField}>
              <Text style={styles.fieldLabel}>Date of Birth:</Text>
              <Text style={styles.fieldValue}>
                {userData.birthdayToDisplay}
              </Text>
            </View>
            <View style={styles.profileField}>
              <Text style={styles.fieldLabel}>Sex:</Text>
              <Text style={styles.fieldValue}>{userData.sexToDisplay}</Text>
            </View>
            <View style={styles.profileField}>
              <Text
                style={styles.fieldLabelEdit}
                onPress={() => {
                  onEditProfilePress(navigation);
                }}
              >
                edit profile
              </Text>
            </View>
            <View style={[styles.profileField, styles.profileFieldConditions]}>
              <Text style={styles.fieldLabel}>
                Pre-Existing Health Conditions:
              </Text>
              {!userData.preExistingHealthConditionsToDisplay.length && (
                <Text style={styles.fieldValue}>-</Text>
              )}
              {userData.preExistingHealthConditionsToDisplay.map(
                healthConditionTitle => (
                  <Text
                    style={[styles.fieldValue, styles.fieldValueFullWidth]}
                    key={healthConditionTitle}
                  >
                    {healthConditionTitle}
                  </Text>
                )
              )}
            </View>
            <View style={styles.profileField}>
              <Text
                style={styles.fieldLabelEdit}
                onPress={() => {
                  onEditHealthConditionsPress(
                    setIsHealthConditionsModalVisible
                  );
                }}
              >
                edit conditions
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.section, styles.sharingSection]}>
          <View>
            <CheckBox
              title="Share symptom report"
              checked={userData.shareSymptomReport}
              onPress={() => {
                AppGlobals.setCurrentUserProperty(
                  'shareSymptomReport',
                  !userData.shareSymptomReport
                );
              }}
            />
          </View>
          <View>
            <CheckBox
              title="Share pre-existing health conditions"
              checked={userData.sharePreExistingHealthConditions}
              onPress={() => {
                AppGlobals.setCurrentUserProperty(
                  'sharePreExistingHealthConditions',
                  !userData.sharePreExistingHealthConditions
                );
              }}
            />
          </View>
        </View>
        <View style={[styles.section, styles.notificationsSection]}>
          <Text style={styles.notificationsSectionTitle}>Notifications</Text>
        </View>
      </View>
      <HealthConditionsModal
        closeModal={() => setIsHealthConditionsModalVisible(false)}
        isVisible={isHealthConditionsModalVisible}
        onBackdropPress={() => setIsHealthConditionsModalVisible(false)}
        onBackButtonPress={() => setIsHealthConditionsModalVisible(false)}
        onHealthConditionsUpdate={healthConditions => {
          AppGlobals.setCurrentUserProperty(
            'preExistingHealthConditions',
            healthConditions
          );
        }}
        checkedHealthConditions={
          currentUser ? currentUser.preExistingHealthConditions : []
        }
      />
    </LinearGradient>
  );
};
