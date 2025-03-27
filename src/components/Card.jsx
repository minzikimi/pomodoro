import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimerCard = styled(motion.div)`
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 140px;
  font-size: 5rem;
  color: tomato;
  background: white;
`;

const cardVariants = {
  normal: { scale: 1 },
  changed: { 
    scale: [1, 1.5, 1],
    transition: { 
      duration: 0.3,
      times: [0, 0.5, 1] 
    }
  }
};

const Card = ({ children }) => {
  return (
    <TimerCard
      variants={cardVariants}
      initial="normal"
      animate="changed"
      key={children} //detects change
    >
      {children}
    </TimerCard>
  );
};

export default Card;
