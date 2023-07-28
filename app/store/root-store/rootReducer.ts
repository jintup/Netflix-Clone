import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from '../feature/video/movieSlice';

const rootReducer = combineReducers({
  movies: movieReducer,
});

export default rootReducer;
