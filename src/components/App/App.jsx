import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';
import Navbar from '../Navbar';
import GoBack from '../GoBack';
  

const App = () => {
    return <div id="App">
         
        <Router>
            <div>
            <Navbar />
                <Routes>
                    
                   <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/projects" element={<Projects/>} />
                    <Route exact path="/skills" element={<Skills />} />
                    <Route exact path="/contact" element={<Contact/>}/>
                </Routes>
                <GoBack/>
            </div>
            
        </Router>
    </div>
}

export default App