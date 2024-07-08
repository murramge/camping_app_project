import {Image} from 'react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import CommonButton from '../../Common/CommonButton';
import {MAIN_TEXT_COLOR, ORANGE_COLOR} from '../../Styles/Common/color';

const OnBoarding = ({navigation}) => {
  const Square = ({selected}) => {
    let backgroundColor = selected ? MAIN_TEXT_COLOR : ORANGE_COLOR;
    return <View style={[styles.square, {backgroundColor}]}></View>;
  };
  const Done = () => {
    return (
      <View style={styles.buttonSize}>
        <CommonButton
          label="시작하기"
          onPress={() => navigation.navigate('Login')}></CommonButton>
      </View>
    );
  };

  return (
    <Onboarding
      onSkip={() => navigation.navigate('Login')}
      bottomBarColor="white"
      DotComponent={Square}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: 'white',
          image: (
            <Image
              source={require('../../assets/images/onboarding/onboarding1.png')}
              style={styles.imageSize}
            />
          ),
          title: '캠핑투게더 사용법',
          subtitle: `캠핑투게더는 캠핑장 위치와\n캠핑 커뮤니티를 제공합니다.`,
        },
        {
          backgroundColor: 'white',
          image: (
            <Image
              source={require('../../assets/images/onboarding/onboarding2.png')}
              style={styles.imageSize}
            />
          ),
          title: '캠핑장 추천',
          subtitle: '캠핑전문가들이 제공하는\n질 높은 아티클로 시간을 아끼세요',
        },
        {
          backgroundColor: 'white',
          image: (
            <Image
              source={require('../../assets/images/onboarding/onboarding3.png')}
              style={styles.imageSize}
            />
          ),
          title: '캠핑장 정보',
          subtitle:
            '대한민국 캠핑장 정보를 모두 알아보고\n원하는 곳을 가보세요!',
        },
        {
          backgroundColor: 'white',
          image: (
            <Image
              source={require('../../assets/images/onboarding/onboarding4.png')}
            />
          ),
          title: '캠핑 커뮤니티',
          subtitle:
            '캠핑 커뮤니티에 참여하여\n같이 캠핑 갈 멤버를 모집해보세요.',
        },
      ]}
      titleStyles={styles.titleStyles}
      subTitleStyles={styles.subTitleStyles}
    />
  );
};

const styles = StyleSheet.create({
  square: {
    width: 6,
    height: 6,
    marginHorizontal: 3,
    borderRadius: 50,
  },
  buttonSize: {width: 300, marginHorizontal: 40},
  imageSize: {width: 200, height: 300},
  titleStyles: {
    color: MAIN_TEXT_COLOR,
    fontWeight: '700',
    fontSize: 32,
  },
  subTitleStyles: {
    color: MAIN_TEXT_COLOR,
    fontSize: 17,
    fontWeight: '700',
  },
});

export default OnBoarding;
