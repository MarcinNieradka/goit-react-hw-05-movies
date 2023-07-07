import React, { useState, useEffect } from 'react';
import { fetchSearchedMovieDetails } from 'services';
import SearchBox from 'components/SearchBox';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
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
  }, []);

  useEffect(() => {
    if (!query && location.pathname === '/movies') {
      setSearchParams({});
    } else {
      setSearchParams({ query });
    }
  }, [setSearchParams, query, location.pathname]);

  return (
    <main>
      <SearchBox onSubmit={updateQueryString} />
      {noMovies && <div>No movies under this query, try again...</div>}
      {isLoading && <div>Searching...</div>}
      <MovieList data={movies}></MovieList>
      {/* <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul> */}
    </main>
  );
}

// import React, { useState } from 'react';
// import { fetchSearchedMovieDetails } from 'services';
// import SearchBox from 'components/SearchBox';
// import { Link, useSearchParams } from 'react-router-dom';

// export default function Movies() {
//   const [movies, setMovies] = useState([]);
//   const [, setSearchParams] = useSearchParams(); // Pominięcie nieużywanej wartości

//   const updateQueryString = async name => {
//     try {
//       const data = await fetchSearchedMovieDetails(name);
//       setMovies(data.results);
//       setSearchParams({ query: name });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <main>
//       <SearchBox onSubmit={updateQueryString} />
//       <ul>
//         {movies.map(movie => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

/////////////// v2 /////////////

// import React from 'react';
// import { useSearchParams } from 'react-router-dom';

// export default function Products() {
//   const [searchParams] = useSearchParams();
//   const name = searchParams.get('name');
//   const color = searchParams.get('color');
//   const maxPrice = searchParams.get('maxPrice');

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Color: {color}</p>
//       <p>Maximum price: {maxPrice}</p>
//     </div>
//   );
// }

////////////////////// v3 /////////////////////////

// import React, { useMemo } from 'react';
// import { useSearchParams } from 'react-router-dom';

// export default function Products() {
//   const [searchParams] = useSearchParams();
//   const params = useMemo(
//     () => Object.fromEntries([...searchParams]),
//     [searchParams]
//   );
//   const { name, maxPrice, inStock } = params;

//   return <div>Products</div>;
// }
