import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { makeGenresList } from 'services/genres';
import {
  SyledPosterImg,
  StyledMovieContainer,
  StyledLink,
  StyledLinksContainer,
  StyledNavLink,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
        // console.log(data);
      } catch (error) {
        throw new Error('Something went wrong');
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  // const handleClickBack = () => {
  //   navigate(-1, { state: { from: location.pathname + location.search } });
  // };

  return (
    <div>
      {/* <BackLink to={backLinkHref}>Powrót do listy filmów...</BackLink> */}
      {/* <button onClick={handleClickBack}>Cofnij</button> */}
      <StyledLink to={backLinkHref}>Cofnij</StyledLink>

      <h1>
        {movieDetails.title} ({movieDetails.release_date.slice(0, 4)})
      </h1>
      <StyledMovieContainer>
        <SyledPosterImg
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt=""
        />
        <div>
          <p>
            User score:{' '}
            <span>{Math.floor(movieDetails.vote_average * 10)}</span>%
          </p>
          <h4>Overview:</h4>
          <p> {movieDetails.overview}</p>
          <h5>Genres:</h5>
          <p>{makeGenresList(movieDetails)}</p>
        </div>
      </StyledMovieContainer>
      <StyledLinksContainer>
        <StyledNavLink to={`cast`} state={{ from: location.state.from }}>
          Cast
        </StyledNavLink>
        <StyledNavLink to={`reviews`} state={{ from: location.state.from }}>
          Reviews
        </StyledNavLink>
        {/* <StyledNavLink to={`cast`} {...location.state}>
          Cast
        </StyledNavLink>
        <StyledNavLink to={`reviews`} {...location.state}>
          Reviews
        </StyledNavLink> */}
      </StyledLinksContainer>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
