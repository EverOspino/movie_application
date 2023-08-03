import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableNativeFeedback } from 'react-native';
import Vote from './Vote';

const width = Dimensions.get('window').width;

export default MovieCard = ({id, title, poster, overview, vote, navigate}) => {
    return (
        <TouchableNativeFeedback onPress={() => navigate(id)}>
            <View style={styles.card} >
                <View>
                    <View style={styles.voteContainer}>
                        <Vote vote={vote} />  
                    </View>
                    <Image source={{uri: poster}} style={styles.poster} />
                    <View style={styles.titleContainer}>
                        <Text numberOfLines={2} style={styles.title}>{title}</Text>
                    </View>
                </View>
                <Text numberOfLines={2} style={styles.overview}>{overview}</Text>
            
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '47%',
        marginVertical: 10,
        display: 'flex',
        gap: 10,
        backgroundColor: '#FFFFFF20',
        borderRadius: 11,
        paddingBottom: 10,
    },
    poster: {
        height: 240,
        width: '100%',
        borderRadius: 11,
    },
    titleContainer: {
        position: 'absolute',
        bottom: 0,
        borderRadius: 11,
        backgroundColor: '#00000090',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    title: {
        color: '#fff',
        fontSize: 18,
    },
    voteContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 2,
        margin: 6,
    },
    overview: {
        color: '#fff',
        fontSize: 14,
        paddingHorizontal: 10,
    },
})