import React, {useState} from 'react';
import {View, TextInput, Image, Dimensions} from 'react-native';
import {onValidateCheck} from '../../utils/validatecheck';
import {validateEmail, validatePassword} from '../../utils/validate';
import CommonInput from '../../Common/CommonInput';
import InputError from '../../Common/Sign/InputError';
const emailIcon = require('../../assets/images/sign/emailIcon.png');
const passwordIcon = require('../../assets/images/sign/passwordIcon.png');
const userIcon = require('../../assets/images/sign/user.png');

interface InputProps {
  bgColor: string;
  type: string;
  state: {
    setNickname: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  };
}
const SignInput = ({bgColor, type, state}: InputProps) => {
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  return (
    <View
      style={{
        gap: 10,
        padding: 10,
        alignItems: 'flex-start',
      }}>
      {type == 'signup' && (
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            padding: 10,
            backgroundColor: bgColor,
            width: 374,
            borderRadius: 12,
          }}>
          <Image source={userIcon} style={{width: 14, height: 16}}></Image>
          <CommonInput
            inputvalue="이름"
            onChangeText={text => state.setNickname(text)}></CommonInput>
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          padding: 10,
          backgroundColor: bgColor,
          width: 374,
          borderRadius: 12,
        }}>
        <Image source={emailIcon} style={{width: 15, height: 12}}></Image>
        <CommonInput
          inputvalue="이메일"
          onChangeText={text =>
            onValidateCheck({
              validateCheck: validateEmail,
              setValue: state.setEmail,
              setError: setEmailError,
              defaultValue: text,
              ErrorMessage: '이메일 형식을 지켜주세요',
            })
          }
          error={emailError}></CommonInput>
      </View>
      <InputError error={emailError}></InputError>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          padding: 10,
          backgroundColor: bgColor,
          width: 374,
          borderRadius: 12,
        }}>
        <Image source={passwordIcon} style={{width: 12, height: 16}}></Image>
        <CommonInput
          inputvalue="비밀번호"
          onChangeText={text =>
            onValidateCheck({
              validateCheck: validatePassword,
              setValue: state.setPassword,
              setError: setPasswordError,
              defaultValue: text,
              ErrorMessage: '알파벳 숫자 특수문자 8글자 형식을 지켜주세요',
            })
          }
          error={passwordError}
          secure={true}></CommonInput>
      </View>
      <InputError error={passwordError}></InputError>
      {type == 'signup' && (
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            padding: 10,
            backgroundColor: bgColor,
            width: 374,
            borderRadius: 12,
          }}>
          <Image source={userIcon} style={{width: 14, height: 16}}></Image>
          <CommonInput
            inputvalue="핸드폰번호"
            onChangeText={text => state.setPhoneNumber(text)}></CommonInput>
        </View>
      )}
    </View>
  );
};
export default SignInput;
