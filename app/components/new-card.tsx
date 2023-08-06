import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from '../services/axios';
import { API_KEY } from '../constants/api-constant';
import { useNavigation } from '@react-navigation/native';
import MovieItem from '../components/movie-item';
import { Movie } from './card';
import { horizontalScale, moderateScale } from '../utils/scale';
import Ionic from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/colors';

interface NewMovieCardProps {
  url: string;
}

const NewMovieCard: React.FC<NewMovieCardProps> = ({ url }) => {
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
    <View style={styles.container}>
      <MovieItem movie={item} onMoviePress={handleMovie} imageHeight={300} imageWidth={400} />
      <Text style={styles.title}>{item.original_title}</Text>
      <Text style={styles.overview}>{item.overview}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionic name="flame-sharp" style={styles.iconstyle} size={30} />
        <Text style={styles.tle}>Everyones's Watching</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.movieCardContainer}
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkblack,
  },
  tle: {
    fontSize: moderateScale(23),
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  movieCardContainer: {
    paddingHorizontal: horizontalScale(15),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    margin: horizontalScale(10),
    color: Colors.white,
  },
  overview: {
    fontSize: moderateScale(16),
    marginHorizontal: horizontalScale(10),
    color: Colors.offwhite,
  },
  iconstyle: {
    color: Colors.flame,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: horizontalScale(15),
    marginVertical: moderateScale(10),
  },
});

export default NewMovieCard;
