import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Service from './components/Pages/Service';
import About from './components/Pages/About';


function App() {
  return (
    <div className="container">
       <Router>
           <Navbar/>
           <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/service" element={<Service/>}/>
           <Route path="/about" element={<About/>}/>
           </Routes>
       </Router>
    </div>
  );
}

export default App;
