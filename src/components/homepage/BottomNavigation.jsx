import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';

const BottomNavigation = () => {
  return (
    <View
      className="absolute bottom-0 left-0 right-0 h-[83px] bg-[#FFFCF8] flex flex-row justify-around items-center rounded-t-3xl"
      style={{
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6.3,
        elevation: 5,
      }}>
      <View className="flex flex-row items-center">
        <Image source={require('../../utils/homepage/MySpace.png')} className="w-[53px] h-[59px] mt-2" />
        <Text className="font-quicksand font-medium text-base ml-1 ">My Space</Text>
      </View>
      <Image source={require('../../utils/homepage/Events.png')} className="w-[43px] h-[43px]" />
      <Image source={require('../../utils/homepage/supporgCircle.png')} className="w-[43px] h-[43px]" />
      <Image source={require('../../utils/homepage/wellnessLibrary.png')} className="w-[43px] h-[43px]" />
    </View>
  );
};

export default BottomNavigation;
