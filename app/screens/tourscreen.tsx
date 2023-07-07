import { View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import SlideItem from '../components/tour-slideitem';
import Lbutton from '../components/long-button';
import { Colors } from '../theme/colors';
import onboardingData from '../components/onboarding-data';
import Header from '../components/toursrn-header';
import ScrollIndicator from '../components/scroll';
import { useNavigation } from '@react-navigation/native';
const TourScreen = () => {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('window');
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleScroll = event => {
        const contentOffset = event.nativeEvent.contentOffset;
        const index = Math.round(contentOffset.x / width);
        setCurrentIndex(index);
    };
    const handleGetStarted = () => {
        navigation.navigate('Signup');
    };

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={{ width: width * onboardingData.length }}
                onScroll={handleScroll}
                scrollEventThrottle={16}>
                {onboardingData.map(item => (
                    <View key={item.id} style={[styles.pageContainer, { width }]}>
                        <Image
                            source={item.image}
                            style={styles.backgroundImage}
                            resizeMode="cover"
                        />
                        <View style={[styles.contentContainer, { top: height * 0.2 }]}>
                            <SlideItem slideText={item.title} />
                            <SlideItem description={item.description} />
                        </View>
                    </View>
                ))}
            </ScrollView>
            <ScrollIndicator
                currentIndex={currentIndex}
                totalScreens={onboardingData.length}
            />
            <Lbutton onPress={handleGetStarted} title="GET STARTED" color="#FF0000" />
        </View>
    );
};

export default TourScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkblack,
    },
    pageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
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
});
