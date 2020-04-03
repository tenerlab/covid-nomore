import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import { PermissionsAndroid } from 'react-native';
import { dotPathOr } from 'ramda-extension';

export class LocationUtils {
  /* ******************************** STATE ********************************* */

  static async isLocationEnabled() {
    const status = await this.getLocationStatusPromise();
    const isEnabled =
      dotPathOr(false, 'locationServicesEnabled', status) === true;

    return isEnabled;
  }

  /* *************************** STATE LISTENERS **************************** */

  // eslint-disable-next-line
  static async addLocationStateListener(callback) {
    // const unsubcriber = SomeLocationStateWatcher.addEventListener(callback);
    // return unsubcriber;
    // TODO: finish this method
  }

  static async removeLocationStateListener(unsubcriber) {
    if (typeof unsubcriber === 'function') unsubcriber();
  }

  /* ****************************** PERMISSIONS ****************************** */

  static async hasLocationPermissions() {
    const status = await this.getLocationStatusPromise();
    const isAuthorized =
      dotPathOr(false, 'authorization', status) ===
      BackgroundGeolocation.AUTHORIZED;

    return isAuthorized;
  }

  static async requestLocationPermissions(
    callback,
    title = 'Location Permission',
    message = 'Application needs access to your location'
  ) {
    const rationale = {
      title,
      message,
      buttonPositive: 'Ok',
    };

    const permission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
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
  static async addLocationPermissionsListener(callback) {
    // const unsubcriber = SomeLocationStateWatcher.addEventListener(callback);
    // return unsubcriber;
    // TODO: finish this method
  }

  static async removeLocationPermissionsListener(unsubcriber) {
    if (typeof unsubcriber === 'function') unsubcriber();
  }

  /* ********************************* UTILS ******************************** */

  static async getLocationStatusPromise() {
    return new Promise(resolve => {
      console.log('BackgroundGeolocation', BackgroundGeolocation);
      BackgroundGeolocation.checkStatus(resolve);
      console.log('foo resolve', resolve);
    });
  }
}
