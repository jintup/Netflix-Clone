import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../feature/video/movieSlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
