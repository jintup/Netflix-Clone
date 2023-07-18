import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import axios from '../services/axios';
import { API_KEY } from '../constants/api-constant';
import { imageUrl } from '../services/api-config';
const MovieCard: React.FC = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
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
                  <Image style={styles.image} source={{ uri: imageUrl + obj.backdrop_path }} />
                </View>
              ),
            )}
        </View>
      </ScrollView>
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

export default MovieCard;
