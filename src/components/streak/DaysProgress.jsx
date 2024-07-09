import React from 'react';
import {View, Image, Text} from 'react-native';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const DaysProgress = () => {
  return (
    <View className="w-[368px] h-[158px] top-[55px] mx-3 mr-6 border rounded-2xl flex flex-col items-center">
      <View className="flex flex-row items-center">
        {days.map((day, index) => (
          <View className="flex flex-col items-center mx-3 mt-1">
            <Text key={index} className={`mt-1 font-quicksand font-normal text-sm ${day === 'Mon' ? 'text-[#49AF7C]' : ''}`}>
              {day}
            </Text>
            <View
              className={`w-5 h-5 rounded-full mt-2 flex items-center justify-center ${
                day === 'Mon' ? 'bg-[#49AF7C]' : 'bg-[#E5E5E5]'
              }`}>
              {day === 'Mon' && (
                <Image
                  source={require('../../utils/streak/tick.png')}
                  style={{width: 10, height: 10}}
                />
              )}
            </View>
          </View>
        ))}
      </View>
      <View className="w-[326px] border-[1.5px] border-[#E5E5E5] mx-4 mt-6"></View>
      <View className="px-16 mt-2">
        <Text className="font-quicksand font-normal text-base text-center ">
          Streak will reset if you don't practice tomorrow.
        </Text>
      </View>
    </View>
  );
  2;
};

export default DaysProgress;
