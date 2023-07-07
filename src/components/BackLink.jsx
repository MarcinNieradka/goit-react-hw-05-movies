// import { Link } from 'react-router-dom';
// // import styled from 'styled-components';

// // const StyledLink = styled(Link)`
// //   display: inline-flex;
// //   align-items: center;
// //   gap: 4px;
// //   padding: 8px 0;
// //   color: black;
// //   text-decoration: none;
// //   font-weight: 500;
// //   text-transform: uppercase;

// //   :hover {
// //     color: orangered;
// //   }
// // `;

// export const BackLink = ({ to, children }) => {
//   // return <StyledLink to={to}>{children}</StyledLink>;
//   return <Link to={to}>{children}</Link>;
// };

////////////////////////////
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export const BackLink = ({ children }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(-1); // Przejście do poprzedniej lokalizacji w historii
//   };

//   return <button onClick={handleClick}>{children}</button>;
// };

///////////////////
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const BackLink = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(-1, { state: { from: location.pathname + location.search } });
  };

  return <button onClick={handleClick}>{children}</button>;
};
