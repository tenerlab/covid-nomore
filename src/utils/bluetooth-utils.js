import { PermissionsAndroid } from 'react-native';
import { dotPathOr } from 'ramda-extension'; // eslint-disable-line

export class BluetoothUtils {
  /* ******************************** STATE ********************************* */

  static async isBluetoothEnabled() {
    // TODO: finish this method
    return false;
  }

  /* *************************** STATE LISTENERS **************************** */

  // eslint-disable-next-line
  static async addBluetoothStateListener(callback) {
    // const unsubcriber = SomeBluetoothStateWatcher.addEventListener(callback);
    // return unsubcriber;
    // TODO: finish this method
  }

  static async removeBluetoothStateListener(unsubcriber) {
    if (typeof unsubcriber === 'function') unsubcriber();
  }

  /* ****************************** PERMISSIONS ****************************** */

  static async hasBluetoothPermissions() {
    // TODO: finish this method // MOST IMPORTANT
    return false;
  }

  static async requestBluetoothPermissions(
    callback = null,
    title = null,
    message = null
  ) {
    // TODO: finish this method // MOST IMPORTANT

    const defaultTitle = 'Bluetooth Permission';
    const defaultMessage = 'Application needs access to bluetooth connection';
    const rationale = {
      title: typeof title == 'string' ? title : defaultTitle,
      message: typeof message == 'string' ? message : defaultMessage,
      buttonPositive: 'Ok',
    };

    const permission = PermissionsAndroid.PERMISSIONS.BluetoothUtils; // TODO: check if this is the right permission
    const requestResult = await PermissionsAndroid.request(
      permission,
      rationale
    );
    const permissionIsGranted =
      requestResult === PermissionsAndroid.RESULTS.GRANTED;

    if (typeof callback === 'function')
      callback({ requestResult, permissionIsGranted });

    return permissionIsGranted;
  }

  /* ************************ PERMISSIONS LISTENERS ************************* */

  // eslint-disable-next-line
  static async addBluetoothPermissionsListener(callback) {
    // const unsubcriber = SomeBluetoothStateWatcher.addEventListener(callback);
    // return unsubcriber;
    // TODO: finish this method
  }

  static async removeBluetoothPermissionsListener(unsubcriber) {
    if (typeof unsubcriber === 'function') unsubcriber();
  }

  /* ********************************* UTILS ******************************** */
}
