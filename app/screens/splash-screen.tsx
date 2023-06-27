import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { timing } from '../theme/timing';
const Splashscreen = () => {
  const slideAnimation = useRef(new Animated.Value(100)).current;


  useEffect(() => {
    const slideAni = Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    });
    slideAni.start();
    return () => {
      slideAni.stop();
    };
  }, [slideAnimation]);

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
