import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Cv from "./components/Cv";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header className="header"/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </div>
  );
}

export default App;
