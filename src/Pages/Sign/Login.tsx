import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import SocialLogin from '../../Components/Sign/SocialLogin';
import SignInput from '../../Components/Sign/SignInput';
import CommonButton from '../../Common/CommonButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {postLoginData} from '../../Apis/api/user.js';
import {BACKGROUND_COLOR, MAIN_TEXT_COLOR} from '../../Styles/Common/color.ts';
const loginBackground = require('../../assets/images/sign/login.png');
const width = Dimensions.get('window');

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const state = {
    setEmail,
    setPassword,
  };

  const onSubmitLogin = async () => {
    try {
      const res = await postLoginData({
        email,
        password,
      });
      if (res) {
        console.log(res);
        navigation.navigate('MainTab');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground
      source={loginBackground}
      resizeMode="cover"
      style={styles.ImageBackground}>
      <View>
        <Text style={styles.welcomeText}>환영해요!</Text>
        <View style={styles.socialLoginWrab}>
          <SocialLogin
            width={340}
            googlelabel={'Continue with Google'}
            facebooklabel={'Continue with Facebook'}
            flexdirection={'column'}></SocialLogin>
        </View>
      </View>
      <View style={styles.LoginWrab}>
        <View style={styles.titleWrab}>
          <Text style={styles.title}>이메일로 로그인하기</Text>
        </View>
        <SignInput
          bgColor={BACKGROUND_COLOR}
          type="login"
          state={state}></SignInput>
        <View style={styles.center}>
          <View style={styles.loginbutton}>
            <CommonButton label="로그인" onPress={onSubmitLogin}></CommonButton>
          </View>
          <View></View>
          <View style={styles.row}>
            <Text style={styles.textcolor}>아직 회원이 아니세요?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.textboldcolor}> 회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {flex: 1, justifyContent: 'flex-end'},
  welcomeText: {
    color: MAIN_TEXT_COLOR,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialLoginWrab: {alignItems: 'center', marginBottom: 30},
  LoginWrab: {
    backgroundColor: 'white',
    width: width,
    height: 400,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  titleWrab: {marginVertical: 30},
  title: {
    color: MAIN_TEXT_COLOR,
    fontSize: 16,
    lineHeight: 16,
    textAlign: 'center',
  },
  center: {justifyContent: 'center', alignItems: 'center'},
  loginbutton: {width: 370, marginVertical: 30},
  row: {flexDirection: 'row'},
  textcolor: {color: MAIN_TEXT_COLOR},
  textboldcolor: {color: MAIN_TEXT_COLOR, fontWeight: '700'},
});

export default Login;
