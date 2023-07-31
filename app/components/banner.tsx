import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Smallbutton from './smallbutton';
import { Colors } from '../theme/colors';
import axios from '../services/axios';
import { API_KEY } from '../constants/api-constant';
import { imageUrl } from '../services/api-config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import YoutubePlayer from 'react-native-youtube-iframe';
import { horizontalScale, moderateScale, verticalScale } from '../utils/scale';
const Banner: React.FC = () => {
  const [movie, setMovie] = useState();
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      //console.log(response.data);
      setMovie(
        response.data.results.sort(function (a, b) {
          return 0.5 - Math.random();
        })[2],
      );
    });
  }, []);
  const handleMovie = (movie) => {
    console.log('Movie ID:', movie.id);
    axios
      .get(`/movie/${movie}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log('Array empty, video not available');
        }
      })
      .catch((error) => {
        console.log('Error fetching video:', error.message);
      });
  };
  return (
    <View>
      {urlId ? (
        <YoutubePlayer height={300} videoId={urlId} play={true} />
      ) : (
        <ImageBackground
          source={{ uri: movie ? imageUrl + movie.backdrop_path : '' }}
          style={styles.backgroundImage}
          resizeMode="cover">
          <LinearGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.4, y: 0.8 }}
            colors={['transparent', Colors.darkblack]}
            style={styles.gradient}
          />
          <Text style={styles.title}>{movie ? movie.title : ''}</Text>
        </ImageBackground>
      )}
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="add-outline" style={styles.iconstyle} />
          </TouchableOpacity>
          <Text style={styles.text}>My list</Text>
        </View>
        <Smallbutton
          bgColor={Colors.white}
          buttonText=" Play"
          textColor={Colors.darkblack}
          onPress={() => handleMovie(movie)}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="information-circle-outline" style={styles.iconstyle} />
          </TouchableOpacity>
          <Text style={styles.text}>info</Text>
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '250%',
    aspectRatio: 2,
  },
  gradient: {
    height: '250%',
    justifyContent: 'flex-end',
    padding: verticalScale(10),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: horizontalScale(40),
    top: horizontalScale(260),
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.gray,
    fontWeight: 'bold',
    top: horizontalScale(260),
  },
  title: {
    color: Colors.gold,
    fontWeight: 'bold',
    fontSize: moderateScale(25),
    marginHorizontal: horizontalScale(25),
    bottom: '50%',
    textAlign: 'center',
    letterSpacing: 2,
  },
  iconstyle: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    color: Colors.white,
    marginRight: 2,
  },
});
