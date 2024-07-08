import React, {useState} from 'react';
import {SafeAreaView, View, ImageBackground} from 'react-native';
import CommonHeader from '../../Common/CommonHeader';
import CommonInput from '../../Common/CommonInput';
import CommonButton from '../../Common/CommonButton';
import {postWriteCommunityData} from '../../Apis/api/post.js';
import {BACKGROUND_COLOR} from '../../Styles/Common/color.ts';

const backIcon = require('../../assets/images/home/backIcons.png');
const postIcon = require('../../assets/images/postIcon.png');
const Background = require('../../assets/images/Post/Background.png');
const Post = ({navigation}) => {
  const [subject, setSubject] = useState();
  const [content, setContent] = useState();
  const onPost = async () => {
    const body = new FormData();
    body.append('subject', subject);
    body.append('content', content);
    try {
      await postWriteCommunityData(body);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
      <ImageBackground source={Background} resizeMode="cover" style={{flex: 1}}>
        <CommonHeader
          leftIcon={backIcon}
          label="새 글 쓰기"
          rightIcon={postIcon}
          leftPress={() => navigation.goBack()}></CommonHeader>
        <View style={{padding: 10}}>
          <View
            style={{backgroundColor: 'white', padding: 10, borderRadius: 12}}>
            <CommonInput
              inputvalue="제목을 입력해주세요"
              onChangeText={text => setSubject(text)}></CommonInput>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              marginVertical: 15,
              borderRadius: 12,
              height: 500,
            }}>
            <CommonInput
              inputvalue="내용을 입력해주세요"
              onChangeText={text => setContent(text)}></CommonInput>
          </View>
          <View style={{width: 300, marginHorizontal: 40}}>
            <CommonButton label="작성완료" onPress={onPost}></CommonButton>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Post;
