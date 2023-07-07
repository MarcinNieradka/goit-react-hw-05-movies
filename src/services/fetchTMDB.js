// import axios from 'axios';

// const API_URL = 'https://api.themoviedb.org/3/';
// const KEY = '96a4aa52bb9f5d2f390792047443ed12';
// const LANG = 'en-US';
// // let page = 1;
// let queryValue = '';

// const searchParams = () =>
//   new URLSearchParams({
//     query: queryValue,
//     api_key: KEY,
//     language: LANG,
//     include_adult: false,
//     // page: page,
//   });

// export const fetchMovies = async () => {
//   try {
//     const response = await axios.get(
//       `${API_URL}trending/movie/week?${searchParams()}`
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchMovieDetails = async movieId => {
//   try {
//     const response = await axios.get(`${API_URL}movie/${movieId}`, {
//       params: searchParams(),
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

////////////////  v2 //////////////////////

import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const KEY = '96a4aa52bb9f5d2f390792047443ed12';
const LANG = 'en-US';
let queryValue = '';

const searchParams = new URLSearchParams({
  query: queryValue,
  api_key: KEY,
  language: LANG,
  include_adult: false,
});

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `${API_URL}trending/movie/week?${searchParams.toString()}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`${API_URL}movie/${movieId}`, {
      params: searchParams,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchedMovieDetails = async name => {
  try {
    searchParams.set('query', name);
    const response = await axios.get(`${API_URL}search/movie`, {
      params: searchParams,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(`${API_URL}movie/${movieId}/credits`, {
      params: {
        api_key: KEY,
        language: LANG,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(`${API_URL}movie/${movieId}/reviews`, {
      params: {
        api_key: KEY,
        language: LANG,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
