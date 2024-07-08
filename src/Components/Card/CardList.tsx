import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {ArticleCardItem, CampingCardItem, CommunityCardItem} from './CardItem';

interface CampingCardListProps {
  datas: any;
  type?: string;
}
const CardList = ({datas, type}: CampingCardListProps) => {
  const CardItem = ({item}) => {
    switch (type) {
      case 'CampingItem':
        return <CampingCardItem item={item}></CampingCardItem>;
      case 'ArticleItem':
        return <ArticleCardItem item={item}></ArticleCardItem>;
      default:
        return <CommunityCardItem item={item}></CommunityCardItem>;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, padding: 10}}>
      {<FlatList data={datas} renderItem={CardItem}></FlatList>}
    </SafeAreaView>
  );
};

export default CardList;
