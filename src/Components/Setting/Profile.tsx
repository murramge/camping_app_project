import React, {useEffect, useState} from 'react';
import {Image, View, Text} from 'react-native';
import {getUserData} from '../../Apis/api/user';
import {BACKGROUND_COLOR, MAIN_TEXT_COLOR} from '../../Styles/Common/color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
const sampleProfile = require('../../assets/images/defaultProfile.png');
const editIcon = require('../../assets/images/edit.png');
interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const navigation = useNavigation();
  const [datas, setDatas] = useState();
  useFocusEffect(
    React.useCallback(() => {
      const getData = async () => {
        try {
          const data = await getUserData();
          setDatas(data);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }, []),
  );

  return (
    <View style={{padding: 10}}>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row', gap: 10, padding: 20}}>
          {datas && (
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', gap: 20, height: 50}}>
                <Image
                  source={sampleProfile}
                  style={{width: 55, height: 55}}></Image>
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={{
                      color: MAIN_TEXT_COLOR,
                      fontWeight: '700',
                      fontSize: 16,
                    }}>
                    {datas.nickName}
                  </Text>
                  <Text style={{color: MAIN_TEXT_COLOR, fontSize: 12}}>
                    {datas.introduce}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Edit', {params: datas})}
                  style={{justifyContent: 'center'}}>
                  <Image
                    source={editIcon}
                    style={{width: 50, height: 50}}></Image>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        <View
          style={{
            borderTopColor: BACKGROUND_COLOR,
            borderTopWidth: 1,
            padding: 30,
            flexDirection: 'row',
          }}>
          {datas && (
            <View
              style={{
                flexDirection: 'row',
                width: 300,
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 15, color: MAIN_TEXT_COLOR}}>
                  내가 쓴 글
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    color: MAIN_TEXT_COLOR,
                    fontWeight: '700',
                  }}>
                  {datas.communityCount}
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 15, color: MAIN_TEXT_COLOR}}>
                  즐겨찾기
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    color: MAIN_TEXT_COLOR,
                    fontWeight: '700',
                  }}>
                  {datas.favoriteCount}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
