import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from '../screens/splash-screen';
import TourScreen from '../screens/tourscreen';
const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splashscreen">
        <Stack.Screen name="Splashscreen" component={Splashscreen}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="TourScreen" component={TourScreen}
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
