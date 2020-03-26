import AsyncStorage from '@react-native-community/async-storage';
import { Utils } from '@root/utils';

export class CacheManager {
  /* ***************************** LOCALIZATION ***************************** */

  static async saveCurrentLanguage(lang) {
    try {
      if (lang) {
        await AsyncStorage.setItem('@currentLanguage', lang);
      } else {
        await AsyncStorage.removeItem('@currentLanguage');
      }
    } catch (e) {
      console.log('saveCurrentLanguage.error', e);
      return false;
    }
    return true;
  }

  static async getCurrentLanguage(callback = null) {
    let lang = null;
    try {
      lang = await AsyncStorage.getItem('@currentLanguage');
    } catch (e) {
      console.log('getCurrentLanguage.error', e);
    }
    if (typeof callback == 'function') callback(lang);
    return lang;
  }

  /* ******************************** USERS ********************************* */

  static async saveCurrentUser(currentUser) {
    try {
      const valueJson = JSON.stringify(currentUser);
      await AsyncStorage.setItem('@currentUser', valueJson);
    } catch (e) {
      console.log('saveCurrentUser.error', e);
      return false;
    }
    return true;
  }

  static async getCurrentUser(callback = null) {
    let user = null;
    try {
      const valueJson = await AsyncStorage.getItem('@currentUser');
      if (valueJson) {
        user = Utils.tryParseJSON(valueJson);
      }
    } catch (e) {
      console.log('getCurrentUser.error', e);
    }

    if (typeof callback == 'function') callback(user);

    return user;
  }

  static async clearCurrentUser(callback = null) {
    try {
      await AsyncStorage.removeItem('@currentUser');
    } catch (e) {
      console.log('clearCurrentUser.error', e);
      return false;
    }

    if (typeof callback == 'function') callback();

    return true;
  }

  // TODO: let user and messages use generic methods

  /* ******************************** GENERIC ******************************* */

  static async saveKeyValue(key, value) {
    if (typeof key != 'string' || !key) return false;

    try {
      const sanitizedKey = key.indexOf('@') !== 0 ? `@${key}` : key;
      const valueJson = JSON.stringify(value);
      await AsyncStorage.setItem(sanitizedKey, valueJson);
    } catch (e) {
      console.log('saveKeyValue.error', e);
      return false;
    }
    return true;
  }

  static async getKeyValue(key, callback = null, fallback = null) {
    let value = fallback;

    if (typeof key != 'string' || !key) return value;

    try {
      const sanitizedKey = key.indexOf('@') !== 0 ? `@${key}` : key;
      const valueJson = await AsyncStorage.getItem(sanitizedKey);
      value = Utils.tryParseJSON(valueJson, fallback, false);
    } catch (e) {
      console.log('getKeyValue.error', e);
    }

    if (typeof callback == 'function') callback(value);

    return value;
  }

  static async deleteKey(key, callback = null) {
    try {
      const sanitizedKey = key.indexOf('@') !== 0 ? `@${key}` : key;
      await AsyncStorage.removeItem(sanitizedKey);
    } catch (e) {
      console.log('deleteKey.error', e);
      return false;
    }

    if (typeof callback == 'function') callback();

    return true;
  }

  /* ******************************** COMMON ******************************** */

  static async clearLocalHistory(callback = null) {
    // nothing to clear atm

    if (typeof callback == 'function') callback();
  }

  static async clearAllLocalData(callback = null) {
    await this.clearCurrentUser();

    if (typeof callback == 'function') callback();
  }
}
