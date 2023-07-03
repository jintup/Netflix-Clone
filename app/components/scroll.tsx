import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';


const ScrollIndicator = ({ currentIndex, totalScreens }) => {
    return (
        <View style={styles.indicatorContainer}>
            {Array.from({ length: totalScreens }, (_, index) => (
                <View
                    key={index}
                    style={[
                        styles.indicator,
                        index === currentIndex && styles.activeIndicator,
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.gray,
        marginHorizontal: 4,
        top: -6,
    },
    activeIndicator: {
        backgroundColor: Colors.white,
    },
});

export default ScrollIndicator;
