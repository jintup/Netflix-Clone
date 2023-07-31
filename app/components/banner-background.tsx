import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../theme/colors';
import { imageUrl } from '../services/api-config';
import { Movie } from './banner';
import { horizontalScale, moderateScale, verticalScale } from '../utils/scale';

interface BannerBackgroundProps {
  movie: Movie | undefined;
}

const BannerBackground: React.FC<BannerBackgroundProps> = ({ movie }) => {
  return (
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
      <Text style={styles.title}>{movie ? movie.title : ''}</Text>
    </ImageBackground>
  );
};

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
    padding: verticalScale(10),
  },
  title: {
    color: Colors.gold,
    fontWeight: 'bold',
    fontSize: moderateScale(25),
    marginHorizontal: horizontalScale(25),
    bottom: '50%',
    textAlign: 'center',
    letterSpacing: 2,
  },
});

export default BannerBackground;
