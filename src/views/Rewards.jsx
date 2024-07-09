import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Routes from '../constants/routes/Route';

const Rewards = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate(Routes.HOMEPAGE, { fromRewards: true });
  };

  return (
    <View className="flex flex-col bg-white h-full">

      <View className="w-full h-[100px] bg-[#E0F3E0] rounded-b-[32px] flex flex-row items-center">
        <Image
          source={require('../utils/rewards/backNav.png')}
          className="ml-4"
        />
        <Text className="font-quicksand font-semibold text-2xl ml-20">
          My Rewards
        </Text>
      </View>

      <View className="flex flex-row items-center mx-auto mt-8">
        <View className="flex flex-col gap-2 mt-2">
          <View className="flex flex-row items-center">
            <Image source={require('../utils/rewards/CoinReward.png')} />
            <Text className="font-quicksand font-semibold text-2xl ml-8">
              10
            </Text>
          </View>
          <Text className="font-quicksand font-semibold text-lg">
            Happiness coins
          </Text>
        </View>

        <Image
          source={require('../utils/rewards/lottery.png')}
          className="w-[184.66px] h-[179.43px] ml-4"
        />
      </View>

      <TouchableOpacity onPress={handleNavigate} className="bg-[#49AF7C] rounded-full w-[209.39px] h-12 flex flex-row justify-center items-center mt-8 mx-auto">
        <Text className="font-quicksand font-bold text-xl text-white">
          Go to home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Rewards;
