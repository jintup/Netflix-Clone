import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../components/inputfield';
import PrimaryButton from '../components/primary-button';
import { Colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/toursrn-header';
import { signup } from '../services/auth-service';
import { moderateScale, verticalScale } from '../utils/scale';

const Signup: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = async () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    try {
      const user = await signup(email, password);
      console.log('User created:', user);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };
  const handleSignIn = () => {
    navigation.navigate('Signup');
  };

  return (
    <>
      <View style={styles.headercontainer}>
        <Header />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.boldtext}>Ready to experience unlimited TV shows & movies?</Text>
        <Text style={styles.normaltext}>Create an account to learn more about Netflix.</Text>
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
          iname={passwordVisible ? 'eye' : 'eye-off'}
          onPress={togglePasswordVisibility}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <PrimaryButton title="Sign Up" onPress={handleSignup} />
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
  textcontainer: {
    flex: 0.5,
    backgroundColor: Colors.darkblack,
    alignItems: 'center',
  },
  boldtext: {
    fontWeight: 'bold',
    fontSize: moderateScale(23),
    marginBottom: verticalScale(10),
    color: Colors.white,
    top: verticalScale(40),
    width: '60%',
  },
  normaltext: {
    fontSize: moderateScale(18),
    marginBottom: verticalScale(10),
    color: Colors.white,
    top: verticalScale(35),
    width: '60%',
  },
  errorText: {
    color: 'red',
    marginBottom: verticalScale(10),
  },
  Text: {
    marginTop: verticalScale(40),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    color: Colors.offwhite,
  },
});

export default Signup;
