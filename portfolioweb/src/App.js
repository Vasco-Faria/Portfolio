import logo from './logo.svg';
import './App.css';
import Navbar from './Sections/Navbar/Navbar';
import Home from './Sections/Home/Home';
import AboutMe from './Sections/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutMe/>
    </div>
  );
}

export default App;
