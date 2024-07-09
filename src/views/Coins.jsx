import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Routes from '../constants/routes/Route';

const Coins = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate(Routes.REWARDS);
  };
  return (
    <View className="flex flex-col bg-white h-full">
      <View className="flex flex-row justify-end mx-4 mt-4 items-center">
        <Image
          source={require('../utils/homepage/coins.png')}
          className="w-[53px] h-[50.2px]"
        />
        <Text className="text-xl font-quicksand font-semibold mb-2">10</Text>
      </View>
      <View className="flex flex-row justify-center">
        <Image
          source={require('../utils/coins/coinsLayer.png')}
          className="w-[152px] h-[155px] top-[146px]"
        />
      </View>
      <Text className="font-quicksand font-semibold text-xl text-center mt-40">
        Yay!
      </Text>
      <Text className="font-quicksand font-semibold text-2xl text-center mt-2">
        You earned 10 Happiness coins
      </Text>

      <TouchableOpacity
        onPress={handleNavigate}
        className="w-[357px] h-[55px] rounded-full bg-[#49AF7C] mt-40 mx-5 flex flex-col justify-center">
        <Text className="font-quicksand font-semibold text-xl text-center text-white">
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Coins;
