import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../utils/scale';
import { Colors } from '../theme/colors';

const CHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/nlogo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(60),
    backgroundColor: Colors.darkblack,
  },
  logo: {
    width: horizontalScale(120),
    height: verticalScale(40),
    resizeMode: 'contain',
  },
});

export default CHeader;
