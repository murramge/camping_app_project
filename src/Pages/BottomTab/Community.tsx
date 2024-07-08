import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import CommonHeader from '../../Common/CommonHeader';
import CardList from '../../Components/Card/CardList';
import {getCommunityViewsData} from '../../Apis/api/community.js';
import {BACKGROUND_COLOR} from '../../Styles/Common/color.ts';

const leftIcons = require('../../assets/images/home/leftIcons.png');
const rightIcons = require('../../assets/images/home/samplerightIcon.png');

const Community = () => {
  const [datas, Setdatas] = useState([]);

  (async function () {
    try {
      const data = await getCommunityViewsData();
      data && Setdatas(data);
    } catch (error) {
      console.log(error);
    }
  })();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
      <CommonHeader
        leftIcon={leftIcons}
        rightIcon={rightIcons}
        label="커뮤니티"></CommonHeader>
      <CardList datas={datas}></CardList>
    </SafeAreaView>
  );
};

export default Community;
