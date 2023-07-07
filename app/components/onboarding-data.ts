import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const onboardingData = [
  {
    id: 1,
    title: 'Unlimited Entertainment',
    description: 'Stream movies, TV shows, and documentaries anytime, anywhere.',
    image: require('../assets/images/best-streaming.jpg'),
  },
  {
    id: 2,
    title: 'Personalized Recommendations',
    description: 'Get personalized recommendations based on your watching history.',
    image: require('../assets/images/best-streaming.jpg'),
  },
  {
    id: 3,
    title: 'Download and Watch Offline',
    description: 'Download your favorite shows and watch them offline on the go.',
    image: require('../assets/images/best-streaming.jpg'),
  },
];
export default onboardingData;