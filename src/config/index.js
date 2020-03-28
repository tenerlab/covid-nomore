import RNConfig from 'react-native-config';
import { filter } from 'ramda';
import dotenvParseVariables from 'dotenv-parse-variables';

/* ******************************** SETTINGS ******************************** */

const REMOVE_PREFIX = true;
const PREFIX_TO_REMOVE = 'REACT_APP_';

/* ********************************** MAIN ********************************** */

const stringValues = filter(value => typeof value === 'string', RNConfig);
const values = {
  ...RNConfig,
  ...dotenvParseVariables(stringValues),
};
let processedValues = values;

/* ************************* OPTIONAL PREPROCESSING ************************* */

if (REMOVE_PREFIX) {
  processedValues = {};

  for (const [key, value] of Object.entries(values)) {
    if (typeof key == 'string' && key.indexOf(PREFIX_TO_REMOVE) === 0) {
      let newKey = key.slice(PREFIX_TO_REMOVE.length, key.length);
      processedValues[newKey] = value;
    } else {
      processedValues[key] = value;
    }
  }
}

/* ******************************** EXAMPLES ******************************** */

// example of available values:

// from ENV:
// REACT_APP_ + ENVIRONMENT: "stage"
// REACT_APP_ + SAMPLE_VARIABLE_ONE: "value"
// REACT_APP_ + SAMPLE_VARIABLE_TWO: "value"

// from RNConfig:
// APPLICATION_ID: "com.covidnomore"
// BUILD_TYPE: "debug"
// FLAVOR: ""
// VERSION_CODE: 2
// VERSION_NAME: "1.0.1"
// DEBUG: true

/* ********************************* EXPORT ********************************* */

export const Config = processedValues;
