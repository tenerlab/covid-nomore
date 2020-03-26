import { Alert } from 'react-native';
import Permissions from 'react-native-permissions';
import { translateWordInCurrentLanguage } from '@root/utils/i18n';

export const askStoragePermissions = async () => {
  // no-op
};

export const askAudioPermissions = async () => {
  const micPermission = await Permissions.check('microphone');
  if (micPermission === 'authorized') {
    return true;
  }
  const response = await new Promise(resolve => {
    Alert.alert(
      'Microphone Permission',
      translateWordInCurrentLanguage(
        'permissions',
        'Application needs access to your microphone so you can record audio.'
      ),
      [
        {
          text: 'Cancel',
          onPress: () => resolve(false),
          style: 'cancel',
        },
        micPermission == 'undetermined'
          ? {
              text: 'OK',
              onPress: async () =>
                resolve(
                  (await Permissions.request('microphone')) === 'authorized'
                ),
            }
          : {
              text: 'Open Settings',
              onPress: () => {
                Permissions.openSettings();
                resolve(false);
              },
            },
      ]
    );
  });

  return response;
};

export const checkAudioPermissions = async () => {
  const response = await Permissions.check('microphone');
  return response === 'authorized';
};
