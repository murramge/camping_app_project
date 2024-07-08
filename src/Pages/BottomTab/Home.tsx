import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import CommonHeader from '../../Common/CommonHeader';
import CardList from '../../Components/Card/CardList';
import {getCampingData} from '../../Apis/api/campingdata.js';
import {BACKGROUND_COLOR} from '../../Styles/Common/color.ts';
const leftIcons = require('../../assets/images/home/leftIcons.png');
const rightIcons = require('../../assets/images/home/samplerightIcon.png');

const Home = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCampingData();
        data && setDatas(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
      <CommonHeader
        leftIcon={leftIcons}
        label="캠핑투게더"
        rightIcon={rightIcons}></CommonHeader>
      <CardList datas={datas} type="CampingItem"></CardList>
    </SafeAreaView>
  );
};
export default Home;
