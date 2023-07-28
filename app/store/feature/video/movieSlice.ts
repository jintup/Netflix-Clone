import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../services/axios';
import { API_KEY } from '../../../constants/api-constant';

const initialState = {
  movies: [],
  urlId: '',
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (url) => {
  const response = await axios.get(url);
  return response.data.results;
});

export const fetchMovieVideos = createAsyncThunk('movies/fetchMovieVideos', async (id) => {
  const response = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
  return response.data.results;
});

export const clearMovies = createAsyncThunk('movies/clearMovies', async () => {
  return { movies: [], urlId: '' };
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMovieVideos.fulfilled, (state, action) => {
        if (action.payload.length !== 0) {
          state.urlId = action.payload[0].key;
        } else {
          console.log('Array empty vdo not available');
        }
      });
  },
});

export default moviesSlice.reducer;