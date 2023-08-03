import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default Vote = ({vote}) => {
    return (
        <View style={styles.container}>
            <Ionicons name='ios-star' size={14} color={'#FFDD00'} />
            <Text style={styles.vote}>{vote}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: '#00000090',
        padding: 8,
        borderRadius: 11,
    },
    vote: {
        color: '#fff',
        fontSize: 15,
    },
});
