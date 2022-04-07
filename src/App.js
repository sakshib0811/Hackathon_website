import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Prize from './Components/Prize';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />   
      <About />
      <Prize />  
    </div>
  );
}

export default App;
