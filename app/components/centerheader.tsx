import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/nlogo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#000', 
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
});

export default CHeader;
