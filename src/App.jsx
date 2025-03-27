
import './App.css'
import Home from './components/Home'
import TimerProvider from './contexts/TimerProvider'

function App() {


  return (
    <>
    <TimerProvider>
      <Home />
    </TimerProvider>
     
    </>
  )
}

export default App
