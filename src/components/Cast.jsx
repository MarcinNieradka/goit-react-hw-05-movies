import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services';
import { StyledCastImg } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData);
        // console.log(castData);
      } catch (error) {
        throw new Error('Something went wrong');
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.length > 0 ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <h3>{actor.name}</h3>
              <StyledCastImg
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt=""
              />
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available</p>
      )}
    </div>
  );
}
