import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { timing } from '../theme/timing';
import { useNavigation } from '@react-navigation/native';
const Splashscreen = () => {
  const navigation = useNavigation();
  const slideAnimation = useRef(new Animated.Value(100)).current;


  useEffect(() => {
    const slideAni = Animated.timing(slideAnimation, {
      toValue: 0,
      duration: timing.quick,
      useNativeDriver: true,
    });

    const timeout = setTimeout(() => {
      slideAni.start(() => {
        navigation.navigate('TourScreen')
      })
    }, 2000)
    slideAni.start();
    return () => {
      clearTimeout(timeout)
    };
  }, [slideAnimation, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.tcontainer,
          { transform: [{ translateX: slideAnimation }] },
        ]}>
        <Animated.Text style={styles.text}>NETFLIX</Animated.Text>
      </Animated.View>
    </View>
  );
};

export default Splashscreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkblack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tcontainer: {
    alignItems: 'center',
  },
  text: {
    color: Colors.red,
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: spacing.xxs,
  },
});
