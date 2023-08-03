import {useEffect} from 'react';
import Vote from '../Vote';
import { View, ScrollView, Text, StyleSheet, Image, StatusBar } from 'react-native';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../../store/slices/movies'

import {IMAGE_ORIGINAL_URL} from '@env';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default MovieDetailsPage = ({route, navigation}) => {

    const dispatch = useDispatch();
    const { details: movie } = useSelector(state => state.movie);

    const {id} = route.params;

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, []);

    const showMovie = () => {
        return movie ? (<MovieDetails movie={movie}  />) : <Text>Loading...</Text> ;
    }

    return ( 
        <ScrollView style={styles.container}>
            <StatusBar />
            {showMovie()}
        </ScrollView>
        
    );
}

const MovieDetails = ({movie}) => {
    return (
        <View style={stylesMovie.container}>
            <Image source={{uri: `${IMAGE_ORIGINAL_URL + movie.poster_path}`}} style={stylesMovie.poster} />
            <View style={stylesMovie.voteContainer}>
                <Vote vote={movie.vote_average} />
            </View>
            <Text style={stylesMovie.title}>{movie.title}</Text>
            <View style={stylesMovie.infoContainer}>
                <Text style={stylesMovie.text}>{movie.original_language}</Text>
                <Text style={stylesMovie.text}> | </Text>
                <Text style={stylesMovie.text}>{movie.runtime} min</Text>
            </View>
            <View style={stylesMovie.line}></View>
            <View>
                <Text style={stylesMovie.subtitle}>Story line</Text>
                <Text style={stylesMovie.text}>{movie.overview}</Text>
            </View>
            <View style={stylesMovie.line}></View>
            <View style={stylesMovie.dataExtraContainer}>
                <InfoBox iconName='ios-calendar' iconSize={24} iconColor={'#A5A5A5'} title={movie.release_date} />
                <InfoBox iconName='ios-eye' iconSize={24} iconColor={'#A5A5A5'} title={movie.popularity} />
            </View>
        </View>
    );
}

const InfoBox = ({iconName, iconSize, iconColor, title}) => {
    return (
        <View style={stylesInfoBox.container}>
            <Ionicons name={iconName} size={iconSize} color={iconColor} />
            <Text style={stylesInfoBox.title}>{title}</Text>
        </View>
    );
}

const stylesInfoBox = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 4,
    },
    title: {
        color: '#A5A5A5',
        fontSize: 15,
    }, 
})

const stylesMovie = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
    },
    poster: {
        height: 300,
        width: '100%',
        borderRadius: 11,
    },
    voteContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 2,
        margin: 6,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    }, 
    subtitle: {
        color: '#FFF',
        fontSize: 17,
        marginBottom: 6,
    },
    infoContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        color: '#A5A5A5',
        fontSize: 15,
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#4F4F4F',
        marginVertical: 12,
    },
    dataExtraContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F1C2C',
        paddingHorizontal: 15,
    },
});