import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTranslate } from '@root/hooks';
import { styles } from '../styles';

const slideImg = require('@root/images/slides/welcome-slide-2.png');

export const Slide2 = props => {
  const t = useTranslate(); // eslint-disable-line no-unused-vars

  // TODO: update dictionary.js and implement translation
  // translation usage example: t('slides', 'some text')

  return (
    <View style={styles.slideContainer}>
      <View style={styles.infoCard}>
        <Image style={styles.infoCardImage} source={slideImg} />
        <View style={styles.infoCardContent}>
          <Text style={[styles.textTitle, styles.spacingAfterLarge]}>
            Permite accesul la locație
          </Text>
          <Text style={[styles.textCommon, styles.spacingAfterMedium]}>
            Telefonul tau va ști unde și cu cine ai intrat in contact și daca
            acea persoana a fost diagnosticata pozitiv
          </Text>
        </View>
      </View>
      <View style={styles.navigationDotsView}>
        <TouchableOpacity
          onPress={() => props.swipe(-1)}
          style={styles.inactiveIndicator}
        />
        <View style={styles.activeIndicator} />
        <TouchableOpacity
          onPress={() => props.swipe(1)}
          style={styles.inactiveIndicator}
        />
      </View>
    </View>
  );
};
