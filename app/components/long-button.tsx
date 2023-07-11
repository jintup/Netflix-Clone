import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Lbutton: React.FC = ({ title, onPress, color }) => {
  const buttonStyle = [styles.button, { backgroundColor: color }];
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Lbutton;
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
