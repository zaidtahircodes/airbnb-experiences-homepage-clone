import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Footer from './components/footer';
function App() {

  
  return(
  <div className='w-full h-auto'>
    <Navbar />
    <Hero />
    <Carousel />
    <Footer />
  </div>
  )
}

export default App;
