import React, { useEffect, useState } from 'react'
import NavBar from '../components/Navbar';
import Home from '../views/Home'
import Favorites from '../views/Favorites'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyContext } from '../contexts/MyContext'


const Data = () => {
  const [fotos, setFotos] = useState([]);

  const getData = async() => {
    const res = await fetch('/photos.json');

    const data = await res.json();

    const { photos } = data

    setFotos(photos)

  }

  useEffect(() =>{
    getData()
  },[])


  return (
    <MyContext.Provider value={{fotos, setFotos}}>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </BrowserRouter>
    </MyContext.Provider>
  )
}

export default Data
