import { PermissionsAndroid } from 'react-native';
import { translateWordInCurrentLanguage } from '@root/utils/i18n';

export const askStoragePermissions = async () => {
  const result = await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  ]);

  if (
    result[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] !==
    PermissionsAndroid.RESULTS.GRANTED
  ) {
    throw new Error('Permission denied: READ_EXTERNAL_STORAGE');
  }

  if (
    result[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] !==
    PermissionsAndroid.RESULTS.GRANTED
  ) {
    throw new Error('Permission denied: WRITE_EXTERNAL_STORAGE');
  }
};

export const askAudioPermissions = async () => {
  const rationale = {
    title: 'Microphone Permission',
    message: translateWordInCurrentLanguage(
      'permissions',
      'Application needs access to your microphone so you can record audio.'
    ),
    buttonPositive: 'Ok',
  };

  const permission = PermissionsAndroid.PERMISSIONS.RECORD_AUDIO;
  const result = await PermissionsAndroid.request(permission, rationale);

  return result === PermissionsAndroid.RESULTS.GRANTED;
};

export const checkAudioPermissions = async () => {
  const permission = PermissionsAndroid.PERMISSIONS.RECORD_AUDIO;
  const result = await PermissionsAndroid.check(permission);

  return result;
};
