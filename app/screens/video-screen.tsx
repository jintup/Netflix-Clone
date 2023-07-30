import React from 'react';
import { ScrollView, Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Colors } from '../theme/colors';
import MovieCard from '../components/card';
import { Actions, ComedyMovies, HorrorMovies } from '../constants/urls';

const VideoScreen = ({ route }) => {
  const { videoId, original_title, overview } = route.params;
  console.log(overview);
  return (
    <View style={styles.container}>
      <View>
        <YoutubePlayer height={200} videoId={videoId} play={true} />
      </View>
      <ScrollView>
        <Text style={styles.title}>{original_title}</Text>
        <Text style={styles.overview}>{overview}</Text>
        <MovieCard url={Actions} />
        <MovieCard url={ComedyMovies} />
        <MovieCard url={HorrorMovies} />
      </ScrollView>
    </View>
  );
};

export default VideoScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkblack,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: Colors.white,
  },
  overview: {
    fontSize: 16,
    marginHorizontal: 10,
    color: Colors.offwhite,
  },
});
