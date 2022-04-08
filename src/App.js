import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Partner from './Components/Partner';
import Prize from './Components/Prize';
import Venue from './Components/Venue';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />   
      <About />
      <Prize />  
      <Partner />
      <Venue />
    </div>
  );
}

export default App;
