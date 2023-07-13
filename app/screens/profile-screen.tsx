import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CHeader from '../components/centerheader';

const ProfileScreen = () => {
  const profiles = [
    { name: 'John', image: require('../assets/images/avatar.png') },
    { name: 'Children', image: require('../assets/images/child.jpg') },
  ];
  const navigation = useNavigation();

  const handleProfilePress = (profileName) => {
    if (profileName === 'John') {
      navigation.navigate('Home');
    } else if (profileName === 'Children') {
      navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.headercontainer}>
      <CHeader />
      <View style={styles.container}>
        <Text style={styles.heading}>Who is watching?</Text>
        <View style={styles.profilesContainer}>
          {profiles.map((profile, index) => (
            <TouchableOpacity
              style={styles.profile}
              key={index}
              onPress={() => handleProfilePress(profile.name)}>
              <View style={styles.profileImageContainer}>
                <Image style={styles.profileImage} source={profile.image} />
                <Text style={styles.profileName}>{profile.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000', 
  },
  heading: {
    fontSize: 24,
    fontWeight: '400',
    color: '#fff', 
    marginBottom: 20,
  },
  profilesContainer: {
    flexDirection: 'row',
  },
  profile: {
    marginRight: 40,
    left:20,
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
    color: '#fff',
  },
  headercontainer: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default ProfileScreen;
