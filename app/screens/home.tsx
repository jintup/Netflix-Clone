import React from 'react';
import { View, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/header';
import { Colors } from '../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import MovieCard from '../components/card';

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
        <LinearGradient colors={['transparent', '#000000']} style={styles.gradient}>
          <ImageBackground
            source={require('../assets/images/bg3.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
        </LinearGradient>
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
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '230%',
    aspectRatio: 2,
  },
  gradient: {
    flex: 1,
  },
  movieCardContainer: {
    paddingTop: '75%',
    paddingHorizontal: 10,
  },
});
