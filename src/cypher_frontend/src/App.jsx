
// import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
// import Home from './components/Home';
import Index from './components/Index';
import Cypher from "./components/Cypher";
import About from "./components/About";
import Checksum from "./components/Checksum";
// import About from './components/About';

function App() {
  return (
    <>
    <BrowserRouter>
   <Navigation />
   <Routes>
   <Route path="/" element={<Index />}></Route>
    <Route path="/cypher" element={<Cypher />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/check" element={<Checksum />}></Route>
   </Routes>
   
   </BrowserRouter>
    </>
  );
}

export default App;
