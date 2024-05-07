
import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom"
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Header from './Layout/Header'


function App() {
  
  return (
    <>
    <Router>
     <Routes>
      <Route exact path='/' element = {<Home/>}></Route> 
     
      <Route exact path='/About' element={<About/>}></Route>
      <Route exact path='/Contact' element = {<Contact/>}></Route>
      <Route exact path='/Portfolio' element = {<Portfolio/>} ></Route>
      <Route exact path='/Skills' element = {<Skills/>} ></Route>
     </Routes>
    </Router>
    
    </>
  )
}

export default App
