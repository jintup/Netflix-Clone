import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/header';
import { Colors } from '../theme/colors';
import MovieCard from '../components/card';
import Banner from '../components/banner';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          leftImageSource={require('../assets/images/nlogo.png')}
          rightImageSource={require('../assets/images/avatar.png')}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <Banner />
        <View style={styles.movieCardContainer}>
          <MovieCard title={'Popular on Netflix'} />
          <MovieCard title={'Trending Now'} />
          <MovieCard title={'Bollywood Movies'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkblack,
  },
  headerContainer: {
    zIndex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  movieCardContainer: {
    paddingTop: '75%',
    paddingHorizontal: 10,
  },
});
