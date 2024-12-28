import './App.css'
import GoldDetailCard from './components/GoldDetailcard/GoldDetailCard'
import VideoCard from './components/VideoCard/VideoCard'
import AllCards from './components/AllCards/AllCards'
import Footer from './components/Footer/Footer'
import Slider from './components/slider/Slider'
import Landing from './components/Landing/Landing'

function App() {
 

  return (
    <>
    <div>
    <Landing/>
      <div className='p-6'>
     <GoldDetailCard/>
     <VideoCard/>
     <AllCards/>
     </div>
     <Slider/>
     <Footer/>
     </div>
    </>
  )
}

export default App
