import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { dotPathOr } from 'ramda-extension';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import { AppGlobals } from '@root/core/app-globals';
import { styles } from './styles';

/* ********************************** UTILS ********************************* */

const preprocessUserDataForDisplay = user => {
  let data = {};
  data.firstName = dotPathOr('', 'firstName', user);
  data.lastName = dotPathOr('', 'lastName', user);
  data.fullName = `${data.firstName} ${data.lastName}`.trim();
  data.sex = dotPathOr(null, 'sex', user);
  data.sexToDisplay = '-';

  if (data.sex == 'male' || data.sex === 1) data.sexToDisplay = 'Male';
  if (data.sex == 'female' || data.sex === 0) data.sexToDisplay = 'Feale';

  data.birthday = dotPathOr('', 'birthday', user);
  data.birthdayToDisplay = data.birthday
    ? moment(data.birthday, 'DD-MM-YYYY').format('MMMM D, YYYY')
    : '-';

  return data;
};

/* ********************************** MAIN ********************************** */

// eslint-disable-next-line
export const ProfileScreen = ({ navigation }) => {
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
        <View style={styles.profileSection}>
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
              <Text style={styles.fieldLabel}>
                Pre-Existing Health Conditions:
              </Text>
              <Text style={styles.fieldValue}>-</Text>
            </View>
          </View>
        </View>
        <View style={styles.sharingSection}>
          <View>
            <Text>- Share symptom report</Text>
          </View>
          <View>
            <Text>- Share pre-existing health conditions</Text>
          </View>
        </View>
        <View style={styles.notificationsSection}>
          <Text style={styles.notificationsSectionTitle}>Notifications</Text>
        </View>
      </View>
    </LinearGradient>
  );
};
