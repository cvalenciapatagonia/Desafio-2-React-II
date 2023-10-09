import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import Images from '../views/Images'
import Favorites from '../views/Favorites'
import NotFound from '../views/NoFound'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyContext } from '../context/MyContext'


const Data = () => {
  const [fotos, setFotos] = useState([]);

  const getData = async() => {
    const res = await fetch('./src/data/data.json');
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
            <Route path='/' element={<Images />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </MyContext.Provider>
  )
}

export default Data