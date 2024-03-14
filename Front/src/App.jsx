import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quations from './Pages/Quations'
import Home from './Pages/Home'

// context start import 
import Context from './context/Context'
import Score from './Pages/Score'
import Admin from './Pages/Admin'
// context end import 



const App = () => {
  return (

    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Score" element={<Score />} />
          <Route path="/Quations/:name" element={<Quations />} />
          <Route path='/Admin' element={<Admin />} />
        </Routes>
      </Context>
    </BrowserRouter>

  )
}

export default App