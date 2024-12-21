import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoldDetailCard from './components/GoldDetailcard/GoldDetailCard'
import VideoCard from './components/VideoCard/VideoCard'
import AllCards from './components/AllCards/AllCards'

function App() {
 

  return (
    <>
     <GoldDetailCard/>
     <VideoCard/>
     <AllCards/>
    </>
  )
}

export default App
