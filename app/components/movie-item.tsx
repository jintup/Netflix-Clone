import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { imageUrl } from '../services/api-config';
import { Movie } from '../components/card';
import { horizontalScale, verticalScale } from '../utils/scale';

interface MovieItemProps {
  movie: Movie;
  onMoviePress: (id: number, original_title: string, overview: string) => void;
  imageWidth?: number;
  imageHeight?: number;
}

const MovieItem: React.FC<MovieItemProps> = ({
  movie,
  onMoviePress,
  imageWidth = 105,
  imageHeight = 172,
}) => {
  const { id, original_title, overview, backdrop_path } = movie;

  return (
    <View style={styles.imageWrapper}>
      <TouchableOpacity onPress={() => onMoviePress(id, original_title, overview)}>
        <Image
          style={[
            styles.image,
            { width: horizontalScale(imageWidth), height: verticalScale(imageHeight) },
          ]}
          source={{ uri: imageUrl + backdrop_path }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    marginRight: horizontalScale(10),
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 6,
  },
});

export default MovieItem;
