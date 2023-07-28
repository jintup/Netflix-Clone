import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, fetchMovieVideos, clearMovies } from '../store/feature/video/movieSlice';
import { imageUrl } from '../services/api-config';
// import YoutubePlayer from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';

const ChildCard = ({ title, url }) => {
  const dispatch = useDispatch();
  const { movies, urlId } = useSelector((state) => state.movies);
  const screen = Dimensions.get('screen');
  const navigation = useNavigation();
  // const [selectedVideoId, setSelectedVideoId] = useState(null);

  useEffect(() => {
    dispatch(fetchMovies(url));
    return () => {
      dispatch(clearMovies());
    };
  }, [dispatch, url]);

  const handleMovie = (id) => {
    dispatch(fetchMovieVideos(id)).then(() => {
      // console.log('Fetched video ID:', urlId);
      // setSelectedVideoId(urlId);
      if (urlId) {
        navigation.navigate('VideoScreen', { videoId: urlId });
      } else {
        console.log('Video ID not available');
      }
    });
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          {movies.map((obj) => (
            <View style={styles.imageWrapper} key={obj.id}>
              <TouchableOpacity onPress={() => handleMovie(obj.id)}>
                <Image style={styles.image} source={{ uri: imageUrl + obj.backdrop_path }} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      {/* {selectedVideoId && (
        <YoutubePlayer height={screen.height} videoId={selectedVideoId} play={true} />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    borderRadius: 6,
    overflow: 'hidden',
  },
  imageWrapper: {
    marginRight: 10,
  },
  image: {
    width: 105,
    height: 152,
    resizeMode: 'cover',
    borderRadius: 6,
  },
});

export default ChildCard;
