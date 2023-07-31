import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale, moderateScale } from '../utils/scale';
import { Colors } from '../theme/colors';
const Header: React.FC = () => {
  const navigation = useNavigation();
  const handleSignInPress = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={handleSignInPress}>
        <Text style={styles.signInText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    paddingTop: 20,
  },
  logo: {
    width: 100,
    height: 40,
    marginHorizontal: horizontalScale(-45),
  },
  signInText: {
    color: Colors.white,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
});
