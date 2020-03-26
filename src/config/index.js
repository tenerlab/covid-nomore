import RNConfig from 'react-native-config';
import { filter } from 'ramda';
import dotenvParseVariables from 'dotenv-parse-variables';

const stringValues = filter(value => typeof value === 'string', RNConfig);

export const Config = {
  ...RNConfig,
  ...dotenvParseVariables(stringValues),
};
