import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from '../services/axios';
import { API_KEY } from '../constants/api-constant';
import { useNavigation } from '@react-navigation/native';
import MovieItem from '../components/movie-item';
import { Movie } from './card';
import { moderateScale } from '../utils/scale';

interface MovieCardProps {
  title: string;
  url: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, url }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [urlId, setUrlId] = useState<string>('');
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  const handleMovie = (id: number, original_title: string, overview: string) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0].key);
          navigation.navigate('VideoScreen', { videoId: urlId, original_title, overview });
        } else {
          console.log('Array empty, video not available');
        }
      })
      .catch((error) => {
        console.log('Error fetching video:', error.message);
      });
  };

  const renderItem = ({ item }: { item: Movie }) => (
    <MovieItem movie={item} onMoviePress={handleMovie} />
  );

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(19),
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MovieCard;
