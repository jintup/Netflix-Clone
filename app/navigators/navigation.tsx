import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TourScreen from '../screens/tourscreen';
import Login from '../screens/login';
import Signup from '../screens/signup';
import ChildrenHome from '../screens/children-home';
import VideoScreen from '../screens/video-screen';
import TabNavigation from './tab-navigation';
import Home from '../screens/home';
import ProfileScreen from '../screens/profile-screen';
const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TourScreen" screenOptions={{ animation: 'none' }}>
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TourScreen"
          component={TourScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChildrenHome"
          component={ChildrenHome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VideoScreen"
          component={VideoScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
