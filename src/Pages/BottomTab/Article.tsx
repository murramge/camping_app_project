import React, {useCallback, useState} from 'react';
import {StyleSheet, View, SafeAreaView, Image, Text} from 'react-native';
import CommonHeader from '../../Common/CommonHeader';
import CardList from '../../Components/Card/CardList';
import DropDownPicker from 'react-native-dropdown-picker';
import {getArticleData} from '../../Apis/api/article.js';
import {BACKGROUND_COLOR, MAIN_TEXT_COLOR} from '../../Styles/Common/color.ts';
const leftIcon = require('../../assets/images/home/leftIcons.png');
const searchIcon = require('../../assets/images/Article/searchIcons.png');
const header = require('../../assets/images/Article/Header.png');

const Article = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('FAVORITE');
  const [items, setItems] = useState([
    {label: '즐겨찾기순', value: 'FAVORITE'},
    {label: '최신순', value: 'LATEST'},
  ]);

  const [datas, setDatas] = useState();

  useCallback(async () => {
    try {
      const data = await getArticleData(value);
      data && setDatas(data);
    } catch (error) {
      console.log(error);
    }
  }, [value])();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
      <CommonHeader
        leftIcon={leftIcon}
        rightIcon={searchIcon}
        label="아티클"></CommonHeader>
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
        <Image source={header} style={{width: 370, height: 140}}></Image>
      </View>
      <View
        style={{
          flexDirection: 'row',
          zIndex: 2,
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View style={{justifyContent: 'center'}}>
          <Text style={{color: MAIN_TEXT_COLOR}}>Sort By:</Text>
        </View>
        <View
          style={{
            zIndex: 2,
            width: 150,
            paddingHorizontal: 10,
          }}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              borderColor: `${MAIN_TEXT_COLOR}1A`,
              minHeight: 30,
              zIndex: 100,
            }}
            dropDownContainerStyle={{borderWidth: 0}}
          />
        </View>
      </View>

      <CardList datas={datas} type="ArticleItem"></CardList>
    </SafeAreaView>
  );
};

export default Article;
