import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Routine from '../components/homepage/Routine';
import NavSection from '../components/homepage/NavSection';
import BottomNavigation from '../components/homepage/BottomNavigation';

const HomePage = ({ route }) => {

  const fromRewards = route.params?.fromRewards || false;

  return (
    <View className="flex-1">
      <ScrollView contentContainerStyle={{paddingBottom: 60}} className="flex-1">
        <NavSection fromRewards={fromRewards} />
        <Routine fromRewards={fromRewards} />
      </ScrollView>

      <BottomNavigation />
    </View>
  );
};

export default HomePage;
