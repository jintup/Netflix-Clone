import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../theme/colors';

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
    height: 100,
  },
  leftLogo: {
    width: 100,
    height: 50,
    marginLeft: 10,
  },
  rightLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 6,
  },
});

export default Header;
