import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Latest, Orginals } from '../constants/urls';
import NewMovieCard from '../components/new-card';
import { Colors } from '../theme/colors';
const New = () => {
  return (
    <View style={styles.container}>
      <NewMovieCard url={Orginals} />
    </View>
  );
};

export default New;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkblack,
  },
});
