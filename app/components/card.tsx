import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const MovieCard: React.FC = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/bg.jpg')} />
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/bg2.jpg')} />
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/bg.jpg')} />
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/bg.jpg')} />
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/bg2.jpg')} />
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/bg.jpg')} />
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
    margin: 10,
    borderRadius: 6,
    overflow: 'hidden',
  },
  image: {
    width: 105,
    height: 152,
    resizeMode: 'cover',
  },
});

export default MovieCard;
