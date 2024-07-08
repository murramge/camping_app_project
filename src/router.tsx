import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from './Splash';
import Home from './Pages/BottomTab/Home';
import OnBoarding from './Pages/Onboarding/OnBoarding';
import Login from './Pages/Sign/Login';
import SignUp from './Pages/Sign/SignUp';
import CampingDetail from './Components/Home/CampingDetail';
import Article from './Pages/BottomTab/Article';
import ArticleDetail from './Components/Article/ArticleDetail';
import Post from './Pages/BottomTab/Post';
import Community from './Pages/BottomTab/Community';
import CommunityDetail from './Components/Community/CommunityDetail';
import Setting from './Pages/BottomTab/Setting';
import CustomBottomTab from './Components/CustomBottom';
import Edit from './Components/Setting/Edit';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = props => {
  return <CustomBottomTab {...props}></CustomBottomTab>;
};

const MainTab = () => {
  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Article" component={Article}></Tab.Screen>
      <Tab.Screen name="Post" component={Post}></Tab.Screen>
      <Tab.Screen name="Community" component={Community}></Tab.Screen>
      <Tab.Screen name="Setting" component={Setting}></Tab.Screen>
    </Tab.Navigator>
  );
};

function Router() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
      <Stack.Screen name="MainTab" component={MainTab}></Stack.Screen>
      <Stack.Screen name="OnBoarding" component={OnBoarding}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      <Stack.Screen
        name="CampingDetail"
        component={CampingDetail}></Stack.Screen>
      <Stack.Screen
        name="ArticleDetail"
        component={ArticleDetail}></Stack.Screen>
      <Stack.Screen
        name="CommunityDetail"
        component={CommunityDetail}></Stack.Screen>
      <Stack.Screen name="Edit" component={Edit}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default Router;
