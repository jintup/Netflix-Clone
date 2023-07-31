import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { imageUrl } from '../services/api-config';
import { Movie } from '../components/card';
import { horizontalScale, verticalScale } from '../utils/scale';

interface MovieItemProps {
  movie: Movie;
  onMoviePress: (id: number, original_title: string, overview: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, onMoviePress }) => {
  const { id, original_title, overview, backdrop_path } = movie;

  return (
    <View style={styles.imageWrapper}>
      <TouchableOpacity onPress={() => onMoviePress(id, original_title, overview)}>
        <Image style={styles.image} source={{ uri: imageUrl + backdrop_path }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    marginRight: horizontalScale(10),
  },
  image: {
    width: horizontalScale(105),
    height: verticalScale(172),
    resizeMode: 'cover',
    borderRadius: 6,
  },
});

export default MovieItem;
