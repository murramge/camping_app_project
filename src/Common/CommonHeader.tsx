import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {MAIN_TEXT_COLOR} from '../Styles/Common/color';

interface CommonHeaderProps {
  leftIcon?: any;
  label: string;
  rightIcon?: any;
  leftPress?: any;
}

const CommonHeader = ({
  leftIcon,
  label,
  rightIcon,
  leftPress,
}: CommonHeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      }}>
      <TouchableOpacity onPress={leftPress}>
        <Image source={leftIcon} style={{width: 44, height: 44}}></Image>
      </TouchableOpacity>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 32,
            color: MAIN_TEXT_COLOR,
            fontWeight: '700',
          }}>
          {label}
        </Text>
      </View>
      <View>
        <Image source={rightIcon} style={{width: 44, height: 44}}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CommonHeader;
