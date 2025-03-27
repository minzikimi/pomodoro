import React, { useContext } from 'react';
import styled from 'styled-components';
import TimerContext from '../contexts/TimerContext';

const StyledButton = styled.button`
  background-color: ${props => props.isPlaying ? 'tomato' : 'tomato'};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Button = () => {
  const { isPlaying, togglePlay } = useContext(TimerContext);

  return (
    <StyledButton onClick={togglePlay} isPlaying={isPlaying}>
      {isPlaying ? 'Pause' : 'Play'}
    </StyledButton>
  );
};

export default Button;

