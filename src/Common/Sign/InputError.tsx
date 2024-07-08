import React from 'react';
import {View, Text} from 'react-native';
import {ORANGE_COLOR} from '../../Styles/Common/color';

interface InputErrorProps {
  error?: string;
}

const InputError = ({error}: InputErrorProps) => {
  {
    return (
      error && (
        <View>
          <Text style={{color: ORANGE_COLOR, fontSize: 12}}>{error}</Text>
        </View>
      )
    );
  }
};

export default InputError;
