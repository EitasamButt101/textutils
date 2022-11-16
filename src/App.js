import React from 'react'
import  { useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom"
function App() {
  const [mode,setmode] = useState('light') //Weather darkmode is enable or not
  const toggleMode =()=>{
if(mode === 'light'){
  setmode('dark')
  document.body.style.backgroundColor = 'white'
  
}
else{
  setmode('light')
  document.body.style.backgroundColor = 'white'
  
}
    
  }
  
  return (
    <>
    <Router>  
<Navbar title="Data Master"   mode={mode} toggleMode={toggleMode}/>

<div className="container my-3" > 
        
        <Routes>
          <Route
           path="/About" element={<About/>}>
            
          </Route>
          <Route path="/" element={<TextForm heading="Enter your text to analyze"  mode={mode}/>}>
          
          </Route>
        </Routes>
        
        
        </div>
        </Router>  
    </>
    
  )
}
export default App;
