import React from 'react';
import {Image, View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const NavSection = ({ fromRewards }) => {
  return (
    <View className="flex flex-col z-10">
      <ImageBackground
        source={require('../../utils/homepage/EllipseHome.png')}
        className="w-full bg-white h-[457.58px]">
        <View className="flex flex-row items-center justify-between mt-5 mx-4">
          <Image
            source={require('../../utils/homepage/align-left.png')}
            className=""
          />

          <View className="flex flex-row items-center ">
            <Image
              source={require('../../utils/homepage/fire.png')}
              className="w-[30px] h-[30px]"
            />
            <Text className="font-quicksand text-xl font-normal">{fromRewards ? '1' : '0'}</Text>
          </View>

          <View className="flex flex-row items-center">
            <Image
              source={require('../../utils/homepage/coins.png')}
              className="w-[53px] h-[50.2px]"
            />
            <Text className="font-quicksand text-xl font-normal">{fromRewards ? '10' : '0'}</Text>

            <Image
              source={require('../../utils/homepage/pattern.png')}
              className="bottom-1 right-1"
            />
          </View>

          <View className="flex flex-row items-center">
            <View className="flex flex-col">
              <Image
                source={require('../../utils/homepage/Rectanglex.png')}
                className="right-4 bottom-6"
              />
              <Image
                source={require('../../utils/homepage/circle.png')}
                className="right-3 top-5"
              />
            </View>
            <Image source={require('../../utils/homepage/bell.png')} />
            <Image
              source={require('../../utils/homepage/circle.png')}
              className="left-2 top-4"
            />
          </View>
        </View>

        <View className="flex flex-row items-center mx-5 mt-5">
          <Text className="font-quicksand font-semibold text-3xl text-[#394B42]">
            Hey Swara
          </Text>
          <Image
            source={require('../../utils/homepage/hand.png')}
            className="w-[30px] h-[26.36px] ml-2"
          />
        </View>

        <View className="flex flex-row justify-center mt-8">
          <Text className="font-quicksand font-semibold text-xl ml-2">
            Begin your healing journey
          </Text>
          <Image
            source={require('../../utils/homepage/Rectanglex.png')}
            className="left-10 bottom-2"
          />
        </View>

        <Image
          source={require('../../utils/homepage/picsGroup.png')}
          className="w-[123px] h-[103.38px] mt-8 mx-auto"
        />

        <Text className="font-quicksand font-semibold text-sm text-center mt-6">
          Completely confidential
        </Text>

        <LinearGradient
          colors={['rgba(73, 175, 124, 0.6)', 'rgba(73, 175, 124, 0.24)']}
          start={{x: 0.5, y: -0.0769}}
          end={{x: 0.5, y: 0.8051}}
          className="flex flex-col justify-center bg-[#49AF7C] rounded-full w-[209.9px] h-12 mx-auto top-12">
          <Text className="text-white font-quicksand font-semibold text-base text-center">
            Find my therapist
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default NavSection;
