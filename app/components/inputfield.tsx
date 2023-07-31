import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { verticalScale } from '../utils/scale';

const InputField: React.FC = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  iname,
  onPress,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
        <MaterialCommunityIcons size={20} color="gray" name={iname} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    height: verticalScale(70),
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.darkgray,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    position: 'relative',
  },
  input: {
    flex: 1,
    color: Colors.white,
  },
  iconContainer: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -10 }],
  },
});

export default InputField;
