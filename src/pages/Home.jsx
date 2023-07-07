import { MovieList } from 'components/MovieList';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from 'services';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isTrendingLoading, setIsTrendingLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsTrendingLoading(true);
        const data = await fetchMovies();
        setMovies(data.results);
        setIsTrendingLoading(false);
      } catch (error) {
        throw new Error('Something went wrong');
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <h1>Trending Movies</h1>
      {isTrendingLoading && (
        <div>
          Please be patient while we're loading movies that are currently
          trending...
        </div>
      )}
      <MovieList data={movies}></MovieList>
    </>
  );
}
