import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
function App() {

  
  return(
  <div className='w-full h-auto'>
    <Navbar />
    <Hero />
    <Carousel />
    
  </div>
  )
}

export default App;
