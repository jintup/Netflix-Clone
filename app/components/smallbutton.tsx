import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../theme/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { horizontalScale, moderateScale, verticalScale } from '../utils/scale';

const Smallbutton: React.FC<any> = ({ bgColor, textColor, buttonText, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]} onPress={onPress}>
      <View style={styles.btncontainer}>
        <FontAwesome name="play" style={styles.icon} />
        <Text style={[styles.buttonText, { color: textColor }]}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Smallbutton;

const styles = StyleSheet.create({
  btncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingVertical: verticalScale(6),
    paddingHorizontal: horizontalScale(16),
    borderRadius: 4.5,
    top: 260,
  },
  icon: {
    fontSize: 24,
    color: Colors.darkblack,
    marginRight: 8,
  },
  buttonText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
});
