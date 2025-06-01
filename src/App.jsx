import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Player from './Pages/Player'
import Explore from './component/Explore'
import Artist from './Pages/Artist'


const App = () => {
  return (
  <div>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Explore />} />
        <Route path='player/:id' element={<Player />} />
        <Route path='artist/:name' element={<Artist />} />
      </Route>
    </Routes>
  </div>
  )
}

export default App
