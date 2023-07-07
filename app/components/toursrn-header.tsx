import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
    const navigation = useNavigation();
    const handleSignInPress = () => {
        navigation.navigate('Login');
    };
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <TouchableOpacity onPress={handleSignInPress}>
                <Text style={styles.signInText}>SIGN IN</Text>
            </TouchableOpacity>
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
        marginHorizontal: -45,
    },
    signInText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
