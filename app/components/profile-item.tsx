import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { Colors } from '../theme/colors';

const ProfileItem: React.FC = ({profile, onPress}) => {
  return (
    <TouchableOpacity style={styles.profile} onPress={onPress}>
      <View style={styles.profileImageContainer}>
        <Image style={styles.profileImage} source={profile.image} />
        <Text style={styles.profileName}>{profile.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profile: {
    marginRight: 40,
    left: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  profileName: {
    fontSize: 16,
    padding: 10,
    marginLeft: 15,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default ProfileItem;
