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
import axios from '../services/axios';
import { API_KEY } from '../constants/api-constant';
import { imageUrl } from '../services/api-config';
import YoutubePlayer from 'react-native-youtube-iframe';
import { FullWindowOverlay } from 'react-native-screens';
const ChildCard: React.FC = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  const screen = Dimensions.get('screen');
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        //console.log(response.data);
        setMovies(response.data.results);
      })
      .catch(
        (err) => {
          console.log(err);
        },
        [url],
      );
  });
  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      // console.log(response.data)
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
      } else {
        console.log('Array empty vdo not available');
      }
    });
  };
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          {movies &&
            movies.map(
              (
                obj, // Add a conditional check for 'movies' array
              ) => (
                <View style={styles.imageWrapper} key={obj.id}>
                  <TouchableOpacity onPress={() => handleMovie(obj.id)}>
                    <Image style={styles.image} source={{ uri: imageUrl + obj.backdrop_path }} />
                  </TouchableOpacity>
                </View>
              ),
            )}
        </View>
      </ScrollView>
      {urlId && <YoutubePlayer height={screen.height} videoId={urlId.key} play={true}/>}
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
