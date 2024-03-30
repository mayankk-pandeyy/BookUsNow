import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Recommendation from './components/Recommended';
import Upcoming from './components/Upcoming';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='relative'>
        <Hero/>
        <Recommendation/>
      </div>
      <Upcoming/>
    </div>
  );
}

export default App;
