import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/profile-screen';
import Ionic from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home';
import New from '../screens/new';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { height: 50, backgroundColor: 'black' },
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size + 8 : size + 2;
          } else if (route.name === 'New') {
            iconName = focused ? 'flame-sharp' : 'flame-sharp';
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? 'person-outline' : 'person';
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'gray',
        inactiveTintColor: 'white',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
