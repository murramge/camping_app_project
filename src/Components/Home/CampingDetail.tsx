import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  Linking,
} from 'react-native';
import CommonHeader from '../../Common/CommonHeader';
import CommonButton from '../../Common/CommonButton';
import {
  ADDRESS_TEXT_COLOR,
  BACKGROUND_COLOR,
  ORANGE_COLOR,
  SUB_TEXT_COLOR,
  TITLE_TEXT_COLOR,
} from '../../Styles/Common/color';

const BackIcons = require('../../assets/images/home/backIcons.png');
const CampingDetail = ({route, navigation}) => {
  const item = route.params.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
      <CommonHeader
        leftPress={() => navigation.goBack()}
        leftIcon={BackIcons}
        label="캠핑장 상세 정보"></CommonHeader>
      <Image
        source={{uri: item.firstImageUrl}}
        resizeMode={'cover'}
        style={{width: 414, height: 250}}></Image>
      <View style={{backgroundColor: 'white', borderRadius: 15}}>
        <View style={{padding: 10}}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 30,
              paddingBottom: 5,
            }}>
            <Text style={{color: ORANGE_COLOR, fontSize: 13, fontWeight: 700}}>
              {item.facltDivNm}
            </Text>
            <Text style={{paddingHorizontal: 2}}>・</Text>
            <Text style={{color: ORANGE_COLOR, fontSize: 13, fontWeight: 700}}>
              {item.mangeDivNm}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                color: TITLE_TEXT_COLOR,
                fontWeight: 700,
                paddingBottom: 5,
              }}>
              {item.facltNm}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 13,
                lineHeight: 15,
                color: ADDRESS_TEXT_COLOR,
                fontWeight: 700,
              }}>
              {item.addr1}
            </Text>
          </View>
          <View style={{paddingVertical: 5}}>
            <Text
              style={{
                fontSize: 16,
                color: TITLE_TEXT_COLOR,
                lineHeight: 19,
                fontWeight: 700,
              }}>
              {item.caravInnerFclty}
            </Text>
          </View>
          <View style={{paddingVertical: 5}}>
            <Text
              style={{
                fontSize: 15,
                color: SUB_TEXT_COLOR,
                lineHeight: 18,
                fontWeight: 700,
              }}>
              소개 및 안내
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 15, lineHeight: 22, fontWeight: 500}}>
              {item.intro}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 300,
          justifyContent: 'center',
          padding: 20,
          marginLeft: 50,
        }}>
        <CommonButton
          label="전화하기"
          onPress={() => Linking.openURL(`tel:${item.tel}`)}></CommonButton>
      </View>
    </SafeAreaView>
  );
};

export default CampingDetail;
