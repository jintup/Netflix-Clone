import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Ptext: React.FC = ({text}) => {
  return <Text style={styles.heading}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: '400',
    color: '#fff',
    marginBottom: 20,
  },
});

export default Ptext;
