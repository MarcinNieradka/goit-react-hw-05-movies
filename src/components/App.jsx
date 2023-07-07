import React, { useEffect, useState, lazy } from 'react';
import styled from 'styled-components';
import { Routes, Route, NavLink, useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import SharedLayout from './SharedLayout';
import Home from 'pages/Home';
import { Container, Header, Logo, Link } from './App.styled';

// const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
