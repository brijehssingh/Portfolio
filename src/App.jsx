import React from 'react'
import { Navbar } from './components/Navbar'
import Body from "./components/Body"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Skill from './components/Skill';
import { Contact } from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

const App = () => {
  return (
 
<Router>
  <Navbar/>
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/about" element={<Detail/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/project" element={<Projects/>} />
       <Route path="/skills" element={<Skill/>}></Route>        
        <Route path="/resume" element={<Resume/>}></Route> 
      </Routes>
      
    </Router>

  )
}

export default App