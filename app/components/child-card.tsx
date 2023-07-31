import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, fetchMovieVideos, clearMovies } from '../store/feature/video/movieSlice';
import { imageUrl } from '../services/api-config';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale, moderateScale, verticalScale } from '../utils/scale';

interface Movie {
  id: number;
  original_title: string;
  overview: string;
  backdrop_path: string;
}

const ChildCard: React.FC<{ title: string; url: string }> = ({ title, url }) => {
  const dispatch = useDispatch();
  const { movies, urlId } = useSelector((state: RootState) => state.movies);
  const screen = Dimensions.get('screen');
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchMovies(url));
    return () => {
      dispatch(clearMovies());
    };
  }, [dispatch, url]);

  const handleMovie = (id: number, original_title: string, overview: string) => {
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
    <View style={styles.imageWrapper}>
      <TouchableOpacity onPress={() => handleMovie(item.id, item.original_title, item.overview)}>
        <Image style={styles.image} source={{ uri: imageUrl + item.backdrop_path }} />
      </TouchableOpacity>
    </View>
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
  imageContainer: {
    flexDirection: 'row',
    margin: horizontalScale(10),
    borderRadius: 6,
    overflow: 'hidden',
  },
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

export default ChildCard;
