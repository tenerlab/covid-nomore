import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTranslate } from '@root/hooks';
import { styles } from '../styles';

const slideImg = require('@root/images/slides/welcome-slide-3.png');

export const Slide3 = props => {
  const t = useTranslate(); // eslint-disable-line no-unused-vars

  // TODO: update dictionary.js and implement translation
  // translation usage example: t('slides', 'some text')

  return (
    <View style={styles.slideContainer}>
      <View style={styles.infoCard}>
        <Image style={styles.infoCardImage} source={slideImg} />
        <View style={styles.infoCardContent}>
          <Text style={[styles.textTitle, styles.spacingAfterLarge]}>
            Permite accesul la bluetooth
          </Text>
          <Text style={[styles.textCommon, styles.spacingAfterMedium]}>
            Telefonul tău va putea comunica cu alte telefoane, transmițând
            informații pentru a ajuta la prevenirea raspândirii virusului
          </Text>
        </View>
      </View>
      <View style={styles.navigationDotsView}>
        <TouchableOpacity
          onPress={() => props.swipe(-2)}
          style={styles.inactiveIndicator}
        />
        <TouchableOpacity
          onPress={() => props.swipe(-1)}
          style={styles.inactiveIndicator}
        />
        <View style={styles.activeIndicator} />
      </View>
    </View>
  );
};
