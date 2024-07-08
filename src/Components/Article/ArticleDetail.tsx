import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import CommonHeader from '../../Common/CommonHeader';
import {Image} from 'react-native';
import {datefilter} from '../../utils/datefilter';
import {MAIN_TEXT_COLOR, BACKGROUND_COLOR} from '../../Styles/Common/color';
const BackIcons = require('../../assets/images/home/backIcons.png');
const shareIcons = require('../../assets/images/Article/SharePost.png');
const ArticleDetail = ({route, navigation}) => {
  const item = route.params.params;
  const setday = datefilter(item.createDate);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
      <CommonHeader
        leftIcon={BackIcons}
        rightIcon={shareIcons}
        leftPress={() => navigation.goBack()}
        label="아티클 상세"></CommonHeader>
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
        <Image
          source={require('../../assets/images/articleimage.png')}
          resizeMode={'cover'}
          style={{width: 374, height: 160}}></Image>
      </View>
      <ScrollView
        style={{
          padding: 10,
          backgroundColor: 'white',
          flex: 1,
          margin: 10,
          borderRadius: 12,
        }}>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 25,
            color: MAIN_TEXT_COLOR,
            fontWeight: 700,
          }}>
          {item.title}
        </Text>
        <Text
          style={{textAlign: 'right', fontSize: 12, color: MAIN_TEXT_COLOR}}>
          {setday}
        </Text>
        <Text
          style={{
            paddingVertical: 20,
            color: MAIN_TEXT_COLOR,
            fontSize: 12,
            lineHeight: 14,
          }}>
          {item.content}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticleDetail;
