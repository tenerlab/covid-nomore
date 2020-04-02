import React from 'react';
import Toast from 'react-native-simple-toast';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { useTranslate } from '@root/hooks';
import { styles } from '../styles';

const slideImg = require('@root/images/slides/welcome-slide-2.png');

/* ********************************* EVENTS ********************************* */

const onBtnAccessRequestPress = () => {
  Toast.show('TODO: request location permissions', Toast.SHORT);
};

/* ********************************** MAIN ********************************** */

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
          <Button
            type="outline"
            buttonStyle={[styles.btnAction, styles.btnActionSlide2Spacing]}
            titleStyle={styles.btnActionTitle}
            title="Permite acces"
            onPress={onBtnAccessRequestPress}
          />
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
