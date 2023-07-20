import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../theme/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Smallbutton: React.FC<any> = ({ bgColor, textColor, buttonText }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome name="play" style={{ fontSize: 24, color: 'black', marginRight: 8 }} />
        <Text style={[styles.buttonText, { color: textColor }]}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Smallbutton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4.5,
    top: 260,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
