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
      <ImageBackground
        source={{ uri: movie ? imageUrl + movie.backdrop_path : '' }}
        style={styles.backgroundImage}
        resizeMode="cover">
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 0.4, y: 0.8 }}
          colors={['transparent', Colors.darkblack]}
          style={styles.gradient}
        />
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <Smallbutton bgColor={Colors.white} buttonText=" Play" textColor={Colors.darkblack} />
      </View>
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
    height: '250%',
    justifyContent: 'flex-end',
    padding: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
