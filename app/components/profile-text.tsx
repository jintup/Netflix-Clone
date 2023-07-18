import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { Colors } from '../theme/colors';

const Ptext: React.FC = ({text}) => {
  return <Text style={styles.heading}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: '400',
    color: Colors.white,
    marginBottom: 20,
  },
});

export default Ptext;
