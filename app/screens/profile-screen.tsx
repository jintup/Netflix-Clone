import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CHeader from '../components/centerheader';
import ProfileItem from '../components/profile-item';
import Ptext from '../components/profile-text';
import { Colors } from '../theme/colors';

const ProfileScreen: React.FC = () => {
  const profiles = [
    { name: 'John', image: require('../assets/images/avatar.png') },
    { name: 'Children', image: require('../assets/images/child.jpg') },
  ];
  const navigation = useNavigation();
  const Logout = () => {
    navigation.navigate('Login');
  };

  const handleProfilePress = (profileName) => {
    if (profileName === 'John') {
      navigation.navigate('Home');
    } else if (profileName === 'Children') {
      navigation.navigate('ChildrenHome');
    }
  };
  return (
    <View style={styles.headercontainer}>
      <CHeader />
      <View style={styles.container}>
        <Ptext text="Who is watching?" />
        <View style={styles.profilesContainer}>
          {profiles.map((profile, index) => (
            <ProfileItem
              key={index}
              profile={profile}
              onPress={() => handleProfilePress(profile.name)}
            />
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.logoutContainer} onPress={Logout}>
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
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
  profilesContainer: {
    flexDirection: 'row',
  },
  headercontainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  logoutText: {
    color: Colors.gray,
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutContainer: {
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
  },
});

export default ProfileScreen;
