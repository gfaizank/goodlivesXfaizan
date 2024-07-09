import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import DaysProgress from '../components/streak/DaysProgress';
import Routes from '../constants/routes/Route';

const Streak = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate(Routes.COINS);
  };
  return (
    <View className="flex flex-col bg-white h-full">
      <Image
        source={require('../utils/streak/Streak.png')}
        className="w-[96px] h-[126px] left-[142px] top-[140px]"
      />

      <Text className="font-quicksand font-semibold text-xl mt-[171px] ml-[136px]">
        Day streak!
      </Text>

      <DaysProgress />

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

export default Streak;
