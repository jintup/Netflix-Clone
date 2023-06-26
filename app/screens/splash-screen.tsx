import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { timing } from '../theme/timing';
const Splashscreen = () => {
  useEffect(() => {
    const timeout = setTimeout(() => { }, timing.quick);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NETFLIX</Text>
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
  text: {
    color: Colors.red,
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: spacing.xxs,
  },
});
