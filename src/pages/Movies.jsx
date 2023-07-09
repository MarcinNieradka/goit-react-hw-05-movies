import React, { useState, useEffect } from 'react';
import { fetchSearchedMovieDetails } from 'services';
import SearchBox from 'components/SearchBox';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [noMovies, setNoMovies] = useState(false);

  const query = searchParams.get('query');

  const updateQueryString = async name => {
    try {
      setIsLoading(true);
      setNoMovies(false);
      const data = await fetchSearchedMovieDetails(name);
      setMovies(data.results);
      setSearchParams({ query: name });
      setIsLoading(false);

      if (data.results.length < 1) {
        setNoMovies(true);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (query || location.pathname !== '/movies') {
      updateQueryString(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, location.pathname, setSearchParams]);

  useEffect(() => {
    if (!query && location.pathname === '/movies') {
      setSearchParams({});
    } else {
      setSearchParams({ query });
    }
  }, [query, location.pathname, setSearchParams]);

  return (
    <main>
      <SearchBox onSubmit={updateQueryString} />
      {noMovies && <div>No movies under this query, try again...</div>}
      {isLoading && <div>Searching...</div>}
      <MovieList data={movies}></MovieList>
    </main>
  );
}
