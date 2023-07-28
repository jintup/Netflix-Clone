import React from 'react';
import { View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const VideoScreen = ({ route }) => {
  const { videoId } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <YoutubePlayer height={200} videoId={videoId} play={true} />
    </View>
  );
};

export default VideoScreen;
