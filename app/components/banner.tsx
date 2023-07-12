import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Smallbutton from './smallbutton';
import { Colors } from '../theme/colors';

const Banner: React.FC = () => {
  return (
    <View>
      <LinearGradient colors={['transparent', '#000000']} style={styles.gradient}>
        <ImageBackground
          source={require('../assets/images/bg3.jpg')}
          style={styles.backgroundImage}
          resizeMode="cover">
          <View style={styles.buttonContainer}>
            <Smallbutton bgColor={Colors.white} buttonText="Play" textColor={Colors.darkblack} />
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '230%',
    aspectRatio: 2,
  },
  gradient: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
