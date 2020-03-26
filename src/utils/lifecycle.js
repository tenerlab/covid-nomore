import { AppState } from 'react-native';
import { CacheManager } from '@root/utils/cache-manager';

export class Lifecycle {
  static listenForStateChanges() {
    AppState.addEventListener('change', () =>
      Lifecycle.onAppStateChange(AppState.currentState)
    );
  }

  static async checkIfFirstLaunch() {
    const storageKey = 'isFirstLaunch';
    const val = await CacheManager.getKeyValue(storageKey);

    if (!val) {
      await CacheManager.saveKeyValue(storageKey, true);
      Lifecycle.onFirstLaunch();
    }
  }

  static onFirstLaunch() {
    // console.log('~~~ FIRST LAUNCH');
  }

  static onAppOpened() {
    // console.log('~~~ APP ACTIVE');
  }

  static onAppClosedToBackground() {
    // console.log('~~~ APP IN BACKGROUND');
  }

  static onAppStateChange(currentState) {
    // eslint-disable-next-line no-unused-expressions
    currentState === 'active'
      ? Lifecycle.onAppOpened()
      : Lifecycle.onAppClosedToBackground();
  }
}
