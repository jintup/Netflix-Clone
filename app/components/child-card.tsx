import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, fetchMovieVideos, clearMovies } from '../store/feature/video/movieSlice';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from '../utils/scale';
import MovieItem from '../components/movie-item';

interface Movie {
  id: number;
  original_title: string;
  overview: string;
  backdrop_path: string;
}

const ChildCard: React.FC<{ title: string; url: string }> = ({ title, url }) => {
  const dispatch = useDispatch();
  const { movies, urlId } = useSelector((state: RootState) => state.movies);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchMovies(url));
    return () => {
      dispatch(clearMovies());
    };
  }, [dispatch, url]);

  const handleMoviePress = (id: number, original_title: string, overview: string) => {
    dispatch(fetchMovieVideos(id)).then(() => {
      if (urlId) {
        navigation.navigate('VideoScreen', {
          videoId: urlId,
          original_title,
          overview,
        });
      } else {
        console.log('Video ID not available');
      }
    });
  };

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <MovieItem movie={item} onMoviePress={handleMoviePress} />
  );

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovieItem}
      />
      {/* {selectedVideoId && (
        <YoutubePlayer height={screen.height} videoId={selectedVideoId} play={true} />
      )} */}
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

export default ChildCard;
