import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/colors';

const PrimaryButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};


export default PrimaryButton;

const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 50,
        backgroundColor: Colors.darkblack,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: Colors.darkgray,
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})