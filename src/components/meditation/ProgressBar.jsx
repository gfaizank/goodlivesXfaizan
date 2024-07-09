import React from 'react';
import { View } from 'react-native';

const ProgressBar = () => {
  return (
    <View className="relative mt-6 w-full px-4 top-[398px]"> 
    <View className="bg-[#E5E5E5] transition-all duration-500  rounded-full overflow-hidden">
      <View
        className="bg-[#394B42] transition-all duration-500 w-1/2 h-2"
        role="progressbar"
        aria-label="music progress"
        aria-valuenow="1456"
        aria-valuemin="0"
        aria-valuemax="4550"
      ></View>
    </View>
    <View className="ring-cyan-500 transition-all duration-500  ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 ml-1 flex items-center justify-center bg-[#394B42] rounded-full shadow">
      <View className="w-1.5 h-1.5 bg-[#394B42] transition-all duration-500 rounded-full ring-1 ring-inset ring-slate-900/5"></View>
    </View>
  </View>
  );
};

export default ProgressBar;
