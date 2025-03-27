import React, { useState, useEffect } from 'react';
import TimerContext from './TimerContext';


const TimerProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [rounds, setRounds] = useState(0);
  const [goals, setGoals] = useState(0);

  useEffect(() => {
    let intervalId;
    console.log('isPlaying changed:', isPlaying);
    if (isPlaying && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // timer finished, handle rounds and goals
      if (rounds < 3) {
        setRounds(rounds + 1);
        setTimeLeft(25 * 60); // reset timer
        setIsPlaying(false); // pause after reset
      } else {
        setGoals(goals + 1);
        setRounds(0);
        setTimeLeft(25 * 60); // reset timer
        setIsPlaying(false); // pause after reset
      }
    }

    return () => clearInterval(intervalId); // cleanup interval
  }, [isPlaying, timeLeft, rounds, goals]);

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const contextValue = {
    timeLeft,
    setTimeLeft,
    isPlaying,
    togglePlay,
    rounds,
    setRounds,
    goals,
    setGoals,
  };

  return (
    <TimerContext.Provider value={contextValue}>{children}</TimerContext.Provider>
  );
};

export default TimerProvider;
