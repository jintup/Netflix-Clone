import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from '../services/axios';
import { API_KEY } from '../constants/api-constant';
import { imageUrl } from '../services/api-config';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale, moderateScale, verticalScale } from '../utils/scale';

interface Movie {
  id: number;
  original_title: string;
  overview: string;
  backdrop_path: string;
}

const MovieCard: React.FC<{ title: string; url: string }> = ({ title, url }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [urlId, setUrlId] = useState<string>('');
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
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
    <View style={styles.imageWrapper} key={item.id}>
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

export default MovieCard;
