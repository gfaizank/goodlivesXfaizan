import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MorningCards from './MorningCards';
import AfternoonCards from './AfternoonCards';
import EveningCards from './EveningCards';
import Routes from '../../constants/routes/Route';
import { useNavigation } from '@react-navigation/native';

const Routine = ({ fromRewards }) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate(Routes.MEDITATION);
  };

  const morningData = [
    {
      title: 'Morning meditation 1',
      subtitle: 'Affirmation for day',
      duration: '6 min',
    },
    {
      title: 'Morning meditation 2',
      subtitle: 'Affirmation for day',
      duration: '6 min',
    },
  ];

  const afternoonData = [
    {
      title: 'Afternoon meditation 1',
      subtitle: 'Affirmation for day',
      duration: '6 min',
    },
    {
      title: 'Afternoon meditation 2',
      subtitle: 'Affirmation for day',
      duration: '6 min',
    },
  ];

  const eveningData = [
    {
      title: 'Evening meditation 1',
      subtitle: 'Affirmation for day',
      duration: '6 min',
    },
    {
      title: 'Evening meditation 2',
      subtitle: 'Affirmation for day',
      duration: '6 min',
    },
  ];

  return (
    <ScrollView className="flex flex-col bg-white">
      <View className="flex flex-row items-center mt-8 mx-auto">
        <Text className="font-quicksand font-semibold text-2xl">
          Daily Routine
        </Text>
        <View className="ml-2 rounded-full w-[39px] h-[39px] border-2 flex justify-center items-center" style={{borderColor: fromRewards ? '#F6D169' : '#FCF2D8',}}>
          <Text className="">{fromRewards ? '80' : '0'}</Text>
        </View>

        <Image
          source={require('../../utils/homepage/refreshIcon.png')}
          className="ml-32"
        />

        <Image
          source={require('../../utils/homepage/circleI.png')}
          className="ml-2"
        />
      </View>

      <Text className="mt-4 ml-[18px] text-[#394B42] font-quicksand font-semibold text-xl">
        Morning
      </Text>

      {/* cards */}
      <TouchableOpacity onPress={handleNavigate}>
        {morningData.map((item, index) => (
          <MorningCards
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            duration={item.duration}
          />
        ))}
      </TouchableOpacity>

      <Text className="mt-4 ml-[18px] text-[#394B42] font-quicksand font-semibold text-xl">
        Afternoon
      </Text>

      {afternoonData.map((item, index) => (
        <AfternoonCards
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          duration={item.duration}
        />
      ))}

      <Text className="mt-4 ml-[18px] text-[#394B42] font-quicksand font-semibold text-xl">
        Evening
      </Text>

      {eveningData.map((item, index) => (
        <EveningCards
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          duration={item.duration}
        />
      ))}

      <View className="h-10"></View>
    </ScrollView>
  );
};

export default Routine;
