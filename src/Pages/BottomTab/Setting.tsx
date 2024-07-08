import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import CommonHeader from '../../Common/CommonHeader';
import CommonButton from '../../Common/CommonButton';
import {BACKGROUND_COLOR, MAIN_TEXT_COLOR} from '../../Styles/Common/color';
import Profile from '../../Components/Setting/Profile';
const leftIcons = require('../../assets/images/home/leftIcons.png');

const Setting = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
      <CommonHeader leftIcon={leftIcons} label="Profile"></CommonHeader>
      <Profile></Profile>
    </SafeAreaView>
  );
};

export default Setting;
