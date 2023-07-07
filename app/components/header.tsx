import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/nlogo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    logo: {
        width: 100,
        height: 40,
    },
    logoContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    logoImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
});
