import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/colors';
import Smallbutton from '../components/smallbutton';
import { horizontalScale, moderateScale } from '../utils/scale';
import { Movie } from './banner';

interface BannerButtonsProps {
  movie: Movie | undefined;
  onPressPlay: () => void;
}

const BannerButtons: React.FC<BannerButtonsProps> = ({ movie, onPressPlay }) => {
  return (
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
        onPress={onPressPlay}
      />
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="information-circle-outline" style={styles.iconstyle} />
        </TouchableOpacity>
        <Text style={styles.text}>info</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  iconstyle: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    color: Colors.white,
    marginRight: 2,
  },
});

export default BannerButtons;
