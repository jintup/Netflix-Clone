import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Colors } from '../theme/colors';
const InputField: React.FC = ({ placeholder, secureTextEntry, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 70,
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.darkgray,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
