import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/header';
import { Colors } from '../theme/colors';
import MovieCard from '../components/card';
import Banner from '../components/banner';
import { useNavigation } from '@react-navigation/native';
import {
  Orginals,
  Actions,
  ComedyMovies,
  HorrorMovies,
  RomanceMovies,
  Documentaries,
} from '../constants/urls';
const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleRightImagePress = () => {
    navigation.navigate('ProfileScreen');
  };
  return (
    <>
      <View style={styles.headerContainer}>
        <Header
          leftImageSource={require('../assets/images/nlogo.png')}
          rightImageSource={require('../assets/images/avatar.png')}
          bgColor={Colors.darkblack}
          onRightImagePress={handleRightImagePress}
        />
      </View>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <Banner />
          <View style={styles.movieCardContainer}>
            <MovieCard url={Orginals} title={'Popular on Netflix'} />
            <MovieCard url={Actions} title={'Trending Now'} />
            <MovieCard url={ComedyMovies} title={'Comedy Movies'} />
            <MovieCard url={RomanceMovies} title={'Romantic Movies'} />
          </View>
        </ScrollView>
      </View>
    </>
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
