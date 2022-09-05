import React from "react"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home"
import About from './Components/About/About';
import Manga from "./Components/Manga/Manga";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Manga/>
    </div>
  );
}

export default App;
