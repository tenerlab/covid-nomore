import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import { dotPathOr } from 'ramda-extension';

export class LocationUtils {
  /* ******************************** STATE ********************************* */

  static async isLocationEnabled() {
    const status = await this.getLocationStatus();
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
    const status = await this.getLocationStatus();
    const isAuthorized =
      dotPathOr(false, 'authorization', status) ===
      BackgroundGeolocation.AUTHORIZED;

    return isAuthorized;
  }

  static async requestLocationPermissions(text, callback) {
    const requestResult = false; // true for granted, false for denied

    // TODO: finish this method

    if (typeof callback === 'function') callback({ requestResult });
    return requestResult;
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
      BackgroundGeolocation.checkStatus(resolve);
    });
  }
}
