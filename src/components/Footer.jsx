import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Alert, Image, StatusBar } from 'react-native';

export default Footer = ({content, linkText, linkOnPress}) => {
    return ( 
        <View style={styles.footerContainer}>
            <Text style={{...styles.subText, ...styles.footerText}} >{content}</Text>
            <TouchableNativeFeedback onPress={linkOnPress}>
                <Text style={{...styles.link, ...styles.footerText}}>{linkText}</Text>
            </TouchableNativeFeedback>
        </View>
     );
}

const styles = StyleSheet.create({
    footerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    subText: {
        color: '#9C9C9C',
    },
    footerText: {
        fontSize: 17,
    },
    link: {
        color: '#FFF',
    }
})