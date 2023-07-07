import React from 'react';
import { StyledInput, Wrapper, StyledButton } from './SearchBox.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBox({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.name.value);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <StyledInput id="name" name="name" type="input" />
        <StyledButton type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </StyledButton>
      </form>
    </Wrapper>
  );
}
