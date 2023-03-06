import './App.css';
import Header from './components/Header/Header';
import Lenis from '@studio-freight/lenis';
import Nav from './components/Nav/Nav';




const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  direction: 'vertical', 
  gestureDirection: 'vertical', 
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
     
    </div>
  );
}

export default App;
