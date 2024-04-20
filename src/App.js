import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";
import About from "../src/components/About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Routes> */}
        <Header />
        {/* </Routes> */}
        <Hero />
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;
