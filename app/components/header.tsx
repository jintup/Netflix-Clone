import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../theme/colors';
import { horizontalScale, verticalScale } from '../utils/scale';

const Header: React.FC = ({
  leftImageSource,
  rightImageSource,
  bgColor,
  onLeftImagePress,
  onRightImagePress,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <TouchableOpacity onPress={onLeftImagePress}>
        <Image source={leftImageSource} style={styles.leftLogo} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onRightImagePress}>
        <Image source={rightImageSource} style={styles.rightLogo} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: verticalScale(100),
  },
  leftLogo: {
    width: horizontalScale(100),
    height: verticalScale(50),
    marginLeft: horizontalScale(10),
  },
  rightLogo: {
    width: horizontalScale(30),
    height: verticalScale(30),
    marginRight: horizontalScale(10),
    borderRadius: 6,
  },
});

export default Header;
