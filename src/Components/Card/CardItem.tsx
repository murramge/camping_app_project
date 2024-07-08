import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import {datefilter} from '../../utils/datefilter';
import {
  MAIN_TEXT_COLOR,
  ADDRESS_TEXT_COLOR,
  ORANGE_COLOR,
  SUB_TEXT_COLOR,
  TITLE_TEXT_COLOR,
  BACKGROUND_COLOR,
} from '../../Styles/Common/color';
const sampleProfile = require('../../assets/images/sampleProfile.png');
const goIcon = require('../../assets/images/goIcon.png');
const likeIcon = require('../../assets/images/likeIcon.png');
const commentIcon = require('../../assets/images/commentIcon.png');

export const CampingCardItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CampingDetail', {params: item})}>
      <View style={{padding: 10}}>
        <View style={{backgroundColor: 'white', padding: 10, borderRadius: 15}}>
          <View style={{position: 'absolute', padding: 10, zIndex: 2}}>
            <Text
              style={{
                color: 'white',
                padding: 10,
                backgroundColor: ORANGE_COLOR,
                fontWeight: 700,
              }}>
              {item.induty}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={{uri: item.firstImageUrl}}
              resizeMode={'cover'}
              style={{width: 350, height: 150, borderRadius: 10}}></Image>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              paddingTop: 10,
              gap: 5,
            }}>
            <Text
              style={{color: SUB_TEXT_COLOR, fontSize: 13, fontWeight: '700'}}>
              {item.facltDivNm}
            </Text>
            <Text
              style={{color: SUB_TEXT_COLOR, fontSize: 13, fontWeight: '700'}}>
              {item.mangeDivNm}
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              color: TITLE_TEXT_COLOR,
              fontSize: 18,
              lineHeight: 21.48,
              fontWeight: '700',
            }}>
            {item.facltNm}
          </Text>
          <View
            style={{
              paddingHorizontal: 10,
              paddingTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 13,
                lineHeight: 15.51,
                color: ADDRESS_TEXT_COLOR,
                fontWeight: '700',
              }}>
              {item.addr1}
            </Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(`${item.homepage}`)}>
              <Text
                style={{
                  fontSize: 14,
                  color: ORANGE_COLOR,
                  fontWeight: '700',
                }}>
                온라인실시간예약
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ArticleCardItem = ({item}) => {
  const navigation = useNavigation();
  const setday = datefilter(item.createDate);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ArticleDetail', {params: item})}>
      <View style={{padding: 10}}>
        <View style={{backgroundColor: 'white', borderRadius: 12}}>
          <Image
            source={require('../../assets/images/articleimage.png')}
            resizeMode={'cover'}
            style={{width: 374, height: 160}}></Image>
          <View style={{padding: 10}}>
            <Text
              style={{
                fontSize: 18,
                color: MAIN_TEXT_COLOR,
                lineHeight: 25,
                fontWeight: 700,
              }}>
              {item.title}
            </Text>
            <View>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 12,
                  color: MAIN_TEXT_COLOR,
                  paddingVertical: 2,
                }}>
                {item.content}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  color: MAIN_TEXT_COLOR,
                  lineHeight: 14,
                  paddingVertical: 5,
                }}>
                {setday}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const CommunityCardItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CommunityDetail', {params: item})}>
      <View style={{padding: 10}}>
        <View style={{backgroundColor: 'white', borderRadius: 12}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <Image
                source={sampleProfile}
                style={{width: 28, height: 28}}></Image>
              <Text
                style={{fontSize: 14, color: MAIN_TEXT_COLOR, fontWeight: 700}}>
                {item.nickname}
              </Text>
            </View>
            <TouchableOpacity>
              <Image source={goIcon} style={{width: 32, height: 32}}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: BACKGROUND_COLOR,
              padding: 20,
            }}>
            <Text
              style={{color: MAIN_TEXT_COLOR, fontSize: 14, lineHeight: 20}}>
              {item.subject}
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
              {item.replyCount}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
