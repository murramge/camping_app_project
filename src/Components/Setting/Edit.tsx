import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import CommonHeader from '../../Common/CommonHeader';
import {BACKGROUND_COLOR} from '../../Styles/Common/color';
import CommonInput from '../../Common/CommonInput';
import CommonButton from '../../Common/CommonButton';
import {patchProfileEdit} from '../../Apis/api/user';
const sampleProfile = require('../../assets/images/defaultProfile.png');

interface EditProps {}
const backIcons = require('../../assets/images/home/backIcons.png');
const Edit = ({navigation}: EditProps) => {
  const [nickname, setNickname] = useState();
  const [name, setName] = useState();
  const [introduce, setIntroduce] = useState();

  const onEdit = async () => {
    try {
      const data = await patchProfileEdit({
        nickname: {
          value: nickname,
        },
        name: name,
        introduce: introduce,
      });

      navigation.navigate('Setting');
    } catch (error) {
      console.error(error);
    }
  };

  const ProfileInput = ({profileValue, inputValue, setState}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 20,
        }}>
        <Text>{profileValue} : </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            padding: 10,
            backgroundColor: 'white',
            width: 300,
            borderRadius: 12,
          }}>
          <CommonInput
            inputvalue={inputValue}
            onChangeText={text => setState(text)}></CommonInput>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
      <CommonHeader
        leftIcon={backIcons}
        leftPress={() => navigation.goBack()}
        label="Setting"></CommonHeader>
      <ProfileInput
        profileValue="닉네임"
        inputValue="수정할 닉네임을 작성해주세요 :)"
        setState={setNickname}></ProfileInput>
      <ProfileInput
        profileValue="이름"
        inputValue="수정할 이름을 작성해주세요 :)"
        setState={setName}></ProfileInput>
      <ProfileInput
        profileValue="소개글"
        inputValue="수정할 소개글을 작성해주세요 :)"
        setState={setIntroduce}></ProfileInput>
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 50}}>
        <View style={{width: 300}}>
          <CommonButton
            label="수정하기"
            onPress={onEdit}
            disabled={!(nickname && name && introduce)}></CommonButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Edit;
