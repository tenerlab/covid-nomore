import DeviceInfo from 'react-native-device-info';
import { Config } from '@root/config';

export const Utils = {
  tryParseJSON: (jsonString, fallback = false, resultHasToBeObject = true) => {
    try {
      const parsedJSON = JSON.parse(jsonString);
      const isAllowedTyped =
        !resultHasToBeObject ||
        (resultHasToBeObject && typeof parsedJSON === 'object');

      return parsedJSON !== null && isAllowedTyped ? parsedJSON : fallback;
    } catch (e) {
      return fallback;
    }
  },

  asyncForEach: async (arr, callback) => {
    // reference:
    // https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404

    for (let i = 0; i < arr.length; i += 1) {
      await callback(arr[i], i, arr);
    }
  },

  getBundleId: () => DeviceInfo.getBundleId(),

  getEnvironment: (fallback = 'prod') => {
    if (typeof Config.ENVIRONMENT != 'string') return fallback;

    const environment = Config.ENVIRONMENT.toLowerCase();

    if (['prod', 'production'].indexOf(environment) >= 0) return 'prod';

    if (['stage', 'staging'].indexOf(environment) >= 0) return 'stage';

    if (['dev', 'development'].indexOf(environment) >= 0) return 'dev';

    return fallback;
  },

  isProdEnvironment: () => Utils.getEnvironment() == 'prod',
  isStageEnvironment: () => Utils.getEnvironment() == 'stage',
  isDevEnvironment: () => Utils.getEnvironment() == 'dev',
};
