import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { dotPathOr } from 'ramda-extension';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import { AppGlobals } from '@root/core/app-globals';
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

  return data;
};

/* ********************************* EVENTS ********************************* */

const onEditProfilePress = navigation => {
  navigateToScreen(navigation, 'InitProfile');
};

const onEditHealthConditionsPress = () => {
  console.log('onEditHealthConditionsPress');
};

/* ********************************** MAIN ********************************** */

// eslint-disable-next-line
export const ProfileScreen = ({ navigation, route }) => {
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
              <Text style={styles.profileName}>{userData.fullName}</Text>
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
              <Text style={styles.fieldValue}>-</Text>
            </View>
            <View style={styles.profileField}>
              <Text
                style={styles.fieldLabelEdit}
                onPress={onEditHealthConditionsPress}
              >
                edit conditions
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.section, styles.sharingSection]}>
          <View>
            <Text>- Share symptom report</Text>
          </View>
          <View>
            <Text>- Share pre-existing health conditions</Text>
          </View>
        </View>
        <View style={[styles.section, styles.notificationsSection]}>
          <Text style={styles.notificationsSectionTitle}>Notifications</Text>
        </View>
      </View>
    </LinearGradient>
  );
};
