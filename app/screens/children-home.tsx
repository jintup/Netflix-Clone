import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/header';
import { Colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { Child, Kids } from '../constants/urls';
import ChildCard from '../components/child-card';
const ChildrenHome: React.FC = () => {
  const navigation = useNavigation();

  const handleRightImagePress = () => {
    navigation.navigate('ProfileScreen');
  };
  return (
    <>
      <View style={styles.headerContainer}>
        <Header
          leftImageSource={require('../assets/images/nlogo.png')}
          rightImageSource={require('../assets/images/child.jpg')}
          bgColor={Colors.darkblack}
          onRightImagePress={handleRightImagePress}
        />
      </View>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <ChildCard url={Kids} title={'Popular'} />
          <ChildCard url={Child} title={'Everyone`s Watching'} />
          <ChildCard url={Kids} title={'Top 10 Kids Movies in India Today'} />
          <ChildCard url={Child} title={'Only on Netflix'} />
        </ScrollView>
      </View>
    </>
  );
};

export default ChildrenHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkblack,
  },
  headerContainer: {
    zIndex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  movieCardContainer: {
    paddingTop: '75%',
    paddingHorizontal: 10,
  },
});
