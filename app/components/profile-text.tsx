import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { Colors } from '../theme/colors';
import { moderateScale } from '../utils/scale';

const Ptext: React.FC = ({text}) => {
  return <Text style={styles.heading}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: moderateScale(24),
    fontWeight: '400',
    color: Colors.white,
    marginBottom: 20,
  },
});

export default Ptext;
