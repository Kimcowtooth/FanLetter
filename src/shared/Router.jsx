import DetailPage from 'pages/DetailPage'
import Home from 'pages/Home'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import fakeDate from 'fakeData.json'
function Router() {
  const [letters, setLetters] = useState(fakeDate);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} letters ={letters} setLetters={setLetters}></Route>
        <Route path='/detail/:id' element={<DetailPage />} letters ={letters} setLetters={setLetters}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router