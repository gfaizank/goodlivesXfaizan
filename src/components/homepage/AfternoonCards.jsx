import React from 'react';
import {Image, Text, View} from 'react-native';

const AfternoonCards = ({title, subtitle, duration}) => {
  return (
    <View className="w-[364px] h-[111.42px] mt-4 bg-[#FFE9AA] mx-auto rounded-3xl flex flex-row items-center justify-evenly">
      <View className="w-[44px] h-[44px] rounded-full bg-white"></View>
      <View className="flex flex-col">
        <Text className="font-quicksand font-semibold text-lg">
          Morning meditation 1
        </Text>
        <Text className="font-quicksand font-medium text-sm">
          Affirmation for day
        </Text>
        <View className="flex flex-row items-center mt-3">
          <Text className="font-quicksand text-base font-semibold mr-[64px]">
            6 min
          </Text>
          <Image
            source={require('../../utils/homepage/coins.png')}
            className="ml-2"
          />
          <Text className="font-quicksand text-sm font-normal">10</Text>
        </View>
      </View>
      <View className="flex flex-row">
        <Image
          source={require('../../utils/homepage/afternoonCup.png')}
          className="mt-[69px] mr-[-4px] w-[21.92px] h-[35.55px]"
        />
        <Image
          source={require('../../utils/homepage/afterNoonPanda.png')}
          className="w-[96.99px] h-[96.99px] mt-1"
        />
      </View>
    </View>
  );
};

export default AfternoonCards;
