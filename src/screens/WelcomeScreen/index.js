import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { Swiper } from '@root/components/Swiper';
import { Slide1 } from './slides/Slide1';
import { Slide2 } from './slides/Slide2';
import { Slide3 } from './slides/Slide3';
import { styles } from './styles';

const screenBgImg = require('@root/images/bg.png');

export const WelcomeScreen = ({ navigation }) => {
  const swiperRef = React.useRef('');

  const swipe = i => {
    if (swiperRef) swiperRef.current.scrollBy(i);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#20C1FF" />
      <ImageBackground source={screenBgImg} style={styles.screenBg}>
        <Swiper
          showsButtons={false}
          activeDotColor="#ffffff"
          showsPagination={false}
          ref={swiperRef}
          loop={false}
        >
          <View style={styles.slideContainerWrap}>
            <Slide1 navigation={navigation} swipe={i => swipe(i)} />
          </View>
          <View style={styles.slideContainerWrap}>
            <Slide2 navigation={navigation} swipe={i => swipe(i)} />
          </View>
          <View style={styles.slideContainerWrap}>
            <Slide3 navigation={navigation} swipe={i => swipe(i)} />
          </View>
        </Swiper>
      </ImageBackground>
    </View>
  );
};
