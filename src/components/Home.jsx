import React, { useState } from 'react'
import Card from './Card'

const Home = () => {


    const [round, setRound] = useState("");
    const [goal, setGoal] = useState("");
    
  return (
    <div>
       <h1>Pomodoro Timer</h1>
       <div className='card-wrapper'>
        <Card>00</Card>:<Card>00</Card>
       </div>

        <div>
            <h2>{round}/2</h2>
            <h2>{goal}/2</h2>
        </div>
    </div>
  )
}

export default Home
