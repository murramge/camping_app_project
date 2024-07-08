import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import SignInput from '../../Components/Sign/SignInput';
import CommonButton from '../../Common/CommonButton';
import SocialLogin from '../../Components/Sign/SocialLogin';
import {postSignUpData} from '../../Apis/api/user.js';
import {BACKGROUND_COLOR, MAIN_TEXT_COLOR} from '../../Styles/Common/color.ts';
const signup = require('../../assets/images/sign/signup.png');
const SignUp = ({navigation}) => {
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const state = {
    setNickname,
    setEmail,
    setPassword,
    setPhoneNumber,
  };

  const onSubmitRegister = async () => {
    try {
      const data = await postSignUpData({
        email,
        password,
        nickname,
        phoneNumber,
      });
      if (data) {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: BACKGROUND_COLOR,
        flex: 1,
        alignItems: 'center',
      }}>
      <Image source={signup}></Image>
      <Text
        style={{
          fontSize: 24,
          color: MAIN_TEXT_COLOR,
          lineHeight: 32,
          fontWeight: 700,
        }}>
        회원가입
      </Text>
      <SignInput bgColor="white" type="signup" state={state}></SignInput>
      <View style={{width: 370, marginVertical: 30}}>
        <CommonButton
          label="회원가입하기"
          onPress={onSubmitRegister}
          disabled={
            !(nickname && email && password && phoneNumber)
          }></CommonButton>
      </View>
      <View>
        <SocialLogin
          width={180}
          googlelabel={'Google'}
          facebooklabel={'Facebook'}
          flexdirection={'row'}></SocialLogin>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{color: MAIN_TEXT_COLOR}}>회원이세요?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: MAIN_TEXT_COLOR, fontWeight: '700'}}>
            {' '}
            로그인
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
