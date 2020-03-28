import { useContext } from 'react';
import { AppGlobalsContext } from '@root/core/app-globals-context';
import { CacheManager } from '@root/utils/cache-manager';

const cloneDeep = require('lodash/cloneDeep');

export class AppGlobals {
  static globals = {};

  /* ********************************* INIT ********************************* */

  /**
   * Invoke this from InitScreen,
   * in order to initialize app global values and context
   */
  static async init(callback) {
    await this.initCurrentUser();

    if (typeof callback == 'function') callback();
  }

  static async initCurrentUser() {
    const { setCurrentUser } = useContext(AppGlobalsContext);
    this.globals.setCurrentUser = setCurrentUser;
    this.globals.currentUser = await CacheManager.getCurrentUser();
  }

  /* ***************************** SCREEN UTILS ***************************** */

  /**
   * Invoke this from any screen render() if you want it to re-render
   * when any global value gets updated
   */
  static acceptUpdates() {
    // eslint-disable-next-line no-unused-vars
    let contextValues = useContext(AppGlobalsContext);
  }

  /* ****************************** USER VALUES ***************************** */

  static getCurrentUser() {
    return this.globals.currentUser;
  }

  static setCurrentUser(user, updateState = true) {
    // transitive save:
    this.globals.currentUser = user;

    // persistent save:
    CacheManager.saveCurrentUser(user);

    // conditional state update:
    if (updateState && typeof this.globals.setCurrentUser == 'function') {
      this.globals.setCurrentUser(this.globals.currentUser);
    }
  }

  static setCurrentUserProperty(key, value, updateState = true) {
    const currentUser = this.getCurrentUser();
    let newCurrentUser = cloneDeep(currentUser);
    newCurrentUser[key] = value;
    this.setCurrentUser(newCurrentUser, updateState);
  }

  /* ********************************* UTILS ******************************** */
}
