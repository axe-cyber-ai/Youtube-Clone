import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Video from "./Video"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/video' element={<Video/>} />
      </Routes>
    </>
  )
}

export default App
