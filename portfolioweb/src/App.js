import logo from './logo.svg';
import './App.css';
import Navbar from './Sections/Navbar/Navbar';
import Home from './Sections/Home/Home';
import AboutMe from './Sections/AboutMe/AboutMe';
import Timeline from './Sections/Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Timeline/>
    </div>
  );
}

export default App;
