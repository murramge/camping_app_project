import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CommonHeader from '../../Common/CommonHeader';
import CommonInput from '../../Common/CommonInput';
import {
  postCommentWriteData,
  getCommunityDetailData,
} from '../../Apis/api/community';
import {
  BACKGROUND_COLOR,
  LIGHT_BACKGROUND_COLOR,
  MAIN_TEXT_COLOR,
  SUB_TEXT_COLOR,
} from '../../Styles/Common/color';

interface CommunityDetailProps {}
const BackIcons = require('../../assets/images/home/backIcons.png');
const Background = require('../../assets/images/Post/Background.png');
const sampleProfile = require('../../assets/images/sampleProfile.png');
const likeIcon = require('../../assets/images/likeIcon.png');
const commentIcon = require('../../assets/images/commentIcon.png');

const CommunityDetail = ({route, navigation}: CommunityDetailProps) => {
  const item = route.params.params;
  const [datas, Setdatas] = useState();
  const [Comment, setComment] = useState();

  const onWriteComment = async () => {
    try {
      await postCommentWriteData(item.id, Comment);
      getDatas();
    } catch (error) {
      console.log(error);
    }
  };

  const replyList = useCallback(
    ({item}) => {
      return (
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Image
              source={sampleProfile}
              style={{width: 28, height: 28}}></Image>
            <Text
              style={{fontSize: 14, fontWeight: 700, color: MAIN_TEXT_COLOR}}>
              {item.nickname}
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={{color: MAIN_TEXT_COLOR, fontSize: 14}}>
              {item.reply}
            </Text>
          </View>
        </View>
      );
    },
    [Comment],
  );

  const getDatas = (async () => {
    try {
      const data = await getCommunityDetailData(item.id);
      data && Setdatas(data);
    } catch (error) {
      console.log(error);
    }
  })();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
      <ImageBackground source={Background} resizeMode="cover" style={{flex: 1}}>
        <CommonHeader
          leftIcon={BackIcons}
          label="상세 보기"
          leftPress={() => navigation.goBack()}></CommonHeader>
        {datas && (
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              margin: 10,
              borderRadius: 10,
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 15,
                  gap: 10,
                }}>
                <Image
                  source={sampleProfile}
                  style={{width: 28, height: 28}}></Image>
                <Text
                  style={{
                    fontSize: 14,
                    color: MAIN_TEXT_COLOR,
                    fontWeight: 700,
                  }}>
                  {datas.nickname}
                </Text>
              </View>
            </View>
            <View style={{borderTopWidth: 1, borderTopColor: BACKGROUND_COLOR}}>
              <Text style={{padding: 10, color: MAIN_TEXT_COLOR, fontSize: 14}}>
                {datas.content}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 5,
                justifyContent: 'flex-end',
                padding: 10,
              }}>
              <Image source={likeIcon}></Image>
              <Text style={{color: MAIN_TEXT_COLOR, fontSize: 10}}>
                {item.like}
              </Text>
              <Image source={commentIcon}></Image>
              <Text style={{color: MAIN_TEXT_COLOR, fontSize: 10}}>
                {datas.replyCount}
              </Text>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: BACKGROUND_COLOR,
                padding: 10,
              }}>
              <Text
                style={{
                  color: MAIN_TEXT_COLOR,
                }}>
                댓글
              </Text>
              <View style={{paddingVertical: 10, height: 500}}>
                <FlatList data={datas.replys} renderItem={replyList}></FlatList>
              </View>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <View style={{padding: 20, flexDirection: 'row'}}>
                <View
                  style={{
                    padding: 10,
                    backgroundColor: LIGHT_BACKGROUND_COLOR,
                    width: 300,
                    height: 40,
                    borderRadius: 10,
                    position: 'fixed',
                  }}>
                  <CommonInput
                    inputvalue="댓글을 입력하세요"
                    onChangeText={text => setComment(text)}></CommonInput>
                </View>
                <TouchableOpacity
                  onPress={onWriteComment}
                  style={{padding: 10}}>
                  <Text style={{color: SUB_TEXT_COLOR, fontSize: 15}}>
                    등록
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default CommunityDetail;
