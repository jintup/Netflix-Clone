import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import InputField from '../components/inputfield';
import PrimaryButton from '../components/primary-button';
import { Colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';
import { horizontalScale, moderateScale, verticalScale } from '../utils/scale';
import { login } from '../services/auth-service';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    try {
      const user = await login(email, password);
      console.log('Logged-in user:', user);
      navigation.navigate('ProfileScreen');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

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
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={(text) => setPassword(text)}
          iname={passwordVisible ? "eye" : "eye-off"}
          onPress={togglePasswordVisibility}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
    marginTop: verticalScale(40),
    fontWeight: '400',
    fontSize: moderateScale(20),
    lineHeight: verticalScale(22.16),
    color: Colors.offwhite,
  },
  signupcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  errorText: {
    color: 'red',
    marginBottom: verticalScale(10),
  },
});

export default Login;
