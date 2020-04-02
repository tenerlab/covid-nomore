import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTranslate } from '@root/hooks';
import { styles } from '../styles';

const slideImg = require('@root/images/slides/welcome-slide-1.png');

export const Slide1 = props => {
  const t = useTranslate(); // eslint-disable-line no-unused-vars

  // TODO: update dictionary.js and implement translation
  // translation usage example: t('slides', 'some text')

  return (
    <View style={styles.slideContainer}>
      <View style={styles.infoCard}>
        <Image style={styles.infoCardImage} source={slideImg} />
        <View style={styles.infoCardContent}>
          <Text style={[styles.textTitle, styles.spacingAfterLarge]}>
            Contribue la prevenirea răspândirii COVID-19
          </Text>
          <Text style={[styles.textCommon, styles.spacingAfterMedium]}>
            Află cum poți sa contribui la răspândirea virusului COVID-19
            folosind telefonul tau
          </Text>
          <Text style={[styles.textHighlighted, styles.spacingAfterMedium]}>
            Află dacă ai intrat in contact cu o persoană infectata
          </Text>
          <Text style={[styles.textHighlighted]}>
            Toate datele colectate sunt anonime și nu pot contribui la
            identificarea ta
          </Text>
        </View>
      </View>
      <View style={styles.navigationDotsView}>
        <View style={styles.activeIndicator} />
        <TouchableOpacity
          onPress={() => props.swipe(1)}
          style={styles.inactiveIndicator}
        />
        <TouchableOpacity
          onPress={() => props.swipe(2)}
          style={styles.inactiveIndicator}
        />
      </View>
    </View>
  );
};
