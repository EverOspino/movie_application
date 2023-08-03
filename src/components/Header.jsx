import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Alert, Image } from 'react-native';

export default Header = ({title=''}) => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.textHeader}>{title}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    textHeader: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
})

