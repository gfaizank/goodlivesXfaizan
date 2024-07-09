import React from 'react'
import {Image, Text, View} from 'react-native';

const MorningCards = ({ title, subtitle, duration }) => {
  return (
    <View className="w-[364px] h-[111.42px] mt-4 bg-[#C5CFFF] mx-auto rounded-3xl flex flex-row items-center justify-evenly">
        <View className="w-[44px] h-[44px] rounded-full bg-white"></View>
        <View className="flex flex-col">
            <Text className="font-quicksand font-semibold text-lg">{title}</Text>
            <Text className="font-quicksand font-medium text-sm">{subtitle}</Text>
            <View className="flex flex-row items-center mt-3">
                <Text className="font-quicksand text-base font-semibold mr-2">{duration}</Text>
                <View className="flex items-center justify-center ml-2 mr-10">
                <Image source={require('../../utils/homepage/LeafOuter.png')} className="w-4 h-6 " />
                <Image source={require('../../utils/homepage/LeafInner.png')} className="absolute left-[1px] w-4 h-6 top-[1px]" />
                </View>
                <Image source={require('../../utils/homepage/coins.png')} className="ml-2" />
                <Text className="font-quicksand text-sm font-normal">10</Text>
            </View>
        </View>
        <Image source={require('../../utils/homepage/meditatingPanda.png')} className="ml-2" />


      </View>
  )
}

export default MorningCards