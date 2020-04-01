import React from 'react';
import { View } from 'react-native';
import { Swiper } from '@root/components/Swiper';
import { Slide1 } from './slides/Slide1';
import { Slide2 } from './slides/Slide2';
import { Slide3 } from './slides/Slide3';
import { styles } from './styles';

export const WelcomeScreen = ({ navigation }) => {
  const swiperRef = React.useRef('');

  const swipe = i => {
    if (swiperRef) swiperRef.current.scrollBy(i);
  };
  return (
    <View style={{ flex: 1 }}>
      <Swiper
        showsButtons={false}
        activeDotColor="#665EFF"
        showsPagination={false}
        ref={swiperRef}
        loop={false}
      >
        <View style={styles.container}>
          <Slide1 navigation={navigation} swipe={i => swipe(i)} />
        </View>
        <View style={styles.container}>
          <Slide2 navigation={navigation} swipe={i => swipe(i)} />
        </View>
        <View style={styles.container}>
          <Slide3 navigation={navigation} swipe={i => swipe(i)} />
        </View>
      </Swiper>
    </View>
  );
};
