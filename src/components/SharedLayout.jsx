import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
import { Container, StyledHeader, StyledLink } from './App.styled';

export default function SharedLayout() {
  return (
    <Container>
      <StyledHeader>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </StyledHeader>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
