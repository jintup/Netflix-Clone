import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../components/inputfield';
import PrimaryButton from '../components/primary-button';
import { Colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/toursrn-header';

const Signup: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    navigation.navigate('Home');
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
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
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
    backgroundColor: Colors.darkblack,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  boldtext: {
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 10,
    color: Colors.white,
    top: 20,
  },
  normaltext: {
    fontSize: 20,
    marginBottom: 10,
    color: Colors.white,
    top: 15,
  },
  Text: {
    marginTop: 40,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.offwhite,
  },
});

export default Signup;
