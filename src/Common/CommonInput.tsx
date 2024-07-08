import React from 'react';
import {TextInput, Dimensions} from 'react-native';
import {ORANGE_COLOR, MAIN_TEXT_COLOR} from '../Styles/Common/color';
interface CommonInputProps {
  inputvalue: string;
  onChangeText?: any;
  error?: string;
  secure?: boolean;
}

const CommonInput = ({
  inputvalue,
  onChangeText,
  error,
  secure,
}: CommonInputProps) => {
  return (
    <TextInput
      placeholderTextColor={MAIN_TEXT_COLOR}
      placeholder={inputvalue}
      onChangeText={onChangeText}
      style={{
        color: error ? ORANGE_COLOR : MAIN_TEXT_COLOR,
        width: 300,
      }}
      secureTextEntry={secure}></TextInput>
  );
};

export default CommonInput;
