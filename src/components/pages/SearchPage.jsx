import React from 'react'
import { View, Text, ScrollView, TextInput, TouchableNativeFeedback, StyleSheet, Alert } from 'react-native'

import MovieCard from '../MovieCard';

// Redux
import { setQuery, fetchMoviesFiltered, setMovieDetails, setMoviesFiltered } from '../../store/slices/movies'
import { useDispatch, useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {IMAGE_200_URL} from '@env';

export default SearchPage = ({ navigation }) => {

    const dispatch = useDispatch();
    const { query, moviesFiltered } = useSelector(state => state.movie);

    const handleQuery = (query) => {
        dispatch(setQuery(query));
    }

    const handleSearch = (query) => {
        dispatch(fetchMoviesFiltered(query));
    };

    const navigateToMovieDetails = (movieId) => {
        dispatch(setMovieDetails({}));
        navigation.navigate('MovieDetails', { id: movieId });
    }

    const handledelete = () => {
        dispatch(setQuery(''));
        dispatch(setMoviesFiltered([]));
    }

    const showMovies = (movies) => {
        return movies.length ? <View style={styles.listContainer}>
            {movies.map(movie => <MovieCard key={movie.id} id={movie.id} poster={`${IMAGE_200_URL + movie.poster_path}`} title={movie.title} vote={movie.vote_average} overview={movie.overview} navigate={navigateToMovieDetails} />)}
        </View> : <View style={styles.previewContainer}><Text style={styles.previewText}>No movies :(</Text></View>;
    };

    const showDeleteBtn = () => {
        return query != '' && <TouchableNativeFeedback onPress={handledelete}>
            <Ionicons style={styles.deleteBtn} name={'ios-close'} size={26} color={'#DDDDDD'} />
        </TouchableNativeFeedback>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchInputContainer}>
                    { showDeleteBtn() }
                    <TextInput onChangeText={(text) => handleQuery(text)} style={styles.searchInput} value={query} placeholder='Enter movie name' placeholderTextColor='#DDDDDD80' />
                </View>
                <TouchableNativeFeedback onPress={() => handleSearch(query)}>
                    <Ionicons style={styles.searchBtn} name={'ios-search'} size={28} color={'#FFFFFF'} />
                </TouchableNativeFeedback>
            </View>
            <ScrollView>
                {showMovies(moviesFiltered)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#1F1C2C',
        paddingHorizontal: 15,
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        gap: 10,
    },
    searchInputContainer: {
        flex: 1,
        height: 38,
    },
    deleteBtn: {
        position: 'absolute',
        top: 0,
        right: 3,
        padding: 5,
        zIndex: 3,
        borderRadius: 40,
    },
    searchInput: {
        width: '100%',
        height: '100%',
        backgroundColor: '#DDDDDD50',
        color: '#EEEEEE',
        borderRadius: 40,
        paddingLeft: 12,
        fontSize: 16,
    },
    searchBtn: {
        backgroundColor: '#FF722A',
        padding: 5,
        borderRadius: 100,
    },
    listContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 150,
    },
    previewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    previewText: {
        color: '#DDDDDD',
        fontSize: 18,
    },
})