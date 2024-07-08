import React, {useRef} from 'react';
import {View, TouchableOpacity, StyleSheet, Animated} from 'react-native';

const homeOn = require('../assets/images/BottomTab/homeOn.png');
const homeOff = require('../assets/images/BottomTab/homeOff.png');
const articleOn = require('../assets/images/BottomTab/articleOn.png');
const articleOff = require('../assets/images/BottomTab/articleOff.png');
const communityOn = require('../assets/images/BottomTab/communityOn.png');
const communityOff = require('../assets/images/BottomTab/communityOff.png');
const settingOn = require('../assets/images/BottomTab/settingsOn.png');
const settingOff = require('../assets/images/BottomTab/settingsOff.png');
const plus = require('../assets/images/BottomTab/plus.png');

const CustomBottomTab = ({state, navigation, insets, descriptors}) => {
  const tab1Value = useRef(new Animated.Value(0)).current;
  const tab2Value = useRef(new Animated.Value(0)).current;
  const tab3Value = useRef(new Animated.Value(0)).current;
  const tab4Value = useRef(new Animated.Value(0)).current;
  const tab5Value = useRef(new Animated.Value(0)).current;

  const scaleAnimated = (value, animatedValue) =>
    Animated.timing(animatedValue, {
      useNativeDriver: true,
      toValue: value,
      duration: 150,
    });

  const animatedValue = {
    0: tab1Value,
    1: tab2Value,
    2: tab3Value,
    3: tab4Value,
    4: tab5Value,
  };

  return (
    <View style={[styles.bottomTabBarWrapper, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index == index;
        const animatedOf = animatedValue[index];
        const iconFlag = bool => {
          switch (label) {
            case 'Home':
              return bool ? homeOn : homeOff;
            case 'Article':
              return bool ? articleOn : articleOff;
            case 'Post':
              return plus;
            case 'Community':
              return bool ? communityOn : communityOff;
            default:
              return bool ? settingOn : settingOff;
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }

          scaleAnimated(1, animatedOf).start(({finished}) => {
            if (finished) {
              scaleAnimated(0, animatedOf).start();
            }
          });
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            onPress={onPress}
            style={{flex: 1, alignItems: 'center', padding: 16}}>
            <Animated.Image
              source={iconFlag(isFocused)}
              style={{
                width: 35,
                height: 35,
                transform: [
                  {
                    scale: animatedOf.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.9],
                    }),
                  },
                ],
              }}></Animated.Image>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBarWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    border: 'solid',
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#eee',
    backgroundColor: '#fff',
    paddintTop: 10,
    zIndex: 10,
  },
});

export default CustomBottomTab;
