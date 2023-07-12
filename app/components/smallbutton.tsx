import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../theme/colors';

const Smallbutton: React.FC<any> = ({ bgColor, textColor, buttonText }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]}>
      <Text style={[styles.buttonText, { color: textColor }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Smallbutton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 42,
    borderRadius: 4,
    top: 280,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
