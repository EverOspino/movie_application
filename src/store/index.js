import { configureStore } from '@reduxjs/toolkit';
import movie from './slices/movies';

export default configureStore({
    reducer: {
        movie,
    }
})