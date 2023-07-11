import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import InputField from '../components/inputfield';
import PrimaryButton from '../components/primary-button';
import { Colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';
import { horizontalScale } from '../utils/scale';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = () => {};
  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <>
      <View style={styles.headercontainer}>
        <Header leftImageSource={require('../assets/images/nlogo.png')} />
      </View>
      <View style={styles.container}>
        <InputField
          placeholder="Email or phone number"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <InputField
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <PrimaryButton title="Sign In" onPress={handleSignIn} />
        <View style={styles.signupcontainer}>
          <Text style={styles.Text}>New to Netflix? </Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.Text}>Sign up now.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkblack,
  },
  headercontainer: {
    backgroundColor: Colors.darkblack,
  },
  Text: {
    marginTop: 40,
    fontWeight: '400',
    fontSize: horizontalScale(20),
    lineHeight: horizontalScale(22.16),
    color: Colors.offwhite,
  },
  signupcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Login;
