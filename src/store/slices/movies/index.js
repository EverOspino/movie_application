import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

import {API_MOVIES_URL, API_FIND_BY_ID_URL, API_SEARCH_URL} from '@env';

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        list: [],
        page: 1,
        initialPage: 1,
        totalPages: 1,
        loading: false,
        details: {},
        query: '',
        moviesFiltered: [],
    },
    reducers: {
        setMovieList: (state, action) => {
            state.list = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        nextPage: (state, action) => {
            state.page = state.page + 1;
        },
        beforePage: (state, action) => {
            state.page = state.page - 1;
        },
        isLoading: (state, action) => {
            state.loading = action.payload;
        },
        setMovieDetails: (state, action) => {
            state.details = action.payload;
        },
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setMoviesFiltered: (state, action) => {
            state.moviesFiltered = action.payload;
        },
    },
});

export const { setMovieList, setTotalPages, nextPage, beforePage, isLoading, setMovieDetails, setQuery, setMoviesFiltered } = movieSlice.actions;

export default movieSlice.reducer;

export const fetchAllMovies = (page) => (dispatch) => {
    const options = {
        method: 'GET',
        url: API_MOVIES_URL,
        params: { page: page },
        headers: {
            accept: 'application/json',
            Authorization: API_KEY
        }
    };

    axios
        .request(options)
        .then(function (response) {
            //   console.log(response.data);
            const data = response.data;
            dispatch(setTotalPages(data.total_pages));
            dispatch(setMovieList(data.results));
        })
        .catch(function (error) {
            console.error(error);
        });
};

export const fetchMovieDetails = (id) => (dispatch) => {
    const options = {
        method: 'GET',
        url: `${API_FIND_BY_ID_URL}${id}`,
        headers: {
            accept: 'application/json',
            Authorization: API_KEY
        }
    };
    axios
        .request(options)
        .then(function (response) {
            const data = response.data;
            dispatch(setMovieDetails(data));
        })
        .catch(function (error) {
            console.error(error);
        });
}

export const fetchMoviesFiltered = (query) => (dispatch) => {
    const options = {
        method: 'GET',
        url: API_SEARCH_URL,
        params: {query: query},
        headers: {
            accept: 'application/json',
            Authorization: API_KEY
        }
    };

    axios
        .request(options)
        .then(function (response) {
            const data = response.data.results;
            dispatch(setMoviesFiltered(data));
        })
        .catch(function (error) {
            console.error(error);
        });
};

