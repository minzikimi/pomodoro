import React from 'react';
import styled from 'styled-components';

const TimerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 140px;
  border-radius: 12px;
  color: #E34336;
  background: white;
`;


const Card = ({children}) => {
  return (
    <div>
      <TimerCard>
        {children}
      </TimerCard>
    </div>
  );
};

export default Card;
