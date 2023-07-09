import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SyledPosterImg = styled.img`
  display: block;
  width: 250px;
  height: auto;
`;

export const StyledMovieContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 20px;
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  align-items: flex-start;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  box-shadow: 2px 2px 5px black;
  transition-duration: 250ms;

  &.active,
  &:hover {
    color: white;
    background-color: #445566;
    box-shadow: 0px 0px 1px black;
  }
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 1px solid;
  box-shadow: 2px 2px 5px black;
  transition-duration: 150ms;

  &:hover {
    box-shadow: 0px 0px 2px black;
  }
`;
