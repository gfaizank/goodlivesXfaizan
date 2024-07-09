import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {View, Image, Text, TouchableOpacity, Animated} from 'react-native';
import ProgressBar from '../components/meditation/ProgressBar';
import Routes from '../constants/routes/Route';

const Meditation = () => {
  const navigation = useNavigation();
  const [phase, setPhase] = useState('Inhale');
  const ellipseScaleAnim = useRef(new Animated.Value(1)).current;
  const pandaBounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animatePing = () => {
      Animated.sequence([
        Animated.timing(ellipseScaleAnim, {
          toValue: 1.5,
          duration: 3500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setPhase('Hold');
        animatePandaBounce();
      });
    };

    const animatePandaBounce = () => {
      Animated.sequence([
        Animated.timing(pandaBounceAnim, {
          toValue: -25,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pandaBounceAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setPhase('Exhale');
        animatePulse();
      });
    };

    const animatePulse = () => {
      Animated.sequence([
        Animated.timing(ellipseScaleAnim, {
          toValue: 0.8,
          duration: 3500,
          useNativeDriver: true,
        }),
        Animated.timing(ellipseScaleAnim, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
      ]).start(()=>{
        handleNavigate();
      });
    };

    animatePing();

    return () => {
      ellipseScaleAnim.stopAnimation();
      pandaBounceAnim.stopAnimation();
    };
  }, [ellipseScaleAnim, pandaBounceAnim]);

  const handleNavigate = () => {
    navigation.navigate(Routes.STREAK);
  };
  return (
    <View className="flex flex-col bg-white h-full">
      <View className="relative top-[224px] ml-[119px]">
        <Animated.Image
          source={require('../utils/meditation/ellipse.png')}
          style={{
            transform: [{scale: ellipseScaleAnim}],
          }}
          className="absolute inset-0 z-0 ml-[-50px] mt-[-29px]"
        />
        <Animated.Image
          source={require('../utils/meditation/panda.png')}
          style={{
            transform: [{translateY: pandaBounceAnim}],
          }}
          className="absolute inset-0 z-10"
        />
      </View>

      <Text className="mt-[122px] font-quicksand font-semibold text-2xl top-[343px] ml-[152px]">
        {phase}
      </Text>

      <ProgressBar />

      <View className="flex flex-row items-center justify-between px-4 top-[404px]">
        <Text className="font-quicksand font-medium text-base">4.97</Text>
        <Text className="font-quicksand font-medium text-base">8:00</Text>
      </View>

      <View className="flex flex-row items-center top-[422px] left-[117px]">
        <Image
          source={require('../utils/meditation/backward.png')}
          className="w-8 h-8"
        />
        <Image
          source={require('../utils/meditation/pause.png')}
          className="w-[66px] h-[66px] ml-[20px]"
        />
        <TouchableOpacity onPress={handleNavigate}>
          <Image
            source={require('../utils/meditation/forward.png')}
            className="w-[30px] h-[30px] ml-[20px]"
          />
        </TouchableOpacity>

        <Image
          source={require('../utils/meditation/Share.png')}
          className="w-[30px] h-[30px] ml-[60px]"
        />
      </View>
    </View>
  );
};

export default Meditation;
