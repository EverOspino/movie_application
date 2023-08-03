import {useEffect} from 'react';
import { View, ScrollView, Text, StyleSheet, Image, Dimensions, TouchableNativeFeedback, StatusBar } from 'react-native';
import MovieCard from '../MovieCard';

// Redux
import { fetchAllMovies, nextPage, beforePage, isLoading, setMovieDetails } from '../../store/slices/movies'
import { useDispatch, useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {IMAGE_200_URL} from '@env';
// import fetchMovies from '../services/getMovies';

const height = Dimensions.get('window').height;

export default MoviesPage = ({ navigation }) => {

    const dispatch = useDispatch();
    const { list: movies, page, initialPage, totalPages, loading } = useSelector(state => state.movie);


    useEffect(() => {
        dispatch(isLoading(true));
        dispatch(fetchAllMovies(page));
        dispatch(isLoading(false));        
    }, [page]);

    const changePage = (actualPage, page, action) => {
        
        switch (action) {
            case 'before':
                if (actualPage > page) dispatch(beforePage())
                break;

            case 'next':
                if (actualPage < page) dispatch(nextPage())
                break;

            default:
                break;
        }
    }

    const navigateToMovieDetails = (movieId) => {
        dispatch(setMovieDetails({}));
        navigation.navigate('MovieDetails', {id: movieId});
    }
    
    const showMovies = () => {
        return loading 
            ? 
            <View style={styles.loadingContainer}><Text style={styles.loadingText}>Loading...</Text></View> 
            : 
            <View style={styles.listContainer}>
                {movies.map(movie => <MovieCard key={movie.id} id={movie.id} poster={`${IMAGE_200_URL + movie.poster_path}`} title={movie.title} vote={movie.vote_average} overview={movie.overview} navigate={navigateToMovieDetails} />)}
            </View> ;
    };

    return ( 
        <ScrollView>
            <StatusBar />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.paginationContainer}>
                        <Text style={styles.paginationTitle}>All</Text>
                        <TouchableNativeFeedback onPress={() => changePage(page, initialPage, 'before')}>
                            <Ionicons name='ios-arrow-back' size={25} style={styles.paginationBtn} />
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => changePage(page, totalPages, 'next')}>
                            <Ionicons name='ios-arrow-forward' size={25} style={styles.paginationBtn} />
                        </TouchableNativeFeedback>
                    </View>
                    <Text style={styles.pageInfo}>Page {page} of {totalPages}</Text>
                </View>
                
                {showMovies()}
            </View>
                
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1C2C',
        paddingHorizontal: 15,
        paddingBottom: 70,
    },
    header: {
        width: '100%',
        paddingVertical: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    paginationContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    paginationTitle: {
        color: '#fff',
        fontSize: 19,
    },
    paginationBtn: {
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: 50,
        padding: 3,
    },
    pageInfo: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    loadingContainer: {
        flex: 1,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
})