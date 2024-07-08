import React, {useEffect} from 'react';
import {ImageBackground, Text} from 'react-native';
import {MAIN_TEXT_COLOR} from './Styles/Common/color';
const Background = require('./assets/images/Background.png');
const Splash = props => {
  const navigation = props.navigation;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 3000);
  });
  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          color: MAIN_TEXT_COLOR,
          fontSize: 40,
          fontWeight: 'bold',
          textAlign: 'center',
          flex: 1,
          marginTop: 100,
        }}>
        캠핑 투게더
      </Text>
    </ImageBackground>
  );
};
export default Splash;
