import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Smallbutton from './smallbutton';
import { Colors } from '../theme/colors';
import axios from '../services/axios';
import { API_KEY } from '../constants/api-constant';
import { imageUrl } from '../services/api-config';
const Banner: React.FC = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      //console.log(response.data);
      setMovie(
        response.data.results.sort(function (a, b) {
          return 0.5 - Math.random();
        })[2],
      );
    });
  }, []);
  return (
    <View>
      <LinearGradient colors={['#000000', '#000000']} style={styles.gradient}>
        <ImageBackground
          source={{ uri: movie ? imageUrl + movie.backdrop_path : '' }}
          // source={require('../assets/images/bg3.jpg')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.gradientOverlay} />
        <View style={styles.buttonContainer}>
          <Smallbutton bgColor={Colors.white} buttonText="Play" textColor={Colors.darkblack} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '250%',
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
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50, // Adjust the height of the gradient overlay
    backgroundColor: 'transparent',
    zIndex: 1,
    // Define the gradient styles
    background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))',
  },
});
