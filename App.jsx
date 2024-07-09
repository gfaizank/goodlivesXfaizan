import React, {Suspense} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {Button, View, ActivityIndicator, StyleSheet} from 'react-native';
import Routes from './src/constants/routes/Route';
import Login from './src/views/Login';
import HomePage from './src/views/HomePage';
import Meditation from './src/views/Meditation';
import Streak from './src/views/Streak';
import Coins from './src/views/Coins';
import Rewards from './src/views/Rewards';
import {TransitionPresets} from '@react-navigation/stack';

enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.LOGIN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Routes.LOGIN} component={Login} />
        <Stack.Screen name={Routes.HOMEPAGE} component={HomePage} />
        <Stack.Screen name={Routes.MEDITATION} component={Meditation} />
        <Stack.Screen name={Routes.STREAK} component={Streak} />
        <Stack.Screen name={Routes.COINS} component={Coins} />
        <Stack.Screen name={Routes.REWARDS} component={Rewards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
