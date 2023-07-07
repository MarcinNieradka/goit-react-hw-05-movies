import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ data }) => {
  const location = useLocation();

  return (
    <>
      {/* <h1>Trending movies</h1> */}
      <ul>
        {data.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
