import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar1 from './components/Sidebar1'
import Player1 from './components/Player1'
import Display from './components/Display'
import { useContext } from 'react'
import { PlayerContext } from './context/PlayerContext'

function App() {
  const [count, setCount] = useState(0)
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <>
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar1 />
          <Display />
        </div>
      </div>
      <Player1 />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </>
  )
}

export default App
