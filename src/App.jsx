/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Headet from './components/Headet'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Career from './pages/Career'

function App() {


  return (
    <>
      <Headet />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
