import React from 'react';
import {Image, Text, View} from 'react-native';

const EveningCards = ({title, subtitle, duration}) => {
  return (
    <View className="w-[364px] h-[111.42px] mt-4 bg-[#C4EED9] mx-auto rounded-3xl flex flex-row items-center justify-evenly">
      <View className="w-[44px] h-[44px] rounded-full bg-white"></View>
      <View className="flex flex-col">
      <View className="flex flex-row items-center">
          <Text className="font-quicksand font-semibold text-lg z-10">
            {title}
          </Text>
          <Image
            source={require('../../utils/homepage/eveningSmallEllipse.png')}
            className=" w-[37.69px] h-[37.69px] top-1 right-7"
          />
        </View>
        <Text className="font-quicksand font-medium text-sm">{subtitle}</Text>
        <View className="flex flex-row items-center mt-3">
          <Text className="font-quicksand text-base font-semibold mr-16">
            {duration}
          </Text>

          <Image
            source={require('../../utils/homepage/coins.png')}
            className="ml-2"
          />
          <Text className="font-quicksand text-sm font-normal">10</Text>
        </View>
      </View>

      <View className="relative w-[74.62px] h-[74.62px] mt-2">
        <Image
          source={require('../../utils/homepage/eveningPanda.png')}
          className="absolute left-0 top-0 w-[54px] h-[76.04px] z-10"
        />

        <Image
          source={require('../../utils/homepage/eveningBigEllipse.png')}
          className="absolute w-[74.62px] h-[74.62px]"
        />
      </View>
    </View>
  );
};

export default EveningCards;
