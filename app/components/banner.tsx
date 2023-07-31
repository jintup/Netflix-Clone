import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from '../services/axios';
import { API_KEY } from '../constants/api-constant';
import BannerBackground from '../components/banner-background';
import BannerButtons from '../components/banner-buttons';

interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
}

const Banner: React.FC = () => {
  const [movie, setMovie] = useState<Movie | undefined>();
  const [urlId, setUrlId] = useState<string>('');

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(
        response.data.results.sort(function (a, b) {
          return 0.5 - Math.random();
        })[2],
      );
    });
  }, []);

  const handleMovie = (movie: Movie) => {
    console.log('Movie ID:', movie.id);
    axios
      .get(`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`)
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
        <BannerBackground movie={movie} />
      )}
      <BannerButtons movie={movie} onPressPlay={() => handleMovie(movie)} />
    </View>
  );
};

export default Banner;
