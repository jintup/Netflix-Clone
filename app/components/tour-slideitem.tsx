import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Colors } from '../theme/colors';

const SlideItem: React.FC = ({ imageSource, slideText, description }) => {
  return (
    <View style={styles.slideContainer}>
      <Image source={imageSource} style={styles.backgroundImage} resizeMode="cover" />

      <Text style={styles.slideText}>{slideText}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },

  slideText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 2,
  },
});
