import React from 'react'
import Card from './Card'
import Button from './Button';
import TimerContext from '../contexts/TimerContext'
import { useContext } from 'react';
import tomatoIcon from '../assets/tomato-svgrepo-com.svg'


const Home = () => {
    const { rounds, goals, timeLeft } = useContext(TimerContext);
  
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
  
    return (
      <div>
        <h1 className="app-title">Pomodoro Timer</h1>
        <img src={tomatoIcon} alt="Tomato" className="tomato-icon" />
        <div className="card-wrapper">
          <Card>{String(minutes).padStart(2, '0')}</Card>
          <h1>:</h1><Card>{String(seconds).padStart(2, '0')}</Card>
        </div>
  
        <Button/>
  
        <div className='text-wrapper'>
          <div className='rounds-wrapper'>
            <h2>
              {rounds}/4
            </h2>
            <h2>ROUNDS</h2>
          </div>
          <div className='goals-wrapper'>
            <h2>{goals}</h2>
            <h2>GOALS</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;