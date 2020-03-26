import React from 'react';
import { ActivityIndicator, View, Text, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslate } from '@root/hooks';
import { styles } from './styles';

const imgLogoTop = require('@root/images/logo.top.png');
const imgLogoBottom = require('@root/images/logo.bottom.png');

// eslint-disable-next-line
export const Init = ({ navigation }) => {
  const t = useTranslate();
  return (
    <LinearGradient
      style={styles.container}
      colors={['#03A1E9', '#0183D3', '#0063BD']}
    >
      <StatusBar barStyle="light-content" backgroundColor="#03A1E9" />
      <View>
        <View style={styles.imgWrapper}>
          <Image style={styles.imgLogoTop} source={imgLogoTop} />
        </View>

        <View style={styles.loaderWrapper}>
          <View style={styles.loadingIndicatorWrapper}>
            <ActivityIndicator size={32} color="#ffffff" />
            <Text style={styles.loadingText}>{t('common', 'Loading...')}</Text>
          </View>
        </View>
      </View>

      <View style={styles.imgWrapperFooter}>
        <Image style={styles.imgLogoBottom} source={imgLogoBottom} />
      </View>
    </LinearGradient>
  );
};

Init.navigationOptions = {
  header: null, // hide header
};
