import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Partner from "./Components/Partner";
import Prize from "./Components/Prize";
import User from "./Components/User";
import Venue from "./Components/Venue";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Prize />
      <Partner />
      <User />
      <Venue />
    </div>
  );
}

export default App;
