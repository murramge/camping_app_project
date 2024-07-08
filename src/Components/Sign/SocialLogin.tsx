import {Image} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import {MAIN_TEXT_COLOR} from '../../Styles/Common/color';
const google = require('../../assets/images/sign/GoogleIcon.png');
const facebook = require('../../assets/images/sign/FacebookIcon.png');

interface SocialLoginProps {
  width: number;
  googlelabel: string;
  facebooklabel: string;
  flexdirection: string;
}

const SocialLogin = ({
  width,
  googlelabel,
  facebooklabel,
  flexdirection,
}: SocialLoginProps) => {
  return (
    <View style={{gap: 10, marginTop: 30, flexDirection: flexdirection}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 12,
          width,
        }}>
        <Image source={google} style={{width: 23, height: 23}}></Image>
        <Text
          style={{
            color: MAIN_TEXT_COLOR,
            fontSize: 16,
            lineHeight: 16,
            textAlign: 'center',
          }}>
          {googlelabel}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingVertical: 7,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 12,
          width,
        }}>
        <Image source={facebook} style={{width: 35, height: 30}}></Image>
        <Text
          style={{
            color: MAIN_TEXT_COLOR,
            fontSize: 16,
            lineHeight: 16,
            textAlign: 'center',
          }}>
          {facebooklabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;
